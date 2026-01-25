import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vacation Accrual Calculator - Calculate Vacation Days',
  description: 'Free vacation accrual calculator. Calculate vacation accrual by pay period, tenure, or hours worked. Track vacation balance and policy compliance.',
  keywords: 'vacation accrual calculator, vacation days calculator, vacation time, vacation policy, annual leave calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/vacation-accrual',
  },
  openGraph: {
    title: 'Vacation Accrual Calculator - Calculate Vacation Days',
    description: 'Free vacation accrual calculator. Calculate vacation accrual by pay period, tenure, or hours worked.',
    url: 'https://www.getfigured.co/hr/vacation-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
