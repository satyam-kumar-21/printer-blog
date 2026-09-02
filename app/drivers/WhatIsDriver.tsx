'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WhatIsDriver() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-100" id="what-is-a-driver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Big Bold Section Title & Intro */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1963ff]/10 text-[#1963ff] text-xs font-bold uppercase tracking-wider">
              <span>Essential Knowledge</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Understanding printer drivers & why they matter.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every printer connected to your home or office network relies on a specific piece of software to function properly. Here is a breakdown of what drivers do and how they keep your devices running without errors.
            </p>

            <div className="pt-2">
              <Link 
                href="/blog/driver-troubleshooting" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1963ff] hover:underline"
              >
                <span>Read complete troubleshooting handbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Structured Feature Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#1963ff] text-white flex items-center justify-center font-bold text-sm shadow-md">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">The Hardware Translator</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Translates general commands from Windows or macOS into the exact machine language your specific printer model understands.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#1963ff] text-white flex items-center justify-center font-bold text-sm shadow-md">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">Unlocks Advanced Features</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official drivers enable duplex (two-sided) printing, high-resolution photo scans, and accurate ink level monitoring.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#1963ff] text-white flex items-center justify-center font-bold text-sm shadow-md">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">Fixes "Offline" Loops</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Corrupted driver files are the primary cause of printers dropping off Wi-Fi or stalling print queues unexpectedly.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#1963ff] text-white flex items-center justify-center font-bold text-sm shadow-md">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean OEM Packages</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Always install standalone drivers directly from verified manufacturer sources to avoid unnecessary bloatware.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}