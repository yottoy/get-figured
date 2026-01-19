export interface PTOAccrualInput {
  employmentType: 'hourly' | 'salaried'
  accrualBasis: 'hours-worked' | 'pay-period' | 'monthly' | 'upfront'
  accrualRate: number
  payPeriod: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly'
  hoursWorkedPerPeriod?: number
  startDate: Date
  currentDate: Date
  usedHours: number
  maxAccrual?: number
  rollover: boolean
  rolloverCap?: number
}

export interface PTOAccrualOutput {
  earnedToDate: number
  used: number
  currentBalance: number
  projectedYearEnd: number
  accrualSchedule: {
    date: string
    earned: number
    projectedBalance: number
  }[]
  cashOutValue?: number
  rolloverAmount?: number
  forfeitureRisk?: number
}

export function calculatePTOAccrual(input: PTOAccrualInput): PTOAccrualOutput {
  const {
    accrualBasis,
    accrualRate,
    payPeriod,
    hoursWorkedPerPeriod = 0,
    startDate,
    currentDate,
    usedHours,
    maxAccrual = 160,
    rollover,
    rolloverCap = 80
  } = input

  // Calculate days between dates
  const msPerDay = 1000 * 60 * 60 * 24
  const daysBetween = Math.floor((currentDate.getTime() - startDate.getTime()) / msPerDay)

  // Days per pay period
  const daysPerPeriod = {
    weekly: 7,
    biweekly: 14,
    semimonthly: 15.22, // ~365/24
    monthly: 30.44 // ~365/12
  }[payPeriod]

  let earnedToDate = 0

  if (accrualBasis === 'hours-worked' && hoursWorkedPerPeriod) {
    const periodsElapsed = daysBetween / daysPerPeriod
    earnedToDate = periodsElapsed * hoursWorkedPerPeriod * accrualRate
  } else if (accrualBasis === 'pay-period') {
    const periodsElapsed = daysBetween / daysPerPeriod
    earnedToDate = periodsElapsed * accrualRate
  } else if (accrualBasis === 'monthly') {
    const monthsElapsed = daysBetween / 30.44
    earnedToDate = monthsElapsed * accrualRate
  } else if (accrualBasis === 'upfront') {
    earnedToDate = accrualRate // Full year given upfront
  }

  const currentBalance = Math.min(Math.max(0, earnedToDate - usedHours), maxAccrual)
  const forfeitureRisk = Math.max(0, earnedToDate - usedHours - maxAccrual)

  // Project year-end
  const daysInYear = 365
  const periodsInYear = daysInYear / daysPerPeriod
  let projectedYearEnd = 0

  if (accrualBasis === 'pay-period') {
    projectedYearEnd = periodsInYear * accrualRate
  } else if (accrualBasis === 'monthly') {
    projectedYearEnd = 12 * accrualRate
  } else if (accrualBasis === 'upfront') {
    projectedYearEnd = accrualRate
  }

  // Generate accrual schedule for next 6 months
  const accrualSchedule: PTOAccrualOutput['accrualSchedule'] = []
  for (let i = 1; i <= 6; i++) {
    const futureDate = new Date(currentDate)
    futureDate.setMonth(futureDate.getMonth() + i)
    
    const periodsToDate = (i * 30.44) / daysPerPeriod
    const earnedByThen = earnedToDate + (periodsToDate * accrualRate)
    
    accrualSchedule.push({
      date: futureDate.toISOString().split('T')[0],
      earned: periodsToDate * accrualRate,
      projectedBalance: Math.min(earnedByThen - usedHours, maxAccrual)
    })
  }

  return {
    earnedToDate,
    used: usedHours,
    currentBalance,
    projectedYearEnd,
    accrualSchedule,
    rolloverAmount: rollover ? Math.min(currentBalance, rolloverCap) : 0,
    forfeitureRisk
  }
}
