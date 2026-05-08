'use client';
import { useState } from 'react';
import T from './T';

export default function GradeConverter() {
  const [maxGrade, setMaxGrade] = useState<number>(100);
  const [minPassing, setMinPassing] = useState<number>(40);
  const [currentGrade, setCurrentGrade] = useState<number>(65);

  const calculateBavarian = () => {
    if (maxGrade === minPassing) return 0;
    const result = 1 + 3 * ((maxGrade - currentGrade) / (maxGrade - minPassing));
    return Math.max(1.0, Math.min(4.0, result)).toFixed(1); // Bound between 1.0 and 4.0
  };

  return (
    <div className="p-8 bg-industrial-grey text-white rounded-2xl shadow-xl max-w-md border-t-4 border-iron-lemon glass-panel">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-iron-lemon">
        <span>🎓</span> <T id="converter.title">Bavarian Grade Converter</T>
      </h3>
      <div className="space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            <T id="converter.max">Max Possible Grade</T>
          </label>
          <input 
            type="number" 
            value={maxGrade} 
            onChange={(e) => setMaxGrade(Number(e.target.value))} 
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-iron-lemon transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            <T id="converter.min">Min Passing Grade</T>
          </label>
          <input 
            type="number" 
            value={minPassing} 
            onChange={(e) => setMinPassing(Number(e.target.value))} 
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-iron-lemon transition-colors" 
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
            <T id="converter.your">Your Grade</T>
          </label>
          <input 
            type="number" 
            value={currentGrade} 
            onChange={(e) => setCurrentGrade(Number(e.target.value))} 
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:border-iron-lemon transition-colors" 
          />
        </div>
        <div className="mt-8 p-6 bg-iron-lemon text-industrial-grey rounded-xl shadow-inner transform transition-all scale-105">
          <div className="text-xs font-black uppercase tracking-widest mb-1 opacity-60">
            <T id="converter.result.label">German Equivalent</T>
          </div>
          <div className="text-4xl font-black tabular-nums tracking-tighter">
            {calculateBavarian()}
          </div>
        </div>
        <p className="text-[10px] text-gray-500 italic mt-4 leading-relaxed">
          * Calculated using the Modified Bavarian Formula as recognized by the KMK (Kultusministerkonferenz).
        </p>
      </div>
    </div>
  );
}
