'use client'

import { useState } from 'react'
import NumberInput from '@/components/ui/NumberInput'
import CurrencyInput from '@/components/ui/CurrencyInput'
import ResultCard from '@/components/ui/ResultCard'
import { formatCurrency, formatNumber } from '@/lib/utils'

export default function PTOCalculatorHourly() {
  const [inputs, setInputs] = useState({
    hoursWorked: 80,
    accrualRate: 1,
    accrualPer: 40,
    hourlyWage: 25,
    currentBalance: 20
  })

  const ptoEarned = (inputs.hoursWorked / inputs.accrualPer) * inputs.accrualRate
  const cashValue = ptoEarned * inputs.hourlyWage
  const newBalance = inputs.currentBalance + ptoEarned
  const projectedAnnual = (2080 / inputs.accrualPer) * inputs.accrualRate
  const percentOfSalary = (projectedAnnual * inputs.hourlyWage) / (2080 * inputs.hourlyWage) * 100

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          PTO Calculator for Hourly Employees
        </h1>
        <p className="text-lg text-slate-600">
          Calculate PTO earned based on hours worked. See cash value and annual projections 
          for hourly employees.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Information</h2>
          <div className="space-y-4">
            <NumberInput
              label="Hours Worked This Period"
              value={inputs.hoursWorked}
              onChange={(v) => setInputs({ ...inputs, hoursWorked: v })}
              suffix="hours"
            />
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Accrual Policy
              </label>
              <div className="grid grid-cols-2 gap-2">
                <NumberInput
                  label="Earn"
                  value={inputs.accrualRate}
                  onChange={(v) => setInputs({ ...inputs, accrualRate: v })}
                  suffix="hours"
                  step={0.1}
                />
                <NumberInput
                  label="Per"
                  value={inputs.accrualPer}
                  onChange={(v) => setInputs({ ...inputs, accrualPer: v })}
                  suffix="worked"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                e.g., 1 hour per 40 hours worked
              </p>
            </div>

            <CurrencyInput
              label="Hourly Wage"
              value={inputs.hourlyWage}
              onChange={(v) => setInputs({ ...inputs, hourlyWage: v })}
            />

            <NumberInput
              label="Current PTO Balance"
              value={inputs.currentBalance}
              onChange={(v) => setInputs({ ...inputs, currentBalance: v })}
              suffix="hours"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">PTO Summary</h2>
          <div className="space-y-4">
            <ResultCard
              label="PTO Earned This Period"
              value={`${formatNumber(ptoEarned, 2)} hours`}
              variant="primary"
            />
            
            <ResultCard
              label="Cash Value"
              value={formatCurrency(cashValue)}
              subtitle="This period"
            />

            <ResultCard
              label="New Balance"
              value={`${formatNumber(newBalance, 1)} hours`}
              subtitle={`${formatNumber(newBalance / 8, 1)} days`}
            />

            <ResultCard
              label="Projected Annual PTO"
              value={`${formatNumber(projectedAnnual, 1)} hours`}
              subtitle={`${formatNumber(projectedAnnual / 8, 1)} days per year`}
            />

            <ResultCard
              label="PTO as % of Salary"
              value={`${formatNumber(percentOfSalary, 1)}%`}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
