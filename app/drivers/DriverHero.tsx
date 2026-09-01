'use client';

import React, { useState } from 'react';
import { Search, Download, ShieldCheck, Layers, Cpu, Wrench, CheckCircle } from 'lucide-react';

export default function DriverHero() {
  const [selectedOS, setSelectedOS] = useState<'win11' | 'win10' | 'mac' | 'linux'>('win11');
  const [selectedBrand, setSelectedBrand] = useState('hp');
  const [searchQuery, setSearchQuery] = useState('');

  const handleHubSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log(`Searching hub for: ${searchQuery} (${selectedBrand} / ${selectedOS})`);
  };

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 border-b border-slate-800 overflow-hidden">
      
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1963ff]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Value Props & Trust Badges */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1963ff]/20 text-blue-400 border border-[#1963ff]/30 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Driver Index & Knowledge Center</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Printer drivers, software utilities & expert guides.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Find out what printer drivers are, download secure manufacturer packages, and troubleshoot connectivity or error codes seamlessly in one place.
            </p>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
                  <Cpu className="w-4 h-4" /> 100% Safe
                </div>
                <p className="text-xs text-slate-400">Direct OEM downloads</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
                  <Wrench className="w-4 h-4" /> Setup Guides
                </div>
                <p className="text-xs text-slate-400">Step-by-step manuals</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xs">
                  <CheckCircle className="w-4 h-4" /> All Models
                </div>
                <p className="text-xs text-slate-400">HP, Canon, Epson, etc.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Compact & Dense Interactive Console */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl text-left space-y-5">
              
              <div className="text-xs font-extrabold uppercase tracking-widest text-blue-400">
                Driver & Resource Lookup Console
              </div>

              {/* OS Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  1. Choose Operating System
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'win11', label: 'Win 11' },
                    { id: 'win10', label: 'Win 10' },
                    { id: 'mac', label: 'macOS' },
                    { id: 'linux', label: 'Linux' },
                  ].map((os) => (
                    <button
                      key={os.id}
                      type="button"
                      onClick={() => setSelectedOS(os.id as any)}
                      className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all truncate ${
                        selectedOS === os.id
                          ? 'bg-[#1963ff] border-[#1963ff] text-white shadow-md'
                          : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {os.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Selection */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Select Manufacturer
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'hp', name: 'HP' },
                    { id: 'canon', name: 'Canon' },
                    { id: 'epson', name: 'Epson' },
                    { id: 'brother', name: 'Brother' },
                  ].map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBrand(b.id)}
                      className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                        selectedBrand === b.id
                          ? 'bg-[#1963ff]/20 border-[#1963ff] text-blue-300 shadow-sm'
                          : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Input & Button */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Search Model or Guide Topic
                </label>
                <form onSubmit={handleHubSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g., LaserJet M404n or 'What is a driver?'..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1963ff] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#1963ff] hover:bg-[#1554db] rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Search</span>
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Jump Anchor Footer inside Hero */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-medium">
          <span className="text-slate-200 font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#1963ff]" /> Explore Sections:
          </span>
          <a href="#what-is-a-driver" className="hover:text-white transition-colors underline underline-offset-4">What is a Driver?</a>
          <span>•</span>
          <a href="#how-to-install" className="hover:text-white transition-colors underline underline-offset-4">Installation Guide</a>
          <span>•</span>
          <a href="#troubleshooting" className="hover:text-white transition-colors underline underline-offset-4">Common Issues</a>
        </div>

      </div>
    </section>
  );
}