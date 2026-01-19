'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import PercentInput from '@/components/ui/PercentInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateMarkupMargin } from '@/lib/calculators/markupMargin'
import { formatCurrency, formatPercent } from '@/lib/utils'

export default function MarginFromMarkupCalculator() {
  const [mode, setMode] = useState<'markup-to-margin' | 'margin-to-markup'>('markup-to-margin')
  const [inputPercent, setInputPercent] = useState(50)
  const [cost, setCost] = useState(100)

  const results = calculateMarkupMargin({
    mode,
    inputPercent,
    cost
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Calculate Margin from Markup - Markup to Margin Converter
        </h1>
        <p className="text-lg text-slate-600">
          Convert markup percentage to profit margin (and vice versa). 
          Understand the difference between markup and margin.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Convert</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Conversion Direction
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMode('markup-to-margin')}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition ${
                    mode === 'markup-to-margin'
                      ? 'border-primary bg-primary text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Markup → Margin
                </button>
                <button
                  onClick={() => setMode('margin-to-markup')}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition ${
                    mode === 'margin-to-markup'
                      ? 'border-primary bg-primary text-white'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  Margin → Markup
                </button>
              </div>
            </div>

            <PercentInput
              label={mode === 'markup-to-margin' ? 'Markup Percentage' : 'Margin Percentage'}
              value={inputPercent}
              onChange={setInputPercent}
              max={mode === 'markup-to-margin' ? 1000 : 99.9}
              helper={mode === 'markup-to-margin' ? 'Enter your markup %' : 'Enter your margin %'}
            />

            <div className="pt-4 border-t">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">
                Example Calculation (Optional)
              </h3>
              <CurrencyInput
                label="Product Cost"
                value={cost}
                onChange={setCost}
                helper="To see dollar amounts"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Results</h2>
          <div className="space-y-4">
            <ResultCard
              label="Markup Percentage"
              value={formatPercent(results.markupPercent, 1)}
              subtitle="Based on cost"
              variant={mode === 'markup-to-margin' ? 'default' : 'primary'}
            />

            <ResultCard
              label="Margin Percentage"
              value={formatPercent(results.marginPercent, 1)}
              subtitle="Based on price"
              variant={mode === 'margin-to-markup' ? 'default' : 'primary'}
            />

            <ResultCard
              label="Difference"
              value={formatPercent(results.difference, 1)}
              subtitle="Percentage point difference"
              variant="secondary"
            />

            {results.examples && (
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Dollar Example</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cost:</span>
                    <span className="font-mono">{formatCurrency(results.examples.costAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selling Price:</span>
                    <span className="font-mono">{formatCurrency(results.examples.revenueAmount)}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Profit:</span>
                    <span className="font-mono">{formatCurrency(results.examples.profitAmount)}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">
                Understanding the Difference
              </h3>
              <p className="text-sm text-blue-800">
                {results.explanation}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-3">Quick Reference</h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-4 py-2 border-b">
                  <span className="font-medium">Markup</span>
                  <span className="font-medium">= Margin</span>
                </div>
                <div className="grid grid-cols-2 gap-4 py-1">
                  <span>50%</span>
                  <span>33.3%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 py-1">
                  <span>100%</span>
                  <span>50%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 py-1">
                  <span>150%</span>
                  <span>60%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 py-1">
                  <span>200%</span>
                  <span>66.7%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 prose max-w-none">
        <h2>Why Markup and Margin Are Different</h2>
        <p>
          Many business owners confuse markup and margin, but they're calculated differently 
          and represent different things:
        </p>

        <ul>
          <li>
            <strong>Markup</strong> is the percentage added to your cost to get the selling price. 
            It's calculated as: (Price - Cost) / Cost × 100
          </li>
          <li>
            <strong>Margin</strong> (or profit margin) is the percentage of the selling price that 
            is profit. It's calculated as: (Price - Cost) / Price × 100
          </li>
        </ul>

        <h3>Example</h3>
        <p>
          If a product costs $100 and you sell it for $150:
        </p>
        <ul>
          <li><strong>Markup:</strong> ($150 - $100) / $100 = 50%</li>
          <li><strong>Margin:</strong> ($150 - $100) / $150 = 33.3%</li>
        </ul>

        <h3>Which Should You Use?</h3>
        <ul>
          <li>
            <strong>Retail and wholesale</strong> typically use markup (e.g., "We mark up products 50%")
          </li>
          <li>
            <strong>Finance and accounting</strong> typically use margin (e.g., "Our profit margin is 33%")
          </li>
          <li>
            Both are valid—just make sure you're consistent and understand which one you're using
          </li>
        </ul>
      </div>
    </div>
  )
}
