import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, BookOpen, Download, ShieldCheck } from 'lucide-react';
import { blogTopics } from '../../data/blogs';

type Brand = {
  name: string;
  models: string;
  description: string;
  driverUrl: string;
};

const brands: Record<string, Brand> = {
  hp: {
    name: 'HP',
    models: 'DeskJet, ENVY, OfficeJet, LaserJet, and Smart Tank',
    description: 'Find practical HP printer fixes, setup guidance, and official driver resources in one place.',
    driverUrl: 'https://support.hp.com/us-en/drivers/printers',
  },
  canon: {
    name: 'Canon',
    models: 'PIXMA, MAXIFY, imageCLASS, and MegaTank',
    description: 'Get help with Canon print quality, wireless setup, cartridges, and model-specific resources.',
    driverUrl: 'https://www.usa.canon.com/support/software-and-drivers',
  },
  epson: {
    name: 'Epson',
    models: 'EcoTank, WorkForce, Expression, and SureColor',
    description: 'Explore Epson maintenance, nozzle cleaning, wireless setup, and driver support resources.',
    driverUrl: 'https://epson.com/Support/sl/s',
  },
  brother: {
    name: 'Brother',
    models: 'HL, MFC, DCP, INKvestment, and INKvestment Tank',
    description: 'Find Brother toner, drum, connection, and everyday printer troubleshooting guidance.',
    driverUrl: 'https://support.brother.com/g/b/productsearch.aspx?c=us&lang=en&content=dl',
  },
  xerox: {
    name: 'Xerox',
    models: 'WorkCentre, VersaLink, and office printers',
    description: 'Use this Xerox support hub to find setup guidance, troubleshooting resources, and official downloads.',
    driverUrl: 'https://www.xerox.com/en-us/support',
  },
};

const getBrand = (slug: string) => brands[slug.toLowerCase()];

export function generateStaticParams() {
  return Object.keys(brands).map((brand) => ({ brand }));
}

export async function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = getBrand(slug);

  if (!brand) return {};

  return {
    title: `${brand.name} Printer Support | PrintCare`,
    description: brand.description,
  };
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params;
  const brand = getBrand(slug);

  if (!brand) notFound();

  const articles = blogTopics.filter((topic) => {
    const source = [topic.title, topic.excerpt, topic.details, topic.keywords.join(' ')].join(' ').toLowerCase();
    return source.includes(brand.name.toLowerCase());
  });

  return (
    <>
      <section className="border-b border-slate-800 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
              <ShieldCheck className="h-4 w-4" />
              {brand.name} support hub
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{brand.name} printer help that gets to the point.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{brand.description}</p>
            <p className="mt-3 text-sm text-slate-400">Covers {brand.models}.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={brand.driverUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Official drivers
                <Download className="h-4 w-4" />
              </a>
              <Link href={`/blog?q=${encodeURIComponent(brand.name)}`} className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400 hover:text-white">
                Search {brand.name} guides
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">{brand.name} resources</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Guides for common {brand.name} issues</h2>
            </div>
            <BookOpen className="hidden h-7 w-7 text-blue-600 sm:block" />
          </div>

          {articles.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((topic) => (
                <Link key={topic.slug} href={`/blog/${topic.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{topic.category}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700">{topic.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{topic.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Read guide <ArrowRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="font-semibold text-slate-800">More {brand.name} guides are on the way.</p>
              <p className="mt-2 text-sm text-slate-600">Use the official support link above for model-specific resources.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
