import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Profit and Loss Calculator - P&L Statement Generator',
  description: 'Free profit and loss calculator. Calculate net profit, gross profit, and operating profit from revenue, COGS, and expenses. Generate P&L statement.',
  keywords: 'profit and loss calculator, P&L calculator, income statement, profit calculator, business finance',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/profit-loss',
  },
  openGraph: {
    title: 'Profit and Loss Calculator - P&L Statement Generator',
    description: 'Free profit and loss calculator. Calculate net profit, gross profit, and operating profit.',
    url: 'https://www.getfigured.co/finance/profit-loss',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is a P&L statement?',
    answer: 'A profit and loss (P&L) statement, also called an income statement, summarizes your revenue, costs, and expenses over a specific period. It shows whether your business made a profit or incurred a loss by subtracting total expenses from total revenue. It is one of the three essential financial statements every business should prepare.',
  },
  {
    question: 'What is the difference between gross profit and net profit?',
    answer: 'Gross profit is your revenue minus the cost of goods sold (COGS), representing the profit earned directly from producing or delivering your product. Net profit subtracts all remaining expenses from gross profit, including operating costs, taxes, interest, and depreciation. Net profit is often called the "bottom line" because it reflects the true earnings of the business.',
  },
  {
    question: 'How do you read a P&L statement?',
    answer: 'Start at the top with total revenue, then subtract COGS to find gross profit. Next, subtract operating expenses like rent, salaries, and marketing to get operating profit. Finally, subtract taxes, interest, and any non-operating items to arrive at net profit. Comparing these figures over time reveals trends in sales growth, cost control, and overall profitability.',
  },
  {
    question: 'What are common expense categories in a P&L?',
    answer: 'Common expense categories include cost of goods sold (materials, direct labor), operating expenses (rent, utilities, insurance), payroll and benefits, marketing and advertising, depreciation and amortization, and interest expense. Organizing expenses into clear categories makes it easier to identify areas where you can cut costs or improve efficiency.',
  },
  {
    question: 'How often should I review my P&L statement?',
    answer: 'Most businesses should review their P&L at least monthly to catch problems early and track progress toward financial goals. Seasonal businesses may benefit from weekly reviews during peak periods. Annual P&L reviews are essential for tax preparation, investor reporting, and strategic planning for the year ahead.',
  },
]

const relatedCalculators = [
  {
    name: 'Markup Percentage Calculator',
    description: 'Calculate markup percentage from cost and selling price for any product.',
    href: '/finance/markup-percentage',
  },
  {
    name: 'Restaurant Profit Margin Calculator',
    description: 'Calculate food cost percentage, labor cost, and prime cost for restaurants.',
    href: '/finance/restaurant-profit-margin',
  },
  {
    name: 'Margin from Markup Calculator',
    description: 'Convert any markup percentage to its equivalent profit margin instantly.',
    href: '/finance/margin-from-markup',
  },
  {
    name: 'Consulting Fee Calculator',
    description: 'Determine competitive consulting fees based on your experience and market rates.',
    href: '/freelance/consulting-fee-calculator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Profit and Loss Calculator - P&L Statement Generator"
        description="Free profit and loss calculator. Calculate net profit, gross profit, and operating profit from revenue, COGS, and expenses. Generate P&L statement."
        url="https://www.getfigured.co/finance/profit-loss"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Finance Tools', href: '/finance' },
        { name: 'Profit & Loss Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Finance Tools', href: '/finance' },
          { label: 'Profit & Loss Calculator' },
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
