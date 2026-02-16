'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContractorHourlyRateCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Contractor Hourly Rate Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Calculate the hourly rate you need to charge as an independent contractor to match
        (or exceed) your W2 salary. As a contractor, you cover your own taxes, benefits, and
        overhead — so your hourly rate needs to be significantly higher than a W2 equivalent.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-blue-800 font-medium mb-3">
          Use our full-featured Contractor Rate Calculator to run the numbers:
        </p>
        <Link
          href="/freelance/contractor-rate-calculator"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Open Contractor Rate Calculator
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="space-y-6 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Calculate Your Contractor Hourly Rate</h2>
        <p>
          The most common mistake new contractors make is charging the same hourly rate they earned
          as a W2 employee. As a contractor, you need to account for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Self-employment tax</strong> — You pay both the employer and employee portions of Social Security and Medicare (15.3% on the first ~$160K).</li>
          <li><strong>Health insurance</strong> — No employer subsidizing your premiums. Individual plans average $450-$700/month.</li>
          <li><strong>Retirement contributions</strong> — No 401(k) match. You fund your own SEP-IRA or Solo 401(k).</li>
          <li><strong>Paid time off</strong> — No paid vacations, sick days, or holidays. Every day off is unpaid.</li>
          <li><strong>Business expenses</strong> — Software, equipment, liability insurance, accounting fees, and more.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Quick Rule of Thumb</h2>
        <p>
          A common shortcut: take your W2 hourly rate and multiply by 1.4 to 1.6. If you earned
          $50/hour as an employee, you should charge at least $70-$80/hour as a contractor. For a
          more precise calculation, use our calculator above which accounts for your specific
          expenses and desired take-home pay.
        </p>
      </div>
    </div>
  )
}
