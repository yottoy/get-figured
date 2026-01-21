import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profit and Loss Calculator - P&L Statement Generator',
  description: 'Free profit and loss calculator. Calculate net profit, gross profit, and operating profit from revenue, COGS, and expenses. Generate P&L statement.',
  keywords: 'profit and loss calculator, P&L calculator, income statement, profit calculator, business finance',
  alternates: {
    canonical: 'https://getfigured.co/finance/profit-loss',
  },
  openGraph: {
    title: 'Profit and Loss Calculator - P&L Statement Generator',
    description: 'Free profit and loss calculator. Calculate net profit, gross profit, and operating profit.',
    url: 'https://getfigured.co/finance/profit-loss',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
