export interface ConsultingRateInput {
  desiredSalary: number
  billableHours: number
  overheadPercent: number
  taxPercent: number
  profitMargin: number
}

export interface ConsultingRateOutput {
  hourlyRate: number
  dailyRate: number
  weeklyRate: number
  monthlyRate: number
  annualRevenue: number
  breakEvenRate: number
  recommendedRate: number
}

export function calculateConsultingRate(input: ConsultingRateInput): ConsultingRateOutput {
  const { desiredSalary, billableHours, overheadPercent, taxPercent, profitMargin } = input
  
  // Calculate total costs
  const overheadCost = desiredSalary * (overheadPercent / 100)
  const taxCost = desiredSalary * (taxPercent / 100)
  const totalCosts = desiredSalary + overheadCost + taxCost
  
  // Calculate target revenue with profit margin
  const targetRevenue = totalCosts * (1 + profitMargin / 100)
  
  // Calculate hourly rate
  const hourlyRate = targetRevenue / billableHours
  
  // Calculate break-even rate (no profit margin)
  const breakEvenRate = totalCosts / billableHours
  
  // Round to nearest $5
  const recommendedRate = Math.ceil(hourlyRate / 5) * 5
  
  return {
    hourlyRate,
    dailyRate: hourlyRate * 8,
    weeklyRate: hourlyRate * 40,
    monthlyRate: hourlyRate * 173, // ~40 hours/week * 4.33 weeks/month
    annualRevenue: hourlyRate * billableHours,
    breakEvenRate,
    recommendedRate
  }
}
