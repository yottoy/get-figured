import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Contractor Rate Calculator - W2 to 1099 Rate Conversion',
  description: 'Free contractor rate calculator. Convert W2 salary to 1099 contractor hourly rate. Account for benefits, taxes, and overhead costs.',
  keywords: 'contractor rate calculator, W2 to 1099, contractor hourly rate, independent contractor, 1099 rate',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/contractor-rate-calculator',
  },
  openGraph: {
    title: 'Contractor Rate Calculator - W2 to 1099 Rate Conversion',
    description: 'Free contractor rate calculator. Convert W2 salary to 1099 contractor hourly rate.',
    url: 'https://www.getfigured.co/freelance/contractor-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How do I convert my W2 salary to a 1099 contractor rate?',
    answer: 'Start with your annual W2 salary, then add the cost of benefits your employer currently covers -- health insurance, retirement contributions, paid time off, and employer-side payroll taxes (about 7.65%). A common rule of thumb is to multiply your W2 hourly rate by 1.3 to 1.5 to arrive at an equivalent contractor rate.',
  },
  {
    question: 'What tax considerations should contractors account for?',
    answer: 'As a 1099 contractor, you pay self-employment tax of 15.3% (Social Security and Medicare) on top of your regular income tax, since there is no employer to cover half. You will also need to make quarterly estimated tax payments to the IRS and your state. However, you can deduct business expenses, home office costs, and the employer-equivalent portion of self-employment tax.',
  },
  {
    question: 'What multiplier should I use for W2 to contractor conversion?',
    answer: 'The standard multiplier ranges from 1.25x to 1.5x your W2 equivalent hourly rate. A 1.3x multiplier covers basic tax differences, while 1.4-1.5x accounts for benefits like health insurance, retirement, and paid leave. If you have high overhead costs or need expensive equipment, you may need a multiplier closer to 1.5x or higher.',
  },
  {
    question: 'How do I estimate the cost of benefits I need to cover?',
    answer: 'Health insurance for an individual averages $400-700 per month and $1,000-2,000 for family coverage. Retirement contributions (matching a typical employer 401k match) add 3-6% of your income. Paid time off, disability insurance, and other perks can add another 5-10%. Total benefits cost typically ranges from $15,000 to $40,000 annually.',
  },
  {
    question: 'What is the difference between a contractor and an employee?',
    answer: 'Employees receive benefits, tax withholding, and workplace protections from their employer, while contractors handle these responsibilities independently. Contractors have more flexibility in how, when, and where they work, but they must pay self-employment tax, purchase their own insurance, and manage their own retirement savings. The IRS uses specific tests to determine worker classification.',
  },
  {
    question: 'Should I charge the same rate for all clients?',
    answer: 'Most contractors adjust rates based on factors like contract duration, payment terms, and project complexity. Long-term contracts may warrant a slight discount since they reduce your marketing and sales time. Short-term or urgent projects should command a premium. The key is knowing your minimum acceptable rate and negotiating from there.',
  },
]

const relatedCalculators = [
  {
    name: 'Contractor Hourly Rate Calculator',
    description: 'Calculate your hourly rate from W2 compensation including benefits and paid time off.',
    href: '/freelance/contractor-hourly-rate-calculator',
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
        name="Contractor Rate Calculator"
        description="Free contractor rate calculator. Convert W2 salary to 1099 contractor hourly rate. Account for benefits, taxes, and overhead costs."
        url="https://www.getfigured.co/freelance/contractor-rate-calculator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Contractor Rate Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Contractor Rate Calculator' },
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
