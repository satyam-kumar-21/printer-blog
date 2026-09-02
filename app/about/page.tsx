import type { Metadata } from 'next';
import CompanyPage from '../components/Company/CompanyPage';

export const metadata: Metadata = {
  title: 'About PrintCare | Independent Printer Support',
  description: 'Learn about PrintCare and our approach to clear, practical printer support guides.',
};

export default function AboutPage() {
  return (
    <CompanyPage
      eyebrow="About PrintCare"
      title="Printer help without the runaround."
      intro="PrintCare is an independent support library for people who need a clear answer to a printer problem, setup question, or driver search. We make technical support easier to understand, easier to follow, and easier to trust."
      sections={[
        {
          heading: 'Why PrintCare exists',
          paragraphs: [
            'Printer problems are often small, but finding the right fix can be surprisingly difficult. Search results may mix different models, outdated instructions, and download pages that do not clearly explain what a file does.',
            'PrintCare brings the first useful checks into one independent library. Our goal is to help you understand the likely cause, take the least disruptive next step, and know when a manufacturer or repair professional is the better choice.',
          ],
        },
        {
          heading: 'What we cover',
          paragraphs: [
            'Our guides cover the problems people encounter most often: printers that appear offline, wireless connections that drop, stuck queues, missing drivers, paper jams, cartridge and toner warnings, faded pages, scanner errors, and setup questions on Windows and macOS.',
            'We organize resources by both problem and brand so you can start with a general fix or go directly to HP, Canon, Epson, Brother, and Xerox support guidance. More model-specific coverage will be added over time.',
          ],
        },
        {
          heading: 'How we write our guides',
          paragraphs: [
            'Each guide begins with simple, reversible checks before moving toward settings changes, software updates, or hardware inspection. We explain what each step is meant to confirm instead of asking you to try a long list of unrelated fixes.',
            'We also call out situations where caution matters, such as working near power connections, clearing a paper path, handling ink, or changing business network settings. A good support guide should save time without encouraging unnecessary risk.',
          ],
        },
        {
          heading: 'Independent, not manufacturer-owned',
          paragraphs: [
            'PrintCare is not an official service center and does not represent the printer brands mentioned on this website. Brand names and product names belong to their respective owners.',
            'When a driver, firmware package, warranty service, or model-specific manual is required, we direct readers to official manufacturer support pages. We do not host questionable driver files or ask readers to install bundled download tools.',
          ],
        },
        {
          heading: 'Who we help',
          paragraphs: [
            'PrintCare is built for home users, students, small offices, and anyone who needs to get a printer working without decoding technical jargon. The guides are written for people who want a practical answer first and deeper detail only when it is useful.',
            'If your printer is part of a managed office, school, or healthcare environment, local IT policies may take priority. Use our guides to understand the issue, then involve your administrator when permissions, network access, or security settings are involved.',
          ],
        },
        {
          heading: 'Keep exploring',
          paragraphs: [
            'Start with the blog for common fixes, visit a brand support hub for manufacturer-specific articles, or open the driver section for links to official download pages. You can also contact us when you cannot find a clear answer for your model.',
          ],
        },
      ]}
    />
  );
}
