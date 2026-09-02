'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fixes = [
  'Printer keeps saying offline',
  'Cartridge not detected or failed',
  'Wireless printer won’t connect',
  'Faded text or streaky pages',
  'Toner and drum error warnings',
  'Scanner not recognized by Windows',
];

export default function PopularFixes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Common fixes
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              The problems people search for most.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            See all troubleshooting posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="animate-stagger grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {fixes.map((fix, index) => (
            <div
              key={fix}
              className="premium-card group flex items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-[0_18px_32px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <span className="text-base font-semibold text-slate-800">{fix}</span>
              </div>
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
