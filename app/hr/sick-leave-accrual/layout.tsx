import { Metadata } from 'next'
import { WebApplicationJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FAQSection from '@/components/seo/FAQSection'
import RelatedCalculators from '@/components/seo/RelatedCalculators'

export const metadata: Metadata = {
  title: 'Free Sick Leave Accrual Calculator: State-by-State Compliance (CA, NY, IL) | Get Figured',
  description: 'Calculate sick leave accrual by state law. Covers California, New York, Illinois, and all states with paid sick leave mandates. Check your compliance instantly.',
  keywords: 'sick leave calculator, sick leave accrual, sick time accrual calculator, California sick leave, state sick leave laws, sick time calculator, sick day accrual calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/hr/sick-leave-accrual',
  },
  openGraph: {
    title: 'Free Sick Leave Accrual Calculator: State-by-State Compliance (CA, NY, IL) | Get Figured',
    description: 'Calculate sick leave accrual by state law. Covers California, New York, Illinois, and all states with paid sick leave mandates.',
    url: 'https://www.getfigured.co/hr/sick-leave-accrual',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'Which states require employers to provide paid sick leave?',
    answer: 'As of 2024, over 15 states and Washington D.C. mandate paid sick leave, including Arizona, California, Colorado, Connecticut, Illinois, Maryland, Massachusetts, Michigan, Minnesota, New Jersey, New Mexico, New York, Oregon, Rhode Island, Vermont, and Washington. Many cities also have their own ordinances with requirements that may exceed state law. Employers should check both state and local regulations.',
  },
  {
    question: 'What does California sick leave law require?',
    answer: 'California requires employers to provide at least 5 days (40 hours) of paid sick leave per year to all employees who work 30 or more days within a year, including part-time and temporary workers. Employers can either front-load the full amount at the start of each year or use an accrual method where employees earn at least one hour of sick leave for every 30 hours worked. Unused sick leave must carry over to the next year under the accrual method, though employers can cap usage at 40 hours per year.',
  },
  {
    question: 'What are typical sick leave accrual rates?',
    answer: 'The most common accrual rate is one hour of sick leave for every 30 hours worked, which is the minimum required by many state laws including California and several others. Some employers offer more generous rates such as one hour per 20 hours worked. Full-time employees earning at this standard rate accumulate approximately 69 hours (about 8.6 days) of sick leave per year.',
  },
  {
    question: 'What is the difference between sick leave and PTO?',
    answer: 'Sick leave is specifically designated for illness, medical appointments, and caring for sick family members, while PTO is a general bank of paid time off that can be used for any purpose. In states with mandatory sick leave laws, employers who use a combined PTO policy must ensure the PTO plan meets or exceeds the state\'s sick leave requirements in terms of accrual rate, usage rights, and carryover rules.',
  },
  {
    question: 'How do sick leave carryover rules work?',
    answer: 'Carryover rules vary by state and employer policy. Many state laws require employers to allow unused sick leave to carry over to the next year, though they may cap the total accumulated balance (for example, California caps carryover at 80 hours under the accrual method). Employers who front-load sick leave at the start of each year generally are not required to allow carryover, since employees receive a fresh allotment annually.',
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
    name: 'PTO Calculator for Hourly Employees',
    description: 'Calculate PTO earned based on hours worked for hourly employees.',
    href: '/hr/pto-calculator-hourly',
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebApplicationJsonLd
        name="Sick Leave Accrual Calculator - State Law Compliance"
        description="Free sick leave accrual calculator. Calculate sick leave by state law (CA, NY, IL). Stay compliant with state-mandated sick leave policies."
        url="https://www.getfigured.co/hr/sick-leave-accrual"
      />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'HR Tools', href: '/hr' },
        { name: 'Sick Leave Accrual Calculator' },
      ]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[
          { label: 'HR Tools', href: '/hr' },
          { label: 'Sick Leave Accrual Calculator' },
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
