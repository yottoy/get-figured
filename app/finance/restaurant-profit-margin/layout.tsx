import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Profit Margin Calculator - Food Cost & Prime Cost',
  description: 'Free restaurant profit margin calculator. Calculate food cost percentage, labor cost, prime cost, and profit margins for your restaurant business.',
  keywords: 'restaurant profit margin, food cost calculator, prime cost, restaurant finance, food cost percentage',
  alternates: {
    canonical: 'https://www.getfigured.co/finance/restaurant-profit-margin',
  },
  openGraph: {
    title: 'Restaurant Profit Margin Calculator - Food Cost & Prime Cost',
    description: 'Free restaurant profit margin calculator. Calculate food cost percentage, labor cost, and prime cost.',
    url: 'https://www.getfigured.co/finance/restaurant-profit-margin',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
