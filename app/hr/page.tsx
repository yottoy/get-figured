import Link from 'next/link'
import { Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR & PTO Calculators - Get Figured',
  description: 'Free HR calculators for PTO accrual, vacation time, and sick leave. Track employee time off and stay compliant with state regulations.',
  keywords: 'PTO calculator, vacation accrual, sick leave, time off calculator, HR calculator',
  alternates: {
    canonical: 'https://getfigured.co/hr',
  },
  openGraph: {
    title: 'HR & PTO Calculators - Get Figured',
    description: 'Free HR calculators for PTO accrual, vacation time, and sick leave.',
    url: 'https://getfigured.co/hr',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const tools = [
  { 
    name: 'PTO Accrual Calculator', 
    url: '/hr/pto-accrual', 
    description: 'Calculate PTO accrual with any policy. Track balance, rollovers, and forfeiture.',
    volume: '1,900/mo',
    featured: true 
  },
  { 
    name: 'Vacation Accrual Calculator', 
    url: '/hr/vacation-accrual', 
    description: 'Calculate vacation accrual by pay period, tenure, or hours worked.',
    volume: '590/mo',
    featured: true 
  },
  { 
    name: 'Time Off Accrual Calculator', 
    url: '/hr/time-off-accrual', 
    description: 'Track PTO balance and accrual schedule with customizable policies.',
    volume: '480/mo',
    featured: true 
  },
  { 
    name: 'PTO Calculator for Hourly Employees', 
    url: '/hr/pto-calculator-hourly', 
    description: 'Calculate PTO earned based on hours worked for hourly employees.',
    volume: '90/mo' 
  },
  { 
    name: 'Sick Leave Accrual Calculator', 
    url: '/hr/sick-leave-accrual', 
    description: 'Calculate sick leave accrual by state law (CA, NY, IL).',
    volume: '70/mo' 
  },
]

export default function HRToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <Users className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              HR & PTO Calculators
            </h1>
          </div>
        </div>
        <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl">
          Calculate PTO accrual, track vacation time, manage sick leave. 
          Stay compliant with state and federal regulations.
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
