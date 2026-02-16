import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Proforma Invoice Generator for International Shipping & Customs | Get Figured',
  description: 'Create proforma invoices for customs, international shipments, and quotations. Professional templates with HS codes and shipping details. Download as PDF.',
  keywords: 'proforma invoice generator, proforma invoice template, customs invoice generator, international shipping invoice, pro forma invoice maker',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/proforma-invoice-generator',
  },
  openGraph: {
    title: 'Free Proforma Invoice Generator for International Shipping & Customs | Get Figured',
    description: 'Create proforma invoices for customs, international shipments, and quotations. Professional templates with HS codes and shipping details.',
    url: 'https://www.getfigured.co/freelance/proforma-invoice-generator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is a proforma invoice?',
    answer: 'A proforma invoice is a preliminary bill of sale sent to a buyer before goods are delivered or services are rendered. It outlines the estimated costs, item descriptions, and terms of a potential transaction. Unlike a commercial invoice, a proforma invoice is not a demand for payment -- it serves as a commitment from the seller on pricing and delivery terms.',
  },
  {
    question: 'What is the difference between a proforma invoice and a commercial invoice?',
    answer: 'A proforma invoice is issued before the sale is finalized and serves as a quotation or estimate, while a commercial invoice is issued after the sale to request payment. Commercial invoices are legally binding documents used for customs clearance and accounting, whereas proforma invoices are negotiable and can be revised before the final transaction.',
  },
  {
    question: 'When should I use a proforma invoice?',
    answer: 'Use a proforma invoice when providing a formal price quote to a potential buyer, when goods are being shipped internationally and customs authorities need documentation, or when a buyer needs a document to arrange payment or obtain an import license. They are also commonly used for advance payments and letters of credit in international trade.',
  },
  {
    question: 'What fields are required on a proforma invoice?',
    answer: 'A proforma invoice should include the seller and buyer contact details, a unique invoice number, invoice date, detailed description of goods or services, quantities, unit prices, total value, currency, payment terms, and delivery terms (Incoterms). For international shipments, also include the country of origin, HS codes, package weight, and shipping method.',
  },
  {
    question: 'Are proforma invoices used for international shipping?',
    answer: 'Yes, proforma invoices are essential for international shipping. Customs authorities use them to assess duties and taxes, determine whether import licenses are required, and verify the declared value of goods. Many countries require a proforma invoice to accompany shipments, and banks often need them to process international payment instruments like letters of credit.',
  },
  {
    question: 'Can a proforma invoice be used as a tax document?',
    answer: 'No, a proforma invoice is not a valid tax document because it is issued before the sale is completed and does not represent an actual transaction. You cannot use it for tax reporting, VAT claims, or as proof of income. Once the sale is finalized, you need to issue a formal commercial invoice that meets your country\'s tax requirements.',
  },
]

const relatedCalculators = [
  {
    name: 'Estimate Generator',
    description: 'Create professional project estimates with line items, quantities, and tax calculations.',
    href: '/freelance/estimate-generator',
  },
  {
    name: 'Invoice Generator for Google Docs',
    description: 'Create professional invoices compatible with Google Docs. Download as PDF instantly.',
    href: '/freelance/invoice-generator-google-docs',
  },
  {
    name: 'Consulting Fee Calculator',
    description: 'Price projects and engagements using hourly, fixed, or value-based fee structures.',
    href: '/freelance/consulting-fee-calculator',
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
        name="Proforma Invoice Generator"
        description="Free proforma invoice generator. Create proforma invoices for international shipments, customs, and quotations. Download instantly."
        url="https://www.getfigured.co/freelance/proforma-invoice-generator"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Proforma Invoice Generator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Proforma Invoice Generator' },
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
