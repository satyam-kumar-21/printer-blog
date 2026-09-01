"use client";

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Search, Printer, Menu, X, Wrench, BookOpen, PhoneCall, ArrowRight } from 'lucide-react';
import { blogTopics } from '../data/blogs';

const navItems = [
  { href: '/drivers', label: 'Drivers & Setup', icon: Wrench },
  { href: '/blog', label: 'Blog Guides', icon: BookOpen },
  { href: '/contact', label: 'Support', icon: PhoneCall },
];

const normalizeText = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

const getMatchingTopics = (query: string) => {
  const cleanedQuery = normalizeText(query.trim());

  if (!cleanedQuery) return [];

  const tokens = cleanedQuery.split(/\s+/).filter(Boolean);

  return blogTopics
    .filter((topic) => {
      const source = normalizeText(
        [
          topic.title,
          topic.excerpt,
          topic.details,
          topic.category,
          topic.author,
          topic.highlight,
          topic.metaTitle,
          topic.metaDescription,
          topic.keywords.join(' '),
        ].join(' ')
      );

      return tokens.some((token) => source.includes(token));
    })
    .slice(0, 6);
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const matchingTopics = useMemo(() => getMatchingTopics(searchQuery), [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();

    if (!query) return;

    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    router.push(`/blog?q=${encodeURIComponent(query)}`);
  };

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/blog') return pathname === '/blog' || pathname.startsWith('/blog/');
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 transition-transform duration-200 hover:scale-[1.01]">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-[0_14px_28px_rgba(37,99,235,0.28)]">
              <Printer className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-slate-900">
                Print<span className="text-blue-600">Care</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Support & Guides
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    'group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ease-out',
                    active
                      ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600',
                  ].join(' ')}
                >
                  <Icon className={['h-4 w-4 transition-all duration-200', active ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'].join(' ')} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <form onSubmit={handleSearch} className="relative w-72">
              <input
                type="text"
                placeholder="Search guides, models, fixes..."
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => window.setTimeout(() => setIsSearchOpen(false), 120)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-xs text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              {searchQuery.trim() && isSearchOpen && (
                <div className="absolute left-0 right-0 top-[calc(100%+12px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
                  <div className="max-h-[300px] overflow-y-auto p-2">
                    {matchingTopics.length > 0 ? (
                      matchingTopics.map((topic) => (
                        <Link
                          key={topic.slug}
                          href={`/blog/${topic.slug}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left transition hover:border-blue-200 hover:bg-blue-50"
                        >
                          <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">{topic.category}</div>
                            <div className="mt-1 text-sm font-semibold text-slate-800 group-hover:text-blue-700">{topic.title}</div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:text-blue-700" />
                        </Link>
                      ))
                    ) : (
                      <div className="px-3 py-4 text-sm text-slate-500">No matching blog guides found.</div>
                    )}
                  </div>
                </div>
              )}
            </form>

            <Link
              href="/drivers"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)] transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_18px_34px_rgba(37,99,235,0.28)]"
            >
              Get Drivers
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-3 md:hidden">
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="text"
              placeholder="Search guides, models, fixes..."
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => window.setTimeout(() => setIsSearchOpen(false), 120)}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            {searchQuery.trim() && isSearchOpen && (
              <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <div className="max-h-[260px] overflow-y-auto p-2">
                  {matchingTopics.length > 0 ? (
                    matchingTopics.map((topic) => (
                      <Link
                        key={topic.slug}
                        href={`/blog/${topic.slug}`}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left transition hover:border-blue-200 hover:bg-blue-50"
                      >
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-700">{topic.category}</div>
                          <div className="mt-1 text-sm font-semibold text-slate-800 group-hover:text-blue-700">{topic.title}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 transition group-hover:text-blue-700" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-3 py-4 text-sm text-slate-500">No matching blog guides found.</div>
                  )}
                </div>
              </div>
            )}
          </form>

          <nav className="flex flex-col space-y-3 pt-2">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={[
                    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ease-out',
                    active
                      ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100'
                      : 'text-slate-700 hover:bg-slate-50',
                  ].join(' ')}
                >
                  <Icon className={['h-4 w-4', active ? 'text-blue-600' : 'text-slate-500'].join(' ')} />
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2">
            <Link
              href="/drivers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.22)] transition-all hover:bg-blue-700"
            >
              Get Drivers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}