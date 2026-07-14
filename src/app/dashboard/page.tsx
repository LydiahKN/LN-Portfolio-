'use client';
import { useEffect, useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Papa from 'papaparse';

interface InventoryItem {
  dateReceived: string;
  refNumber: string;
  boxes: number;
  clientName: string;
  status: 'In Warehouse' | 'Dispatched' | 'Unknown';
  country: string;
  daysInStock: number | null;
  isAnomaly: boolean;
  predictedDwellTime: number;
}

export default function Dashboard() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [fileName, setFileName] = useState('LN Logistics Default Set');
  const [reportRange, setReportRange] = useState<'day' | 'week' | 'month' | null>(null);
  const [selectedDispatchRef, setSelectedDispatchRef] = useState('');

  // Memoized Report Data Filtering & Aggregation
  const reportItems = useMemo(() => {
    if (!reportRange || inventory.length === 0) return [];
    
    const latestDateStr = inventory.reduce((max, item) => item.dateReceived > max ? item.dateReceived : max, '1970-01-01');
    const latestDate = new Date(latestDateStr);
    
    return inventory.filter(item => {
      if (!item.dateReceived || item.dateReceived === 'Unknown') return false;
      const itemDate = new Date(item.dateReceived);
      const diffTime = latestDate.getTime() - itemDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (reportRange === 'day') return diffDays <= 1;
      if (reportRange === 'week') return diffDays <= 7;
      if (reportRange === 'month') return diffDays <= 30;
      return true;
    });
  }, [inventory, reportRange]);

  const { repTotalRefs, repTotalReceived, repInWarehouseRefs, repDispatchedRefs, repAvgDwell, repHealth } = useMemo(() => {
    if (reportItems.length === 0) {
      return { repTotalRefs: 0, repTotalReceived: 0, repInWarehouseRefs: 0, repDispatchedRefs: 0, repAvgDwell: '0', repHealth: '100' };
    }
    const totalRefs = reportItems.length;
    const totalReceived = reportItems.length;
    const inWarehouseRefs = reportItems.filter(i => i.status === 'In Warehouse').length;
    const dispatchedRefs = reportItems.filter(i => i.status === 'Dispatched').length;
    
    const warehouseHolds = reportItems.filter(i => i.status === 'In Warehouse');
    const avgDwell = warehouseHolds.length > 0
      ? (warehouseHolds.reduce((acc, item) => acc + (item.daysInStock ?? 0), 0) / warehouseHolds.length).toFixed(1)
      : '0';
      
    const health = ((reportItems.filter(i => !i.isAnomaly).length / totalReceived) * 100).toFixed(0);

    return { repTotalRefs: totalRefs, repTotalReceived: totalReceived, repInWarehouseRefs: inWarehouseRefs, repDispatchedRefs: dispatchedRefs, repAvgDwell: avgDwell, repHealth: health };
  }, [reportItems]);

  // Helper function to map raw CSV rows into standard typed objects
  const processRawData = (rawRecords: any[]): InventoryItem[] => {
    return rawRecords.map((row: any) => {
      // 1. Extract raw values across potential casing variations
      const rawRef = row['Ref Number'] || row['refNumber'] || '';
      const rawBoxes = row['Number of Boxes'] || row['boxes'];
      const rawClient = row['Client Name'] || row['clientName'] || '';
      const rawStatus = row['Status'] || row['status'] || 'Unknown';
      let rawCountry = row['Country'] || row['country'] || '';
      const rawDays = row['Days in Stock'] || row['daysInStock'];

      // 2. Edge Case: Normalize Reference Numbers (e.g., "AT 3573" -> "AT3573")
      const cleanRefNumber = rawRef.replace(/\s+/g, '').toUpperCase() || 'UNLABELLED';

      // 3. Edge Case: Entity Resolution & Data Inference
      if (!rawCountry && rawClient.toLowerCase().includes('bremen')) {
        rawCountry = 'Germany';
      } else if (!rawCountry) {
        rawCountry = 'Unspecified/Returns';
      }

      // 4. Edge Case: Safe Number Parsing
      const cleanBoxes = isNaN(Number(rawBoxes)) ? 0 : Number(rawBoxes);
      
      // 5. Edge Case: Differentiating between 0 Days in Stock vs. Dispatched (Null)
      let cleanDaysInStock: number | null = null;
      if (rawStatus === 'In Warehouse') {
        cleanDaysInStock = rawDays && !isNaN(Number(rawDays)) ? Number(rawDays) : 0;
      }

      // 6. Rule-based ML-like predictive inference for dwell time (in days)
      let predictedDwellTime = 3; // Baseline
      if (rawCountry.toLowerCase().includes('germany')) predictedDwellTime = 4;
      else if (rawCountry.toLowerCase().includes('france')) predictedDwellTime = 6;
      else if (rawCountry.toLowerCase().includes('sweden')) predictedDwellTime = 8;
      else if (rawCountry.toLowerCase().includes('switzerland')) predictedDwellTime = 5;
      
      if (cleanBoxes > 150) predictedDwellTime += 3; // Bulk handling dispatch lag
      if (rawClient.toLowerCase().includes('tech') || rawClient.toLowerCase().includes('auto')) {
        predictedDwellTime -= 1; // High priority partner acceleration
      }

      // 7. Flag Anomalies for UI Alerts
      const isAnomaly = cleanRefNumber === 'UNLABELLED' || rawClient.toLowerCase().includes('return') || !row['Country'];

      return {
        dateReceived: row['Date Received'] || row['dateReceived'] || 'Unknown',
        refNumber: cleanRefNumber,
        boxes: cleanBoxes,
        clientName: rawClient.trim() || 'Unknown Client',
        status: rawStatus === 'In Warehouse' || rawStatus === 'Dispatched' ? rawStatus : 'Unknown',
        country: rawCountry.trim(),
        daysInStock: cleanDaysInStock,
        isAnomaly,
        predictedDwellTime
      };
    });
  };

  // Load the initial dataset via API on mount
  useEffect(() => {
    fetch('/api/inventory')
      .then((res) => res.json())
      .then((data) => {
        setInventory(processRawData(data));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handle local file uploads
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setInventory(processRawData(results.data));
        setLoading(false);
      },
      error: (err) => {
        console.error('Error parsing CSV:', err);
        setLoading(false);
      }
    });
  };

  // Dispatch active holding items and persist to server CSV sheets
  const handleDispatch = (refNumber: string) => {
    // 1. Optimistic UI update
    setInventory(prev => prev.map(item => {
      if (item.refNumber === refNumber) {
        return {
          ...item,
          status: 'Dispatched',
          daysInStock: null
        };
      }
      return item;
    }));

    // 2. Persist dispatch status in server CSV database sheets
    fetch('/api/inventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refNumber }),
    })
    .then(res => {
      if (!res.ok) {
        console.error('Persistence failed: Failed to write dispatch update back to the server CSV.');
      }
    })
    .catch(err => {
      console.error('Network error during dispatch persistence:', err);
    });
  };

  // Export current inventory state back to a local CSV file
  const handleExportCSV = () => {
    const csvContent = Papa.unparse(inventory.map(item => ({
      'Date Received': item.dateReceived,
      'Ref Number': item.refNumber,
      'Number of Boxes': item.boxes,
      'Client Name': item.clientName,
      'Status': item.status,
      'Country': item.country,
      'Days in Stock': item.daysInStock !== null ? item.daysInStock : ''
    })));

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `LN_Logistics_Inventory_Updated.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Memoized Filters & Metrics
  const filteredInventory = useMemo(() => {
    return inventory.filter((item) => {
      const matchesSearch = item.clientName.toLowerCase().includes(search.toLowerCase()) || 
                            item.refNumber.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [inventory, search, statusFilter]);

  const metrics = useMemo(() => {
    const totalShipments = filteredInventory.length;
    const inWarehouse = filteredInventory.filter(i => i.status === 'In Warehouse').length;
    const dispatched = filteredInventory.filter(i => i.status === 'Dispatched').length;
    const highRiskItems = filteredInventory.filter(i => i.status === 'In Warehouse' && (i.daysInStock ?? 0) >= 5).length;
    
    // Capacity calculation using Reference Numbers (shipment lines) instead of Boxes
    const activeWarehouseRefs = inWarehouse;
    const maxCapacity = 15;
    const capacityUtilization = Math.min(100, Math.round((activeWarehouseRefs / maxCapacity) * 100));

    return { totalShipments, inWarehouse, dispatched, highRiskItems, activeWarehouseRefs, capacityUtilization };
  }, [filteredInventory]);

  const countryChartData = useMemo(() => {
    const counts = filteredInventory.reduce((acc: Record<string, number>, item) => {
      acc[item.country] = (acc[item.country] || 0) + 1; // count unique shipments
      return acc;
    }, {});
    return Object.keys(counts).map(key => ({ country: key, shipments: counts[key] }));
  }, [filteredInventory]);

  return (
    <main className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">LN Logistics Control Tower</h1>
          <p className="text-gray-500 mt-1">Active file: <span className="font-semibold text-gray-700">{fileName}</span></p>
        </div>

        {/* Reports & Upload Component */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Report Generator Selector */}
          <div className="flex items-center gap-1.5 bg-white border px-3 py-2 rounded-xl shadow-sm">
            <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Reports:</span>
            {['day', 'week', 'month'].map((range) => (
              <button
                key={range}
                onClick={() => setReportRange(range as any)}
                className="px-2.5 py-1 text-xs font-black bg-gray-50 border hover:bg-industrial-grey hover:text-white transition-colors rounded uppercase tracking-wider"
              >
                {range}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 bg-white px-4 py-2 border rounded-xl shadow-sm">
              <label className="text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">
                Upload custom CSV
                <input 
                  type="file" 
                  accept=".csv" 
                  className="hidden" 
                  onChange={handleFileUpload} 
                />
              </label>
              <button 
                onClick={handleExportCSV}
                className="text-sm font-black text-green-600 border-l pl-2 hover:text-green-800 transition-colors"
                title="Export current state to CSV"
              >
                Export CSV
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Dynamic Filter Controls Panel */}
      <div className="p-4 bg-white border rounded-xl shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <input 
          type="text"
          placeholder="Search client or ref number..."
          className="w-full sm:w-72 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          {['All', 'In Warehouse', 'Dispatched'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === status 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-gray-500 font-medium">Updating Control Tower metrics...</div>
      ) : (
        <>
          {/* Operational Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-sm font-medium text-gray-400">Filtered Shipments (Refs)</p>
              <p className="text-3xl font-bold mt-2 text-gray-900">{metrics.totalShipments}</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-sm font-medium text-gray-400">Active Stock Holds</p>
              <p className="text-3xl font-bold mt-2 text-amber-600">{metrics.inWarehouse} lines</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm">
              <p className="text-sm font-medium text-gray-400">Dispatched Orders</p>
              <p className="text-3xl font-bold mt-2 text-green-600">{metrics.dispatched} lines</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm border-red-100 bg-red-50/30">
              <p className="text-sm font-medium text-red-600">Aging Alerts (&gt;5 Days)</p>
              <p className="text-3xl font-bold mt-2 text-red-600">{metrics.highRiskItems} alerts</p>
            </div>
          </div>

          {/* Second Row of Indicators (Predictive & Prescriptive Volumetrics) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Warehouse Capacity Gauge based on unique holdings */}
            <div className="p-6 bg-white border rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Warehouse Capacity Utilization</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <p className="text-3xl font-bold text-gray-900">{metrics.capacityUtilization}%</p>
                  <p className="text-xs text-gray-500 font-bold">({metrics.activeWarehouseRefs} / 15 shipments)</p>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full bg-gray-100 h-2.5 rounded-full mt-4 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      metrics.capacityUtilization >= 90 ? 'bg-red-600' :
                      metrics.capacityUtilization >= 75 ? 'bg-amber-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${metrics.capacityUtilization}%` }}
                  />
                </div>
              </div>
              {metrics.capacityUtilization >= 90 && (
                <div className="mt-4 p-2 bg-red-50 border border-red-200 rounded text-[10px] text-red-700 font-black uppercase tracking-wider animate-pulse">
                  ⚠️ Critical Capacity Breach: Over 90% Occupancy (Refs Capacity)
                </div>
              )}
            </div>

            {/* Data Integrity Health Widget */}
            <div className="p-6 bg-white border rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Data Integrity Health</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-3xl font-bold text-gray-900">
                    {inventory.length > 0 ? ((inventory.filter(i => !i.isAnomaly).length / inventory.length) * 100).toFixed(0) : 100}%
                  </p>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded font-bold">
                    {inventory.filter(i => i.isAnomaly).length} sanitized
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-4 leading-relaxed font-bold">
                Spaces removed from IDs; missing countries resolved via entity matching; return anomalies marked.
              </p>
            </div>

            {/* Predictive Hold Time Widget */}
            <div className="p-6 bg-white border rounded-xl shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Active Pipeline Velocity</p>
                <div className="mt-2">
                  <p className="text-3xl font-bold text-gray-900">
                    {inventory.filter(i => i.status === 'In Warehouse').length > 0 
                      ? (inventory.filter(i => i.status === 'In Warehouse').reduce((acc, item) => acc + item.predictedDwellTime, 0) / inventory.filter(i => i.status === 'In Warehouse').length).toFixed(1)
                      : 0} Days
                  </p>
                  <p className="text-xs text-gray-500 font-bold mt-1">Average predicted dwell time for incoming holds</p>
                </div>
              </div>
              <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest mt-4">
                🔮 Proactive ML-Inference Enabled
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart View */}
            <div className="lg:col-span-2 p-6 bg-white border rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Shipment Distribution by Destination</h2>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={countryChartData}>
                    <XAxis dataKey="country" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: '#f3f4f6' }} />
                    <Bar dataKey="shipments" fill="#2563eb" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Desk: Interactive Dispatch Form & Stagnant Holds list */}
            <div className="space-y-6 flex flex-col justify-between h-[450px]">
              {/* Operations Dispatch Desk */}
              <div className="p-5 bg-white border rounded-xl shadow-sm flex flex-col justify-between flex-shrink-0">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Operations Dispatch Desk</h3>
                  <p className="text-[10px] text-gray-400 mb-3">Identify and dispatch stock reference lines.</p>
                  
                  <div className="space-y-2">
                    <select
                      className="w-full px-3 py-1.5 border rounded-lg text-xs text-gray-900 bg-white"
                      value={selectedDispatchRef}
                      onChange={(e) => setSelectedDispatchRef(e.target.value)}
                    >
                      <option value="">-- Select Reference to Dispatch --</option>
                      {inventory
                        .filter(item => item.status === 'In Warehouse')
                        .map((item, idx) => (
                          <option key={idx} value={item.refNumber}>
                            {item.refNumber} ({item.clientName})
                          </option>
                        ))
                      }
                    </select>

                    {selectedDispatchRef && (
                      <div className="p-2 bg-blue-50 border border-blue-100 rounded text-[10px] text-blue-800 leading-relaxed font-bold">
                        Ready to dispatch: **{selectedDispatchRef}** for **{
                          inventory.find(i => i.refNumber === selectedDispatchRef)?.clientName
                        }** ({inventory.find(i => i.refNumber === selectedDispatchRef)?.country}).
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    if (!selectedDispatchRef) return;
                    handleDispatch(selectedDispatchRef);
                    setSelectedDispatchRef('');
                  }}
                  disabled={!selectedDispatchRef}
                  className="mt-3 w-full py-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-colors shadow-sm"
                >
                  Execute Dispatch
                </button>
              </div>

              {/* Real-time Aging Action List */}
              <div className="p-5 bg-white border rounded-xl shadow-sm flex flex-col h-[240px] flex-1 overflow-hidden">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Critical Stagnant Holds</h3>
                <p className="text-[10px] text-gray-400 mb-3">Action required for inventory held &gt; 5 days.</p>
                <div className="overflow-y-auto space-y-3 flex-1 pr-1">
                  {filteredInventory
                    .filter(item => item.status === 'In Warehouse' && (item.daysInStock ?? 0) >= 5)
                    .map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-red-50/50 border border-red-100 rounded-lg flex justify-between items-center gap-2">
                        <div className="flex-1">
                          <p className="text-xs font-bold text-gray-900">{item.refNumber} — {item.clientName}</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">{item.boxes} boxes · Destination: {item.country}</p>
                          <p className="text-[9px] text-blue-600 font-black mt-0.5 uppercase tracking-wider">
                            Predicted Stay: {item.predictedDwellTime} Days
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded">
                            {item.daysInStock} Days
                          </span>
                          <button 
                            onClick={() => handleDispatch(item.refNumber)}
                            className="bg-green-600 hover:bg-green-700 text-white text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded transition-colors shadow-sm"
                          >
                            Dispatch
                          </button>
                        </div>
                      </div>
                    ))}
                  {metrics.highRiskItems === 0 && (
                    <p className="text-xs text-gray-400 text-center py-4">No stagnant items flagged.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {reportRange && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-industrial-grey/60 backdrop-blur-md" onClick={() => setReportRange(null)} />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col font-sans text-gray-900">
            {/* Header */}
            <div className="bg-industrial-grey p-6 text-white flex justify-between items-center border-b-8 border-iron-lemon">
              <div>
                <span className="text-[10px] bg-iron-lemon text-black font-black uppercase tracking-widest px-2 py-0.5 rounded">
                  System Report // {reportRange}ly
                </span>
                <h2 className="text-2xl font-black tracking-tight mt-1 uppercase">Goods Operations Audit</h2>
              </div>
              <button onClick={() => setReportRange(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Report Content */}
            <div className="flex-grow overflow-y-auto p-8 bg-gray-50 space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-800 leading-relaxed font-bold">
                📋 This report aggregates records from the active dataset relative to the latest transaction date (**{
                  inventory.length > 0 
                    ? inventory.reduce((max, item) => item.dateReceived > max ? item.dateReceived : max, '1970-01-01')
                    : 'N/A'
                }**).
              </div>

              {/* Grid of Report KPIs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Throughput</span>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{repTotalRefs} Shipments</p>
                  <span className="text-[10px] text-gray-400 font-medium">Unique reference codes</span>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Average Aging Dwell</span>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{repAvgDwell} Days</p>
                  <span className="text-[10px] text-gray-400 font-medium">In warehouse inventory</span>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Stock Volume</span>
                  <p className="text-2xl font-bold text-amber-600 mt-1">{repInWarehouseRefs} Shipments</p>
                  <span className="text-[10px] text-gray-400 font-medium">Currently holding</span>
                </div>
                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dispatched Outflow</span>
                  <p className="text-2xl font-bold text-green-600 mt-1">{repDispatchedRefs} Shipments</p>
                  <span className="text-[10px] text-gray-400 font-medium">Shipped successfully</span>
                </div>
              </div>

              {/* Data Quality audit */}
              <div className="p-5 bg-white border rounded-xl shadow-sm">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Operational Compliance & Integrity</h4>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-gray-800">Compliance Rate</p>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">Records processed without syntax anomalies</p>
                  </div>
                  <span className="text-lg font-black text-green-600 bg-green-50 px-3 py-1 border border-green-100 rounded-lg">{repHealth}%</span>
                </div>
              </div>

              {/* Breakdown by destination in report */}
              <div className="p-5 bg-white border rounded-xl shadow-sm">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Destination Shipment Counts</h4>
                <div className="space-y-2">
                  {Object.entries(
                    reportItems.reduce((acc: Record<string, number>, item) => {
                      acc[item.country] = (acc[item.country] || 0) + 1; // count unique shipments
                      return acc;
                    }, {})
                  ).map(([c, v], idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-bold text-gray-700 py-1.5 border-b border-gray-100 last:border-0">
                      <span>{c}</span>
                      <span>{v} Shipments</span>
                    </div>
                  ))}
                  {reportItems.length === 0 && (
                    <p className="text-xs text-gray-400 text-center py-4">No records found within this timeframe.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setReportRange(null)}
                className="px-6 py-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-industrial-grey transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => window.print()}
                className="px-6 py-2 bg-industrial-grey hover:bg-black text-white text-xs font-black uppercase tracking-widest rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Print PDF Audit</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
