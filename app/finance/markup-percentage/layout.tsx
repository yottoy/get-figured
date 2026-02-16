import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Markup Percentage Calculator: Markup vs Margin Explained | Get Figured',
  description: 'Calculate markup % and profit margin from cost and selling price. Instantly see the difference between markup and margin with a visual breakdown. For retail and wholesale.',
  keywords: 'markup calculator, markup percentage calculator, markup vs margin, profit margin calculator, margin calculator, retail pricing calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/markup-percentage',
  },
  openGraph: {
    title: 'Free Markup Percentage Calculator: Markup vs Margin Explained | Get Figured',
    description: 'Calculate markup % and profit margin from cost and selling price. Instantly see the difference between markup and margin with a visual breakdown.',
    url: 'https://www.getfigured.co/finance/markup-percentage',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is the difference between markup and margin?',
    answer: 'Markup is the percentage added to the cost price to arrive at the selling price, calculated as (Selling Price - Cost) / Cost. Margin is the percentage of the selling price that is profit, calculated as (Selling Price - Cost) / Selling Price. For example, if an item costs $50 and sells for $100, the markup is 100% but the margin is only 50%.',
  },
  {
    question: 'How do you calculate markup percentage?',
    answer: 'To calculate markup percentage, subtract the cost from the selling price, then divide the result by the cost and multiply by 100. The formula is: Markup % = ((Selling Price - Cost) / Cost) x 100. For instance, if your cost is $40 and your selling price is $60, your markup is ($60 - $40) / $40 x 100 = 50%.',
  },
  {
    question: 'What is a standard markup percentage by industry?',
    answer: 'Standard markup varies significantly by industry. Grocery stores typically use 5-15% markup, clothing retail ranges from 50-100%, restaurants mark up food 200-400%, and jewelry can see markups of 100-300%. Service-based businesses often use even higher markups because their cost of goods is lower relative to labor costs.',
  },
  {
    question: 'When should I use markup vs margin?',
    answer: 'Use markup when setting prices based on your costs, which is common in retail and wholesale. Use margin when analyzing profitability or comparing performance across products and businesses. Many retailers price using markup because it is simpler to apply to cost, but financial reports and investors typically focus on margin percentages.',
  },
  {
    question: 'What is the markup formula?',
    answer: 'The markup formula is: Markup % = ((Selling Price - Cost) / Cost) x 100. You can also rearrange it to find the selling price: Selling Price = Cost x (1 + Markup % / 100). For example, if your cost is $25 and you want a 60% markup, your selling price would be $25 x 1.60 = $40.',
  },
]

const relatedCalculators = [
  {
    name: 'Margin from Markup Calculator',
    description: 'Convert any markup percentage to its equivalent profit margin instantly.',
    href: '/finance/margin-from-markup',
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
        name="Markup Percentage Calculator - Calculate Markup & Margin"
        description="Free markup percentage calculator. Calculate markup and margin from cost and selling price. Understand the difference between markup and margin for retail and business."
        url="https://www.getfigured.co/finance/markup-percentage"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Finance Tools', href: '/finance' },
        { name: 'Markup Percentage Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Finance Tools', href: '/finance' },
          { label: 'Markup Percentage Calculator' },
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
