import Link from 'next/link';
import { ArrowRight, BookOpen, Mail, ShieldCheck } from 'lucide-react';

type CompanySection = {
  heading: string;
  paragraphs: string[];
};

type CompanyPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: CompanySection[];
};

export default function CompanyPage({ eyebrow, title, intro, sections }: CompanyPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-800 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1963ff]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1963ff]/30 bg-[#1963ff]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{intro}</p>
          </div>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
        </article>

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <h2 className="mt-4 text-lg font-bold text-slate-900">Need printer help?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Browse practical guides or contact the PrintCare support team.</p>
          <div className="mt-5 space-y-2">
            <Link href="/blog" className="flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Browse guides <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700">
              Contact support <Mail className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
