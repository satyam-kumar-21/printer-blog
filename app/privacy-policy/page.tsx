import type { Metadata } from 'next';
import CompanyPage from '../components/Company/CompanyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | PrintCare',
  description: 'Learn how PrintCare handles information when you use our printer support guides.',
};

export default function PrivacyPolicyPage() {
  return (
    <CompanyPage
      eyebrow="Privacy & data"
      title="Privacy Policy"
      intro="PrintCare is an independent printer support resource. This policy explains the information we collect, why we use it, and the choices available to you."
      sections={[
        { heading: 'Information we collect', paragraphs: ['When you contact us, we may receive your name, email address, printer model, and the details you include in your message. We also receive basic technical information needed to keep the website reliable.'] },
        { heading: 'How we use information', paragraphs: ['We use submitted information to answer support requests, improve our guides, and maintain the website. We do not sell personal information or use support messages to send unrelated marketing.'] },
        { heading: 'Cookies and external links', paragraphs: ['The site may use essential browser storage or analytics tools to understand general usage. Our guides may link to manufacturer websites. Those websites have their own privacy practices, which you should review before submitting information.'] },
        { heading: 'Your choices', paragraphs: ['You can ask what personal information we hold or request that we correct or remove it by contacting support. We may retain limited records when needed to resolve an ongoing request or meet a legal obligation.'] },
      ]}
    />
  );
}
