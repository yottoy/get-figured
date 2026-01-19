import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-purple-50 border border-purple-200 mr-4">
            <Clock className="w-10 h-10 text-purple-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Time & Payroll Calculators
            </h1>
            <p className="text-lg text-slate-600">
              {tools.length} free tools for time tracking and payroll
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-600 mt-4">
          Calculate work hours, overtime pay, and manage timesheets. 
          Perfect for hourly employees and payroll managers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className="p-6 rounded-lg border-2 border-purple-300 bg-purple-50 hover:border-purple-500 transition hover:shadow-lg group"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-purple-700 transition">
                {tool.name}
              </h2>
              <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-semibold ml-2">
                Popular
              </span>
            </div>
            <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{tool.volume} searches</span>
              <ArrowRight className="w-4 h-4 text-purple-600 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
