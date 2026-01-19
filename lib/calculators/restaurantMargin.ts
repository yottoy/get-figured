export interface RestaurantMarginInput {
  revenue: {
    foodSales: number
    beverageSales: number
    cateringSales: number
  }
  costs: {
    foodCost: number
    beverageCost: number
    laborCost: number
    rent: number
    utilities: number
    marketing: number
    insurance: number
    supplies: number
    other: number
  }
  seatingCapacity?: number
  avgCheckSize?: number
}

export interface RestaurantMarginOutput {
  totalRevenue: number
  totalCosts: number
  netProfit: number
  netMargin: number
  foodCostPercent: number
  beverageCostPercent: number
  laborCostPercent: number
  primeCost: number
  primeCostPercent: number
  revenuePerSeat?: number
  breakEvenRevenue: number
  industryComparison: {
    yourMargin: number
    industryAverage: number
    rating: 'below' | 'average' | 'above'
  }
}

export function calculateRestaurantMargin(input: RestaurantMarginInput): RestaurantMarginOutput {
  const { revenue, costs, seatingCapacity, avgCheckSize } = input

  const totalRevenue = revenue.foodSales + revenue.beverageSales + revenue.cateringSales
  const totalCosts = Object.values(costs).reduce((sum, val) => sum + val, 0)
  
  const netProfit = totalRevenue - totalCosts
  const netMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0

  const foodCostPercent = revenue.foodSales > 0 ? (costs.foodCost / revenue.foodSales) * 100 : 0
  const beverageCostPercent = revenue.beverageSales > 0 ? (costs.beverageCost / revenue.beverageSales) * 100 : 0
  const laborCostPercent = totalRevenue > 0 ? (costs.laborCost / totalRevenue) * 100 : 0
  
  const primeCost = costs.foodCost + costs.beverageCost + costs.laborCost
  const primeCostPercent = totalRevenue > 0 ? (primeCost / totalRevenue) * 100 : 0

  const revenuePerSeat = seatingCapacity ? totalRevenue / seatingCapacity : undefined
  const breakEvenRevenue = totalCosts

  // Industry average for full-service restaurants: 3-5%
  const industryAverage = 4
  let rating: 'below' | 'average' | 'above' = 'average'
  if (netMargin < 3) rating = 'below'
  else if (netMargin > 6) rating = 'above'

  return {
    totalRevenue,
    totalCosts,
    netProfit,
    netMargin,
    foodCostPercent,
    beverageCostPercent,
    laborCostPercent,
    primeCost,
    primeCostPercent,
    revenuePerSeat,
    breakEvenRevenue,
    industryComparison: {
      yourMargin: netMargin,
      industryAverage,
      rating
    }
  }
}
