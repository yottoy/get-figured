import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PTO Accrual Calculator - Track Paid Time Off Balance',
  description: 'Free PTO accrual calculator. Calculate PTO accrual by pay period, track balance, rollovers, and forfeiture with customizable policies.',
  keywords: 'PTO accrual calculator, paid time off calculator, PTO balance, vacation accrual, time off tracker',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/pto-accrual',
  },
  openGraph: {
    title: 'PTO Accrual Calculator - Track Paid Time Off Balance',
    description: 'Free PTO accrual calculator. Calculate PTO accrual by pay period and track balance.',
    url: 'https://www.getfigured.co/hr/pto-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
