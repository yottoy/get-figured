export interface ContractorRateInput {
  w2Salary: number
  healthInsurance: number
  retirement401k: number
  paidTimeOff: number
  otherBenefits: number
  selfEmploymentTax: number
  businessExpenses: number
  targetProfitMargin: number
  billableHoursYear: number
}

export interface ContractorRateOutput {
  minimumRate: number
  recommendedRate: number
  hourlyBreakdown: {
    baseSalary: number
    benefits: number
    taxes: number
    expenses: number
    profit: number
  }
  annualComparison: {
    w2Total: number
    contractorGross: number
    contractorNet: number
  }
  breakEvenRate: number
}

export function calculateContractorRate(input: ContractorRateInput): ContractorRateOutput {
  const {
    w2Salary,
    healthInsurance,
    retirement401k,
    paidTimeOff,
    otherBenefits,
    selfEmploymentTax,
    businessExpenses,
    targetProfitMargin,
    billableHoursYear
  } = input

  // Calculate PTO value
  const ptoValue = (w2Salary / 260) * paidTimeOff
  
  // Total benefits
  const totalBenefits = healthInsurance + retirement401k + ptoValue + otherBenefits
  
  // Total compensation
  const totalCompensation = w2Salary + totalBenefits
  
  // Additional costs as contractor
  const additionalTax = totalCompensation * (selfEmploymentTax / 100)
  const expenses = totalCompensation * (businessExpenses / 100)
  const desiredProfit = totalCompensation * (targetProfitMargin / 100)
  
  // Target revenue
  const targetRevenue = totalCompensation + additionalTax + expenses + desiredProfit
  
  // Hourly rates
  const hourlyRate = targetRevenue / billableHoursYear
  const minimumRate = (totalCompensation + additionalTax) / billableHoursYear
  const recommendedRate = Math.ceil(hourlyRate / 5) * 5
  
  return {
    minimumRate,
    recommendedRate,
    hourlyBreakdown: {
      baseSalary: w2Salary / billableHoursYear,
      benefits: totalBenefits / billableHoursYear,
      taxes: additionalTax / billableHoursYear,
      expenses: expenses / billableHoursYear,
      profit: desiredProfit / billableHoursYear
    },
    annualComparison: {
      w2Total: totalCompensation,
      contractorGross: hourlyRate * billableHoursYear,
      contractorNet: w2Salary
    },
    breakEvenRate: minimumRate
  }
}
