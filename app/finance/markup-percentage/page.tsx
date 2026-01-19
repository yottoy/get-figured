'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import PercentInput from '@/components/ui/PercentInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateMarkup } from '@/lib/calculators/markupMargin'
import { formatCurrency, formatPercent } from '@/lib/utils'

export default function MarkupPercentageCalculator() {
  const [inputs, setInputs] = useState<{
    cost: number
    sellingPrice?: number
    desiredMarkupPercent?: number
    desiredMarginPercent?: number
  }>({
    cost: 100,
    sellingPrice: 150
  })

  const results = calculateMarkup({
    cost: inputs.cost,
    sellingPrice: inputs.sellingPrice,
    desiredMarkupPercent: inputs.desiredMarkupPercent,
    desiredMarginPercent: inputs.desiredMarginPercent
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Markup Percentage Calculator - Calculate Markup & Margin
        </h1>
        <p className="text-lg text-slate-600">
          Calculate markup percentage from cost and selling price. See equivalent margin 
          percentage. Free markup calculator for retail and business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Input Values</h2>
          <div className="space-y-4">
            <CurrencyInput
              label="Cost"
              value={inputs.cost}
              onChange={(v) => setInputs({ ...inputs, cost: v })}
              helper="Your cost per unit"
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Choose one option below</span>
              </div>
            </div>

            <CurrencyInput
              label="Selling Price (Option 1)"
              value={inputs.sellingPrice || 0}
              onChange={(v) => setInputs({ 
                ...inputs, 
                sellingPrice: v,
                desiredMarkupPercent: undefined,
                desiredMarginPercent: undefined
              })}
              helper="If you know your selling price"
            />

            <PercentInput
              label="Desired Markup % (Option 2)"
              value={inputs.desiredMarkupPercent || 0}
              onChange={(v) => setInputs({ 
                ...inputs, 
                desiredMarkupPercent: v,
                sellingPrice: undefined,
                desiredMarginPercent: undefined
              })}
              helper="To calculate required selling price"
            />

            <PercentInput
              label="Desired Margin % (Option 3)"
              value={inputs.desiredMarginPercent || 0}
              onChange={(v) => setInputs({ 
                ...inputs, 
                desiredMarginPercent: v,
                sellingPrice: undefined,
                desiredMarkupPercent: undefined
              })}
              helper="To calculate required selling price"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-4">
            <ResultCard
              label="Selling Price"
              value={formatCurrency(results.sellingPrice)}
              variant="primary"
            />

            <ResultCard
              label="Markup Percentage"
              value={formatPercent(results.markupPercent)}
              subtitle="Based on cost"
            />

            <ResultCard
              label="Margin Percentage"
              value={formatPercent(results.marginPercent)}
              subtitle="Based on price"
            />

            <ResultCard
              label="Gross Profit"
              value={formatCurrency(results.profit)}
              subtitle="Per unit"
              variant="secondary"
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-blue-900 mb-2">
                Understanding the Difference
              </h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>Markup</strong> is calculated on cost: 
                  (Price - Cost) / Cost × 100
                </p>
                <p>
                  <strong>Margin</strong> is calculated on price: 
                  (Price - Cost) / Price × 100
                </p>
                <p className="mt-3 pt-3 border-t border-blue-300">
                  A {formatPercent(results.markupPercent, 0)} markup equals a{' '}
                  {formatPercent(results.marginPercent, 0)} margin.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Example</h3>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Cost:</span>
                  <span className="font-mono">{formatCurrency(inputs.cost)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Selling Price:</span>
                  <span className="font-mono">{formatCurrency(results.sellingPrice)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Profit:</span>
                  <span className="font-mono">{formatCurrency(results.profit)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2>How to Use the Markup Percentage Calculator</h2>
        <p>
          This calculator helps you determine the right selling price for your products or 
          services. Enter your cost and either your selling price OR your desired markup/margin 
          percentage, and we'll calculate the rest.
        </p>

        <h3>Common Markup Percentages by Industry</h3>
        <table>
          <thead>
            <tr>
              <th>Industry</th>
              <th>Typical Markup</th>
              <th>Typical Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Retail Clothing</td>
              <td>50-100%</td>
              <td>33-50%</td>
            </tr>
            <tr>
              <td>Grocery Stores</td>
              <td>10-15%</td>
              <td>9-13%</td>
            </tr>
            <tr>
              <td>Restaurants</td>
              <td>200-300%</td>
              <td>67-75%</td>
            </tr>
            <tr>
              <td>Jewelry</td>
              <td>100-200%</td>
              <td>50-67%</td>
            </tr>
            <tr>
              <td>Wholesale</td>
              <td>15-30%</td>
              <td>13-23%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
