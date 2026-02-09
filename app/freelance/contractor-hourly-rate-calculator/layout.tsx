import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Contractor Hourly Rate Calculator - Calculate Your Rate',
  description: 'Free contractor hourly rate calculator. Calculate your hourly rate from W2 compensation including benefits, paid time off, and business expenses.',
  keywords: 'contractor hourly rate, hourly rate calculator, contractor pricing, W2 to contractor',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/contractor-hourly-rate-calculator',
  },
  openGraph: {
    title: 'Contractor Hourly Rate Calculator - Calculate Your Rate',
    description: 'Free contractor hourly rate calculator. Calculate your hourly rate from W2 compensation.',
    url: 'https://www.getfigured.co/freelance/contractor-hourly-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How do I convert my salary to a contractor hourly rate?',
    answer: 'Divide your annual salary by 2,080 (standard full-time hours) to get your base hourly rate, then multiply by 1.3 to 1.5 to account for self-employment taxes, benefits, and overhead. For example, a $100,000 salary yields a base rate of about $48/hour, which becomes $62-72/hour as a contractor rate.',
  },
  {
    question: 'What is the typical contractor rate multiplier?',
    answer: 'Most experts recommend a multiplier between 1.25x and 1.5x your equivalent W2 hourly rate. A 1.25x multiplier is the bare minimum that covers self-employment tax, while 1.4-1.5x properly accounts for health insurance, retirement savings, paid time off, and business overhead. Your specific multiplier depends on your benefits needs and expense level.',
  },
  {
    question: 'How much is self-employment tax for contractors?',
    answer: 'Self-employment tax is 15.3% of your net earnings, covering both the employee and employer portions of Social Security (12.4%) and Medicare (2.9%). As a W2 employee, your employer pays half of this, but as a contractor you owe the full amount. You can deduct the employer-equivalent half (7.65%) from your adjusted gross income on your tax return.',
  },
  {
    question: 'How do I account for the benefits gap as a contractor?',
    answer: 'Add up the annual cost of benefits your employer currently provides: health insurance ($5,000-24,000), retirement match ($3,000-12,000), paid time off ($5,000-15,000), disability insurance ($500-2,000), and any other perks. Divide this total by your billable hours to find the per-hour cost you need to add to your base rate.',
  },
  {
    question: 'Should I quote an hourly rate or an annual rate to clients?',
    answer: 'Most contractor engagements use hourly rates, which gives both you and the client flexibility. However, for long-term contracts, an annual or monthly rate can simplify billing and provide income predictability. When quoting annually, make sure the equivalent hourly rate still meets your minimum after accounting for taxes and benefits.',
  },
  {
    question: 'How do I factor in unpaid time off when setting my rate?',
    answer: 'As a contractor, vacation and sick days are unpaid, so you need to build that cost into your hourly rate. If you want four weeks of vacation plus holidays, you have about 1,880 billable hours instead of 2,080. Divide your target annual income by your actual billable hours rather than total working hours to ensure you meet your financial goals.',
  },
]

const relatedCalculators = [
  {
    name: 'Contractor Rate Calculator',
    description: 'Convert your W2 salary to an equivalent 1099 contractor rate with full cost breakdown.',
    href: '/freelance/contractor-rate-calculator',
  },
  {
    name: 'Consulting Rate Calculator',
    description: 'Calculate your hourly consulting rate from desired salary, expenses, and billable hours.',
    href: '/freelance/consulting-rate-calculator',
  },
  {
    name: 'Freelance Pricing Calculator',
    description: 'Find your competitive market rate based on experience level, industry, and location.',
    href: '/freelance/pricing-calculator',
  },
  {
    name: 'Consulting Fee Calculator',
    description: 'Price projects and engagements using hourly, fixed, or value-based fee structures.',
    href: '/freelance/consulting-fee-calculator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Contractor Hourly Rate Calculator"
        description="Free contractor hourly rate calculator. Calculate your hourly rate from W2 compensation including benefits, paid time off, and business expenses."
        url="https://www.getfigured.co/freelance/contractor-hourly-rate-calculator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Contractor Hourly Rate Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Contractor Hourly Rate Calculator' },
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
