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
    </div>
  )
}
