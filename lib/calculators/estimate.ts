export interface LineItem {
  description: string
  quantity: number
  rate: number
  unit: 'hour' | 'day' | 'item'
  taxable: boolean
}

export interface EstimateInput {
  clientInfo: {
    name: string
    email: string
    company?: string
    address?: string
  }
  yourInfo: {
    name: string
    email: string
    company?: string
    phone?: string
  }
  lineItems: LineItem[]
  discountPercent?: number
  taxPercent?: number
  notes?: string
  validUntil?: Date
}

export interface EstimateOutput {
  subtotal: number
  discountAmount: number
  taxAmount: number
  total: number
  estimateNumber: string
  createdDate: string
  validUntil: string
  lineItems: (LineItem & { lineTotal: number })[]
}

export function generateEstimate(input: EstimateInput): EstimateOutput {
  const {
    lineItems,
    discountPercent = 0,
    taxPercent = 0,
    validUntil
  } = input

  const itemsWithTotals = lineItems.map(item => ({
    ...item,
    lineTotal: item.quantity * item.rate
  }))

  const subtotal = itemsWithTotals.reduce((sum, item) => sum + item.lineTotal, 0)
  const discountAmount = subtotal * (discountPercent / 100)
  const subtotalAfterDiscount = subtotal - discountAmount
  
  const taxableAmount = itemsWithTotals
    .filter(item => item.taxable)
    .reduce((sum, item) => sum + item.lineTotal, 0)
  const taxAmount = (taxableAmount - (taxableAmount * discountPercent / 100)) * (taxPercent / 100)
  
  const total = subtotalAfterDiscount + taxAmount

  const date = new Date()
  const estimateNumber = `EST-${date.toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`
  const createdDate = date.toISOString().split('T')[0]
  const validUntilDate = validUntil || new Date(date.getTime() + 30 * 24 * 60 * 60 * 1000)
  const validUntilStr = validUntilDate.toISOString().split('T')[0]

  return {
    subtotal,
    discountAmount,
    taxAmount,
    total,
    estimateNumber,
    createdDate,
    validUntil: validUntilStr,
    lineItems: itemsWithTotals
  }
}
