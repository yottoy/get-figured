import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Consulting Fee Calculator: Price Hourly, Fixed & Value-Based Projects | Get Figured',
  description: 'Calculate consulting fees for any engagement type. Compare hourly vs fixed vs value-based pricing, see total project cost and effective hourly rate. No signup.',
  keywords: 'consulting fee calculator, consulting fees calculator, consultant fee calculator, project pricing calculator, consulting fees, how to calculate consulting fees',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/consulting-fee-calculator',
  },
  openGraph: {
    title: 'Free Consulting Fee Calculator: Price Hourly, Fixed & Value-Based Projects | Get Figured',
    description: 'Calculate consulting fees for any engagement type. Compare hourly vs fixed vs value-based pricing, see total project cost and effective hourly rate.',
    url: 'https://www.getfigured.co/freelance/consulting-fee-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is the difference between hourly and fixed fee consulting?',
    answer: 'Hourly consulting bills clients for actual time worked, which is ideal when project scope is uncertain or likely to change. Fixed fee consulting sets a single price for a defined deliverable, giving clients budget certainty and rewarding you for working efficiently. Fixed fees tend to be more profitable once you can accurately estimate project timelines.',
  },
  {
    question: 'How do I calculate consulting fees for a project?',
    answer: 'Estimate the total hours needed, multiply by your hourly rate, then add a buffer of 15-25% for scope changes and unexpected complexity. For fixed-fee projects, also factor in project management time, revision rounds, and any direct costs like software or travel that the client should cover.',
  },
  {
    question: 'What should I include in my consulting fees?',
    answer: 'Your consulting fees should cover your time, expertise, business overhead (insurance, software, office costs), self-employment taxes, and a profit margin. Many consultants also factor in the value of the outcome delivered, especially for strategic or high-impact engagements where results far exceed the time invested.',
  },
  {
    question: 'What are typical consulting fee structures?',
    answer: 'The most common structures are hourly billing, fixed project fees, retainer agreements, and value-based pricing. Hourly works for advisory roles, fixed fees suit well-defined projects, retainers provide recurring revenue for ongoing support, and value-based pricing ties your fee to measurable client outcomes.',
  },
  {
    question: 'How do retainer fees work in consulting?',
    answer: 'A retainer is a recurring fee (usually monthly) that reserves a set number of hours or guarantees your availability to a client. Retainers provide predictable income for consultants and priority access for clients. Unused hours may roll over or expire depending on your agreement terms.',
  },
  {
    question: 'Should I charge different rates for different types of work?',
    answer: 'Many consultants use tiered pricing based on the type of work. Strategic advisory and high-level consulting commands higher rates than implementation or administrative tasks. This approach lets you remain competitive for routine work while capturing the full value of your expertise on complex engagements.',
  },
]

const relatedCalculators = [
  {
    name: 'Consulting Rate Calculator',
    description: 'Calculate your baseline hourly consulting rate from salary, expenses, and billable hours.',
    href: '/freelance/consulting-rate-calculator',
  },
  {
    name: 'Freelance Pricing Calculator',
    description: 'Find your competitive market rate based on experience level, industry, and location.',
    href: '/freelance/pricing-calculator',
  },
  {
    name: 'Estimate Generator',
    description: 'Create professional project estimates with line items, quantities, and tax calculations.',
    href: '/freelance/estimate-generator',
  },
  {
    name: 'Proforma Invoice Generator',
    description: 'Generate proforma invoices for international shipments, customs, and advance billing.',
    href: '/freelance/proforma-invoice-generator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Consulting Fee Calculator"
        description="Free consulting fee calculator. Price projects with hourly, fixed, or value-based fee structures. Calculate total fees and project profitability."
        url="https://www.getfigured.co/freelance/consulting-fee-calculator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Consulting Fee Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Consulting Fee Calculator' },
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
