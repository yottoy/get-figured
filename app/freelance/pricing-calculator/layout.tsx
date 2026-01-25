import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Pricing Calculator - Find Your Market Rate',
  description: 'Free freelance pricing calculator. Find your market rate based on experience level, industry, location, and skill level. Price your services competitively.',
  keywords: 'freelance pricing, market rate calculator, freelance rate, pricing guide, freelance income',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/pricing-calculator',
  },
  openGraph: {
    title: 'Freelance Pricing Calculator - Find Your Market Rate',
    description: 'Free freelance pricing calculator. Find your market rate based on experience level, industry, and location.',
    url: 'https://www.getfigured.co/freelance/pricing-calculator',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
