'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import NumberInput from '@/components/ui/NumberInput'
import PercentInput from '@/components/ui/PercentInput'
import Button from '@/components/ui/Button'
import { generateEstimate, type LineItem } from '@/lib/calculators/estimate'
import { formatCurrency } from '@/lib/utils'

export default function EstimateGenerator() {
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { description: 'Consulting Services', quantity: 10, rate: 150, unit: 'hour', taxable: true }
  ])
  const [discountPercent, setDiscountPercent] = useState(0)
  const [taxPercent, setTaxPercent] = useState(0)

  const clientInfo = { name: 'Client Name', email: 'client@example.com' }
  const yourInfo = { name: 'Your Name', email: 'you@example.com' }

  const results = generateEstimate({
    clientInfo,
    yourInfo,
    lineItems,
    discountPercent,
    taxPercent
  })

  const addLineItem = () => {
    setLineItems([...lineItems, { description: '', quantity: 1, rate: 0, unit: 'hour', taxable: true }])
  }

  const removeLineItem = (index: number) => {
    setLineItems(lineItems.filter((_, i) => i !== index))
  }

  const updateLineItem = (index: number, field: keyof LineItem, value: any) => {
    const newItems = [...lineItems]
    newItems[index] = { ...newItems[index], [field]: value }
    setLineItems(newItems)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Free Estimate Generator - Create Professional Estimates
        </h1>
        <p className="text-lg text-slate-600">
          Generate professional estimates with line items, tax, and discounts. 
          Free estimate generator, no signup required.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Line Items</h2>
              <Button size="sm" onClick={addLineItem}>
                <Plus className="w-4 h-4 mr-1" />
                Add Item
              </Button>
            </div>

            <div className="space-y-4">
              {lineItems.map((item, index) => (
                <div key={index} className="p-4 border border-slate-200 rounded-lg relative">
                  {lineItems.length > 1 && (
                    <button
                      onClick={() => removeLineItem(index)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Description"
                        value={item.description}
                        onChange={(e) => updateLineItem(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <NumberInput
                        label="Qty"
                        value={item.quantity}
                        onChange={(v) => updateLineItem(index, 'quantity', v)}
                        min={0.01}
                        step={0.1}
                      />
                      <CurrencyInput
                        label="Rate"
                        value={item.rate}
                        onChange={(v) => updateLineItem(index, 'rate', v)}
                      />
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Total</label>
                        <div className="text-sm font-mono py-2 px-3 bg-slate-50 rounded-lg">
                          {formatCurrency(item.quantity * item.rate)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="font-semibold mb-4">Adjustments</h3>
            <div className="space-y-4">
              <PercentInput
                label="Discount"
                value={discountPercent}
                onChange={setDiscountPercent}
                max={50}
              />
              <PercentInput
                label="Tax Rate"
                value={taxPercent}
                onChange={setTaxPercent}
                max={15}
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-slate-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">ESTIMATE</h2>
            <p className="text-sm text-slate-600">#{results.estimateNumber}</p>
            <p className="text-xs text-slate-500">Valid until: {results.validUntil}</p>
          </div>

          <div className="space-y-4 mb-6">
            {results.lineItems.map((item, i) => (
              <div key={i} className="flex justify-between text-sm border-b pb-2">
                <div className="flex-1">
                  <div className="font-medium">{item.description}</div>
                  <div className="text-xs text-slate-500">
                    {item.quantity} × {formatCurrency(item.rate)}
                  </div>
                </div>
                <div className="font-mono">{formatCurrency(item.lineTotal)}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-mono">{formatCurrency(results.subtotal)}</span>
            </div>
            {results.discountAmount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount ({discountPercent}%)</span>
                <span className="font-mono">-{formatCurrency(results.discountAmount)}</span>
              </div>
            )}
            {results.taxAmount > 0 && (
              <div className="flex justify-between text-sm">
                <span>Tax ({taxPercent}%)</span>
                <span className="font-mono">{formatCurrency(results.taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold border-t pt-2">
              <span>TOTAL</span>
              <span className="font-mono">{formatCurrency(results.total)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button variant="primary" className="w-full">
              Download PDF
            </Button>
            <Button variant="secondary" className="w-full">
              Copy Shareable Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
