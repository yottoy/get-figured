import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markup Percentage Calculator - Calculate Markup & Margin',
  description: 'Free markup percentage calculator. Calculate markup and margin from cost and selling price. Understand the difference between markup and margin for retail and business.',
  keywords: 'markup calculator, markup percentage, profit margin, margin calculator, retail pricing',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/markup-percentage',
  },
  openGraph: {
    title: 'Markup Percentage Calculator - Calculate Markup & Margin',
    description: 'Free markup percentage calculator. Calculate markup and margin from cost and selling price.',
    url: 'https://www.getfigured.co/finance/markup-percentage',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
