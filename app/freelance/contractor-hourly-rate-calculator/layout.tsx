import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contractor Hourly Rate Calculator - Calculate Your Rate',
  description: 'Free contractor hourly rate calculator. Calculate your hourly rate from W2 compensation including benefits, paid time off, and business expenses.',
  keywords: 'contractor hourly rate, hourly rate calculator, contractor pricing, W2 to contractor',
  alternates: {
    canonical: 'https://getfigured.co/freelance/contractor-hourly-rate-calculator',
  },
  openGraph: {
    title: 'Contractor Hourly Rate Calculator - Calculate Your Rate',
    description: 'Free contractor hourly rate calculator. Calculate your hourly rate from W2 compensation.',
    url: 'https://getfigured.co/freelance/contractor-hourly-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
