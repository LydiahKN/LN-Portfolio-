'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { ArrowLeft, Zap, Truck, BatteryCharging, ShieldAlert } from 'lucide-react';
import T from '@/components/T';
import { useLanguage } from '@/context/LanguageContext';

// Simulated Data based on the Research Report
const tollData = [
  { year: '2023', diesel: 19.0, electric: 0 },
  { year: '2024', diesel: 34.8, electric: 0 },
  { year: '2025', diesel: 35.5, electric: 0 },
  { year: '2026', diesel: 36.2, electric: 0 },
  { year: '2027', diesel: 38.0, electric: 0 }, // Projected increases
  { year: '2028', diesel: 39.5, electric: 0 },
  { year: '2029', diesel: 41.0, electric: 0 },
  { year: '2030', diesel: 42.5, electric: 0 },
  { year: '2031', diesel: 44.0, electric: 11.0 }, // Exemption ends
];

export default function CO2ModelPage() {
  const { lang } = useLanguage();
  const isDe = lang === 'DE';

  const [annualMileage, setAnnualMileage] = useState(40000);
  const [isUrbanRoute, setIsUrbanRoute] = useState(false);
  const [isCraftsperson, setIsCraftsperson] = useState(false);

  // Dynamic calculations based on state
  const baseDieselToll = isCraftsperson ? 0 : 0.151;
  const urbanSurcharge = isUrbanRoute && !isCraftsperson ? 0.05 : 0;
  const effectiveDieselTollRate = baseDieselToll + urbanSurcharge;

  const calculatedTolls = {
    diesel: (annualMileage * effectiveDieselTollRate).toFixed(0),
    electric: (0).toFixed(0)
  };

  const calculatedEnergy = {
    diesel: (annualMileage / 100 * 14.40).toFixed(0),
    electric: (annualMileage / 100 * 6.00).toFixed(0)
  };

  const totalSavings = (
    parseFloat(calculatedTolls.diesel) + 
    parseFloat(calculatedEnergy.diesel) - 
    parseFloat(calculatedEnergy.electric)
  ).toLocaleString();

  const dynamicTcoData = [
    { category: isDe ? 'Energie (Jahr)' : 'Energy (Annual)', diesel: parseFloat(calculatedEnergy.diesel), electric: parseFloat(calculatedEnergy.electric) },
    { category: isDe ? 'Maut (Jahr)' : 'Tolls (Annual)', diesel: parseFloat(calculatedTolls.diesel), electric: parseFloat(calculatedTolls.electric) || 0 },
    { category: isDe ? 'Wartung' : 'Maintenance', diesel: 1500, electric: 750 },
  ];

  const localizedTollBreakdownData = [
    { name: isDe ? 'Infrastruktur' : 'Infrastructure', value: 5.2, fill: '#94A3B8' },
    { name: isDe ? 'Luftverschmutzung' : 'Air Pollution', value: 1.1, fill: '#CBD5E1' },
    { name: isDe ? 'Lärmbelastung' : 'Noise', value: 1.4, fill: '#F1F5F9' },
    { name: isDe ? 'CO₂-Aufschlag' : 'CO₂ Surcharge', value: 7.4, fill: '#EAB308' },
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-industrial-grey font-sans selection:bg-iron-lemon selection:text-black pb-24">
      {/* Header */}
      <header className="bg-industrial-grey text-white pt-24 pb-16 px-6 lg:px-12 border-b-[16px] border-iron-lemon relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-iron-lemon/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-iron-lemon font-bold text-sm tracking-widest uppercase mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> <T id="co2.page.back">Back to Portfolio</T>
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-iron-lemon text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest"><T id="co2.page.badge1">Case Study</T></span>
            <span className="border border-white/20 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest"><T id="co2.page.badge2">Germany 2026-2027</T></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
            <T id="co2.page.title.1">Predicting 2027</T><br/>
            <span className="text-iron-lemon"><T id="co2.page.title.2">CO₂ Road Charges</T></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            <T id="co2.page.subtitle">A macroeconomic simulation of the German logistics transformation, evaluating the financial impact of the expanded BFStrMG tolls and the definitive break-even point for electric fleet adoption.</T>
          </p>
        </div>
      </header>

      {/* Main Content Grid */}
      <main className="max-w-6xl mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Narrative Section (Left 7 cols) */}
        <div className="lg:col-span-7 space-y-12">
          
          <section className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-industrial-grey prose-p:text-gray-600 prose-p:leading-relaxed">
            <h2 className="text-3xl border-b-4 border-iron-lemon inline-block pb-2 mb-6"><T id="co2.page.shock.title">The Regulatory Shock</T></h2>
            <p>
              <T id="co2.page.shock.p1">Germany has radically altered the operational expenditure (OPEX) profile of logistics companies by introducing punitive CO₂-differentiated surcharges under the revised <strong>Bundesfernstraßenmautgesetz (BFStrMG)</strong>.</T>
            </p>
            <p>
              <T id="co2.page.shock.p2">For a standard 5-axle Euro 6 heavy goods vehicle, the toll rate surged by 80% to <strong>34.8 cents/km</strong> in 2024. More critically, vehicles over 3.5 tonnes (previously exempt) now face tolls of 15.1 cents/km, fundamentally destroying the traditional route optimization calculus for internal combustion engine (ICE) distribution fleets.</T>
            </p>
          </section>

          {/* Interactive Chart 1 */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-black uppercase tracking-tight mb-2"><T id="co2.page.chart.title">Toll Cost Trajectory (&gt;18t HGVs)</T></h3>
            <p className="text-sm text-gray-500 mb-8"><T id="co2.page.chart.desc">Cents per kilometer projected through 2031. Note the legislative ZEV exemption ending in 2031.</T></p>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={tollData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorDiesel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1E293B" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#1E293B" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorElectric" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EAB308" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#EAB308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#64748B'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#64748B'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 800 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', fontWeight: 700 }}/>
                  <Area type="monotone" dataKey="diesel" name={isDe ? "Diesel Euro 6 (Cent/km)" : "Diesel Euro 6 (cents/km)"} stroke="#1E293B" strokeWidth={3} fillOpacity={1} fill="url(#colorDiesel)" />
                  <Area type="stepAfter" dataKey="electric" name={isDe ? "Emissionsfrei (Cent/km)" : "Zero-Emission (cents/km)"} stroke="#EAB308" strokeWidth={3} fillOpacity={1} fill="url(#colorElectric)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-industrial-grey prose-p:text-gray-600 prose-p:leading-relaxed">
            <h2 className="text-3xl border-b-4 border-iron-lemon inline-block pb-2 mb-6"><T id="co2.page.frontier.title">The Sub-3.5t Frontier</T></h2>
            <p>
              <T id="co2.page.frontier.p1">The current threshold creates massive regulatory arbitrage at exactly 3.5 tonnes. By downsizing to 3.49-tonne vans, fleets can evade the BFStrMG tolls. However, this floods urban networks with smaller vehicles, clashing with municipal Climate Action Plans (like Munich&apos;s Roadmap Urbane Logistik 2035).</T>
            </p>
            <p>
              <T id="co2.page.frontier.p2">The Eurovignette directive now technically permits taxing sub-3.5t vehicles. Our modeling suggests that an urban congestion-CO₂ hybrid pricing model via digital curbside management (ZEZs) is imminent by 2027.</T>
            </p>
          </section>

          {/* NEW: Data Assumptions Table */}
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <h3 className="text-xl font-black uppercase tracking-tight mb-6"><T id="co2.page.sources.title">Data Assumptions & Regulatory Sources</T></h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-industrial-grey text-industrial-grey uppercase tracking-widest text-[10px] font-black">
                    <th className="pb-3 pr-4"><T id="co2.page.sources.th1">Institution</T></th>
                    <th className="pb-3 pr-4"><T id="co2.page.sources.th2">Data Set</T></th>
                    <th className="pb-3"><T id="co2.page.sources.th3">Model Application</T></th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-bold text-industrial-grey"><T id="co2.page.sources.row1.inst">BMDV / Toll Collect</T></td>
                    <td className="py-4 pr-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono"><T id="co2.page.sources.row1.data">Toll Rates & CO₂ Classes</T></span></td>
                    <td className="py-4"><T id="co2.page.sources.row1.app">Base rates for Euro 6 &gt;3.5t LCVs, active from July 2024.</T></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 pr-4 font-bold text-industrial-grey"><T id="co2.page.sources.row2.inst">UBA</T></td>
                    <td className="py-4 pr-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono"><T id="co2.page.sources.row2.data">Emission Factors</T></span></td>
                    <td className="py-4"><T id="co2.page.sources.row2.app">Calculating energy arbitrage (Diesel vs. EV).</T></td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-bold text-industrial-grey"><T id="co2.page.sources.row3.inst">Fraunhofer ISI</T></td>
                    <td className="py-4 pr-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono"><T id="co2.page.sources.row3.data">Fleet TCO Forecasts</T></span></td>
                    <td className="py-4"><T id="co2.page.sources.row3.app">Maintenance cost reduction applied for electric drivetrains.</T></td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-4 pr-4 font-bold text-industrial-grey"><T id="co2.page.sources.row4.inst">TomTom</T></td>
                    <td className="py-4 pr-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono"><T id="co2.page.sources.row4.data">Traffic Index</T></span></td>
                    <td className="py-4"><T id="co2.page.sources.row4.app">Simulation of urban congestion & ZEZ surcharges.</T></td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-4 pr-4 font-bold text-industrial-grey"><T id="co2.page.sources.row5.inst">KBA</T></td>
                    <td className="py-4 pr-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono"><T id="co2.page.sources.row5.data">Fleet Structure</T></span></td>
                    <td className="py-4"><T id="co2.page.sources.row5.app">Exposure modeling by vehicle type (sub-3.5t vs &gt;3.5t).</T></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </div>

        {/* Calculator Sidebar (Right 5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="bg-industrial-grey text-white p-8 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={120} /></div>
            
            <h3 className="text-xl font-black uppercase tracking-tight mb-2"><T id="co2.page.calc.title">Fleet TCO Calculator</T></h3>
            <p className="text-gray-400 text-sm mb-8"><T id="co2.page.calc.desc">Compare annual OPEX for a &gt;3.5t LCV (Diesel Euro 6 vs. Electric).</T></p>

            <div className="mb-8 relative z-10">
              <label className="text-xs font-black uppercase tracking-widest text-iron-lemon mb-4 flex justify-between">
                <T id="co2.page.calc.mileage">Annual Mileage (km)</T>
                <span className="text-white">{annualMileage.toLocaleString()} km</span>
              </label>
              <input 
                type="range" 
                min="10000" 
                max="100000" 
                step="5000"
                value={annualMileage}
                onChange={(e) => setAnnualMileage(Number(e.target.value))}
                className="w-full accent-iron-lemon h-2 bg-white/20 rounded-lg appearance-none cursor-pointer mb-6"
              />
              
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" checked={isUrbanRoute} onChange={(e) => setIsUrbanRoute(e.target.checked)} className="peer appearance-none w-5 h-5 border-2 border-white/20 rounded checked:bg-iron-lemon checked:border-iron-lemon transition-colors" />
                    <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-iron-lemon transition-colors"><T id="co2.page.calc.urban">Urban Route (TomTom Congestion Surcharge)</T></span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" checked={isCraftsperson} onChange={(e) => setIsCraftsperson(e.target.checked)} className="peer appearance-none w-5 h-5 border-2 border-white/20 rounded checked:bg-iron-lemon checked:border-iron-lemon transition-colors" />
                    <svg className="absolute w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-iron-lemon transition-colors"><T id="co2.page.calc.craft">Handwerkerausnahme (&lt;7.5t Exemption)</T></span>
                </label>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="text-red-400 w-5 h-5" />
                  <span className="font-bold text-sm"><T id="co2.page.calc.dieselToll">Diesel Toll Exps.</T></span>
                </div>
                <span className="font-mono text-lg font-bold">€{parseFloat(calculatedTolls.diesel).toLocaleString()}</span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Truck className="text-gray-400 w-5 h-5" />
                  <span className="font-bold text-sm"><T id="co2.page.calc.dieselEnergy">Diesel Energy</T></span>
                </div>
                <span className="font-mono text-lg font-bold">€{parseFloat(calculatedEnergy.diesel).toLocaleString()}</span>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-iron-lemon/30 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-iron-lemon/5"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <BatteryCharging className="text-iron-lemon w-5 h-5" />
                  <span className="font-bold text-sm text-iron-lemon"><T id="co2.page.calc.evEnergy">EV Energy (Zero Tolls)</T></span>
                </div>
                <span className="font-mono text-lg font-bold text-iron-lemon relative z-10">€{parseFloat(calculatedEnergy.electric).toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 relative z-10">
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2"><T id="co2.page.calc.savings">Annual OPEX Savings w/ EV</T></p>
              <p className="text-4xl font-black text-iron-lemon tracking-tighter">€{totalSavings}</p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-black uppercase tracking-tight mb-6"><T id="co2.page.breakdown.title">OPEX Breakdown (40k km/yr)</T></h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dynamicTcoData} layout="vertical" margin={{ top: 0, right: 30, left: 40, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E2E8F0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 700, fill: '#64748B'}} />
                  <YAxis dataKey="category" type="category" axisLine={false} tickLine={false} tick={{fontSize: 11, fontWeight: 700, fill: '#1E293B'}} />
                  <Tooltip cursor={{fill: '#F1F5F9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} itemStyle={{ fontWeight: 800 }} />
                  <Legend wrapperStyle={{ fontSize: '11px', fontWeight: 700 }} />
                  <Bar dataKey="diesel" name={isDe ? "Diesel ICE" : "Diesel ICE"} fill="#1E293B" radius={[0, 4, 4, 0]} barSize={16} />
                  <Bar dataKey="electric" name={isDe ? "Elektro ZEV" : "Electric ZEV"} fill="#EAB308" radius={[0, 4, 4, 0]} barSize={16} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* NEW: Toll Breakdown Pie Chart */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-black uppercase tracking-tight mb-2"><T id="co2.page.breakdown.chart.title">Anatomy of the 15.1¢ Toll (&gt;3.5t LCV)</T></h3>
            <div className="h-[200px] flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={localizedTollBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {localizedTollBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value} ¢ / km`, isDe ? 'Kosten' : 'Cost']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontWeight: 800, color: '#1E293B' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-1/2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500"><div className="w-3 h-3 rounded-sm bg-[#94A3B8]"></div><T id="co2.page.breakdown.infra">Infrastructure</T></div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500"><div className="w-3 h-3 rounded-sm bg-[#CBD5E1]"></div><T id="co2.page.breakdown.air">Air Pollution</T></div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500"><div className="w-3 h-3 rounded-sm bg-[#F1F5F9]"></div><T id="co2.page.breakdown.noise">Noise</T></div>
                <div className="flex items-center gap-2 text-xs font-bold text-iron-lemon"><div className="w-3 h-3 rounded-sm bg-[#EAB308]"></div><T id="co2.page.breakdown.co2">CO₂ Surcharge (New)</T></div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 mt-16">
         {/* NEW: Strategic Recommendations */}
         <div className="mb-16">
           <h2 className="text-3xl border-b-4 border-iron-lemon inline-block pb-2 mb-8 font-black tracking-tighter"><T id="co2.page.rec.title">Strategic Recommendations (2026-2027)</T></h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-iron-lemon/20 text-iron-lemon rounded-lg flex items-center justify-center mb-4"><Truck size={20} /></div>
               <h4 className="font-black uppercase tracking-tight mb-3 text-industrial-grey"><T id="co2.page.rec.1.title">1. Micro-Hub Arbitrage</T></h4>
               <p className="text-gray-600 text-sm leading-relaxed"><T id="co2.page.rec.1.desc">Transition heavy logistics to peri-urban micro-hubs. Use heavy zero-emission trucks (toll-exempt until 2031) for intercity routes, and cross-dock to sub-3.5t electric cargo bikes or LCVs to evade BFStrMG tolls entirely.</T></p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-iron-lemon/20 text-iron-lemon rounded-lg flex items-center justify-center mb-4"><BatteryCharging size={20} /></div>
               <h4 className="font-black uppercase tracking-tight mb-3 text-industrial-grey"><T id="co2.page.rec.2.title">2. Virtual Power Plants (VPP)</T></h4>
               <p className="text-gray-600 text-sm leading-relaxed"><T id="co2.page.rec.2.desc">Integrate Battery Energy Storage Systems (BESS) at logistics depots to capitalize on BNetzA&apos;s dynamic grid fees. Charge fleets during renewable oversupply (negative grid fees) to further crash EV OPEX.</T></p>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-10 h-10 bg-iron-lemon/20 text-iron-lemon rounded-lg flex items-center justify-center mb-4"><Zap size={20} /></div>
               <h4 className="font-black uppercase tracking-tight mb-3 text-industrial-grey"><T id="co2.page.rec.3.title">3. Retrofit-as-a-Service</T></h4>
               <p className="text-gray-600 text-sm leading-relaxed"><T id="co2.page.rec.3.desc">Convert existing specialized ICE fleet assets (e.g. municipal vehicles) from diesel to electric. This preserves the capital invested in specialized superstructures while immediately dropping the vehicle into the toll-exempt bracket.</T></p>
             </div>
           </div>
         </div>

         <div className="bg-black text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2"><T id="co2.page.footer.title">Ready to model your fleet transition?</T></h3>
              <p className="text-gray-400 font-medium"><T id="co2.page.footer.desc">This model can be tailored to specific regional hubs and multi-modal constraints.</T></p>
            </div>
            <Link href="/contact" className="whitespace-nowrap px-8 py-4 bg-iron-lemon text-black font-black uppercase tracking-widest text-sm rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              <T id="co2.page.footer.btn">Discuss Methodology</T>
            </Link>
         </div>
      </div>
    </div>
  );
}
