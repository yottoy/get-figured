import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free PTO Accrual Calculator: Track Balance, Rollovers & Usage | Get Figured',
  description: 'Calculate PTO accrual by pay period with rollovers, caps, and forfeiture rules. See your real-time PTO balance and plan your time off. No signup required.',
  keywords: 'PTO accrual calculator, paid time off calculator, PTO balance tracker, vacation accrual, pto accumulation calculator, accrual pto calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/pto-accrual',
  },
  openGraph: {
    title: 'Free PTO Accrual Calculator: Track Balance, Rollovers & Usage | Get Figured',
    description: 'Calculate PTO accrual by pay period with rollovers, caps, and forfeiture rules. See your real-time PTO balance and plan your time off.',
    url: 'https://www.getfigured.co/hr/pto-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does PTO accrual work?',
    answer: 'PTO accrual is the process of gradually earning paid time off over time. Most employers grant PTO on a per-pay-period basis, meaning you earn a set number of hours each pay cycle. For example, if you receive 120 hours of PTO per year and are paid biweekly, you would accrue approximately 4.62 hours per pay period.',
  },
  {
    question: 'What are common PTO accrual rates?',
    answer: 'Common PTO accrual rates in the U.S. range from 10 to 20 days per year for full-time employees. Entry-level employees typically start with 10-15 days, while employees with 5+ years of tenure often receive 15-20 days. Some companies offer unlimited PTO policies, though these are more common in tech and professional services.',
  },
  {
    question: 'What is a PTO cap and how does it affect accrual?',
    answer: 'A PTO cap (also called an accrual ceiling) is the maximum amount of PTO hours you can accumulate at any given time. Once you reach the cap, you stop accruing additional hours until you use some of your balance. Caps typically range from 1.5 to 2 times your annual accrual rate and are designed to encourage employees to take time off.',
  },
  {
    question: 'What is the difference between PTO and vacation time?',
    answer: 'PTO (Paid Time Off) is a combined bank of time that can be used for any purpose, including vacation, personal days, and sick leave. Traditional vacation time is specifically designated for leisure and travel. Many companies have shifted to a unified PTO model because it gives employees more flexibility in how they use their paid time off.',
  },
  {
    question: 'How do PTO rollover policies work?',
    answer: 'Rollover policies determine what happens to unused PTO at the end of the year. Some employers allow full rollover of unused hours, while others use a "use it or lose it" approach where unused PTO expires. A common middle ground is capping rollover at a certain number of hours, such as 40-80 hours, that carry into the next year.',
  },
  {
    question: 'How do I calculate my current PTO balance?',
    answer: 'To calculate your PTO balance, start with any carryover hours from the previous year, add the PTO you have accrued so far this year based on your accrual rate and pay periods elapsed, then subtract any PTO you have already used. This calculator automates this process and accounts for accrual caps and rollover limits.',
  },
]

const relatedCalculators = [
  {
    name: 'PTO Calculator for Hourly Employees',
    description: 'Calculate PTO earned based on hours worked for hourly employees.',
    href: '/hr/pto-calculator-hourly',
  },
  {
    name: 'Vacation Accrual Calculator',
    description: 'Calculate vacation day accrual by pay period, tenure, or hours worked.',
    href: '/hr/vacation-accrual',
  },
  {
    name: 'Time Off Accrual Calculator',
    description: 'Track employee leave accrual schedules and policy compliance.',
    href: '/hr/time-off-accrual',
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
        name="PTO Accrual Calculator - Track Paid Time Off Balance"
        description="Free PTO accrual calculator. Calculate PTO accrual by pay period, track balance, rollovers, and forfeiture with customizable policies."
        url="https://www.getfigured.co/hr/pto-accrual"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'HR Tools', href: '/hr' },
        { name: 'PTO Accrual Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'HR Tools', href: '/hr' },
          { label: 'PTO Accrual Calculator' },
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
