import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Rate Calculator - Calculate Your Hourly Rate',
  description: 'Free consulting rate calculator. Calculate your hourly consulting rate based on desired salary, expenses, billable hours, and profit margin.',
  keywords: 'consulting rate calculator, hourly rate calculator, consultant pricing, freelance rate',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/consulting-rate-calculator',
  },
  openGraph: {
    title: 'Consulting Rate Calculator - Calculate Your Hourly Rate',
    description: 'Free consulting rate calculator. Calculate your hourly consulting rate based on desired salary and expenses.',
    url: 'https://www.getfigured.co/freelance/consulting-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
