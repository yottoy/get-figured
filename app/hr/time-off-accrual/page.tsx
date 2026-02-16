'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function TimeOffAccrualCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Time Off Accrual Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Track how much time off your employees earn with each pay period. Whether you manage PTO,
        vacation, sick leave, or a combined time-off bank, accrual tracking keeps you compliant
        and your team informed.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-blue-800 font-medium mb-3">
          Calculate time off accrual with our PTO calculator:
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
        <h2 className="text-2xl font-semibold text-slate-900">Time Off Accrual Methods</h2>
        <p>
          There are several ways to structure time off accrual. The right method depends on your
          workforce composition, state regulations, and administrative preferences:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Per pay period (most common)</strong> — Employees earn a fixed number of hours each pay cycle. For 15 PTO days/year on a biweekly schedule, that is about 4.62 hours per paycheck.</li>
          <li><strong>Per hours worked</strong> — Time off accrues proportionally to hours logged. Ideal for part-time and hourly employees. A typical rate is 1 hour of PTO per 30 hours worked.</li>
          <li><strong>Anniversary-based</strong> — Employees receive their full time-off balance on their hire anniversary. Simpler to administer but can create coverage gaps.</li>
          <li><strong>Front-loaded</strong> — The full annual balance is granted on January 1 or the hire date. Simplest to manage but carries a liability risk if employees leave early.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Accrual Caps and Carryover</h2>
        <p>
          Most employers set a cap on how much time off can accumulate (often 1.5x the annual
          accrual). Once an employee hits the cap, they stop accruing until they use some time off.
          Carryover policies determine how much unused time rolls into the next year — some
          companies allow full carryover, others use a &quot;use it or lose it&quot; policy (where
          legal), and many set a maximum carryover of 40-80 hours.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">Combined vs. Separate Time Off Banks</h2>
        <p>
          Some companies combine vacation, sick, and personal days into a single PTO bank, while
          others track each type separately. A combined bank is simpler to administer but may
          not satisfy state-mandated sick leave requirements. Separate tracking is more complex but
          ensures compliance with laws in states like California, New York, and Colorado.
        </p>
      </div>
    </div>
  )
}
