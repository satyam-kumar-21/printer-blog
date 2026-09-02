'use client';

import React from 'react';
import { Shield, Sparkles, Cpu, LifeBuoy, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-16 text-slate-900 md:py-20">
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-200/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-200/50 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              About PrintCare
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Cleaner support for printer problems that keep recurring.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            We built a straightforward support system for printer owners who want quick answers, proven fixes, and fewer dead ends during setup or troubleshooting.
          </p>
        </div>

        <div className="animate-stagger grid gap-5 md:grid-cols-3">
          <div className="premium-card md:col-span-2 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Verified fixes without the clutter or ad-heavy downloads.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We simplify the process from problem to solution by linking directly to trusted manufacturer resources and breaking every fix into sensible, actionable steps.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800">
              Learn our process
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="premium-card rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">100+ guides indexed</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Covering HP, Canon, Epson, Brother, and other brands with documentation built for simple troubleshooting.
            </p>
            <div className="mt-6 border-t border-slate-100 pt-4 text-[11px] uppercase tracking-[0.16em] text-blue-600 font-semibold">
              Live database sync
            </div>
          </div>

          <div className="premium-card md:col-span-3 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md">
                  <LifeBuoy className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Need a quick answer on a stubborn error?</h4>
                  <p className="mt-1 text-sm text-slate-600">
                    We keep the problem-solving flow simple and easy to follow.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm"
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