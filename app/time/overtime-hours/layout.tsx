import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Overtime Calculator: Calculate Overtime Pay (Federal & California Rules) | Get Figured',
  description: 'Calculate overtime pay with 1.5x and 2x rates. Supports federal 40-hour weekly rules and California daily overtime. Enter your hours and see your total pay.',
  keywords: 'overtime calculator, overtime pay calculator, overtime hours calculator, time and a half calculator, California overtime, weekly overtime calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/time/overtime-hours',
  },
  openGraph: {
    title: 'Free Overtime Calculator: Calculate Overtime Pay (Federal & California Rules) | Get Figured',
    description: 'Calculate overtime pay with 1.5x and 2x rates. Supports federal 40-hour weekly rules and California daily overtime.',
    url: 'https://www.getfigured.co/time/overtime-hours',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What are federal overtime rules?',
    answer: 'Under the Fair Labor Standards Act (FLSA), non-exempt employees must receive overtime pay of at least 1.5 times their regular rate for all hours worked over 40 in a workweek. Federal law does not require daily overtime, only weekly. Salaried employees earning below the FLSA salary threshold are also entitled to overtime pay.',
  },
  {
    question: 'How does California overtime differ from federal rules?',
    answer: 'California has both daily and weekly overtime rules. Employees earn 1.5x pay for hours worked beyond 8 in a single day and for the first 8 hours on the 7th consecutive workday. Double time (2x) applies after 12 hours in a day and for hours beyond 8 on the 7th consecutive day. These rules are more generous than federal requirements.',
  },
  {
    question: 'Do salaried employees get overtime pay?',
    answer: 'Salaried employees can qualify for overtime if they are classified as non-exempt under the FLSA. Exemption depends on both salary level and job duties, not just being paid a salary. Employees must earn above a minimum salary threshold and perform exempt-level duties (executive, administrative, or professional) to be excluded from overtime requirements.',
  },
  {
    question: 'What is double time and when does it apply?',
    answer: 'Double time means you are paid twice your regular hourly rate. Under California law, double time applies when you work more than 12 hours in a single workday or more than 8 hours on your 7th consecutive day of work in a workweek. Federal law does not require double time, though some union contracts and company policies may provide it.',
  },
  {
    question: 'How is overtime taxed?',
    answer: 'Overtime pay is taxed at the same income tax rate as your regular wages. It is not taxed at a higher rate, despite a common misconception. However, because overtime increases your total earnings for that pay period, more of your paycheck may be withheld for taxes, making it appear as though overtime is taxed more heavily. Your actual tax rate is determined when you file your annual return.',
  },
]

const relatedCalculators = [
  {
    name: 'Work Hours Calculator with Lunch Break',
    description: 'Calculate total work hours minus unpaid lunch breaks for accurate timesheets.',
    href: '/time/work-hours-with-lunch',
  },
  {
    name: 'PTO Calculator (Hourly)',
    description: 'Calculate paid time off accrual for hourly employees based on hours worked.',
    href: '/hr/pto-calculator-hourly',
  },
  {
    name: 'Contractor Rate Calculator',
    description: 'Determine the right rate to charge as an independent contractor.',
    href: '/freelance/contractor-rate-calculator',
  },
  {
    name: 'Profit & Loss Calculator',
    description: 'Calculate net profit, gross profit, and generate a full P&L statement.',
    href: '/finance/profit-loss',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Overtime Hours Calculator - Calculate Overtime Pay"
        description="Free overtime hours calculator. Calculate overtime pay based on federal or California rules with 1.5x and 2x rates. Includes daily and weekly overtime."
        url="https://www.getfigured.co/time/overtime-hours"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Time Tools', href: '/time' },
        { name: 'Overtime Hours Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'Time Tools', href: '/time' },
          { label: 'Overtime Hours Calculator' },
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
