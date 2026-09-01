'use client';

import React from 'react';
import { Shield, Sparkles, Cpu, LifeBuoy, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-16 text-white md:py-20">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-100">
              <Sparkles className="h-3.5 w-3.5" />
              About PrintCare
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Cleaner support for printer problems that keep recurring.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            We built a straightforward support system for printer owners who want quick answers, proven fixes, and fewer dead ends during setup or troubleshooting.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="md:col-span-2 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.2)] backdrop-blur-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-lg">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Verified fixes without the clutter or ad-heavy downloads.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              We simplify the process from problem to solution by linking directly to trusted manufacturer resources and breaking every fix into sensible, actionable steps.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-200">
              Learn our process
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-100 ring-1 ring-blue-200/20">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-white">14,000+ guides indexed</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Covering HP, Canon, Epson, Brother, and other brands with documentation built for simple troubleshooting.
            </p>
            <div className="mt-6 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.16em] text-blue-100">
              Live database sync
            </div>
          </div>

          <div className="md:col-span-3 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-md">
                  <LifeBuoy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Need a quick answer on a stubborn error?</h4>
                  <p className="mt-1 text-sm text-slate-300">
                    We keep the problem-solving flow simple and easy to follow.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}