import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contractor Rate Calculator - W2 to 1099 Rate Conversion',
  description: 'Free contractor rate calculator. Convert W2 salary to 1099 contractor hourly rate. Account for benefits, taxes, and overhead costs.',
  keywords: 'contractor rate calculator, W2 to 1099, contractor hourly rate, independent contractor, 1099 rate',
  alternates: {
    canonical: 'https://getfigured.co/freelance/contractor-rate-calculator',
  },
  openGraph: {
    title: 'Contractor Rate Calculator - W2 to 1099 Rate Conversion',
    description: 'Free contractor rate calculator. Convert W2 salary to 1099 contractor hourly rate.',
    url: 'https://getfigured.co/freelance/contractor-rate-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
