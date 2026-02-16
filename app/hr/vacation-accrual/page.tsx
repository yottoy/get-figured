'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function VacationAccrualCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Vacation Accrual Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Calculate how much vacation time you earn per pay period based on your accrual rate,
        tenure, and employment type. Works for both salaried and hourly employees.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-blue-800 font-medium mb-3">
          Calculate your vacation accrual with our PTO calculator:
        </p>
        <Link
          href="/hr/pto-accrual"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Open PTO Accrual Calculator
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="space-y-6 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How Vacation Accrual Works</h2>
        <p>
          Vacation accrual is the process of earning vacation time gradually over the course of the
          year, rather than receiving it all at once. Most employers use one of three accrual methods:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Per pay period</strong> — You earn a fixed amount each pay period (e.g., 3.08 hours per biweekly paycheck for 10 days/year).</li>
          <li><strong>Per hours worked</strong> — You earn vacation time proportional to the hours you work. Common for hourly and part-time employees.</li>
          <li><strong>Annual lump sum</strong> — You receive your full vacation balance at the start of the year or on your anniversary date.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Typical Vacation Accrual Rates</h2>
        <p>
          According to the Bureau of Labor Statistics, the average private-sector employee accrues:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>1 year of service:</strong> 10 days (80 hours) per year</li>
          <li><strong>5 years of service:</strong> 15 days (120 hours) per year</li>
          <li><strong>10+ years of service:</strong> 20 days (160 hours) per year</li>
        </ul>
        <p>
          Many companies increase vacation accrual rates based on tenure as a retention incentive.
          Use our calculator to see exactly how your policy translates to time earned per pay period.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Proration for New Hires</h2>
        <p>
          If you started mid-year, your vacation is typically prorated. For example, if the policy
          grants 15 days per year and you started July 1, you would accrue approximately 7.5 days
          for the remainder of the year.
        </p>
      </div>
    </div>
  )
}
