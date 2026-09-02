import type { Metadata } from 'next';
import CompanyPage from '../components/Company/CompanyPage';

export const metadata: Metadata = {
  title: 'Disclaimer | PrintCare',
  description: 'Understand the independent support and manufacturer-link disclaimer for PrintCare.',
};

export default function DisclaimerPage() {
  return (
    <CompanyPage
      eyebrow="Important information"
      title="Disclaimer"
      intro="PrintCare offers independent printer education and troubleshooting information. We are not an official representative of any printer manufacturer."
      sections={[
        { heading: 'Independent support resource', paragraphs: ['PrintCare is not affiliated with, endorsed by, or sponsored by HP, Canon, Epson, Brother, Xerox, Apple, Microsoft, or any other manufacturer mentioned on this website. Brand and product names belong to their respective owners.'] },
        { heading: 'Use care with troubleshooting', paragraphs: ['Read the instructions for your exact model before removing covers, changing settings, or replacing supplies. Disconnect power before inspecting a paper path, and stop if a step could damage the device or create a safety risk.'] },
        { heading: 'Drivers and third-party links', paragraphs: ['We aim to direct visitors to official manufacturer support pages for drivers and software. External pages, downloads, pricing, availability, and security are controlled by their respective owners and may change without notice.'] },
        { heading: 'No professional warranty', paragraphs: ['The information on this website is provided for general guidance and is not a substitute for manufacturer service, professional repair, or technical advice for business-critical equipment.'] },
      ]}
    />
  );
}
