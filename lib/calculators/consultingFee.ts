export interface ConsultingFeeInput {
  projectHours: number
  hourlyRate: number
  feeStructure: 'hourly' | 'fixed' | 'value'
  fixedFeePercent?: number
  valueMultiplier?: number
  expenseAmount?: number
  retainerPercent?: number
}

export interface ConsultingFeeOutput {
  basePrice: number
  adjustedPrice: number
  totalWithExpenses: number
  retainerAmount: number
  remainingBalance: number
  effectiveHourlyRate: number
  paymentSchedule: {
    milestone: string
    amount: number
    percentage: number
  }[]
}

export function calculateConsultingFee(input: ConsultingFeeInput): ConsultingFeeOutput {
  const {
    projectHours,
    hourlyRate,
    feeStructure,
    fixedFeePercent = 10,
    valueMultiplier = 2,
    expenseAmount = 0,
    retainerPercent = 40
  } = input

  const basePrice = projectHours * hourlyRate

  let adjustedPrice = basePrice
  if (feeStructure === 'fixed') {
    adjustedPrice = basePrice * (1 - fixedFeePercent / 100)
  } else if (feeStructure === 'value') {
    adjustedPrice = basePrice * valueMultiplier
  }

  const totalWithExpenses = adjustedPrice + expenseAmount
  const retainerAmount = totalWithExpenses * (retainerPercent / 100)
  const remainingBalance = totalWithExpenses - retainerAmount
  const effectiveHourlyRate = adjustedPrice / projectHours

  const paymentSchedule = [
    {
      milestone: 'Project Start (Retainer)',
      amount: retainerAmount,
      percentage: retainerPercent
    },
    {
      milestone: 'Midpoint Milestone',
      amount: remainingBalance * 0.5,
      percentage: ((remainingBalance * 0.5) / totalWithExpenses) * 100
    },
    {
      milestone: 'Final Delivery',
      amount: remainingBalance * 0.5,
      percentage: ((remainingBalance * 0.5) / totalWithExpenses) * 100
    }
  ]

  return {
    basePrice,
    adjustedPrice,
    totalWithExpenses,
    retainerAmount,
    remainingBalance,
    effectiveHourlyRate,
    paymentSchedule
  }
}
