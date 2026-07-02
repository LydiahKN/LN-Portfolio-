import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const paths = [
  path.join(process.cwd(), 'data', 'HLT Logistics Inventory - Goods Received.csv'),
  path.join(process.cwd(), 'public', 'HLT Logistics Inventory - Goods Received.csv'),
  path.join(process.cwd(), 'HLT Logistics Inventory - Goods Received.csv')
];

const escapeCSVField = (val: any) => {
  if (val === null || val === undefined) return '';
  let str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    str = `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

export async function GET() {
  const filePath = paths[0]; // Read from data directory
  
  let fileContent = '';
  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    return NextResponse.json({ error: 'Data file not found' }, { status: 500 });
  }
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  });

  // Clean data types for Next.js hydration
  const cleanedRecords = records.map((row: any) => ({
    dateReceived: row['Date Received'],
    refNumber: row['Ref Number'],
    boxes: Number(row['Number of Boxes'] || 0),
    clientName: row['Client Name'],
    status: row['Status'],
    country: row['Country'] || 'Unspecified',
    daysInStock: row['Days in Stock'] ? Number(row['Days in Stock']) : null,
  }));

  return NextResponse.json(cleanedRecords);
}

export async function POST(request: Request) {
  try {
    const { refNumber } = await request.json();
    if (!refNumber) {
      return NextResponse.json({ error: 'Missing reference number' }, { status: 400 });
    }

    const filePath = paths[0];
    let fileContent = '';
    try {
      fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      return NextResponse.json({ error: 'Data file not found' }, { status: 500 });
    }

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Normalize input refNumber (strip spaces)
    const normInput = refNumber.replace(/\s+/g, '').toUpperCase();

    // Map through rows and dispatch the matching reference code
    let updatedCount = 0;
    const updatedRecords = records.map((row: any) => {
      const rowRefClean = (row['Ref Number'] || '').replace(/\s+/g, '').toUpperCase();
      if (rowRefClean === normInput && row['Status'] !== 'Dispatched') {
        updatedCount++;
        return {
          ...row,
          'Status': 'Dispatched',
          'Days in Stock': '' // Cleared because it is dispatched
        };
      }
      return row;
    });

    if (updatedCount === 0) {
      return NextResponse.json({ message: 'No items were updated (already dispatched or not found)' }, { status: 200 });
    }

    // Convert updated records back to CSV
    const headers = ['Date Received', 'Ref Number', 'Number of Boxes', 'Client Name', 'Status', 'Country', 'Days in Stock'];
    const csvContent = [
      headers.join(','),
      ...updatedRecords.map((row: any) => 
        headers.map(h => escapeCSVField(row[h])).join(',')
      )
    ].join('\n');

    // Write back to all three CSV file copies to ensure sync
    for (const p of paths) {
      try {
        fs.writeFileSync(p, csvContent, 'utf-8');
      } catch (err) {
        console.error(`Failed to write CSV update to path: ${p}`, err);
      }
    }

    return NextResponse.json({ success: true, updatedCount });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
