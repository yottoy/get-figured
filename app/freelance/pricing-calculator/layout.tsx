import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Freelance Pricing Calculator - Find Your Market Rate',
  description: 'Free freelance pricing calculator. Find your market rate based on experience level, industry, location, and skill level. Price your services competitively.',
  keywords: 'freelance pricing, market rate calculator, freelance rate, pricing guide, freelance income',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/pricing-calculator',
  },
  openGraph: {
    title: 'Freelance Pricing Calculator - Find Your Market Rate',
    description: 'Free freelance pricing calculator. Find your market rate based on experience level, industry, and location.',
    url: 'https://www.getfigured.co/freelance/pricing-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How do I price my freelance services?',
    answer: 'Start by calculating your minimum viable rate -- the lowest you can charge while covering expenses and earning a livable income. Then research what competitors with similar experience charge and position yourself accordingly. Factor in your unique value, specialization, and the results you deliver to set a rate that reflects your true worth.',
  },
  {
    question: 'What are typical freelance rates by industry?',
    answer: 'Rates vary widely by industry. Software developers typically charge $75-200/hour, graphic designers $50-150/hour, copywriters $50-175/hour, and management consultants $100-350/hour. These ranges shift based on specialization, geographic market, and whether you work with startups, agencies, or enterprise clients.',
  },
  {
    question: 'How does experience level affect freelance pricing?',
    answer: 'Experience has a significant impact on what you can charge. Entry-level freelancers (0-2 years) typically price at market floor rates, mid-level (3-5 years) can command rates 30-50% higher, and senior specialists (6+ years) often charge 2-3x the entry rate. Niche expertise or a strong portfolio can accelerate this progression.',
  },
  {
    question: 'When should I use hourly versus project-based pricing?',
    answer: 'Use hourly pricing when scope is undefined, the project involves ongoing support, or the client needs flexibility. Use project-based pricing when deliverables are clearly defined and you can estimate the effort accurately. Project pricing is generally more profitable because it decouples your income from time spent.',
  },
  {
    question: 'How do I research the market rate for my services?',
    answer: 'Check freelance platforms like Upwork and Toptal for rate ranges, review industry salary surveys from sources like Glassdoor or Robert Half, and ask peers in professional communities what they charge. Combine this data with your cost calculations to find a rate that is competitive while meeting your income goals.',
  },
  {
    question: 'Should I charge less when starting out as a freelancer?',
    answer: 'It is reasonable to offer slightly lower rates when building your portfolio, but avoid underpricing significantly. Very low rates attract budget clients, make it hard to raise prices later, and signal low quality. Instead, offer competitive rates with smaller initial projects or introductory packages to build credibility quickly.',
  },
]

const relatedCalculators = [
  {
    name: 'Consulting Rate Calculator',
    description: 'Calculate your hourly consulting rate from desired salary, expenses, and billable hours.',
    href: '/freelance/consulting-rate-calculator',
  },
  {
    name: 'Consulting Fee Calculator',
    description: 'Price projects and engagements using hourly, fixed, or value-based fee structures.',
    href: '/freelance/consulting-fee-calculator',
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
        name="Freelance Pricing Calculator"
        description="Free freelance pricing calculator. Find your market rate based on experience level, industry, location, and skill level. Price your services competitively."
        url="https://www.getfigured.co/freelance/pricing-calculator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Freelance Pricing Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Freelance Pricing Calculator' },
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
