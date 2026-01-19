export interface MarkupMarginInput {
  mode: 'markup-to-margin' | 'margin-to-markup' | 'from-cost-price'
  inputPercent?: number
  cost?: number
  revenue?: number
}

export interface MarkupMarginOutput {
  markupPercent: number
  marginPercent: number
  difference: number
  explanation: string
  examples?: {
    costAmount: number
    revenueAmount: number
    profitAmount: number
  }
}

export function calculateMarkupMargin(input: MarkupMarginInput): MarkupMarginOutput {
  const { mode, inputPercent = 0, cost = 100, revenue = 0 } = input

  let markupPercent = 0
  let marginPercent = 0

  if (mode === 'markup-to-margin') {
    markupPercent = inputPercent
    marginPercent = (markupPercent / (100 + markupPercent)) * 100
  } else if (mode === 'margin-to-markup') {
    marginPercent = inputPercent
    markupPercent = (marginPercent / (100 - marginPercent)) * 100
  } else if (mode === 'from-cost-price' && cost > 0 && revenue > 0) {
    markupPercent = ((revenue - cost) / cost) * 100
    marginPercent = ((revenue - cost) / revenue) * 100
  }

  const difference = Math.abs(markupPercent - marginPercent)

  const costAmount = cost
  const revenueAmount = mode === 'markup-to-margin' 
    ? cost * (1 + markupPercent / 100)
    : mode === 'margin-to-markup'
    ? cost / (1 - marginPercent / 100)
    : revenue
  const profitAmount = revenueAmount - costAmount

  const explanation = `A ${markupPercent.toFixed(1)}% markup equals a ${marginPercent.toFixed(1)}% margin. ` +
    `Markup is calculated on cost, while margin is calculated on price. ` +
    `That's why a ${markupPercent.toFixed(0)}% markup is NOT the same as a ${marginPercent.toFixed(0)}% margin.`

  return {
    markupPercent,
    marginPercent,
    difference,
    explanation,
    examples: {
      costAmount,
      revenueAmount,
      profitAmount
    }
  }
}

export interface MarkupCalculatorInput {
  cost: number
  sellingPrice?: number
  desiredMarkupPercent?: number
  desiredMarginPercent?: number
}

export interface MarkupCalculatorOutput {
  markupPercent: number
  marginPercent: number
  profit: number
  sellingPrice: number
}

export function calculateMarkup(input: MarkupCalculatorInput): MarkupCalculatorOutput {
  const { cost, sellingPrice, desiredMarkupPercent, desiredMarginPercent } = input

  let finalSellingPrice = sellingPrice || 0
  
  if (desiredMarkupPercent !== undefined && !sellingPrice) {
    finalSellingPrice = cost * (1 + desiredMarkupPercent / 100)
  } else if (desiredMarginPercent !== undefined && !sellingPrice) {
    finalSellingPrice = cost / (1 - desiredMarginPercent / 100)
  }

  const profit = finalSellingPrice - cost
  const markupPercent = (profit / cost) * 100
  const marginPercent = (profit / finalSellingPrice) * 100

  return {
    markupPercent,
    marginPercent,
    profit,
    sellingPrice: finalSellingPrice
  }
}
