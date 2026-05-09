'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type SearchItem = {
  id: string;
  title: string;
  category: string;
  href: string;
  icon: string;
};

const searchIndex: SearchItem[] = [
  { id: '1', title: 'Bavarian Grade Converter', category: 'Tools', href: '/#converter', icon: '🎓' },
  { id: '2', title: 'Network Disruption Simulator', category: 'Tools', href: '/#simulator', icon: '🌐' },
  { id: '3', title: 'Predictive Demand Modeling', category: 'Projects', href: '/projects', icon: '📈' },
  { id: '4', title: 'Routing Optimization', category: 'Projects', href: '/projects', icon: '🚚' },
  { id: '5', title: 'Risk Contagion (SIS/SIR)', category: 'Projects', href: '/projects', icon: '🦠' },
  { id: '6', title: 'Operations Research', category: 'Skills', href: '/skills', icon: '🧮' },
  { id: '7', title: 'Python & Data Science', category: 'Skills', href: '/skills', icon: '🐍' },
  { id: '8', title: 'ZAB Credentials', category: 'About', href: '/credentials', icon: '📜' },
  { id: '9', title: 'Contact & Dossier', category: 'Contact', href: '/contact', icon: '✉️' },
];

export default function CommandPalette({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredItems = query === '' 
    ? searchIndex.slice(0, 5) 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(href);
  };

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-industrial-grey/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all">
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            autoFocus
            type="text" 
            placeholder="Search tools, projects, or skills..." 
            className="w-full bg-transparent border-none outline-none text-industrial-grey font-medium placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="text-[10px] font-black text-gray-300 border border-gray-200 px-1.5 py-0.5 rounded ml-2">ESC</div>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {filteredItems.length > 0 ? (
            <div className="space-y-1">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl mr-4 group-hover:bg-iron-lemon transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-bold text-industrial-grey">{item.title}</div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.category}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-sm text-gray-500 font-medium">No results found for &quot;{query}&quot;</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for &quot;Optimization&quot; or &quot;Simulator&quot;</p>
            </div>
          )}
        </div>

        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="bg-white border border-gray-200 px-1 py-0.5 rounded shadow-sm text-gray-500">↑↓</span> Navigate</span>
            <span className="flex items-center gap-1"><span className="bg-white border border-gray-200 px-1 py-0.5 rounded shadow-sm text-gray-500">Enter</span> Select</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-iron-lemon"></span>
            Lydiah Indexer v1.0
          </div>
        </div>
      </div>
    </div>
  );
}
