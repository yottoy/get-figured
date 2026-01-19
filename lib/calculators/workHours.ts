export interface WorkHoursInput {
  clockIn: string // HH:MM format
  clockOut: string // HH:MM format
  lunchBreakMinutes: number
  paidLunch: boolean
  workDays?: number // For weekly calculation
}

export interface WorkHoursOutput {
  totalHours: number
  billableHours: number
  hoursBreakdown: {
    grossHours: number
    lunchHours: number
    netHours: number
  }
  weeklyTotal?: number
  overtimeHours?: number
}

function parseTime(timeStr: string): { hours: number; minutes: number } {
  const [time, period] = timeStr.split(' ')
  let [hours, minutes] = time.split(':').map(Number)
  
  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0
  
  return { hours, minutes }
}

function timeToMinutes(timeStr: string): number {
  const { hours, minutes } = parseTime(timeStr)
  return hours * 60 + minutes
}

export function calculateWorkHours(input: WorkHoursInput): WorkHoursOutput {
  const {
    clockIn,
    clockOut,
    lunchBreakMinutes,
    paidLunch,
    workDays = 1
  } = input

  const clockInMinutes = timeToMinutes(clockIn)
  const clockOutMinutes = timeToMinutes(clockOut)
  
  let totalMinutes = clockOutMinutes - clockInMinutes
  if (totalMinutes < 0) totalMinutes += 24 * 60 // Handle overnight shifts
  
  const grossHours = totalMinutes / 60
  const lunchHours = lunchBreakMinutes / 60
  const netHours = paidLunch ? grossHours : grossHours - lunchHours
  
  const billableHours = netHours
  const weeklyTotal = workDays > 1 ? billableHours * workDays : undefined
  const overtimeHours = weeklyTotal && weeklyTotal > 40 ? weeklyTotal - 40 : undefined

  return {
    totalHours: grossHours,
    billableHours,
    hoursBreakdown: {
      grossHours,
      lunchHours,
      netHours
    },
    weeklyTotal,
    overtimeHours
  }
}
