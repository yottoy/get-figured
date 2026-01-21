import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proforma Invoice Generator - Free Template',
  description: 'Free proforma invoice generator. Create proforma invoices for international shipments, customs, and quotations. Download instantly.',
  keywords: 'proforma invoice generator, proforma invoice template, international invoice, customs invoice',
  alternates: {
    canonical: 'https://getfigured.co/freelance/proforma-invoice-generator',
  },
  openGraph: {
    title: 'Proforma Invoice Generator - Free Template',
    description: 'Free proforma invoice generator. Create proforma invoices for international shipments and customs.',
    url: 'https://getfigured.co/freelance/proforma-invoice-generator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
