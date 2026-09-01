'use client';

import React, { useState } from 'react';
import { Search, ArrowRight, CheckCircle2, Printer, Wrench, FileText, Download, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomeHero() {
  const [activeTab, setActiveTab] = useState<'fix' | 'drivers' | 'manuals'>('fix');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('hp');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    console.log(`Searching database for: ${searchQuery} under ${selectedBrand}`);
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 text-white md:py-20">
      <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-[#1963ff]/15 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1963ff]/30 bg-[#1963ff]/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Certified support assistant
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-[11px] text-slate-300 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            100+ pages indexed
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Fix printer issues faster with cleaner, smarter guidance.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Find trusted drivers, error-code walkthroughs, and setup steps in a simpler, more reliable support experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/drivers"
                className="inline-flex items-center rounded-full bg-[#1963ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.26)] transition-all duration-200 hover:bg-[#1554db]"
              >
                Get drivers
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-blue-400 hover:text-white"
              >
                Explore guides
              </Link>
            </div>

            <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                'Verified OEM links',
                'Step-by-step troubleshooting',
                'No bundled junkware',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-3 py-2.5 text-xs font-medium text-slate-200 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="rounded-[30px] border border-slate-700 bg-slate-800/90 p-4 shadow-[0_28px_60px_rgba(15,23,42,0.25)] backdrop-blur-md sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/60 p-2">
                {['Fix problem', 'Get drivers', 'Manuals'].map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(index === 0 ? 'fix' : index === 1 ? 'drivers' : 'manuals')}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                      activeTab === (index === 0 ? 'fix' : index === 1 ? 'drivers' : 'manuals')
                        ? 'bg-[#1963ff] text-white shadow-sm'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl bg-slate-900/80 p-4">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
                    Choose brand
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['HP', 'Canon', 'Epson', 'Brother'].map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => setSelectedBrand(brand.toLowerCase())}
                        className={`rounded-xl border px-2.5 py-2.5 text-xs font-semibold transition-all ${
                          selectedBrand === brand.toLowerCase()
                            ? 'border-[#1963ff] bg-[#1963ff]/20 text-blue-300'
                            : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-600'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">
                    Search by model or error
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Type model or error code"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-10 pr-3 text-sm text-white placeholder:text-slate-400 focus:border-[#1963ff] focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      />
                    </div>
                    <button
                      type="button"
                      className="rounded-xl bg-[#1963ff] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1554db]"
                    >
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-300">
                  <span className="font-semibold text-white">Popular:</span>
                  <Link href="/blog/fix-printer-offline" className="text-blue-400 hover:underline">Offline fix</Link>
                  <span>•</span>
                  <Link href="/drivers" className="text-blue-400 hover:underline">Drivers</Link>
                  <span>•</span>
                  <Link href="/error-codes" className="text-blue-400 hover:underline">Error codes</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
