export interface OvertimeInput {
  totalHours: number
  hourlyRate: number
  overtimeRule: 'federal' | 'california' | 'custom'
  customRegularCap?: number
  customOvertimeCap?: number
  overtimeMultiplier?: number
  doubleTimeMultiplier?: number
}

export interface OvertimeOutput {
  regularHours: number
  overtimeHours: number
  doubleTimeHours: number
  regularPay: number
  overtimePay: number
  doubleTimePay: number
  totalPay: number
  totalHours: number
  effectiveHourlyRate: number
  breakdown: {
    hoursAtRegular: number
    hoursAtOvertime: number
    hoursAtDoubleTime: number
  }
}

export function calculateOvertime(input: OvertimeInput): OvertimeOutput {
  const {
    totalHours,
    hourlyRate,
    overtimeRule,
    customRegularCap = 40,
    customOvertimeCap = 60,
    overtimeMultiplier = 1.5,
    doubleTimeMultiplier = 2.0
  } = input

  let regularHours = 0
  let overtimeHours = 0
  let doubleTimeHours = 0

  if (overtimeRule === 'federal') {
    // Federal: >40 hours/week = 1.5x
    regularHours = Math.min(totalHours, 40)
    overtimeHours = Math.max(0, totalHours - 40)
    doubleTimeHours = 0
  } else if (overtimeRule === 'california') {
    // California: >8 hours/day = 1.5x, >12 hours/day = 2x
    // For weekly calc: >40 = 1.5x, >60 = 2x (simplified)
    regularHours = Math.min(totalHours, 40)
    const over40 = Math.max(0, totalHours - 40)
    overtimeHours = Math.min(over40, 20) // Hours 41-60
    doubleTimeHours = Math.max(0, over40 - 20) // Hours 61+
  } else if (overtimeRule === 'custom') {
    regularHours = Math.min(totalHours, customRegularCap)
    const overRegular = Math.max(0, totalHours - customRegularCap)
    overtimeHours = Math.min(overRegular, customOvertimeCap - customRegularCap)
    doubleTimeHours = Math.max(0, totalHours - customOvertimeCap)
  }

  const regularPay = regularHours * hourlyRate
  const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier
  const doubleTimePay = doubleTimeHours * hourlyRate * doubleTimeMultiplier
  const totalPay = regularPay + overtimePay + doubleTimePay
  const effectiveHourlyRate = totalHours > 0 ? totalPay / totalHours : 0

  return {
    regularHours,
    overtimeHours,
    doubleTimeHours,
    regularPay,
    overtimePay,
    doubleTimePay,
    totalPay,
    totalHours,
    effectiveHourlyRate,
    breakdown: {
      hoursAtRegular: regularHours,
      hoursAtOvertime: overtimeHours,
      hoursAtDoubleTime: doubleTimeHours
    }
  }
}
