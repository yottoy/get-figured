import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Consulting Rate Calculator - Calculate Your Hourly Rate',
  description: 'Free consulting rate calculator. Calculate your hourly consulting rate based on desired salary, expenses, billable hours, and profit margin.',
  keywords: 'consulting rate calculator, hourly rate calculator, consultant pricing, freelance rate',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/consulting-rate-calculator',
  },
  openGraph: {
    title: 'Consulting Rate Calculator - Calculate Your Hourly Rate',
    description: 'Free consulting rate calculator. Calculate your hourly consulting rate based on desired salary and expenses.',
    url: 'https://www.getfigured.co/freelance/consulting-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is a good consulting rate?',
    answer: 'A good consulting rate depends on your industry, experience, and location, but most independent consultants charge between $100 and $300 per hour. The key is to set a rate that covers your expenses, accounts for non-billable time, and reflects the value you deliver to clients.',
  },
  {
    question: 'How do I calculate my consulting rate from my salary?',
    answer: 'Start with your desired annual salary, then add business expenses like insurance, software, and taxes (typically 25-35% of salary). Divide that total by your estimated billable hours per year, which is usually 1,000 to 1,500 hours after accounting for vacation, sick days, and administrative work.',
  },
  {
    question: 'What is the difference between hourly and project-based pricing?',
    answer: 'Hourly pricing charges clients for actual time spent and works well for open-ended or unpredictable projects. Project-based pricing sets a fixed fee for a defined scope of work, which rewards efficiency and gives clients cost certainty. Many consultants use a blend of both depending on the engagement.',
  },
  {
    question: 'How many billable hours can I expect per year?',
    answer: 'Most independent consultants bill between 1,000 and 1,400 hours per year. Out of roughly 2,080 working hours annually, you need to subtract time for marketing, administration, professional development, vacation, and holidays. A common planning figure is 60-70% utilization.',
  },
  {
    question: 'When should I raise my consulting rates?',
    answer: 'Consider raising your rates when you are consistently booked at full capacity, when you gain new certifications or skills, or after completing high-impact projects. Annual increases of 5-10% are standard practice, and it is easier to raise rates with new clients while grandfathering existing ones with notice.',
  },
  {
    question: 'Should I include a profit margin on top of my costs?',
    answer: 'Yes, your consulting rate should include a profit margin of at least 10-20% beyond your costs and desired salary. This margin provides a financial buffer for slow periods, funds business growth, and builds savings for retirement or unexpected expenses.',
  },
]

const relatedCalculators = [
  {
    name: 'Consulting Fee Calculator',
    description: 'Price individual projects and engagements using hourly, fixed, or value-based fee structures.',
    href: '/freelance/consulting-fee-calculator',
  },
  {
    name: 'Freelance Pricing Calculator',
    description: 'Find your competitive market rate based on experience level, industry, and location.',
    href: '/freelance/pricing-calculator',
  },
  {
    name: 'Contractor Rate Calculator',
    description: 'Convert your W2 salary to an equivalent 1099 contractor hourly rate.',
    href: '/freelance/contractor-rate-calculator',
  },
  {
    name: 'Estimate Generator',
    description: 'Create professional project estimates with line items, quantities, and tax calculations.',
    href: '/freelance/estimate-generator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Consulting Rate Calculator"
        description="Free consulting rate calculator. Calculate your hourly consulting rate based on desired salary, expenses, billable hours, and profit margin."
        url="https://www.getfigured.co/freelance/consulting-rate-calculator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Consulting Rate Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Consulting Rate Calculator' },
        ]} />
      </div>
      {children}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <FAQSection items={faqItems} />
        <RelatedCalculators calculators={relatedCalculators} />
      </div>
    </>
  )
}
