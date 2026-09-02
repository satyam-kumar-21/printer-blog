import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Sparkles, ShieldCheck, BookOpen } from 'lucide-react';
import { blogTopics, getBlogBySlug } from '../../data/blogs';

const themeBySlug: Record<string, { accent: string; accentSoft: string; text: string; border: string; surface: string; dark: string; highlight: string; badge: string; note: string }> = {
  'fix-printer-offline': {
    accent: '#2563eb',
    accentSoft: '#eaf3ff',
    text: '#1d4ed8',
    border: '#bfdbfe',
    surface: '#f8fbff',
    dark: '#0f172a',
    highlight: 'Connection checkpoint',
    badge: 'border-blue-200 bg-blue-50 text-blue-700',
    note: 'The most common cause is a stale network connection or a blocked queue, not a damaged printer.'
  },
  'hp-ink-cartridge-error': {
    accent: '#f59e0b',
    accentSoft: '#fff7e8',
    text: '#b45309',
    border: '#fed7aa',
    surface: '#fffaf3',
    dark: '#1f2937',
    highlight: 'Cartridge signal check',
    badge: 'border-amber-200 bg-amber-50 text-amber-700',
    note: 'HP errors are often caused by a poor contact, a chip mismatch, or a cartridge that is not sitting flush.'
  },
  'wifi-printer-setup': {
    accent: '#10b981',
    accentSoft: '#ecfdf5',
    text: '#047857',
    border: '#a7f3d0',
    surface: '#f2fff9',
    dark: '#0f172a',
    highlight: 'Network setup flow',
    badge: 'border-emerald-200 bg-emerald-50 text-emerald-700',
    note: 'A clean wireless setup starts with matching the printer and device to the same network and security profile.'
  },
  'canon-print-quality': {
    accent: '#8b5cf6',
    accentSoft: '#f5f3ff',
    text: '#7c3aed',
    border: '#ddd6fe',
    surface: '#faf7ff',
    dark: '#1f2937',
    highlight: 'Print clarity check',
    badge: 'border-violet-200 bg-violet-50 text-violet-700',
    note: 'Most quality problems come from clogged nozzles, a mismatch in paper settings, or an alignment issue rather than a serious hardware failure.'
  },
  'brother-toner-issues': {
    accent: '#ef4444',
    accentSoft: '#fff1f2',
    text: '#b91c1c',
    border: '#fecaca',
    surface: '#fff9f9',
    dark: '#1f2937',
    highlight: 'Supply check',
    badge: 'border-red-200 bg-red-50 text-red-700',
    note: 'Brother toner warnings often point to the drum or cartridge seating before the printer actually needs a full replacement.'
  },
  'epson-head-cleaning': {
    accent: '#0ea5e9',
    accentSoft: '#f0f9ff',
    text: '#0369a1',
    border: '#bae6fd',
    surface: '#f7fcff',
    dark: '#0f172a',
    highlight: 'Nozzle recovery',
    badge: 'border-sky-200 bg-sky-50 text-sky-700',
    note: 'Epson clogs usually appear after long idle periods, so the fix is usually a careful clean plus a nozzle check.'
  },
  'mac-airprint-setup': {
    accent: '#6366f1',
    accentSoft: '#eef2ff',
    text: '#4338ca',
    border: '#c7d2fe',
    surface: '#f9f9ff',
    dark: '#0f172a',
    highlight: 'AirPrint setup',
    badge: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    note: 'AirPrint works best when the printer and Mac are on the same network and using the default Apple discovery flow.'
  },
  'windows-print-spooler-reset': {
    accent: '#14b8a6',
    accentSoft: '#ecfeff',
    text: '#0f766e',
    border: '#99f6e4',
    surface: '#f4fffd',
    dark: '#0f172a',
    highlight: 'Queue reset',
    badge: 'border-teal-200 bg-teal-50 text-teal-700',
    note: 'A stuck Windows queue often hides a corrupted print job that is blocking the entire spooler service.'
  },
  'scanner-not-recognized': {
    accent: '#a855f7',
    accentSoft: '#faf5ff',
    text: '#7e22ce',
    border: '#e9d5ff',
    surface: '#fcf7ff',
    dark: '#1f2937',
    highlight: 'Scan driver check',
    badge: 'border-purple-200 bg-purple-50 text-purple-700',
    note: 'If printing works but scanning does not, the issue is usually in the WIA/TWAIN service or the scanner driver chain.'
  }
};

function getArticleTheme(slug: string) {
  return themeBySlug[slug] ?? themeBySlug['fix-printer-offline'];
}

export function generateStaticParams() {
  return blogTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getBlogBySlug(slug);

  if (!topic) {
    return {
      title: 'Article Not Found | PrintCare Hub',
      description: 'The requested troubleshooting article could not be found.',
    };
  }

  return {
    title: `${topic.title} | PrintCare Hub`,
    description: topic.excerpt,
    alternates: {
      canonical: `/blog/${topic.slug}`,
    },
    openGraph: {
      title: topic.title,
      description: topic.excerpt,
      type: 'article',
      url: `/blog/${topic.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: topic.title,
      description: topic.excerpt,
    },
  };
}

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const topic = getBlogBySlug(slug);

  if (!topic) {
    notFound();
  }

  const theme = getArticleTheme(topic.slug);
  const currentIndex = blogTopics.findIndex((item) => item.slug === topic.slug);
  const previousTopic = blogTopics[(currentIndex - 1 + blogTopics.length) % blogTopics.length];
  const nextTopic = blogTopics[(currentIndex + 1) % blogTopics.length];
  const relatedTopics = blogTopics.filter((item) => item.slug !== topic.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      
      {/* EXCLUSIVE DARK MODE HERO SECTION */}
      <section className="relative bg-slate-950 pt-16 pb-20 border-b border-slate-800 overflow-hidden text-white">
        
        {/* Glow Accent Effects */}
        <div 
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: theme.accent }}
        />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" style={{ color: theme.accent }} />
            <span>Back to All Knowledge Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md"
              style={{
                backgroundColor: `${theme.accent}15`,
                borderColor: `${theme.accent}40`,
                color: theme.accent,
              }}
            >
              {topic.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" style={{ color: theme.accent }} />
              <span>{topic.highlight}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {topic.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {topic.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs"
                style={{
                  backgroundColor: `${theme.accent}20`,
                  borderColor: `${theme.accent}40`,
                  color: theme.accent
                }}
              >
                {topic.author.charAt(0)}
              </div>
              <span className="text-slate-200">{topic.author}</span>
            </div>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock3 className="w-4 h-4" />
              {topic.readTime}
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <CalendarDays className="w-4 h-4" />
              {topic.publishedAt}
            </span>
          </div>

        </div>
      </section>

      {/* LIGHT THEME CONTENT & SIDEBAR */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Overview / Details Callout Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-blue-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Expert Overview</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {topic.details}
              </p>
            </div>

            {/* Step-by-Step Sections */}
            <div className="space-y-8">
              {topic.sections.map((section, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-sm border shadow-sm"
                      style={{
                        backgroundColor: theme.accentSoft,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      0{index + 1}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                      {section.heading}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-13">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Quick Summary Box */}
            <div 
              className="rounded-3xl p-6 sm:p-8 border shadow-sm space-y-3"
              style={{
                backgroundColor: theme.accentSoft,
                borderColor: theme.border,
              }}
            >
              <div className="text-xs font-extrabold uppercase tracking-widest" style={{ color: theme.text }}>
                Quick Diagnostic Note
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {theme.note}
              </p>
            </div>

          </main>

          {/* Light Sidebar */}
          <aside className="lg:col-span-4 space-y-6 sticky top-8">
            
            {/* Hub Navigation Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Hub Navigation
              </div>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-semibold text-slate-500">Category</span>
                  <span className="font-bold text-slate-900">{topic.category}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="font-semibold text-slate-500">Read Time</span>
                  <span className="font-bold text-slate-900">{topic.readTime}</span>
                </div>
              </div>
            </div>

            {/* Related Articles Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                Related Knowledge Guides
              </h3>
              <div className="space-y-4">
                {relatedTopics.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group block p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:bg-white transition-all space-y-1.5"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                      {related.category}
                    </span>
                    <p className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {related.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>

        {/* Previous & Next Pagination Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/blog/${previousTopic.slug}`}
            className="group flex items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="h-5 w-5 text-blue-600 shrink-0 transition group-hover:-translate-x-1" />
            <div className="flex-1 text-right sm:text-left">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Previous Article</span>
              <span className="mt-0.5 block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {previousTopic.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/blog/${nextTopic.slug}`}
            className="group flex items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex-1 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Next Article</span>
              <span className="mt-0.5 block text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                {nextTopic.title}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-blue-600 shrink-0 transition group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}