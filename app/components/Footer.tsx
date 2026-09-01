'use client';

import Link from 'next/link';
import { Printer, Mail, Send, ShieldCheck, Heart, Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Newsletter / Quick Support Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Never get stuck with a printer error again</h3>
              <p className="text-sm text-slate-400 mt-1">
                Subscribe to our troubleshooting dispatch for weekly fix guides, direct driver updates, and maintenance tips.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/20 transition-all shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Printer className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white leading-none">
                Print<span className="text-blue-500">Care</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted independent resource for printer troubleshooting, setup manuals, genuine driver links, and hardware error codes across major brands like HP, Canon, Epson, and Brother.
            </p>
            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                Verified Solutions
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-blue-500" />
                Expert Guides
              </span>
            </div>
          </div>

          {/* Column 1: Popular Brands */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support Brands</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/brands/hp" className="text-slate-400 hover:text-white transition-colors">
                  HP Printer Support
                </Link>
              </li>
              <li>
                <Link href="/brands/canon" className="text-slate-400 hover:text-white transition-colors">
                  Canon Pixma / Maxify
                </Link>
              </li>
              <li>
                <Link href="/brands/epson" className="text-slate-400 hover:text-white transition-colors">
                  Epson EcoTank & WorkForce
                </Link>
              </li>
              <li>
                <Link href="/brands/brother" className="text-slate-400 hover:text-white transition-colors">
                  Brother Laser / Inkjet
                </Link>
              </li>
              <li>
                <Link href="/brands/xerox" className="text-slate-400 hover:text-white transition-colors">
                  Xerox Office Printers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Fixes</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/drivers" className="text-slate-400 hover:text-white transition-colors">
                  Download Drivers
                </Link>
              </li>
              <li>
                <Link href="/error-codes" className="text-slate-400 hover:text-white transition-colors">
                  Error Code Dictionary
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Step-by-Step Blog
                </Link>
              </li>
              <li>
                <Link href="/wireless-setup" className="text-slate-400 hover:text-white transition-colors">
                  Wi-Fi Setup Guides
                </Link>
              </li>
              <li>
                <Link href="/offline-fix" className="text-slate-400 hover:text-white transition-colors">
                  Fix Printer Offline
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PrintCare. All rights reserved. Independent help portal.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-0.5" /> for smooth printing everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}