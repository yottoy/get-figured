import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Estimate Generator: Create & Download Professional Estimates | Get Figured',
  description: 'Create professional project estimates in minutes. Add line items, quantities, discounts, and tax. Download as PDF or print instantly. No account needed.',
  keywords: 'estimate generator, free estimate template, project estimate generator, quote generator, business estimate, estimate maker',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/estimate-generator',
  },
  openGraph: {
    title: 'Free Estimate Generator: Create & Download Professional Estimates | Get Figured',
    description: 'Create professional project estimates in minutes. Add line items, quantities, discounts, and tax. Download as PDF or print instantly.',
    url: 'https://www.getfigured.co/freelance/estimate-generator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What should I include in a professional estimate?',
    answer: 'A professional estimate should include your business name and contact information, the client\'s details, a unique estimate number, an itemized list of services or products with quantities and prices, applicable taxes and discounts, the total cost, payment terms, and a validity period. Including a clear scope of work helps prevent misunderstandings later.',
  },
  {
    question: 'What is the difference between an estimate and a quote?',
    answer: 'An estimate is an approximation of costs that may change as the project progresses, while a quote is a fixed price commitment that you are obligated to honor within a specified timeframe. Estimates are better for complex projects where scope may evolve, and quotes work well for standardized or clearly defined services.',
  },
  {
    question: 'How long should an estimate be valid?',
    answer: 'Most business estimates are valid for 30 days, though this varies by industry and project size. For projects with volatile material costs or tight resource availability, 14 days is common. Longer validity periods (60-90 days) may be appropriate for large enterprise projects that require internal approval processes. Always state the expiration date clearly.',
  },
  {
    question: 'How do I properly itemize an estimate?',
    answer: 'Break your estimate into logical categories or project phases, with each line item showing a clear description, quantity or hours, unit price, and line total. Group related items together and include subtotals for each section. This level of detail builds client trust and makes it easier to negotiate specific elements without reworking the entire estimate.',
  },
  {
    question: 'What is the difference between an estimate and an invoice?',
    answer: 'An estimate is sent before work begins to outline expected costs and scope, while an invoice is sent after work is completed (or at billing milestones) to request payment. An estimate is not a legally binding payment request, but an invoice is. Many businesses convert approved estimates directly into invoices once the work is done.',
  },
  {
    question: 'Should I include terms and conditions on my estimate?',
    answer: 'Yes, including basic terms and conditions protects both you and your client. At minimum, cover payment terms, what happens with scope changes, cancellation policies, and intellectual property ownership. Keep them concise and easy to understand -- lengthy legal jargon can intimidate clients and slow down the approval process.',
  },
]

const relatedCalculators = [
  {
    name: 'Consulting Fee Calculator',
    description: 'Price projects and engagements using hourly, fixed, or value-based fee structures.',
    href: '/freelance/consulting-fee-calculator',
  },
  {
    name: 'Proforma Invoice Generator',
    description: 'Generate proforma invoices for international shipments, customs, and advance billing.',
    href: '/freelance/proforma-invoice-generator',
  },
  {
    name: 'Invoice Generator for Google Docs',
    description: 'Create professional invoices compatible with Google Docs. Download as PDF instantly.',
    href: '/freelance/invoice-generator-google-docs',
  },
  {
    name: 'Freelance Pricing Calculator',
    description: 'Find your competitive market rate based on experience level, industry, and location.',
    href: '/freelance/pricing-calculator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Estimate Generator"
        description="Free estimate generator. Create professional estimates with line items, quantities, discounts, and tax. Download or print instantly."
        url="https://www.getfigured.co/freelance/estimate-generator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Estimate Generator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Estimate Generator' },
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
