'use client'

import { useState } from 'react'
import NumberInput from '@/components/ui/NumberInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculatePTOAccrual } from '@/lib/calculators/ptoAccrual'
import { formatNumber } from '@/lib/utils'

export default function PTOAccrualCalculator() {
  const oneYearAgo = new Date()
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

  const [inputs, setInputs] = useState({
    employmentType: 'salaried' as const,
    accrualBasis: 'pay-period' as const,
    accrualRate: 4,
    payPeriod: 'biweekly' as const,
    startDate: oneYearAgo,
    currentDate: new Date(),
    usedHours: 40,
    maxAccrual: 160,
    rollover: true,
    rolloverCap: 80
  })

  const results = calculatePTOAccrual(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          PTO Accrual Calculator - Calculate Paid Time Off Balance
        </h1>
        <p className="text-lg text-slate-600">
          Calculate PTO accrual with any policy. Track balance, rollovers, and forfeiture. 
          Free PTO calculator.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Accrual Policy</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Accrual Method
              </label>
              <select
                value={inputs.accrualBasis}
                onChange={(e) => setInputs({ ...inputs, accrualBasis: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="pay-period">Per Pay Period</option>
                <option value="monthly">Monthly</option>
                <option value="upfront">Upfront (Annual)</option>
              </select>
            </div>

            <NumberInput
              label="Accrual Rate"
              value={inputs.accrualRate}
              onChange={(v) => setInputs({ ...inputs, accrualRate: v })}
              suffix="hours"
              helper="Hours earned per period"
            />

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Pay Period
              </label>
              <select
                value={inputs.payPeriod}
                onChange={(e) => setInputs({ ...inputs, payPeriod: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="semimonthly">Semi-monthly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <NumberInput
              label="Hours Used"
              value={inputs.usedHours}
              onChange={(v) => setInputs({ ...inputs, usedHours: v })}
              suffix="hours"
            />

            <NumberInput
              label="Maximum Accrual"
              value={inputs.maxAccrual}
              onChange={(v) => setInputs({ ...inputs, maxAccrual: v })}
              suffix="hours"
              helper="Cap on total PTO balance"
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={inputs.rollover}
                onChange={(e) => setInputs({ ...inputs, rollover: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm text-slate-700">Allow rollover</label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Your PTO Balance</h2>
          <div className="space-y-4">
            <ResultCard
              label="Current Balance"
              value={`${formatNumber(results.currentBalance, 1)} hours`}
              subtitle={`${formatNumber(results.currentBalance / 8, 1)} days`}
              variant="primary"
            />

            <ResultCard
              label="Total Earned"
              value={`${formatNumber(results.earnedToDate, 1)} hours`}
            />

            <ResultCard
              label="Total Used"
              value={`${formatNumber(results.used, 1)} hours`}
            />

            <ResultCard
              label="Projected Year-End"
              value={`${formatNumber(results.projectedYearEnd, 1)} hours`}
              subtitle={`${formatNumber(results.projectedYearEnd / 8, 1)} days`}
            />

            {results.forfeitureRisk && results.forfeitureRisk > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-red-800">⚠️ Forfeiture Risk</p>
                <p className="text-sm text-red-700">
                  You may lose {formatNumber(results.forfeitureRisk, 1)} hours if not used 
                  (over maximum cap)
                </p>
              </div>
            )}

            <div className="pt-6">
              <h3 className="font-semibold mb-3">Next 6 Months</h3>
              <div className="space-y-2">
                {results.accrualSchedule.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm p-2 bg-slate-50 rounded">
                    <span>{item.date}</span>
                    <span className="font-mono">
                      {formatNumber(item.projectedBalance, 1)} hrs
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
