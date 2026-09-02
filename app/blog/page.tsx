import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Sparkles, Search, ShieldCheck, Printer, Wifi, PencilRuler } from 'lucide-react';
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
const articlesPerPage = 9;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; page?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const query = typeof params.q === 'string' ? params.q : '';
  const cleanedQuery = query.trim();
  const filteredTopics = blogTopics.filter((topic) => topicMatchesQuery(topic, cleanedQuery));
  const visibleTopics = filteredTopics.length > 0 ? filteredTopics : blogTopics;
  const featuredTopic = filteredTopics[0] ?? blogTopics[0];
  const requestedPage = Number.parseInt(typeof params.page === 'string' ? params.page : '1', 10);
  const totalPages = Math.max(1, Math.ceil(visibleTopics.length / articlesPerPage));
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), totalPages) : 1;
  const paginatedTopics = visibleTopics.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);
  const pageHref = (page: number) => {
    const search = new URLSearchParams();
    if (cleanedQuery) search.set('q', cleanedQuery);
    if (page > 1) search.set('page', String(page));
    const queryString = search.toString();
    return queryString ? `/blog?${queryString}` : '/blog';
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-800 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1963ff]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 text-left lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1963ff]/30 bg-[#1963ff]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                <ShieldCheck className="h-4 w-4" />
                <span>PrintCare Journal & Support Library</span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl">
                {cleanedQuery ? `Search results for “${cleanedQuery}”` : 'Clear fixes, setup guides, and printer help you can trust.'}
              </h1>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                Search practical troubleshooting articles for offline printers, Wi‑Fi issues, toner problems, setup questions, and everyday support needs across major brands.
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                    <Sparkles className="h-4 w-4" />
                    Verified tips
                  </div>
                  <p className="text-xs text-slate-400">Simple, useful steps</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                    <Search className="h-4 w-4" />
                    Fast search
                  </div>
                  <p className="text-xs text-slate-400">Find answers quickly</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                    <ShieldCheck className="h-4 w-4" />
                    Trusted advice
                  </div>
                  <p className="text-xs text-slate-400">HP, Canon, Epson</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-5 rounded-3xl border border-slate-700 bg-slate-800/90 p-6 text-left shadow-2xl backdrop-blur-md sm:p-8">
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
                  Search the blog hub
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Search by issue or model
                  </label>
                  <form action="/blog" method="get" className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="q"
                        defaultValue={cleanedQuery}
                        placeholder="e.g. offline printer, toner, wifi, canon..."
                        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 transition focus:border-[#1963ff] focus:outline-none sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#1963ff] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#1554db] sm:text-sm"
                    >
                      <Search className="h-4 w-4" />
                      Search
                    </button>
                  </form>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    Popular topics
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {quickSearches.map((term) => (
                      <Link
                        key={term}
                        href={`/blog?q=${encodeURIComponent(term)}`}
                        className="rounded-xl border border-slate-700 bg-slate-900/50 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-blue-400 hover:text-white"
                      >
                        {term}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-slate-800/80 pt-6 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-[#1963ff]" />
              Explore sections:
            </span>
            <a href="#featured-guide" className="underline-offset-4 underline transition hover:text-white">
              Featured guide
            </a>
            <span>•</span>
            <a href="#latest-guides" className="underline-offset-4 underline transition hover:text-white">
              Latest guides
            </a>
            <span>•</span>
            <a href="#helpful-tips" className="underline-offset-4 underline transition hover:text-white">
              Helpful tips
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        {!cleanedQuery && (
          <>
        <div id="featured-guide" className="mb-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

        <div id="latest-guides" className="mb-12 grid grid-cols-1 items-stretch gap-6 xl:grid-cols-12">
          <Link href={`/blog/${featuredTopic.slug}`} className="group flex flex-col justify-between overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_26px_55px_rgba(37,99,235,0.1)] xl:col-span-8">
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

              <h3 className="text-2xl font-extrabold tracking-tighter text-slate-900 sm:text-3xl">
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
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1963ff] px-5 py-2.5 text-xs font-bold text-white shadow-[0_12px_24px_rgba(25,99,255,0.28)] transition group-hover:bg-[#1554db]">
                Read guide
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

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
          </>
        )}

        <div id="helpful-tips" className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
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
            {paginatedTopics.map((topic) => {
              const isHighlighted = cleanedQuery && topicMatchesQuery(topic, cleanedQuery);

              return (
                <Link
                  href={`/blog/${topic.slug}`}
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
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1963ff] group-hover:underline">
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {!cleanedQuery || filteredTopics.length > 0 ? (
          <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Blog pagination">
            <Link
              href={pageHref(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition ${
                currentPage === 1
                  ? 'pointer-events-none border-slate-200 text-slate-300'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Link>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Link
                key={page}
                href={pageHref(page)}
                aria-current={page === currentPage ? 'page' : undefined}
                className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold transition ${
                  page === currentPage
                    ? 'border-blue-600 bg-blue-600 text-white shadow-[0_10px_22px_rgba(37,99,235,0.2)]'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {page}
              </Link>
            ))}

            <Link
              href={pageHref(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm transition ${
                currentPage === totalPages
                  ? 'pointer-events-none border-slate-200 text-slate-300'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700'
              }`}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Link>
          </nav>
        ) : null}
      </div>
    </>
  );
}