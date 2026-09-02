import type { Metadata } from 'next';
import CompanyPage from '../components/Company/CompanyPage';

export const metadata: Metadata = {
  title: 'Terms of Service | PrintCare',
  description: 'Read the terms for using PrintCare printer support resources.',
};

export default function TermsPage() {
  return (
    <CompanyPage
      eyebrow="Company policy"
      title="Terms of Service"
      intro="These terms describe the simple rules for using PrintCare guides, support resources, and links to external manufacturer websites."
      sections={[
        { heading: 'Using our content', paragraphs: ['PrintCare provides general educational information for printer setup, maintenance, and troubleshooting. You may use the guides for personal or internal business reference, but you should verify model-specific instructions before taking action.'] },
        { heading: 'No guarantee of results', paragraphs: ['Printer behavior varies by model, firmware, operating system, and environment. We work to keep information useful and current, but we cannot guarantee that every guide will resolve every issue or remain compatible with future updates.'] },
        { heading: 'External manufacturer websites', paragraphs: ['Links to HP, Canon, Epson, Brother, Xerox, and other third-party websites are provided as a convenience. Those sites control their own downloads, accounts, products, terms, and support services.'] },
        { heading: 'Acceptable use', paragraphs: ['Do not misuse the website, attempt to disrupt its operation, submit unlawful content, or present PrintCare as an official manufacturer service. We may update content or restrict access when necessary to protect the site and its users.'] },
      ]}
    />
  );
}
