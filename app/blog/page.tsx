import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock3, Sparkles, Search, ShieldCheck, Printer, Wifi, PencilRuler } from 'lucide-react';
import { blogTopics } from '../data/blogs';

const normalizeText = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

const topicMatchesQuery = (topic: (typeof blogTopics)[number], query: string) => {
  const cleanedQuery = normalizeText(query.trim());

  if (!cleanedQuery) return true;

  const tokens = cleanedQuery.split(/\s+/).filter(Boolean);
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
};

const categoryCards = [
  { name: 'Printer offline', count: 2, icon: Printer },
  { name: 'Wifi setup', count: 2, icon: Wifi },
  { name: 'Ink & toner', count: 3, icon: PencilRuler },
  { name: 'Support trust', count: 2, icon: ShieldCheck },
];

const quickSearches = ['offline', 'toner', 'wifi', 'cartridge', 'canon', 'epson'];

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const query = typeof params.q === 'string' ? params.q : '';
  const cleanedQuery = query.trim();
  const filteredTopics = blogTopics.filter((topic) => topicMatchesQuery(topic, cleanedQuery));
  const visibleTopics = filteredTopics.length > 0 ? filteredTopics : blogTopics;
  const featuredTopic = filteredTopics[0] ?? blogTopics[0];

  return (
    <section className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              PrintCare Journal
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              {cleanedQuery ? `Search results for “${cleanedQuery}”` : 'Helpful printer guides for real life.'}
            </h1>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
          >
            Back home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mb-12 overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:p-10">
          <div className="pointer-events-none absolute -right-12 top-0 h-96 w-96 rounded-full bg-[#1963ff]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-100">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-300" />
                Verified fixes & tutorials
              </div>

              <h2 className="max-w-xl text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Clear answers for printer problems that interrupt your day.
              </h2>

              <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Explore practical troubleshooting, setup guides, and expert advice for HP, Canon, Epson, Brother, and more.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-300">Guides available</div>
              <div className="mt-3 text-4xl font-black tracking-tight text-white">{blogTopics.length}</div>
              <div className="mt-2 text-sm text-slate-300">Quick and practical support articles</div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-6">
            {quickSearches.map((term) => (
              <Link
                key={term}
                href={`/blog?q=${encodeURIComponent(term)}`}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-blue-400 hover:text-white"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categoryCards.map(({ name, count, icon: Icon }) => (
            <Link
              key={name}
              href={`/blog?q=${encodeURIComponent(name)}`}
              className="group rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.03)] transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_44px_rgba(37,99,235,0.06)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-bold text-slate-900">{name}</h3>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-600">
                  {count}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-12 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-12">
          <article className="flex flex-col justify-between overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.04)] xl:col-span-8">
            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-[#1963ff]/10 px-3 py-1 text-xs font-bold text-[#1963ff]">
                  {cleanedQuery ? 'Top match' : 'Featured guide'}
                </span>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                    {featuredTopic.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-slate-400" />
                    {featuredTopic.publishedAt}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold tracking-[-0.05em] text-slate-900 sm:text-3xl">
                {featuredTopic.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {featuredTopic.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                By {featuredTopic.author}
              </span>
              <Link
                href={`/blog/${featuredTopic.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#1963ff] px-5 py-2.5 text-xs font-bold text-white shadow-[0_12px_24px_rgba(25,99,255,0.28)] transition hover:bg-[#1554db]"
              >
                Read guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <aside className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_44px_rgba(15,23,42,0.03)] xl:col-span-4">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-700">
              <Search className="h-3.5 w-3.5" />
              Quick help
            </div>

            <h3 className="text-2xl font-bold tracking-[-0.04em] text-slate-900">Useful fixes without the guesswork.</h3>

            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>Match your device to the same Wi‑Fi band before changing settings.</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>Use the correct driver instead of chasing generic downloads.</span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <span>Reset the queue or cartridge step before replacing hardware.</span>
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link href="/drivers" className="inline-flex flex-1 items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Drivers
              </Link>
              <Link href="/contact" className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
                Support
              </Link>
            </div>
          </aside>
        </div>

        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <h2 className="text-xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-2xl">
            {cleanedQuery ? 'Matched articles' : 'Latest troubleshooting articles'}
          </h2>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-1.5">{visibleTopics.length} guides</span>
            <span className="rounded-full bg-slate-100 px-3 py-1.5">Updated content</span>
          </div>
        </div>

        {cleanedQuery && filteredTopics.length === 0 ? (
          <div className="rounded-[30px] border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="text-lg font-semibold text-slate-800">No blog matches found for “{cleanedQuery}”.</p>
            <p className="mt-2 text-sm text-slate-600">Try a model name, brand, or a common fix like offline, toner, Wi‑Fi, or cartridge.</p>
            <Link href="/blog" className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
              View all articles
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleTopics.map((topic) => {
              const isHighlighted = cleanedQuery && topicMatchesQuery(topic, cleanedQuery);

              return (
                <article
                  key={topic.slug}
                  className={[
                    'group flex flex-col justify-between rounded-[30px] border p-6 transition-all duration-200 sm:p-7',
                    isHighlighted
                      ? 'border-blue-200 bg-blue-50 shadow-[0_22px_45px_rgba(37,99,235,0.08)]'
                      : 'border-slate-200 bg-white hover:border-[#1963ff]/40 hover:shadow-[0_18px_36px_rgba(15,23,42,0.04)]',
                  ].join(' ')}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#1963ff]/10 px-3 py-1 text-xs font-bold text-[#1963ff]">
                        {topic.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                        <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                        {topic.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug tracking-[-0.04em] text-slate-900 transition-colors group-hover:text-[#1963ff]">
                      {topic.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-7 text-slate-600">
                      {topic.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                    <span className="text-[11px] font-medium text-slate-500">{topic.publishedAt}</span>
                    <Link
                      href={`/blog/${topic.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1963ff] hover:underline"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}