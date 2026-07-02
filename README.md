# Lydiah Nyakweba | Logistics Data Analyst Portfolio 📊

A premium, ATS-optimized, and culturally compliant portfolio designed for the German logistics and supply chain market. 

Built with **Next.js**, **React**, and **Tailwind CSS**, this application serves as a dynamic *Bewerbungsmappe* (Application Dossier), bridging the gap between Data Science, Operations Research, and Supply Chain Management.

## 🚀 Key Features

- **Logistics Analytics Dashboard (Control Tower)**: 
  - **Dynamic In-Memory Filtering**: Instant search and status selection on 130+ shipment lines.
  - **Volumetric Capacity Optimization**: Visual tracking of active holds with automated threshold breach alerts (>90% occupancy limit).
  - **Proactive Dwell Time Forecasting**: Rules-based machine learning baseline that projects incoming cargo stay durations.
  - **Data Healing pipeline**: Normalizes ref numbers, resolves missing country values (e.g. mapping "Bremen" to "Germany"), and reports data integrity health rates.
  - **Persistent Write-Back Actions**: Real-time dispatch trigger updates that write directly back to the server CSV logs, syncing changes locally and across download endpoints.
  - **Local CSV File Ingestor**: drag-and-drop CSV parser (via Papa Parse) allowing recruiters to drop their own ERP logs and watch the metrics update instantly.
  - **Daily, Weekly, Monthly Audits**: Generates EOD, EOW, and EOM performance audits with a browser print stylesheet to compile PDF reports.
- **Glassmorphic UI**: Premium corporate aesthetic with dynamic animated meshes and frosted glass components.
- **Infinite Marquee Animation**: Auto-scrolling horizontal ribbon displaying technical competencies (Python, Power BI, MS Office, etc.).
- **ATS-Optimized Content Structure**: Uses standard German HR terminology (*Dritte Seite*, *Impressum*, *ZAB Certification*) to pass corporate filtering systems.
- **Dark & Light Mode Ready**: Built natively on Tailwind's utility classes.
- **100% SEO Compliant**: Individual `metadata` objects on every route for optimal LinkedIn and search engine crawling.
- **Legal Compliance**: Pre-configured `Impressum` and `Datenschutzerklärung` required by the German Telemedia Act (TMG).

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Visualization**: Recharts
- **Parsers**: csv-parse, papaparse
- **Language**: TypeScript
- **Deployment Ready**: Vercel / Netlify optimized

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LydiahKN/LN-Portfolio-.git
   cd LN-Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
- `src/app/page.tsx` - Homepage with Hero, Methodology, and Value Prop
- `src/app/projects/page.tsx` - "Dritte Seite" Portfolio Cards with NDA badges & live demo links
- `src/app/dashboard/page.tsx` - Interactive Logistics Analytics Dashboard (Control Tower)
- `src/app/api/inventory/route.ts` - Read/Write CSV REST API endpoints (GET & POST)
- `src/app/credentials/page.tsx` - Vertical timeline of academic progression
- `src/app/contact/page.tsx` - Structured HR-ready lead generation form
- `src/app/impressum/page.tsx` - Mandatory German Legal Notice
- `src/app/privacy/page.tsx` - Mandatory German Privacy Policy

## 📄 License
This project is proprietary to Lydiah Nyakweba. All rights reserved.