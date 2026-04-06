'use client'

import { useState } from 'react'
import NumberInput from '@/components/ui/NumberInput'
import CurrencyInput from '@/components/ui/CurrencyInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateOvertime } from '@/lib/calculators/overtime'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function OvertimeHoursCalculator() {
  const [inputs, setInputs] = useState({
    totalHours: 50,
    hourlyRate: 25,
    overtimeRule: 'federal' as const
  })

  const results = calculateOvertime(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Calculate Overtime Hours - Overtime Pay Calculator
        </h1>
        <p className="text-lg text-slate-600">
          Calculate overtime pay based on federal or California rules. 
          Includes 1.5x and 2x rates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Work Details</h2>
          <div className="space-y-4">
            <NumberInput
              label="Total Hours Worked"
              value={inputs.totalHours}
              onChange={(v) => setInputs({ ...inputs, totalHours: v })}
              suffix="hours"
              helper="Total hours worked this week"
            />

            <CurrencyInput
              label="Hourly Rate"
              value={inputs.hourlyRate}
              onChange={(v) => setInputs({ ...inputs, hourlyRate: v })}
              helper="Regular hourly pay rate"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Overtime Rules
              </label>
              <select
                value={inputs.overtimeRule}
                onChange={(e) => setInputs({ ...inputs, overtimeRule: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="federal">Federal (&gt;40 hrs/week = 1.5x)</option>
                <option value="california">California (&gt;40 = 1.5x, &gt;60 = 2x)</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Pay Breakdown</h2>
          <div className="space-y-4">
            <ResultCard
              label="Total Pay"
              value={formatCurrency(results.totalPay)}
              variant="primary"
            />

            <ResultCard
              label="Effective Hourly Rate"
              value={formatCurrency(results.effectiveHourlyRate)}
              subtitle="Average rate with overtime"
            />

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-4">Hours Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Regular Hours ({formatNumber(results.regularHours, 1)})</span>
                  <span className="font-mono">{formatCurrency(results.regularPay)}</span>
                </div>
                {results.overtimeHours > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Overtime 1.5x ({formatNumber(results.overtimeHours, 1)})</span>
                    <span className="font-mono">{formatCurrency(results.overtimePay)}</span>
                  </div>
                )}
                {results.doubleTimeHours > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Double Time 2x ({formatNumber(results.doubleTimeHours, 1)})</span>
                    <span className="font-mono">{formatCurrency(results.doubleTimePay)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-blue-800">
                💡 Tip
              </p>
              <p className="text-sm text-blue-700">
                {inputs.overtimeRule === 'federal' 
                  ? 'Federal law requires 1.5x pay for hours over 40 per week.'
                  : 'California requires 1.5x for hours over 40/week and 2x for hours over 60/week.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Common Scenarios - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Overtime Pay Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { scenario: '45 hrs at $20/hr (Federal)', regular: '40 hrs = $800', overtime: '5 hrs at 1.5x = $150', total: '$950', effective: '$21.11/hr' },
            { scenario: '50 hrs at $25/hr (Federal)', regular: '40 hrs = $1,000', overtime: '10 hrs at 1.5x = $375', total: '$1,375', effective: '$27.50/hr' },
            { scenario: '55 hrs at $30/hr (Federal)', regular: '40 hrs = $1,200', overtime: '15 hrs at 1.5x = $675', total: '$1,875', effective: '$34.09/hr' },
            { scenario: '60 hrs at $35/hr (Federal)', regular: '40 hrs = $1,400', overtime: '20 hrs at 1.5x = $1,050', total: '$2,450', effective: '$40.83/hr' },
            { scenario: '48 hrs at $15/hr (Federal)', regular: '40 hrs = $600', overtime: '8 hrs at 1.5x = $180', total: '$780', effective: '$16.25/hr' },
            { scenario: '50 hrs at $25/hr (California)', regular: '40 hrs = $1,000', overtime: '10 hrs at 1.5x = $375', total: '$1,375', effective: '$27.50/hr' },
            { scenario: '65 hrs at $20/hr (California)', regular: '40 hrs = $800', overtime: '20 hrs at 1.5x = $600', doubleTime: '5 hrs at 2x = $200', total: '$1,600', effective: '$24.62/hr' },
            { scenario: '70 hrs at $25/hr (California)', regular: '40 hrs = $1,000', overtime: '20 hrs at 1.5x = $750', doubleTime: '10 hrs at 2x = $500', total: '$2,250', effective: '$32.14/hr' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-2">{s.scenario}</p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Regular: {s.regular}</p>
                <p>Overtime: {s.overtime}</p>
                {s.doubleTime && <p>Double time: {s.doubleTime}</p>}
                <p>Total pay: <span className="font-semibold text-slate-800">{s.total}</span></p>
                <p>Effective rate: <span className="font-semibold text-slate-800">{s.effective}</span></p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          Federal overtime applies at 1.5x for hours over 40/week. California also requires
          2x pay for hours over 60/week and has daily overtime rules (over 8 hrs/day) not shown here.
          Use the calculator above for your specific situation.
        </p>
      </div>
    </div>
  )
}
