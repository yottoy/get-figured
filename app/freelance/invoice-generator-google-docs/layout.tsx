import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Invoice Generator for Google Docs - Free Template',
  description: 'Free invoice generator compatible with Google Docs. Create professional invoices, download as PDF or edit in Google Docs.',
  keywords: 'invoice generator, Google Docs invoice, invoice template, free invoice maker',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/invoice-generator-google-docs',
  },
  openGraph: {
    title: 'Invoice Generator for Google Docs - Free Template',
    description: 'Free invoice generator compatible with Google Docs. Create professional invoices instantly.',
    url: 'https://www.getfigured.co/freelance/invoice-generator-google-docs',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How do I create an invoice using Google Docs?',
    answer: 'You can create an invoice in Google Docs by starting from a blank document or using a template. Add your business logo and contact information at the top, include the client details, list your services with descriptions and amounts, and add payment terms at the bottom. Alternatively, use our generator to create a formatted invoice and download it as a PDF that is compatible with Google Docs.',
  },
  {
    question: 'How do I customize an invoice template?',
    answer: 'Start with a professional template and adjust the colors, fonts, and layout to match your brand identity. Add your company logo, update the header with your business name and contact details, and modify the line item columns to suit your services. Save your customized version as a reusable template so you can quickly generate new invoices for future clients.',
  },
  {
    question: 'What are the essential fields on an invoice?',
    answer: 'Every invoice should include your business name and contact information, the client\'s name and address, a unique invoice number, the invoice date and payment due date, an itemized list of services or products with quantities and prices, the total amount due, and accepted payment methods. Tax identification numbers may also be required depending on your jurisdiction.',
  },
  {
    question: 'What payment terms should I include on invoices?',
    answer: 'Common payment terms include Net 30 (payment due within 30 days), Net 15, or Due on Receipt. Specify your accepted payment methods (bank transfer, credit card, PayPal, etc.), and consider offering a small discount (1-2%) for early payment to incentivize prompt payment. Late payment penalties of 1-2% per month are also standard practice.',
  },
  {
    question: 'How should I number my invoices?',
    answer: 'Use a sequential numbering system that is easy to track and sort. Popular formats include simple sequential numbers (001, 002, 003), date-based numbers (2024-001, 2024-002), or client-prefix numbers (ACME-001, ACME-002). Whatever system you choose, never reuse or skip numbers, as gaps can raise red flags during audits and tax reviews.',
  },
  {
    question: 'Can I send invoices as PDF from Google Docs?',
    answer: 'Yes, Google Docs allows you to download any document as a PDF via File > Download > PDF Document. This creates a professional, non-editable version of your invoice that preserves formatting across all devices and email clients. PDFs are the industry standard for sending invoices because they prevent accidental edits and look consistent regardless of the recipient\'s software.',
  },
]

const relatedCalculators = [
  {
    name: 'Proforma Invoice Generator',
    description: 'Generate proforma invoices for international shipments, customs, and advance billing.',
    href: '/freelance/proforma-invoice-generator',
  },
  {
    name: 'Estimate Generator',
    description: 'Create professional project estimates with line items, quantities, and tax calculations.',
    href: '/freelance/estimate-generator',
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
        name="Invoice Generator for Google Docs"
        description="Free invoice generator compatible with Google Docs. Create professional invoices, download as PDF or edit in Google Docs."
        url="https://www.getfigured.co/freelance/invoice-generator-google-docs"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Freelance Tools', href: '/freelance' },
        { name: 'Invoice Generator for Google Docs' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Freelance Tools', href: '/freelance' },
          { label: 'Invoice Generator for Google Docs' },
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
