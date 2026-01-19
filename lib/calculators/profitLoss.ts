export interface ProfitLossInput {
  revenue: {
    sales: number
    otherIncome: number
  }
  costOfGoodsSold: {
    materials: number
    labor: number
    shipping: number
  }
  operatingExpenses: {
    salaries: number
    rent: number
    utilities: number
    marketing: number
    insurance: number
    other: number
  }
  interestExpense?: number
  taxRate?: number
}

export interface ProfitLossOutput {
  totalRevenue: number
  totalCOGS: number
  grossProfit: number
  grossMargin: number
  totalOpEx: number
  ebitda: number
  ebit: number
  interestExpense: number
  earningsBeforeTax: number
  taxExpense: number
  netIncome: number
  netMargin: number
  breakdown: {
    cogsPercent: number
    opexPercent: number
    netMarginPercent: number
  }
}

export function calculateProfitLoss(input: ProfitLossInput): ProfitLossOutput {
  const { revenue, costOfGoodsSold, operatingExpenses, interestExpense = 0, taxRate = 25 } = input

  const totalRevenue = revenue.sales + revenue.otherIncome
  const totalCOGS = costOfGoodsSold.materials + costOfGoodsSold.labor + costOfGoodsSold.shipping
  const grossProfit = totalRevenue - totalCOGS
  const grossMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0

  const totalOpEx = Object.values(operatingExpenses).reduce((sum, val) => sum + val, 0)
  
  const ebitda = grossProfit - totalOpEx
  const ebit = ebitda // Same as EBITDA for simplified calc (no depreciation/amortization)
  
  const earningsBeforeTax = ebit - interestExpense
  const taxExpense = earningsBeforeTax > 0 ? earningsBeforeTax * (taxRate / 100) : 0
  const netIncome = earningsBeforeTax - taxExpense
  const netMargin = totalRevenue > 0 ? (netIncome / totalRevenue) * 100 : 0

  return {
    totalRevenue,
    totalCOGS,
    grossProfit,
    grossMargin,
    totalOpEx,
    ebitda,
    ebit,
    interestExpense,
    earningsBeforeTax,
    taxExpense,
    netIncome,
    netMargin,
    breakdown: {
      cogsPercent: totalRevenue > 0 ? (totalCOGS / totalRevenue) * 100 : 0,
      opexPercent: totalRevenue > 0 ? (totalOpEx / totalRevenue) * 100 : 0,
      netMarginPercent: netMargin
    }
  }
}
