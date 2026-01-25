import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estimate Generator - Create Professional Estimates',
  description: 'Free estimate generator. Create professional estimates with line items, quantities, discounts, and tax. Download or print instantly.',
  keywords: 'estimate generator, project estimate, estimate template, business estimate, quote generator',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/estimate-generator',
  },
  openGraph: {
    title: 'Estimate Generator - Create Professional Estimates',
    description: 'Free estimate generator. Create professional estimates with line items, quantities, discounts, and tax.',
    url: 'https://www.getfigured.co/freelance/estimate-generator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
