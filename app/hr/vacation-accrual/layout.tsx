import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

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

const faqItems = [
  {
    question: 'What are standard vacation accrual rates?',
    answer: 'Standard vacation accrual rates in the U.S. typically range from 10 to 25 days per year depending on tenure and industry. According to the Bureau of Labor Statistics, the average is about 11 days after one year of service, 15 days after five years, and 20 days after twenty years. Government and professional services sectors tend to offer more generous vacation policies.',
  },
  {
    question: 'What is the difference between vacation time and PTO?',
    answer: 'Vacation time is specifically designated for rest and leisure, while PTO (Paid Time Off) is a broader category that combines vacation, sick leave, and personal days into a single bank. With a PTO policy, employees have more flexibility but may feel pressure to save days for illness. Separate vacation policies give employees dedicated time for rest without competing with other leave needs.',
  },
  {
    question: 'How does tenure affect vacation accrual?',
    answer: 'Most employers use a tiered accrual system where vacation increases with years of service. A typical structure might offer 10 days for the first 1-3 years, 15 days for years 4-9, and 20 days for 10 or more years. This graduated approach rewards employee loyalty and helps with retention, as longer-tenured employees benefit from more generous vacation allowances.',
  },
  {
    question: 'How do vacation rollover policies work?',
    answer: 'Vacation rollover policies determine whether unused vacation days carry over to the next year. "Use it or lose it" policies require employees to take all vacation within the calendar year or forfeit it. Many employers allow partial rollovers, such as carrying over up to 5 or 10 days. Note that some states, including California, prohibit "use it or lose it" policies entirely.',
  },
  {
    question: 'How do you prorate vacation time for new hires?',
    answer: 'To prorate vacation for a mid-year hire, divide the annual vacation allotment by 12 months (or 26 biweekly pay periods) and multiply by the number of months (or pay periods) remaining in the year. For example, an employee hired on July 1 with a 15-day annual allotment would receive 7.5 days for the remainder of the year. Some companies round up to the nearest half or full day.',
  },
]

const relatedCalculators = [
  {
    name: 'PTO Accrual Calculator',
    description: 'Calculate PTO accrual by pay period and track your overall balance.',
    href: '/hr/pto-accrual',
  },
  {
    name: 'Time Off Accrual Calculator',
    description: 'Track employee leave accrual schedules and policy compliance.',
    href: '/hr/time-off-accrual',
  },
  {
    name: 'PTO Calculator for Hourly Employees',
    description: 'Calculate PTO earned based on hours worked for hourly employees.',
    href: '/hr/pto-calculator-hourly',
  },
  {
    name: 'Sick Leave Accrual Calculator',
    description: 'Calculate sick leave accrual and ensure state law compliance.',
    href: '/hr/sick-leave-accrual',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Vacation Accrual Calculator - Calculate Vacation Days"
        description="Free vacation accrual calculator. Calculate vacation accrual by pay period, tenure, or hours worked. Track vacation balance and policy compliance."
        url="https://www.getfigured.co/hr/vacation-accrual"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'HR Tools', href: '/hr' },
        { name: 'Vacation Accrual Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'HR Tools', href: '/hr' },
          { label: 'Vacation Accrual Calculator' },
        ]} />
      </div>
      {children}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <FAQSection items={faqItems} />
        <RelatedCalculators calculators={relatedCalculators} />
      </div>
    </>
  )
}
