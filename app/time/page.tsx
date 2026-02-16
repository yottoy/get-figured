import Link from 'next/link'
import { Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Time & Payroll Calculators: Work Hours, Overtime & Lunch Breaks | Get Figured',
  description: 'Calculate work hours with lunch breaks, overtime pay with 1.5x/2x rates, and weekly timesheets. Built for hourly employees and payroll managers.',
  keywords: 'work hours calculator, overtime calculator, timesheet calculator, lunch break calculator, payroll calculator, time card calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/time',
  },
  openGraph: {
    title: 'Free Time & Payroll Calculators: Work Hours, Overtime & Lunch Breaks | Get Figured',
    description: 'Calculate work hours with lunch breaks, overtime pay with 1.5x/2x rates, and weekly timesheets. Built for hourly employees and payroll managers.',
    url: 'https://www.getfigured.co/time',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const tools = [
  { 
    name: 'Calculate Overtime Hours', 
    url: '/time/overtime-hours', 
    description: 'Calculate overtime pay based on federal or California rules with 1.5x and 2x rates.',
    volume: '90/mo',
    featured: true 
  },
  { 
    name: 'Work Hours Calculator with Lunch Break', 
    url: '/time/work-hours-with-lunch', 
    description: 'Calculate total work hours minus unpaid lunch breaks for accurate timesheets.',
    volume: '70/mo',
    featured: true 
  },
]

export default function TimeToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <Clock className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Time & Payroll Calculators
            </h1>
          </div>
        </div>
        <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl">
          Calculate work hours, overtime pay, and manage timesheets. 
          Perfect for hourly employees and payroll managers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className="group p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:border-[#94A3B8] transition-all"
          >
            <h2 className="font-semibold text-[#0F172A] leading-tight text-base mb-2 group-hover:text-[#64748B] transition-colors">
              {tool.name}
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
