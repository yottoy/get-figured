import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculate Margin from Markup - Convert Markup to Margin',
  description: 'Free calculator to convert markup percentage to profit margin. Understand the relationship between markup and margin with examples.',
  keywords: 'margin from markup, markup to margin, profit margin calculator, markup conversion',
  alternates: {
    canonical: 'https://getfigured.co/finance/margin-from-markup',
  },
  openGraph: {
    title: 'Calculate Margin from Markup - Convert Markup to Margin',
    description: 'Free calculator to convert markup percentage to profit margin.',
    url: 'https://getfigured.co/finance/margin-from-markup',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
