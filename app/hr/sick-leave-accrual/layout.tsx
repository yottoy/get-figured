import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sick Leave Accrual Calculator - State Law Compliance',
  description: 'Free sick leave accrual calculator. Calculate sick leave by state law (CA, NY, IL). Stay compliant with state-mandated sick leave policies.',
  keywords: 'sick leave calculator, sick leave accrual, California sick leave, state sick leave laws, sick time calculator',
  alternates: {
    canonical: 'https://getfigured.co/hr/sick-leave-accrual',
  },
  openGraph: {
    title: 'Sick Leave Accrual Calculator - State Law Compliance',
    description: 'Free sick leave accrual calculator. Calculate sick leave by state law and stay compliant.',
    url: 'https://getfigured.co/hr/sick-leave-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
