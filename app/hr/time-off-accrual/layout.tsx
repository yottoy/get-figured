import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Time Off Accrual Calculator: Track PTO, Sick & Vacation Leave | Get Figured',
  description: 'Track all employee time off in one place. Calculate accrual schedules for PTO, sick days, and vacation with customizable policies, caps, and carryover rules.',
  keywords: 'time off accrual calculator, leave accrual calculator, employee leave tracker, PTO policy calculator, time off balance, paid time off calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/time-off-accrual',
  },
  openGraph: {
    title: 'Free Time Off Accrual Calculator: Track PTO, Sick & Vacation Leave | Get Figured',
    description: 'Track all employee time off in one place. Calculate accrual schedules for PTO, sick days, and vacation with customizable policies.',
    url: 'https://www.getfigured.co/hr/time-off-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What are the main time off accrual methods?',
    answer: 'The three most common accrual methods are per-pay-period, per-hour-worked, and annual lump sum (front-loading). Per-pay-period accrual divides the annual allotment evenly across each paycheck. Per-hour-worked is common for hourly employees and ties accrual directly to hours logged. Each method has different implications for tracking, cash-out calculations, and compliance.',
  },
  {
    question: 'What is the difference between per-pay-period and annual accrual?',
    answer: 'Per-pay-period accrual distributes time off incrementally throughout the year, so employees earn a small amount each pay cycle. Annual accrual (also called front-loading) grants the entire year\'s allotment on a specific date, such as the employee\'s anniversary or January 1st. Front-loading is simpler to administer but can create liability if an employee leaves early in the year after using most of their time off.',
  },
  {
    question: 'What are accrual caps and why do employers use them?',
    answer: 'An accrual cap is the maximum number of hours an employee can have in their time off balance at any point. Once the cap is reached, accrual pauses until the employee uses some time off. Employers use caps to limit their financial liability from large PTO balances, encourage employees to take regular breaks, and simplify year-end accounting.',
  },
  {
    question: 'What is the difference between front-loading and gradual accrual?',
    answer: 'Front-loading gives employees their entire time off allotment at the beginning of the year or on their hire anniversary, while gradual accrual earns time off incrementally each pay period or per hour worked. Front-loading is easier to manage and preferred by employees who want to plan vacations early. Gradual accrual reduces financial risk for employers if employees leave mid-year.',
  },
  {
    question: 'How do I track my time off balance accurately?',
    answer: 'To track your time off balance, start with your carryover from the previous year plus any front-loaded time. Add the hours accrued each pay period, then subtract all approved and taken time off. Be sure to account for any accrual caps that may pause your earning and any pending requests. Most HRIS systems automate this, but this calculator can help you verify your balance independently.',
  },
  {
    question: 'Can my employer change the accrual method mid-year?',
    answer: 'Yes, employers can generally change accrual methods, but they must ensure employees do not lose any time off already earned. A common transition approach is to calculate each employee\'s accrued balance under the old method and credit it under the new system. Some states require advance notice of policy changes, so employers should check local regulations before switching.',
  },
]

const relatedCalculators = [
  {
    name: 'PTO Accrual Calculator',
    description: 'Calculate PTO accrual by pay period and track your overall balance.',
    href: '/hr/pto-accrual',
  },
  {
    name: 'Vacation Accrual Calculator',
    description: 'Calculate vacation day accrual by pay period, tenure, or hours worked.',
    href: '/hr/vacation-accrual',
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
        name="Time Off Accrual Calculator - Track Employee Leave"
        description="Free time off accrual calculator. Track PTO balance, accrual schedule, and policy compliance with customizable settings."
        url="https://www.getfigured.co/hr/time-off-accrual"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'HR Tools', href: '/hr' },
        { name: 'Time Off Accrual Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'HR Tools', href: '/hr' },
          { label: 'Time Off Accrual Calculator' },
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
