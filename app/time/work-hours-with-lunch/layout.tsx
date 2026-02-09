import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Work Hours Calculator with Lunch Break - Timesheet Tool',
  description: 'Free work hours calculator with lunch break. Calculate total work hours minus unpaid lunch breaks for accurate timesheets and payroll.',
  keywords: 'work hours calculator, timesheet calculator, lunch break calculator, work time calculator, hours worked',
  alternates: {
    canonical: 'https://www.getfigured.co/time/work-hours-with-lunch',
  },
  openGraph: {
    title: 'Work Hours Calculator with Lunch Break - Timesheet Tool',
    description: 'Free work hours calculator with lunch break. Calculate total work hours minus unpaid lunch breaks.',
    url: 'https://www.getfigured.co/time/work-hours-with-lunch',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'Are lunch breaks paid or unpaid?',
    answer: 'Under federal law (FLSA), employers are not required to pay for bona fide meal periods of 30 minutes or more, as long as the employee is completely relieved of duties. Short breaks of 5-20 minutes are generally considered compensable work time. However, some states and union agreements may have different rules, so always check your local regulations.',
  },
  {
    question: 'How do you calculate net work hours with a lunch break?',
    answer: 'Subtract your lunch break duration from the total time between your start and end times. For example, if you work from 8:00 AM to 5:00 PM with a 30-minute unpaid lunch, your gross hours are 9 hours but your net (billable) work hours are 8.5 hours. This net figure is what should appear on your timesheet for payroll purposes.',
  },
  {
    question: 'What is the standard lunch break duration?',
    answer: 'The most common lunch break duration in the United States is 30 minutes to 1 hour. A 30-minute break is the minimum for it to qualify as an unpaid meal period under federal guidelines. Many office jobs provide a 1-hour lunch break, while manufacturing and retail positions often use 30-minute breaks to keep shifts shorter overall.',
  },
  {
    question: 'What are state laws on lunch breaks?',
    answer: 'State lunch break laws vary significantly. California requires a 30-minute meal break for shifts over 5 hours and a second break for shifts over 10 hours. New York requires a 30-minute lunch for shifts of 6+ hours. Many states have no meal break requirements at all for adult workers. Always check your specific state labor department for current regulations.',
  },
  {
    question: 'How do lunch breaks affect overtime calculations?',
    answer: 'Unpaid lunch breaks are excluded from the hours used to calculate overtime. Only actual hours worked count toward the 40-hour weekly overtime threshold under federal law. For example, if you work 8 AM to 6 PM five days a week with a 1-hour unpaid lunch each day, you work 45 hours but only 45 hours count toward overtime since the lunch was not worked time. In this case, you would have 5 hours of overtime.',
  },
]

const relatedCalculators = [
  {
    name: 'Overtime Hours Calculator',
    description: 'Calculate overtime pay with federal or California rules and 1.5x/2x rates.',
    href: '/time/overtime-hours',
  },
  {
    name: 'PTO Calculator (Hourly)',
    description: 'Calculate paid time off accrual for hourly employees based on hours worked.',
    href: '/hr/pto-calculator-hourly',
  },
  {
    name: 'PTO Accrual Calculator',
    description: 'Track and calculate PTO accrual rates across different pay periods.',
    href: '/hr/pto-accrual',
  },
  {
    name: 'Consulting Rate Calculator',
    description: 'Determine your ideal consulting hourly rate based on salary and expenses.',
    href: '/freelance/consulting-rate-calculator',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Work Hours Calculator with Lunch Break - Timesheet Tool"
        description="Free work hours calculator with lunch break. Calculate total work hours minus unpaid lunch breaks for accurate timesheets and payroll."
        url="https://www.getfigured.co/time/work-hours-with-lunch"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Time Tools', href: '/time' },
        { name: 'Work Hours Calculator with Lunch Break' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Time Tools', href: '/time' },
          { label: 'Work Hours Calculator with Lunch Break' },
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
