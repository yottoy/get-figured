export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type Industry = 'design' | 'development' | 'writing' | 'marketing' | 'consulting'
export type Location = 'us' | 'europe' | 'asia' | 'latam'

export interface FreelancePricingInput {
  experienceLevel: ExperienceLevel
  industry: Industry
  location: Location
}

export interface FreelancePricingOutput {
  hourlyRate: {
    minimum: number
    average: number
    premium: number
  }
  projectRate: {
    small: number
    medium: number
    large: number
  }
  retainerRate: {
    monthly: number
    commitment: string
  }
  marketComparison: {
    percentile25: number
    percentile50: number
    percentile75: number
  }
}

const rateMatrix: Record<Industry, Record<ExperienceLevel, { min: number; avg: number; max: number }>> = {
  development: {
    beginner: { min: 50, avg: 75, max: 100 },
    intermediate: { min: 75, avg: 125, max: 175 },
    advanced: { min: 125, avg: 175, max: 250 },
    expert: { min: 175, avg: 250, max: 400 }
  },
  design: {
    beginner: { min: 40, avg: 60, max: 80 },
    intermediate: { min: 60, avg: 100, max: 140 },
    advanced: { min: 100, avg: 150, max: 225 },
    expert: { min: 150, avg: 225, max: 350 }
  },
  writing: {
    beginner: { min: 30, avg: 50, max: 75 },
    intermediate: { min: 50, avg: 75, max: 100 },
    advanced: { min: 75, avg: 125, max: 175 },
    expert: { min: 125, avg: 200, max: 300 }
  },
  marketing: {
    beginner: { min: 50, avg: 75, max: 100 },
    intermediate: { min: 75, avg: 125, max: 175 },
    advanced: { min: 125, avg: 175, max: 250 },
    expert: { min: 175, avg: 250, max: 400 }
  },
  consulting: {
    beginner: { min: 75, avg: 125, max: 175 },
    intermediate: { min: 125, avg: 175, max: 250 },
    advanced: { min: 175, avg: 250, max: 350 },
    expert: { min: 250, avg: 350, max: 500 }
  }
}

const locationMultiplier: Record<Location, number> = {
  us: 1.0,
  europe: 0.8,
  asia: 0.5,
  latam: 0.6
}

export function calculateFreelancePricing(input: FreelancePricingInput): FreelancePricingOutput {
  const { experienceLevel, industry, location } = input
  
  const baseRates = rateMatrix[industry][experienceLevel]
  const multiplier = locationMultiplier[location]
  
  const minimum = baseRates.min * multiplier
  const average = baseRates.avg * multiplier
  const premium = baseRates.max * multiplier

  return {
    hourlyRate: {
      minimum,
      average,
      premium
    },
    projectRate: {
      small: average * 15,  // ~15 hours
      medium: average * 60,  // ~60 hours
      large: average * 150   // ~150 hours
    },
    retainerRate: {
      monthly: average * 40, // ~40 hours/month
      commitment: '40 hours per month'
    },
    marketComparison: {
      percentile25: minimum,
      percentile50: average,
      percentile75: premium
    }
  }
}
