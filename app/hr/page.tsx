import Link from 'next/link'
import { Users, ArrowRight } from 'lucide-react'

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 mr-4">
            <Users className="w-10 h-10 text-green-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              HR & PTO Calculators
            </h1>
            <p className="text-lg text-slate-600">
              {tools.length} free tools for HR professionals and employees
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-600 mt-4">
          Calculate PTO accrual, track vacation time, manage sick leave. 
          Stay compliant with state and federal regulations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className={`p-6 rounded-lg border-2 transition hover:shadow-lg group ${
              tool.featured 
                ? 'border-green-300 bg-green-50 hover:border-green-500' 
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-green-700 transition">
                {tool.name}
              </h2>
              {tool.featured && (
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded font-semibold ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{tool.volume} searches</span>
              <ArrowRight className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
