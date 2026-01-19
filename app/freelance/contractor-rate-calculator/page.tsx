'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import NumberInput from '@/components/ui/NumberInput'
import PercentInput from '@/components/ui/PercentInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateContractorRate } from '@/lib/calculators/contractorRate'
import { formatCurrency } from '@/lib/utils'

export default function ContractorRateCalculator() {
  const [inputs, setInputs] = useState({
    w2Salary: 100000,
    healthInsurance: 12000,
    retirement401k: 6000,
    paidTimeOff: 20,
    otherBenefits: 0,
    selfEmploymentTax: 15.3,
    businessExpenses: 15,
    targetProfitMargin: 20,
    billableHoursYear: 1680
  })

  const results = calculateContractorRate(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Contractor Rate Calculator - W2 to 1099 Conversion
        </h1>
        <p className="text-lg text-slate-600">
          Calculate your 1099 contractor rate from W2 salary. Includes benefits, taxes, 
          and expenses to find your true hourly rate.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">W2 Compensation</h2>
          <div className="space-y-4">
            <CurrencyInput
              label="W2 Salary"
              value={inputs.w2Salary}
              onChange={(v) => setInputs({ ...inputs, w2Salary: v })}
            />

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Benefits Value</h3>
              <div className="space-y-3">
                <CurrencyInput
                  label="Health Insurance (Annual)"
                  value={inputs.healthInsurance}
                  onChange={(v) => setInputs({ ...inputs, healthInsurance: v })}
                />
                <CurrencyInput
                  label="401k Match (Annual)"
                  value={inputs.retirement401k}
                  onChange={(v) => setInputs({ ...inputs, retirement401k: v })}
                />
                <NumberInput
                  label="Paid Time Off"
                  value={inputs.paidTimeOff}
                  onChange={(v) => setInputs({ ...inputs, paidTimeOff: v })}
                  suffix="days"
                />
                <CurrencyInput
                  label="Other Benefits"
                  value={inputs.otherBenefits}
                  onChange={(v) => setInputs({ ...inputs, otherBenefits: v })}
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Contractor Costs</h3>
              <div className="space-y-3">
                <PercentInput
                  label="Business Expenses"
                  value={inputs.businessExpenses}
                  onChange={(v) => setInputs({ ...inputs, businessExpenses: v })}
                />
                <PercentInput
                  label="Target Profit Margin"
                  value={inputs.targetProfitMargin}
                  onChange={(v) => setInputs({ ...inputs, targetProfitMargin: v })}
                />
                <NumberInput
                  label="Billable Hours per Year"
                  value={inputs.billableHoursYear}
                  onChange={(v) => setInputs({ ...inputs, billableHoursYear: v })}
                  suffix="hours"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Your Contractor Rate</h2>
          <div className="space-y-4">
            <ResultCard
              label="Recommended Hourly Rate"
              value={formatCurrency(results.recommendedRate)}
              variant="primary"
            />
            <ResultCard
              label="Minimum Rate (Break-Even)"
              value={formatCurrency(results.minimumRate)}
              subtitle="No profit margin"
            />

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Rate Breakdown (per hour)</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm py-2 border-b">
                  <span>Base Salary</span>
                  <span className="font-mono">{formatCurrency(results.hourlyBreakdown.baseSalary)}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b">
                  <span>Benefits</span>
                  <span className="font-mono">{formatCurrency(results.hourlyBreakdown.benefits)}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b">
                  <span>Self-Employment Tax</span>
                  <span className="font-mono">{formatCurrency(results.hourlyBreakdown.taxes)}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b">
                  <span>Business Expenses</span>
                  <span className="font-mono">{formatCurrency(results.hourlyBreakdown.expenses)}</span>
                </div>
                <div className="flex justify-between text-sm py-2 border-b">
                  <span>Profit Margin</span>
                  <span className="font-mono">{formatCurrency(results.hourlyBreakdown.profit)}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Annual Comparison</h3>
              <div className="space-y-3">
                <ResultCard
                  label="W2 Total Compensation"
                  value={formatCurrency(results.annualComparison.w2Total)}
                />
                <ResultCard
                  label="Contractor Gross Revenue"
                  value={formatCurrency(results.annualComparison.contractorGross)}
                  subtitle="Total billing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
