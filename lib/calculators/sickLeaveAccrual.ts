export interface SickLeavePreset {
  name: string
  accrualRateHours: number
  accrualRateBasis: number
  annualCap: number
}

export const STATE_PRESETS: Record<string, SickLeavePreset> = {
  california: { name: 'California', accrualRateHours: 1, accrualRateBasis: 30, annualCap: 48 },
  'new-york-large': { name: 'New York (100+ employees)', accrualRateHours: 1, accrualRateBasis: 30, annualCap: 56 },
  'new-york-small': { name: 'New York (5-99 employees)', accrualRateHours: 1, accrualRateBasis: 30, annualCap: 40 },
  illinois: { name: 'Illinois', accrualRateHours: 1, accrualRateBasis: 40, annualCap: 40 },
}

export interface SickLeaveAccrualInput {
  hoursWorkedPerWeek: number
  accrualRateHours: number
  accrualRateBasis: number
  annualCap: number
  existingBalance: number
  weeksPerYear?: number
}

export interface SickLeaveAccrualOutput {
  hoursPerWeek: number
  hoursPerMonth: number
  hoursPerYear: number
  daysPerYear: number
  effectiveHoursPerYear: number
  effectiveDaysPerYear: number
  weeksToCap: number
  projectedBalance: number
  isCapped: boolean
}

export function calculateSickLeaveAccrual(input: SickLeaveAccrualInput): SickLeaveAccrualOutput {
  const {
    hoursWorkedPerWeek,
    accrualRateHours,
    accrualRateBasis,
    annualCap,
    existingBalance,
    weeksPerYear = 52,
  } = input

  const hoursPerWeek = accrualRateBasis > 0
    ? hoursWorkedPerWeek * (accrualRateHours / accrualRateBasis)
    : 0

  const hoursPerMonth = hoursPerWeek * (weeksPerYear / 12)
  const hoursPerYear = hoursPerWeek * weeksPerYear

  const effectiveHoursPerYear = annualCap > 0 ? Math.min(hoursPerYear, annualCap) : hoursPerYear
  const isCapped = annualCap > 0 && hoursPerYear > annualCap

  const daysPerYear = hoursPerYear / 8
  const effectiveDaysPerYear = effectiveHoursPerYear / 8

  const remainingToCap = annualCap > 0
    ? Math.max(0, annualCap - existingBalance)
    : Infinity

  const weeksToCap = hoursPerWeek > 0
    ? Math.ceil(remainingToCap / hoursPerWeek)
    : Infinity

  const projectedBalance = existingBalance + effectiveHoursPerYear

  return {
    hoursPerWeek,
    hoursPerMonth,
    hoursPerYear,
    daysPerYear,
    effectiveHoursPerYear,
    effectiveDaysPerYear,
    weeksToCap,
    projectedBalance,
    isCapped,
  }
}
