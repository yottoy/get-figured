'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import NumberInput from '@/components/ui/NumberInput'
import PercentInput from '@/components/ui/PercentInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateConsultingFee } from '@/lib/calculators/consultingFee'
import { formatCurrency } from '@/lib/utils'

export default function ConsultingFeeCalculator() {
  const [inputs, setInputs] = useState({
    projectHours: 40,
    hourlyRate: 150,
    feeStructure: 'fixed' as const,
    fixedFeePercent: 10,
    valueMultiplier: 2,
    expenseAmount: 0,
    retainerPercent: 40
  })

  const results = calculateConsultingFee(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Consulting Fee Calculator - Project Pricing Tool
        </h1>
        <p className="text-lg text-slate-600">
          Calculate consulting project fees with hourly, fixed, or value-based pricing. 
          Include expenses and retainers for complete project pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Project Details</h2>
          <div className="space-y-4">
            <NumberInput
              label="Estimated Project Hours"
              value={inputs.projectHours}
              onChange={(v) => setInputs({ ...inputs, projectHours: v })}
              min={1}
              max={1000}
              suffix="hours"
            />
            <CurrencyInput
              label="Hourly Rate"
              value={inputs.hourlyRate}
              onChange={(v) => setInputs({ ...inputs, hourlyRate: v })}
            />
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Fee Structure</label>
              <select
                value={inputs.feeStructure}
                onChange={(e) => setInputs({ ...inputs, feeStructure: e.target.value as any })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="hourly">Hourly Rate</option>
                <option value="fixed">Fixed Price (Discounted)</option>
                <option value="value">Value-Based (Premium)</option>
              </select>
            </div>

            {inputs.feeStructure === 'fixed' && (
              <PercentInput
                label="Fixed Fee Discount"
                value={inputs.fixedFeePercent}
                onChange={(v) => setInputs({ ...inputs, fixedFeePercent: v })}
                helper="Discount for fixed-price certainty"
              />
            )}

            <CurrencyInput
              label="Additional Expenses"
              value={inputs.expenseAmount}
              onChange={(v) => setInputs({ ...inputs, expenseAmount: v })}
              helper="Travel, software, etc."
            />

            <PercentInput
              label="Retainer Percentage"
              value={inputs.retainerPercent}
              onChange={(v) => setInputs({ ...inputs, retainerPercent: v })}
              helper="Upfront payment"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Project Pricing</h2>
          <div className="space-y-4">
            <ResultCard
              label="Total Project Fee"
              value={formatCurrency(results.totalWithExpenses)}
              variant="primary"
            />
            <ResultCard
              label="Retainer Amount"
              value={formatCurrency(results.retainerAmount)}
              subtitle={`${inputs.retainerPercent}% upfront`}
            />
            <ResultCard
              label="Remaining Balance"
              value={formatCurrency(results.remainingBalance)}
            />
            <ResultCard
              label="Effective Hourly Rate"
              value={formatCurrency(results.effectiveHourlyRate)}
              subtitle="per hour"
            />

            <div className="bg-white p-6 rounded-lg border border-slate-200 mt-6">
              <h3 className="font-semibold mb-3">Payment Schedule</h3>
              <div className="space-y-2">
                {results.paymentSchedule.map((payment, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span>{payment.milestone}</span>
                    <span className="font-mono">{formatCurrency(payment.amount)}</span>
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
