import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PTO Calculator for Hourly Employees - Calculate Hours Earned',
  description: 'Free PTO calculator for hourly employees. Calculate PTO earned based on hours worked with customizable accrual rates.',
  keywords: 'PTO calculator hourly, hourly employee PTO, PTO hours calculator, time off for hourly workers',
  alternates: {
    canonical: 'https://getfigured.co/hr/pto-calculator-hourly',
  },
  openGraph: {
    title: 'PTO Calculator for Hourly Employees - Calculate Hours Earned',
    description: 'Free PTO calculator for hourly employees. Calculate PTO earned based on hours worked.',
    url: 'https://getfigured.co/hr/pto-calculator-hourly',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
