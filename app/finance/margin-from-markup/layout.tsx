import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Calculate Margin from Markup - Convert Markup to Margin',
  description: 'Free calculator to convert markup percentage to profit margin. Understand the relationship between markup and margin with examples.',
  keywords: 'margin from markup, markup to margin, profit margin calculator, markup conversion',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/margin-from-markup',
  },
  openGraph: {
    title: 'Calculate Margin from Markup - Convert Markup to Margin',
    description: 'Free calculator to convert markup percentage to profit margin.',
    url: 'https://www.getfigured.co/finance/margin-from-markup',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How do you convert markup to margin?',
    answer: 'To convert markup to margin, use the formula: Margin % = Markup % / (100 + Markup %). For example, a 50% markup converts to 50 / 150 = 33.3% margin. This works because margin is calculated from the selling price while markup is calculated from the cost price.',
  },
  {
    question: 'What is the difference between margin and markup?',
    answer: 'Margin is the percentage of the selling price that represents profit, while markup is the percentage added on top of the cost to get the selling price. They use different bases for calculation: margin uses selling price as its denominator, and markup uses cost. A 100% markup equals a 50% margin, and a 50% markup equals a 33.3% margin.',
  },
  {
    question: 'Why is margin always lower than markup?',
    answer: 'Margin is always lower than markup because margin uses the selling price (a larger number) as its denominator, while markup uses the cost (a smaller number). Since the selling price includes the cost plus the profit, dividing profit by the selling price will always yield a smaller percentage than dividing profit by the cost alone.',
  },
  {
    question: 'What are some common markup to margin conversions?',
    answer: 'Here are frequently used conversions: a 25% markup equals a 20% margin, a 33.3% markup equals a 25% margin, a 50% markup equals a 33.3% margin, a 100% markup equals a 50% margin, and a 200% markup equals a 66.7% margin. These are worth memorizing if you regularly work with pricing.',
  },
  {
    question: 'Should I use markup or margin for pricing decisions?',
    answer: 'Markup is more practical when setting prices because you simply add a percentage to your known cost. Margin is better for evaluating profitability and comparing across products or competitors. Most businesses use markup for day-to-day pricing and margin for financial analysis and reporting to stakeholders.',
  },
]

const relatedCalculators = [
  {
    name: 'Markup Percentage Calculator',
    description: 'Calculate markup percentage from cost and selling price for any product.',
    href: '/finance/markup-percentage',
  },
  {
    name: 'Profit & Loss Calculator',
    description: 'Calculate net profit, gross profit, and generate a full P&L statement.',
    href: '/finance/profit-loss',
  },
  {
    name: 'Restaurant Profit Margin Calculator',
    description: 'Calculate food cost percentage, labor cost, and prime cost for restaurants.',
    href: '/finance/restaurant-profit-margin',
  },
  {
    name: 'Freelance Pricing Calculator',
    description: 'Determine optimal pricing for your freelance services based on costs and goals.',
    href: '/freelance/pricing-calculator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Calculate Margin from Markup - Convert Markup to Margin"
        description="Free calculator to convert markup percentage to profit margin. Understand the relationship between markup and margin with examples."
        url="https://www.getfigured.co/finance/margin-from-markup"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Finance Tools', href: '/finance' },
        { name: 'Margin from Markup Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Finance Tools', href: '/finance' },
          { label: 'Margin from Markup Calculator' },
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
