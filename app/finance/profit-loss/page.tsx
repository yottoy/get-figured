'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateProfitLoss } from '@/lib/calculators/profitLoss'
import { formatCurrency, formatPercent } from '@/lib/utils'

export default function ProfitLossCalculator() {
  const [inputs, setInputs] = useState({
    revenue: {
      sales: 100000,
      otherIncome: 0
    },
    costOfGoodsSold: {
      materials: 30000,
      labor: 20000,
      shipping: 5000
    },
    operatingExpenses: {
      salaries: 15000,
      rent: 5000,
      utilities: 2000,
      marketing: 3000,
      insurance: 1000,
      other: 2000
    },
    interestExpense: 0,
    taxRate: 25
  })

  const results = calculateProfitLoss(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Profit and Loss Calculator - Free P&L Statement Tool
        </h1>
        <p className="text-lg text-slate-600">
          Calculate profit and loss with revenue, COGS, and expenses. 
          Generate P&L statement for small businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4 text-green-700">Revenue</h3>
            <div className="space-y-3">
              <CurrencyInput
                label="Sales Revenue"
                value={inputs.revenue.sales}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  revenue: { ...inputs.revenue, sales: v }
                })}
              />
              <CurrencyInput
                label="Other Income"
                value={inputs.revenue.otherIncome}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  revenue: { ...inputs.revenue, otherIncome: v }
                })}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4 text-orange-700">Cost of Goods Sold</h3>
            <div className="space-y-3">
              <CurrencyInput
                label="Materials"
                value={inputs.costOfGoodsSold.materials}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costOfGoodsSold: { ...inputs.costOfGoodsSold, materials: v }
                })}
              />
              <CurrencyInput
                label="Direct Labor"
                value={inputs.costOfGoodsSold.labor}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costOfGoodsSold: { ...inputs.costOfGoodsSold, labor: v }
                })}
              />
              <CurrencyInput
                label="Shipping/Freight"
                value={inputs.costOfGoodsSold.shipping}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costOfGoodsSold: { ...inputs.costOfGoodsSold, shipping: v }
                })}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4 text-red-700">Operating Expenses</h3>
            <div className="space-y-3">
              <CurrencyInput
                label="Salaries & Wages"
                value={inputs.operatingExpenses.salaries}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, salaries: v }
                })}
              />
              <CurrencyInput
                label="Rent"
                value={inputs.operatingExpenses.rent}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, rent: v }
                })}
              />
              <CurrencyInput
                label="Utilities"
                value={inputs.operatingExpenses.utilities}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, utilities: v }
                })}
              />
              <CurrencyInput
                label="Marketing"
                value={inputs.operatingExpenses.marketing}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, marketing: v }
                })}
              />
              <CurrencyInput
                label="Insurance"
                value={inputs.operatingExpenses.insurance}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, insurance: v }
                })}
              />
              <CurrencyInput
                label="Other Expenses"
                value={inputs.operatingExpenses.other}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  operatingExpenses: { ...inputs.operatingExpenses, other: v }
                })}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-8 rounded-lg border-2 border-slate-300 sticky top-20">
            <h2 className="text-2xl font-bold text-center mb-6">
              Profit & Loss Statement
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between font-semibold text-green-700 pb-2 border-b-2">
                <span>Total Revenue</span>
                <span className="font-mono">{formatCurrency(results.totalRevenue)}</span>
              </div>

              <div className="flex justify-between text-orange-700">
                <span>Cost of Goods Sold</span>
                <span className="font-mono">({formatCurrency(results.totalCOGS)})</span>
              </div>

              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Gross Profit</span>
                <span className="font-mono">{formatCurrency(results.grossProfit)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Gross Margin</span>
                <span>{formatPercent(results.grossMargin)}</span>
              </div>

              <div className="flex justify-between text-red-700 pt-3 border-t">
                <span>Operating Expenses</span>
                <span className="font-mono">({formatCurrency(results.totalOpEx)})</span>
              </div>

              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Operating Income (EBIT)</span>
                <span className="font-mono">{formatCurrency(results.ebit)}</span>
              </div>

              {results.interestExpense > 0 && (
                <div className="flex justify-between">
                  <span>Interest Expense</span>
                  <span className="font-mono">({formatCurrency(results.interestExpense)})</span>
                </div>
              )}

              <div className="flex justify-between pt-2 border-t">
                <span>Earnings Before Tax</span>
                <span className="font-mono">{formatCurrency(results.earningsBeforeTax)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax Expense ({inputs.taxRate}%)</span>
                <span className="font-mono">({formatCurrency(results.taxExpense)})</span>
              </div>

              <div className="flex justify-between text-xl font-bold pt-4 border-t-2">
                <span>Net Income</span>
                <span className={`font-mono ${results.netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(results.netIncome)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Net Margin</span>
                <span className={results.netMargin >= 0 ? 'text-green-600' : 'text-red-600'}>
                  {formatPercent(results.netMargin)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t">
              <ResultCard
                label="COGS %"
                value={formatPercent(results.breakdown.cogsPercent, 0)}
                className="text-xs"
              />
              <ResultCard
                label="OpEx %"
                value={formatPercent(results.breakdown.opexPercent, 0)}
                className="text-xs"
              />
              <ResultCard
                label="Net %"
                value={formatPercent(results.breakdown.netMarginPercent, 0)}
                className="text-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
