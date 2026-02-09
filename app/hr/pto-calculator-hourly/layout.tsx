import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'PTO Calculator for Hourly Employees - Calculate Hours Earned',
  description: 'Free PTO calculator for hourly employees. Calculate PTO earned based on hours worked with customizable accrual rates.',
  keywords: 'PTO calculator hourly, hourly employee PTO, PTO hours calculator, time off for hourly workers',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/pto-calculator-hourly',
  },
  openGraph: {
    title: 'PTO Calculator for Hourly Employees - Calculate Hours Earned',
    description: 'Free PTO calculator for hourly employees. Calculate PTO earned based on hours worked.',
    url: 'https://www.getfigured.co/hr/pto-calculator-hourly',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does PTO work for hourly employees?',
    answer: 'Hourly employees typically earn PTO based on the number of hours they work rather than receiving a lump sum at the start of the year. A common approach is to accrue a set number of PTO hours for every hour worked. This method ensures that part-time hourly workers earn PTO proportional to their actual work schedule.',
  },
  {
    question: 'What are typical PTO accrual rates per hour worked?',
    answer: 'Common accrual rates range from 0.02 to 0.06 hours of PTO per hour worked. For example, a rate of 0.0385 hours per hour worked equates to roughly 10 days (80 hours) of PTO per year for a full-time employee working 2,080 hours. Higher rates like 0.058 yield approximately 15 days per year.',
  },
  {
    question: 'How do I calculate the cash value of my PTO?',
    answer: 'To find the cash value of your PTO, multiply your accrued PTO hours by your current hourly rate. For example, if you have 40 hours of PTO saved and earn $25 per hour, your PTO is worth $1,000. This calculation is important when negotiating compensation or understanding what you are owed upon leaving a job.',
  },
  {
    question: 'Am I entitled to a PTO payout when I leave my job?',
    answer: 'PTO payout laws vary by state. In states like California, Illinois, and Montana, employers are legally required to pay out all accrued, unused PTO upon termination. Other states leave it up to company policy. Always check your state laws and your employer\'s handbook to understand your payout rights.',
  },
  {
    question: 'How does hourly PTO differ from salaried PTO?',
    answer: 'Salaried employees usually receive a fixed annual PTO allotment regardless of hours worked, while hourly employees earn PTO incrementally based on hours worked. This means hourly workers who log overtime may accrue PTO faster, and part-time hourly workers earn proportionally less. The tracking method also differs, as hourly PTO requires more granular record-keeping.',
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
    name: 'Vacation Accrual Calculator',
    description: 'Calculate vacation day accrual by pay period, tenure, or hours worked.',
    href: '/hr/vacation-accrual',
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
        name="PTO Calculator for Hourly Employees - Calculate Hours Earned"
        description="Free PTO calculator for hourly employees. Calculate PTO earned based on hours worked with customizable accrual rates."
        url="https://www.getfigured.co/hr/pto-calculator-hourly"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'HR Tools', href: '/hr' },
        { name: 'PTO Calculator for Hourly Employees' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'HR Tools', href: '/hr' },
          { label: 'PTO Calculator for Hourly Employees' },
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
