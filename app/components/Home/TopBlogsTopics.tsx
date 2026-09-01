import Link from 'next/link';
import { ArrowRight, Clock3, Sparkles } from 'lucide-react';
import { blogTopics } from '@/app/data/blogs';

export default function TopBlogsTopics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Popular reads
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Smart fixes for everyday printer issues.
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            View all guides
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogTopics.slice(0, 6).map((topic) => (
            <article
              key={topic.slug}
              className="group flex h-full flex-col justify-between rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.03)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-[0_25px_60px_rgba(37,99,235,0.08)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">
                    {topic.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                    <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                    {topic.readTime}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-700">
                    {topic.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-blue-700">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">{topic.excerpt}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-[11px] font-medium text-slate-500">Updated guide</span>
                <Link
                  href={`/blog/${topic.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}