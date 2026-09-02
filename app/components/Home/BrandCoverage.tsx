'use client';

import Link from 'next/link';
import { ArrowRight, BadgeCheck } from 'lucide-react';

const brands = [
  { name: 'HP', details: 'Offline errors, drivers, cartridge issues' },
  { name: 'Canon', details: 'Print quality, nozzle cleaning, setup' },
  { name: 'Epson', details: 'Nozzle problems, Wi‑Fi setup, maintenance' },
  { name: 'Brother', details: 'Toner issues, drum warnings, resets' },
];

export default function BrandCoverage() {
  return (
    <section className="bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100">
              Brand support
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Built for the brands people use every day.
            </h2>
          </div>

          <Link
            href="/drivers"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-blue-50"
          >
            View drivers & setup
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="animate-stagger grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {brands.map(({ name, details }) => (
            <div
              key={name}
              className="premium-card rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_55px_rgba(15,23,42,0.2)] backdrop-blur-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-100 ring-1 ring-blue-200/20">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">{name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
