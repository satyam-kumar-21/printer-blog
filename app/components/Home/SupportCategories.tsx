'use client';

import Link from 'next/link';
import { ArrowRight, Download, Wifi, Printer, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Driver downloads',
    text: 'Use verified links and the right installer for your model, brand, and operating system.',
    icon: Download,
  },
  {
    title: 'Wireless setup',
    text: 'Connect printers to Wi‑Fi, fix discovery issues, and get your network back in sync quickly.',
    icon: Wifi,
  },
  {
    title: 'Offline & queue fixes',
    text: 'Solve common printer status errors without confusing resets or risky troubleshooting steps.',
    icon: Printer,
  },
  {
    title: 'Maintenance guides',
    text: 'Keep print quality consistent with nozzle cleaning, alignment, and toner tips that work in real life.',
    icon: Sparkles,
  },
];

export default function SupportCategories() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              Support hub
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Everything people usually need for printer help.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            Browse all guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="animate-stagger grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="premium-card rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)] transition duration-200 hover:border-blue-200 hover:shadow-[0_25px_55px_rgba(37,99,235,0.06)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
