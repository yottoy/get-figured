import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Restaurant Profit Margin Calculator: Food Cost, Labor & Prime Cost | Get Figured',
  description: 'Calculate your restaurant profit margins, food cost %, labor cost %, and prime cost in one place. See exactly where your money goes and how to improve margins.',
  keywords: 'restaurant profit margin calculator, food cost calculator, restaurant profit calculator, food profit margin calculator, prime cost, restaurant labor cost calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/restaurant-profit-margin',
  },
  openGraph: {
    title: 'Free Restaurant Profit Margin Calculator: Food Cost, Labor & Prime Cost | Get Figured',
    description: 'Calculate your restaurant profit margins, food cost %, labor cost %, and prime cost in one place.',
    url: 'https://www.getfigured.co/finance/restaurant-profit-margin',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is the average restaurant profit margin?',
    answer: 'The average restaurant profit margin ranges from 3% to 9%, with full-service restaurants typically on the lower end (3-5%) and fast-casual or quick-service restaurants achieving 6-9%. Fine dining can swing widely depending on volume and pricing. These thin margins make cost control and efficient operations critical to restaurant success.',
  },
  {
    question: 'What is prime cost in a restaurant?',
    answer: 'Prime cost is the combination of your total food and beverage costs plus total labor costs, including wages, benefits, and payroll taxes. It is the single most important metric for restaurant profitability, and most successful restaurants keep their prime cost below 60-65% of total revenue. If prime cost exceeds 65%, the restaurant will struggle to cover rent, utilities, and other overhead.',
  },
  {
    question: 'What is the ideal food cost percentage?',
    answer: 'The ideal food cost percentage for most restaurants is between 28% and 35% of menu price. Fast food and pizza restaurants can achieve food costs as low as 25%, while fine dining may run 35-40% due to premium ingredients. You calculate food cost percentage by dividing the cost of ingredients by the menu selling price and multiplying by 100.',
  },
  {
    question: 'How can I reduce labor costs in my restaurant?',
    answer: 'Key strategies include cross-training employees so they can cover multiple roles, using scheduling software to match staffing levels to demand, reducing overtime through better shift planning, and investing in kitchen equipment that improves productivity. Labor costs should ideally stay between 25-35% of revenue, and even small improvements in scheduling efficiency can significantly impact your bottom line.',
  },
  {
    question: 'How do you calculate a restaurant break-even point?',
    answer: 'To find your break-even point, divide your total fixed costs (rent, insurance, loan payments) by your contribution margin ratio, which is (Revenue - Variable Costs) / Revenue. For example, if your monthly fixed costs are $15,000 and your contribution margin ratio is 40%, you need $37,500 in monthly revenue to break even. Knowing this number helps you set daily sales targets and evaluate whether your pricing is sustainable.',
  },
]

const relatedCalculators = [
  {
    name: 'Profit & Loss Calculator',
    description: 'Calculate net profit, gross profit, and generate a full P&L statement.',
    href: '/finance/profit-loss',
  },
  {
    name: 'Markup Percentage Calculator',
    description: 'Calculate markup percentage from cost and selling price for any product.',
    href: '/finance/markup-percentage',
  },
  {
    name: 'Margin from Markup Calculator',
    description: 'Convert any markup percentage to its equivalent profit margin instantly.',
    href: '/finance/margin-from-markup',
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
        name="Restaurant Profit Margin Calculator - Food Cost & Prime Cost"
        description="Free restaurant profit margin calculator. Calculate food cost percentage, labor cost, prime cost, and profit margins for your restaurant business."
        url="https://www.getfigured.co/finance/restaurant-profit-margin"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Finance Tools', href: '/finance' },
        { name: 'Restaurant Profit Margin Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Finance Tools', href: '/finance' },
          { label: 'Restaurant Profit Margin Calculator' },
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
