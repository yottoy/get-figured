import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Fee Calculator - Price Projects & Engagements',
  description: 'Free consulting fee calculator. Price projects with hourly, fixed, or value-based fee structures. Calculate total fees and project profitability.',
  keywords: 'consulting fee calculator, project pricing, consulting fees, hourly vs fixed pricing',
  alternates: {
    canonical: 'https://getfigured.co/freelance/consulting-fee-calculator',
  },
  openGraph: {
    title: 'Consulting Fee Calculator - Price Projects & Engagements',
    description: 'Free consulting fee calculator. Price projects with hourly, fixed, or value-based fee structures.',
    url: 'https://getfigured.co/freelance/consulting-fee-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
