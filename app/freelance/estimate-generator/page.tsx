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
            <Button variant="primary" className="w-full" onClick={() => window.print()}>
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Common Examples - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Project Estimate Examples</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'Web Design — 5-page Marketing Site',
              items: ['Discovery & wireframes (8 hrs @ $125)', 'Visual design (16 hrs @ $125)', 'Responsive build (24 hrs @ $125)', 'QA & launch (4 hrs @ $125)'],
              total: '$6,500',
              timeline: '3-4 weeks',
            },
            {
              title: 'Logo & Brand Identity',
              items: ['Brand discovery workshop (4 hrs @ $150)', 'Logo concepts (3 directions, $1,200)', 'Refinement & finalization ($600)', 'Brand guidelines PDF ($800)'],
              total: '$3,200',
              timeline: '2-3 weeks',
            },
            {
              title: 'Custom Development Sprint',
              items: ['Sprint planning (4 hrs @ $150)', 'Backend API work (40 hrs @ $150)', 'Frontend integration (20 hrs @ $150)', 'Testing & deployment (8 hrs @ $150)'],
              total: '$10,800',
              timeline: '2 weeks (1 sprint)',
            },
            {
              title: 'Marketing Consulting Engagement',
              items: ['Audit & strategy (10 hrs @ $200)', 'Channel analysis report ($1,500)', 'Quarterly playbook ($2,500)', 'Implementation review (4 hrs @ $200)'],
              total: '$6,800',
              timeline: '4-6 weeks',
            },
            {
              title: 'SEO Content Package',
              items: ['Keyword research ($800)', '10 long-form articles ($350 ea)', 'Technical SEO audit ($1,200)', 'Internal linking pass ($400)'],
              total: '$5,900',
              timeline: '6-8 weeks',
            },
            {
              title: 'WordPress to Headless Migration',
              items: ['Architecture planning (8 hrs @ $175)', 'Content migration scripts (24 hrs @ $175)', 'Frontend rebuild (60 hrs @ $175)', 'DNS & launch (6 hrs @ $175)'],
              total: '$17,150',
              timeline: '6-8 weeks',
            },
            {
              title: 'Mobile App MVP (iOS + Android)',
              items: ['UX wireframes ($3,000)', 'Visual design ($4,500)', 'React Native build ($25,000)', 'App store submission ($1,500)'],
              total: '$34,000',
              timeline: '10-12 weeks',
            },
            {
              title: 'E-commerce Setup (Shopify)',
              items: ['Theme customization (16 hrs @ $125)', 'Product import & setup ($1,200)', 'Payment & shipping config ($800)', 'Launch & training (4 hrs @ $125)'],
              total: '$4,500',
              timeline: '2-3 weeks',
            },
          ].map((ex, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-2">{ex.title}</p>
              <ul className="text-xs text-slate-600 space-y-1 mb-3">
                {ex.items.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
              <div className="text-sm text-slate-600 space-y-1 border-t pt-2">
                <p>Estimate total: <span className="font-semibold text-slate-800">{ex.total}</span></p>
                <p>Timeline: <span className="font-semibold text-slate-800">{ex.timeline}</span></p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          These examples reflect typical 2026 freelance market rates in the US. Adjust line items and
          rates above to match your specific project, location, and experience level.
        </p>
      </div>
    </div>
  )
}
