import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Overtime Hours Calculator - Calculate Overtime Pay',
  description: 'Free overtime hours calculator. Calculate overtime pay based on federal or California rules with 1.5x and 2x rates. Includes daily and weekly overtime.',
  keywords: 'overtime calculator, overtime pay calculator, overtime hours, time and a half, California overtime',
  alternates: {
    canonical: 'https://www.getfigured.co/time/overtime-hours',
  },
  openGraph: {
    title: 'Overtime Hours Calculator - Calculate Overtime Pay',
    description: 'Free overtime hours calculator. Calculate overtime pay based on federal or California rules.',
    url: 'https://www.getfigured.co/time/overtime-hours',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
