import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Off Accrual Calculator - Track Employee Leave',
  description: 'Free time off accrual calculator. Track PTO balance, accrual schedule, and policy compliance with customizable settings.',
  keywords: 'time off accrual, leave accrual calculator, employee leave tracker, PTO policy, time off balance',
  alternates: {
    canonical: 'https://getfigured.co/hr/time-off-accrual',
  },
  openGraph: {
    title: 'Time Off Accrual Calculator - Track Employee Leave',
    description: 'Free time off accrual calculator. Track PTO balance, accrual schedule, and policy compliance.',
    url: 'https://getfigured.co/hr/time-off-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
