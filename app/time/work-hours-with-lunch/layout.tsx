import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work Hours Calculator with Lunch Break - Timesheet Tool',
  description: 'Free work hours calculator with lunch break. Calculate total work hours minus unpaid lunch breaks for accurate timesheets and payroll.',
  keywords: 'work hours calculator, timesheet calculator, lunch break calculator, work time calculator, hours worked',
  alternates: {
    canonical: 'https://getfigured.co/time/work-hours-with-lunch',
  },
  openGraph: {
    title: 'Work Hours Calculator with Lunch Break - Timesheet Tool',
    description: 'Free work hours calculator with lunch break. Calculate total work hours minus unpaid lunch breaks.',
    url: 'https://getfigured.co/time/work-hours-with-lunch',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
