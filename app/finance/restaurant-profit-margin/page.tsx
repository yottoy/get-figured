'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import NumberInput from '@/components/ui/NumberInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateRestaurantMargin } from '@/lib/calculators/restaurantMargin'
import { formatCurrency, formatPercent } from '@/lib/utils'

export default function RestaurantProfitMarginCalculator() {
  const [inputs, setInputs] = useState({
    revenue: {
      foodSales: 80000,
      beverageSales: 20000,
      cateringSales: 0
    },
    costs: {
      foodCost: 28000,
      beverageCost: 5000,
      laborCost: 32000,
      rent: 8000,
      utilities: 2000,
      marketing: 2000,
      insurance: 1500,
      supplies: 1000,
      other: 1000
    },
    seatingCapacity: 50,
    avgCheckSize: 35
  })

  const results = calculateRestaurantMargin(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Restaurant Profit Margin Calculator - Food Cost & Prime Cost
        </h1>
        <p className="text-lg text-slate-600">
          Calculate restaurant profit margin, food cost %, labor cost %, and prime cost. 
          Compare with industry benchmarks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4 text-green-700">Revenue</h3>
            <div className="space-y-3">
              <CurrencyInput
                label="Food Sales"
                value={inputs.revenue.foodSales}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  revenue: { ...inputs.revenue, foodSales: v }
                })}
              />
              <CurrencyInput
                label="Beverage Sales"
                value={inputs.revenue.beverageSales}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  revenue: { ...inputs.revenue, beverageSales: v }
                })}
              />
              <CurrencyInput
                label="Catering Sales"
                value={inputs.revenue.cateringSales}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  revenue: { ...inputs.revenue, cateringSales: v }
                })}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4 text-orange-700">Costs</h3>
            <div className="space-y-3">
              <CurrencyInput
                label="Food Cost (COGS)"
                value={inputs.costs.foodCost}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, foodCost: v }
                })}
              />
              <CurrencyInput
                label="Beverage Cost (COGS)"
                value={inputs.costs.beverageCost}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, beverageCost: v }
                })}
              />
              <CurrencyInput
                label="Labor Cost"
                value={inputs.costs.laborCost}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, laborCost: v }
                })}
              />
              <CurrencyInput
                label="Rent"
                value={inputs.costs.rent}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, rent: v }
                })}
              />
              <CurrencyInput
                label="Utilities"
                value={inputs.costs.utilities}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, utilities: v }
                })}
              />
              <CurrencyInput
                label="Marketing"
                value={inputs.costs.marketing}
                onChange={(v) => setInputs({ 
                  ...inputs, 
                  costs: { ...inputs.costs, marketing: v }
                })}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4">Restaurant Details (Optional)</h3>
            <div className="space-y-3">
              <NumberInput
                label="Seating Capacity"
                value={inputs.seatingCapacity || 0}
                onChange={(v) => setInputs({ ...inputs, seatingCapacity: v })}
                suffix="seats"
              />
              <CurrencyInput
                label="Average Check Size"
                value={inputs.avgCheckSize || 0}
                onChange={(v) => setInputs({ ...inputs, avgCheckSize: v })}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Performance Metrics</h2>
          <div className="space-y-4">
            <ResultCard
              label="Net Profit"
              value={formatCurrency(results.netProfit)}
              subtitle={`${formatPercent(results.netMargin)} margin`}
              variant={results.netMargin >= 4 ? 'primary' : results.netMargin >= 2 ? 'default' : 'primary'}
            />

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold mb-4">Key Ratios</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Food Cost %</p>
                    <p className="text-xs text-slate-500">Target: 28-35%</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-mono font-semibold ${
                      results.foodCostPercent <= 35 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatPercent(results.foodCostPercent, 1)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <div>
                    <p className="text-sm font-medium">Labor Cost %</p>
                    <p className="text-xs text-slate-500">Target: 25-35%</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-mono font-semibold ${
                      results.laborCostPercent <= 35 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatPercent(results.laborCostPercent, 1)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t">
                  <div>
                    <p className="text-sm font-medium">Prime Cost %</p>
                    <p className="text-xs text-slate-500">Target: &lt;60%</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-mono font-bold ${
                      results.primeCostPercent < 60 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {formatPercent(results.primeCostPercent, 1)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-lg border-2 ${
              results.industryComparison.rating === 'above' 
                ? 'bg-green-50 border-green-300' 
                : results.industryComparison.rating === 'below'
                ? 'bg-red-50 border-red-300'
                : 'bg-yellow-50 border-yellow-300'
            }`}>
              <h3 className="font-semibold mb-2">Industry Comparison</h3>
              <p className="text-sm mb-3">
                Your net margin: <strong>{formatPercent(results.netMargin, 1)}</strong>
              </p>
              <p className="text-sm mb-2">
                Industry average (full-service): <strong>{formatPercent(results.industryComparison.industryAverage, 1)}</strong>
              </p>
              <p className={`text-sm font-semibold ${
                results.industryComparison.rating === 'above' 
                  ? 'text-green-700' 
                  : results.industryComparison.rating === 'below'
                  ? 'text-red-700'
                  : 'text-yellow-700'
              }`}>
                {results.industryComparison.rating === 'above' && '✅ Above average - Great job!'}
                {results.industryComparison.rating === 'average' && '➖ Average performance'}
                {results.industryComparison.rating === 'below' && '⚠️ Below average - Review costs'}
              </p>
            </div>

            <ResultCard
              label="Total Revenue"
              value={formatCurrency(results.totalRevenue)}
            />

            <ResultCard
              label="Total Costs"
              value={formatCurrency(results.totalCosts)}
            />

            {results.revenuePerSeat && (
              <ResultCard
                label="Revenue per Seat"
                value={formatCurrency(results.revenuePerSeat)}
                variant="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
