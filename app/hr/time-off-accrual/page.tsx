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

      {/* Common Scenarios - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Time Off Accrual Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { policy: '10 days/year, biweekly accrual', perPeriod: '3.08 hrs per paycheck', annual: '80 hours / 10 days', notes: 'Standard entry-level US policy' },
            { policy: '15 days/year, biweekly accrual', perPeriod: '4.62 hrs per paycheck', annual: '120 hours / 15 days', notes: 'Most common mid-tenure US policy' },
            { policy: '20 days/year, biweekly accrual', perPeriod: '6.15 hrs per paycheck', annual: '160 hours / 20 days', notes: 'Senior or 5+ years tenure' },
            { policy: '25 days/year, biweekly accrual', perPeriod: '7.69 hrs per paycheck', annual: '200 hours / 25 days', notes: 'Executive or European-style policy' },
            { policy: '15 days/year, semimonthly (2x/month)', perPeriod: '5.00 hrs per paycheck', annual: '120 hours / 15 days', notes: '24 pay periods per year' },
            { policy: '15 days/year, monthly accrual', perPeriod: '10.00 hrs per month', annual: '120 hours / 15 days', notes: 'Salaried employees, simpler tracking' },
            { policy: '1 hr per 30 hrs worked (CA-style)', perPeriod: '1.33 hrs per 40-hr week', annual: '~69 hours / 8.6 days', notes: 'Hourly employees, California compliant' },
            { policy: 'Front-load: 15 days on hire date', perPeriod: 'N/A (lump sum)', annual: '120 hours granted upfront', notes: 'Simple but creates liability if employee leaves' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-2">{s.policy}</p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Per period: <span className="font-semibold text-slate-800">{s.perPeriod}</span></p>
                <p>Annual total: <span className="font-semibold text-slate-800">{s.annual}</span></p>
                <p className="text-xs text-slate-500 italic mt-2">{s.notes}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          These calculations assume 8-hour days and standard US pay schedules (26 biweekly periods,
          24 semimonthly periods, or 12 monthly periods per year). For state-specific rules and
          custom policies, use the PTO Accrual Calculator above.
        </p>
      </div>
    </div>
  )
}
