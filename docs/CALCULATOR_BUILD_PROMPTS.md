# Business Tools - Calculator Build Prompts

Each prompt includes: function name, inputs, outputs, validation rules, and UI specifications.

---

## PHASE 1: FREELANCE/CONSULTING TOOLS

### 1. Consulting Rate Calculator
**KD: 2 | Vol: 170 | CPC: $2.12**

**Purpose:** Calculate hourly/daily consulting rates based on desired salary and business costs.

**Function Signature:**
```typescript
calculateConsultingRate({
  desiredSalary: number,      // Annual income goal
  billableHours: number,       // Hours per year you can bill (1000-2080)
  overheadPercent: number,     // Business expenses as % (15-40%)
  taxPercent: number,          // Self-employment tax % (25-35%)
  profitMargin: number         // Desired profit margin % (10-30%)
}): {
  hourlyRate: number,
  dailyRate: number,           // hourlyRate * 8
  weeklyRate: number,          // hourlyRate * 40
  monthlyRate: number,         // hourlyRate * 173
  annualRevenue: number,       // To achieve desired salary
  breakEvenRate: number,       // Minimum to cover costs
  recommendedRate: number      // Rounded to nearest $5
}
```

**Validation:**
- desiredSalary: $20,000 - $500,000
- billableHours: 1,000 - 2,080 (50-100% of 40hr/wk year)
- overheadPercent: 15-40%
- taxPercent: 25-35%
- profitMargin: 10-30%

**Default Values:**
- desiredSalary: $100,000
- billableHours: 1,560 (75% utilization = 30 hrs/wk)
- overheadPercent: 25%
- taxPercent: 30%
- profitMargin: 20%

**Calculation Logic:**
```
totalCosts = desiredSalary + (desiredSalary * overheadPercent) + (desiredSalary * taxPercent)
targetRevenue = totalCosts + (totalCosts * profitMargin)
hourlyRate = targetRevenue / billableHours
```

**UI Elements:**
- Input: 5 sliders/number inputs with $ or % formatting
- Output: Large card showing hourly rate (primary), smaller cards for daily/weekly/monthly
- Visual: Bar chart comparing salary vs overhead vs taxes vs profit
- Tooltip: "Billable hours" with explanation of utilization

**Content Hooks:**
- "Most consultants charge $150-300/hr"
- "75% utilization is realistic for established consultants"
- "Don't forget to account for taxes and overhead"

---

### 2. Consulting Fee Calculator
**KD: 7 | Vol: 140 | CPC: $1.06**

**Purpose:** Calculate total project fee based on scope and rates.

**Function Signature:**
```typescript
calculateConsultingFee({
  projectHours: number,        // Estimated hours
  hourlyRate: number,          // Rate per hour
  feeStructure: 'hourly' | 'fixed' | 'value',
  fixedFeePercent?: number,    // Discount for fixed (5-20%)
  valueMultiplier?: number,    // Premium for value-based (1.5-3x)
  expenseAmount?: number,      // Additional expenses
  retainerPercent?: number     // Upfront payment (30-50%)
}): {
  basePrice: number,
  adjustedPrice: number,       // After structure adjustment
  totalWithExpenses: number,
  retainerAmount: number,
  remainingBalance: number,
  effectiveHourlyRate: number, // For value-based
  paymentSchedule: {
    milestone: string,
    amount: number,
    percentage: number
  }[]
}
```

**Validation:**
- projectHours: 1-1,000
- hourlyRate: $50-500
- fixedFeePercent: 5-20% (discount)
- valueMultiplier: 1.5-3.0x
- expenseAmount: $0-50,000
- retainerPercent: 30-50%

**Default Values:**
- projectHours: 40
- hourlyRate: $150
- feeStructure: 'fixed'
- fixedFeePercent: 10%
- retainerPercent: 40%

**Calculation Logic:**
```
basePrice = projectHours * hourlyRate

if (feeStructure === 'fixed') {
  adjustedPrice = basePrice * (1 - fixedFeePercent/100)
} else if (feeStructure === 'value') {
  adjustedPrice = basePrice * valueMultiplier
}

totalWithExpenses = adjustedPrice + expenseAmount
retainerAmount = totalWithExpenses * (retainerPercent/100)
```

**UI Elements:**
- Input: Radio buttons for fee structure, conditional fields based on selection
- Output: Total fee (large), payment schedule table
- Visual: Pie chart showing retainer vs remaining vs expenses
- Toggle: "Show payment schedule" for milestone breakdown

**Content Hooks:**
- "Fixed-price projects reduce billing time by 30%"
- "Value-based pricing can 2-3x your income"
- "Always charge a retainer to qualify clients"

---

### 3. Freelance Pricing Calculator
**KD: 7 | Vol: 140 | CPC: $5.24**

**Purpose:** Suggest rates based on experience, industry, and project type.

**Function Signature:**
```typescript
calculateFreelancePricing({
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert',
  industry: 'design' | 'development' | 'writing' | 'marketing' | 'consulting',
  projectType: 'hourly' | 'project' | 'retainer',
  location: 'us' | 'europe' | 'asia' | 'latam',
  specialization: string       // Optional: "React", "SEO", etc.
}): {
  hourlyRate: {
    minimum: number,
    average: number,
    premium: number
  },
  projectRate: {
    small: number,             // 10-20 hours
    medium: number,            // 40-80 hours
    large: number              // 100+ hours
  },
  retainerRate: {
    monthly: number,
    commitment: string         // "10 hours/month", etc.
  },
  marketComparison: {
    percentile25: number,
    percentile50: number,
    percentile75: number
  },
  confidence: 'low' | 'medium' | 'high'
}
```

**Rate Lookup Tables:**
```typescript
const rateMatrix = {
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
  // ... etc
}

const locationMultiplier = {
  us: 1.0,
  europe: 0.8,
  asia: 0.5,
  latam: 0.6
}
```

**UI Elements:**
- Input: Dropdown selects for category fields
- Output: Range slider showing min-avg-premium rates
- Visual: Bar chart comparing your rates to market percentiles
- Toggle: "Show regional breakdown" for location-adjusted rates

**Content Hooks:**
- "Expert developers charge $175-400/hr"
- "Specialized skills command 30-50% premium"
- "Location affects rates less for remote work"

---

### 4. Contractor Rate Calculator
**KD: 12 | Vol: 90 | CPC: $4.89**

**Purpose:** Convert W2 salary to contractor (1099) hourly rate.

**Function Signature:**
```typescript
calculateContractorRate({
  w2Salary: number,            // Current/desired W2 salary
  w2Benefits: {
    healthInsurance: number,   // Annual value
    retirement401k: number,    // Employer match value
    paidTimeOff: number,       // Days per year (value calculated)
    other: number              // Other benefits
  },
  selfEmploymentTax: number,   // 15.3% (default)
  businessExpenses: number,    // % of revenue (10-20%)
  targetProfitMargin: number,  // % (15-25%)
  billableHoursYear: number    // 1500-1900
}): {
  minimumRate: number,         // Just covers W2 equivalent
  recommendedRate: number,     // With profit margin
  hourlyBreakdown: {
    baseSalary: number,
    benefits: number,
    taxes: number,
    expenses: number,
    profit: number
  },
  annualComparison: {
    w2Total: number,
    contractorGross: number,
    contractorNet: number
  },
  breakEvenRate: number
}
```

**Validation:**
- w2Salary: $40,000 - $300,000
- healthInsurance: $6,000 - $25,000/year
- retirement401k: 3-10% of salary
- paidTimeOff: 10-30 days
- selfEmploymentTax: 15.3% (fixed)
- businessExpenses: 10-20%
- targetProfitMargin: 15-25%
- billableHoursYear: 1,500 - 1,900

**Default Values:**
- w2Salary: $100,000
- healthInsurance: $12,000
- retirement401k: $6,000 (6% match)
- paidTimeOff: 20 days ($3,846 value)
- businessExpenses: 15%
- targetProfitMargin: 20%
- billableHoursYear: 1,680 (32 hrs/wk)

**Calculation Logic:**
```
ptoValue = (w2Salary / 260) * paidTimeOff
totalBenefits = healthInsurance + retirement401k + ptoValue + other
totalCompensation = w2Salary + totalBenefits

additionalTax = totalCompensation * selfEmploymentTax
expenses = totalCompensation * (businessExpenses / 100)
desiredProfit = totalCompensation * (targetProfitMargin / 100)

targetRevenue = totalCompensation + additionalTax + expenses + desiredProfit
hourlyRate = targetRevenue / billableHoursYear
```

**UI Elements:**
- Input: W2 salary (large field), benefits breakdown (collapsible section)
- Output: Side-by-side comparison (W2 vs Contractor)
- Visual: Stacked bar chart showing rate components
- Tooltip: "Why 1.5-2x multiplier?" explanation

**Content Hooks:**
- "Contractors typically charge 1.5-2x their W2 rate"
- "Don't forget: you pay both sides of payroll tax (15.3%)"
- "Health insurance alone costs $12-20K/year"

---

### 5. Estimate Generator
**KD: 15 | Vol: 110 | CPC: $8.14**

**Purpose:** Create professional estimates with line items and client details.

**Function Signature:**
```typescript
generateEstimate({
  clientInfo: {
    name: string,
    email: string,
    company?: string,
    address?: string
  },
  yourInfo: {
    name: string,
    email: string,
    company?: string,
    phone?: string,
    logo?: string              // Optional logo URL
  },
  lineItems: Array<{
    description: string,
    quantity: number,
    rate: number,
    unit: 'hour' | 'day' | 'item',
    taxable: boolean
  }>,
  discountPercent?: number,
  taxPercent?: number,
  notes?: string,              // Terms, payment info
  validUntil?: Date            // Estimate expiration
}): {
  subtotal: number,
  discountAmount: number,
  taxAmount: number,
  total: number,
  estimateNumber: string,      // Auto-generated
  createdDate: string,
  validUntil: string,
  htmlOutput: string,          // For preview
  pdfBlob: Blob,               // For download
  shareableUrl: string         // URL with encoded params
}
```

**Validation:**
- clientInfo.name: Required, 2-100 chars
- lineItems: Min 1, max 50 items
- quantity: 0.01 - 10,000
- rate: $0.01 - $100,000
- discountPercent: 0-50%
- taxPercent: 0-15%
- validUntil: 7-90 days from today

**Default Values:**
- discountPercent: 0
- taxPercent: 0 (location-dependent)
- validUntil: 30 days
- estimateNumber: EST-{YYYYMMDD}-{4-digit-random}

**Calculation Logic:**
```
lineTotal = quantity * rate
subtotal = sum of all lineTotals
discountAmount = subtotal * (discountPercent / 100)
taxableAmount = sum of taxable lineTotals - discountAmount
taxAmount = taxableAmount * (taxPercent / 100)
total = subtotal - discountAmount + taxAmount
```

**UI Elements:**
- Input: Form with client/your info, dynamic line item rows (add/remove)
- Output: Live preview of estimate (styled as PDF would look)
- Actions: Download PDF, Copy shareable link, Email to client
- Toggle: "Include terms/notes" expandable section

**PDF Template:**
```
┌────────────────────────────────────────┐
│ [Your Logo]              ESTIMATE      │
│                          #EST-20250118 │
│ Your Name                               │
│ your@email.com          Date: 1/18/25  │
│ (555) 123-4567          Valid: 2/17/25 │
├────────────────────────────────────────┤
│ BILL TO:                                │
│ Client Name                             │
│ client@email.com                        │
├────────────────────────────────────────┤
│ DESCRIPTION    QTY  RATE     TOTAL     │
│ Item 1         10   $50.00   $500.00   │
│ Item 2         5    $100.00  $500.00   │
│                                         │
│                      Subtotal: $1000.00│
│                      Discount: -$100.00│
│                      Tax (8%): $72.00  │
│                      ──────────────────│
│                      TOTAL:    $972.00 │
├────────────────────────────────────────┤
│ NOTES:                                  │
│ Payment terms: Net 30                   │
│ 50% deposit required to start           │
└────────────────────────────────────────┘
```

**Content Hooks:**
- "Professional estimates win more clients"
- "Include payment terms to avoid confusion"
- "Estimates should expire to create urgency"

---

### 6. Contractor Hourly Rate Calculator
**KD: 12 | Vol: 90 | CPC: $2.75**

**Note:** This is similar to #4 (Contractor Rate Calculator) but may emphasize different aspects. Consider combining or differentiating clearly.

**Function Signature:**
Same as Contractor Rate Calculator, but UI may emphasize hourly comparison more prominently.

---

### 7. Proforma Invoice Generator
**KD: 15 | Vol: 70 | CPC: $5.33**

**Purpose:** Generate proforma invoices (preliminary bill of sale before goods/services delivered).

**Function Signature:**
```typescript
generateProformaInvoice({
  // Similar to estimate generator but:
  invoiceType: 'proforma',
  customsInfo?: {            // For international shipments
    harmonizedCode: string,
    countryOfOrigin: string,
    weight: number
  },
  shippingDetails?: {
    method: string,
    carrier: string,
    trackingNumber: string
  },
  // ... rest similar to estimate generator
}): {
  // Similar outputs to estimate
  proformaNumber: string,    // PRO-{date}-{random}
  expiryDate: string,
  termsAndConditions: string
}
```

**Key Differences from Regular Estimate:**
- Used for customs/international shipping
- Not a demand for payment (informational)
- Includes HS codes, country of origin
- Common in import/export

**UI Elements:**
- Toggle: "International shipping" (shows customs fields)
- Watermark: "PROFORMA INVOICE - NOT A TAX INVOICE"

---

### 8. Invoice Generator Google Docs
**KD: 20 | Vol: 30 | CPC: $4.34**

**Purpose:** Generate invoice that can be opened/edited in Google Docs.

**Function Signature:**
```typescript
generateGoogleDocsInvoice({
  // Same inputs as estimate generator
}): {
  googleDocsUrl: string,     // Creates doc, returns shareable link
  docId: string,
  pdfDownloadUrl: string,
  // ... other outputs
}
```

**Technical Implementation:**
- Use Google Docs API (requires user OAuth)
- Alternative: Generate HTML that looks like Google Docs
- Simpler: Create downloadable .docx file

**UI Elements:**
- Button: "Open in Google Docs"
- Alternative: "Download as .docx for Google Docs"
- Instructions: How to upload to Google Drive

---

### 9. Work Hours Calculator with Lunch Break
**KD: 20 | Vol: 70**

**Purpose:** Calculate total work hours accounting for unpaid lunch breaks.

**Function Signature:**
```typescript
calculateWorkHoursWithLunch({
  clockIn: string,           // "09:00 AM"
  clockOut: string,          // "05:30 PM"
  lunchBreakMinutes: number, // 30, 45, 60 typical
  paidLunch: boolean,        // Is lunch paid?
  workDays?: string[]        // Mon-Fri for weekly calc
}): {
  totalHours: number,        // Including lunch if paid
  billableHours: number,     // Excluding lunch if unpaid
  hoursBreakdown: {
    grossHours: number,      // Clock out - clock in
    lunchHours: number,      // Break time
    netHours: number         // Actual work time
  },
  weeklyTotal?: number,      // If multiple days
  overtimeHours?: number     // If >40 hours
}
```

**Validation:**
- clockIn before clockOut
- lunchBreakMinutes: 0-120
- Work hours per day: <24

**Default Values:**
- clockIn: "9:00 AM"
- clockOut: "5:00 PM"
- lunchBreakMinutes: 30
- paidLunch: false

**Calculation:**
```
grossHours = clockOut - clockIn
netHours = paidLunch ? grossHours : grossHours - (lunchBreakMinutes / 60)
```

**UI Elements:**
- Time pickers for clock in/out
- Toggle: "Paid lunch break"
- Toggle: "Calculate weekly total" (shows 5-day entry)

---

### 10. Calculate Overtime Hours
**KD: 21 | Vol: 90 | CPC: $4.47**

**Purpose:** Calculate overtime pay based on hours worked and overtime rules.

**Function Signature:**
```typescript
calculateOvertime({
  regularHours: number,      // Hours at base rate
  overtimeHours: number,     // Hours over 40
  doubleTimeHours: number,   // Hours over threshold
  hourlyRate: number,
  overtimeMultiplier: number, // 1.5x typical
  doubleTimeMultiplier: number, // 2x typical
  weeklyHoursCap: number     // 40 (standard), 8 (daily CA)
}): {
  regularPay: number,
  overtimePay: number,
  doubleTimePay: number,
  totalPay: number,
  totalHours: number,
  effectiveHourlyRate: number, // Total pay / total hours
  breakdown: {
    hoursAtRegular: number,
    hoursAtOvertime: number,
    hoursAtDoubleTime: number
  }
}
```

**Auto-calculation mode:**
```typescript
calculateOvertimeAuto({
  totalHours: number,        // 50 hours worked
  hourlyRate: number,
  overtimeRule: 'federal' | 'california' | 'custom',
}): {
  // Automatically calculates OT based on rules
  regularHours: number,      // 40
  overtimeHours: number,     // 10
  doubleTimeHours: number,   // 0 (unless CA daily rule)
  // ... rest of outputs
}
```

**Overtime Rules:**
- Federal: >40 hours/week = 1.5x
- California: >8 hours/day = 1.5x, >12 hours/day = 2x
- Custom: User sets thresholds

**UI Elements:**
- Radio: "Federal" / "California" / "Custom"
- Input mode toggle: "Enter hours" vs "Calculate from total"
- Visual: Stacked bar (regular | OT | double time)

---

### 11. Restaurant Profit Margin Calculator
(Already covered in Phase 3, now moved to Phase 1)
See previous detailed spec.

---

### 12. Profit and Loss Calculator
(Already covered in Phase 3, now moved to Phase 1)
See previous detailed spec.

---

### 13. Markup Percentage Calculator
(Already covered in Phase 3, now moved to Phase 1)
See previous detailed spec.

---

### 14. Calculate Margin from Markup
**KD: 23 | Vol: 50 | CPC: $5.37**

**Purpose:** Convert markup percentage to profit margin percentage (and vice versa).

**Function Signature:**
```typescript
convertMarkupMargin({
  mode: 'markup-to-margin' | 'margin-to-markup',
  inputPercent: number,
  cost?: number,             // Optional for dollar calculations
  revenue?: number           // Optional
}): {
  markupPercent: number,
  marginPercent: number,
  difference: number,        // How different they are
  explanation: string,       // Why they differ
  examples?: {               // If cost/revenue provided
    costAmount: number,
    revenueAmount: number,
    profitAmount: number
  }
}
```

**Key Formulas:**
```
Markup to Margin: margin = markup / (1 + markup/100)
Margin to Markup: markup = margin / (1 - margin/100)
```

**Examples:**
- 50% markup = 33.3% margin
- 100% markup = 50% margin
- 33.3% margin = 50% markup

**Validation:**
- Markup: 0-1000%
- Margin: 0-99.9% (can't be 100%)

**UI Elements:**
- Toggle: "Markup → Margin" vs "Margin → Markup"
- Large display showing both percentages
- Visual: Side-by-side comparison
- Educational: "Why they're different" explanation

**Content Hook:**
- "Many businesses confuse markup and margin"
- "A 50% markup is NOT a 50% margin"
- "Retail typically uses markup, finance uses margin"

---

## PHASE 1 BUILD PRIORITY

### Week 1: Core Freelance (Most Important)
1. Consulting Rate Calculator (KD 2)
2. Consulting Fee Calculator (KD 7)
3. Freelance Pricing Calculator (KD 7)

### Week 2: Contractor Tools
4. Contractor Rate Calculator (KD 12)
5. Contractor Hourly Rate Calculator (KD 12)
6. Estimate Generator (KD 15)

### Week 3: HR Foundation  
7. PTO Calculator Hourly (KD 12)
8. Time Off Accrual (KD 16)
9. Vacation Accrual (KD 18)

### Week 4: HR Completion
10. Sick Leave Accrual (KD 19)
11. PTO Accrual (KD 20) ⭐ HIGH VOLUME

### Week 5: Time Tools
12. Work Hours with Lunch (KD 20)
13. Calculate Overtime (KD 21)

### Week 6: Invoicing
14. Proforma Invoice (KD 15)
15. Invoice Generator Google Docs (KD 20)

### Week 7: Finance Core
16. Markup Percentage (KD 23)
17. Margin from Markup (KD 23)

### Week 8: Finance Advanced
18. Restaurant Profit Margin (KD 21)
19. Profit and Loss (KD 23)

---

## BUILD NOTES

### Reusable Components Priority
Build these FIRST (Week 0):
1. `<CurrencyInput />` - Used in 15+ calculators
2. `<PercentInput />` - Used in 10+ calculators
3. `<TimeInput />` - Used in time calculators
4. `<ResultCard />` - Used in all calculators
5. `<ComparisonChart />` - Used in 8+ calculators

### Calculator Complexity Tiers

**Simple (2-3 hours):**
- Margin from Markup
- Work Hours with Lunch
- Markup Percentage

**Medium (4-5 hours):**
- Consulting Rate
- Contractor Rate
- PTO calculators
- Calculate Overtime

**Complex (6-8 hours):**
- Estimate Generator
- Proforma Invoice Generator
- Invoice Generator Google Docs
- Profit and Loss
- Restaurant Profit Margin

### Testing Strategy
- Unit tests for all calculation functions
- Integration tests for form validation
- Manual testing on real devices (iOS Safari, Android Chrome)
- Calculation accuracy: compare with known tools
- Performance: <100ms calculation time

---

## CONTENT STRATEGY FOR PHASE 1

### Freelance Tools Content
**Target Audience:** New freelancers, consultants
**Tone:** Encouraging, educational
**Key Phrases:**
- "Don't undercharge"
- "Know your worth"
- "Profitable freelancing"

### HR/PTO Tools Content  
**Target Audience:** HR managers, employees
**Tone:** Professional, compliance-focused
**Key Phrases:**
- "Stay compliant"
- "Track accurately"
- "Employee benefits"

### Time Tools Content
**Target Audience:** Hourly workers, managers
**Tone:** Practical, straightforward
**Key Phrases:**
- "Accurate timekeeping"
- "Overtime compliance"
- "Fair compensation"

### Finance Tools Content
**Target Audience:** Small business owners
**Tone:** Business-focused, data-driven
**Key Phrases:**
- "Improve margins"
- "Profitability analysis"
- "Business metrics"

---

## INTERNAL LINKING STRATEGY

### Hub Pages (Create These)
1. `/freelance/` - Hub for all freelance tools
2. `/hr/` - Hub for all HR/PTO tools
3. `/time/` - Hub for time tracking tools
4. `/finance/` - Hub for finance tools

### Link Flow
Homepage → Category Hubs → Individual Calculators

**Example Flow:**
Homepage "Freelance Tools" → 
/freelance/ hub page with all 8 tools →
Individual calculator pages

Each calculator links to:
- Its category hub
- 3-4 related calculators
- Homepage

---



### 6. PTO Calculator for Hourly Employees
**KD: 12 | Vol: 90**

**Function Signature:**
```typescript
calculateHourlyPTO({
  hoursWorked: number,         // Hours worked this period
  accrualRate: number,         // PTO hours per X hours worked
  accrualPer: number,          // X (typically 40, 80, or 160)
  hourlyWage: number,          // For cash value
  currentBalance?: number      // Existing PTO balance
}): {
  ptoEarned: number,           // This period
  cashValue: number,           // PTO earned * wage
  newBalance: number,          // Current + earned
  projectedAnnual: number,     // Based on current rate
  percentOfSalary: number      // PTO value vs annual pay
}
```

**Validation:**
- hoursWorked: 0-2,080/year
- accrualRate: 0.01-8 hours per period
- accrualPer: 40, 80, 160 (common pay periods)
- hourlyWage: $7.25-200
- currentBalance: 0-500 hours

**Default Values:**
- hoursWorked: 80 (2 weeks)
- accrualRate: 1 hour per 40 worked (common)
- accrualPer: 40
- hourlyWage: $25
- currentBalance: 20 hours

**Calculation:**
```
ptoEarned = (hoursWorked / accrualPer) * accrualRate
cashValue = ptoEarned * hourlyWage
newBalance = currentBalance + ptoEarned
projectedAnnual = (2080 / accrualPer) * accrualRate
```

**UI Elements:**
- Input: Hours worked, accrual policy dropdowns
- Output: PTO earned (hours + cash), projected annual
- Visual: Progress bar to next PTO milestone
- Toggle: "Use custom accrual rate" vs preset policies

---

### 7. Time Off Accrual Calculator
**KD: 16 | Vol: 480 | CPC: $2.92**

**Function Signature:**
```typescript
calculateTimeOffAccrual({
  accrualMethod: 'hourly' | 'biweekly' | 'monthly' | 'annual',
  accrualAmount: number,       // Hours earned per period
  startDate: Date,             // Employment start date
  currentDate: Date,
  maxAccrual?: number,         // Cap on balance
  useItOrLose?: boolean,       // Expires annually?
  carryoverLimit?: number      // Max hours carried to next year
}): {
  totalAccrued: number,
  currentBalance: number,      // After any use/expiry
  accrualSchedule: Array<{
    date: string,
    earned: number,
    balance: number
  }>,
  daysAvailable: number,       // Balance / 8
  monthsToMaxCap: number,
  expirationDate?: string,     // If use-it-or-lose
  carryoverAllowed: number
}
```

**Validation:**
- accrualAmount: 0-16 hours per period
- startDate: Past date within 20 years
- maxAccrual: 0-500 hours
- carryoverLimit: 0-200 hours

**Default Values:**
- accrualMethod: 'biweekly'
- accrualAmount: 4 hours per pay period
- startDate: 1 year ago
- maxAccrual: 160 hours (4 weeks)
- carryoverLimit: 80 hours

**Calculation:**
```
periodsElapsed = daysBetween(startDate, currentDate) / daysPerPeriod
totalAccrued = periodsElapsed * accrualAmount
currentBalance = min(totalAccrued, maxAccrual)

if (useItOrLose && isNewYear) {
  currentBalance = min(currentBalance, carryoverLimit)
}
```

**UI Elements:**
- Input: Accrual policy (dropdown), start date picker
- Output: Current balance (large), days available
- Visual: Line chart showing accrual over time, cap line
- Calendar: Visual representation of accrued days

---

### 8. Vacation Accrual Calculator
**KD: 18 | Vol: 590 | CPC: $8.89**

**Function Signature:**
```typescript
calculateVacationAccrual({
  accrualPolicy: {
    type: 'hours-worked' | 'pay-period' | 'anniversary',
    rate: number,              // Hours per unit
    unit: 'hour' | 'payperiod' | 'month' | 'year'
  },
  employmentStatus: 'full-time' | 'part-time',
  weeklyHours?: number,        // For part-time
  yearsOfService: number,      // Affects accrual rate in some policies
  salaryEquivalent?: number,   // For cash value calculation
  currentBalance: number
}): {
  annualAccrual: number,       // Total hours per year
  accrualPerPayPeriod: number, // For biweekly pay
  currentBalance: number,
  cashValue: number,           // If cashed out today
  vacationDays: number,        // Balance / 8
  weeksAvailable: number,      // Balance / 40
  nextMilestone: {
    date: string,
    balance: number
  },
  comparison: {               // Compared to average
    percentileRank: number,
    industryAverage: number
  }
}
```

**Validation:**
- accrualRate: 0-10 hours per unit
- weeklyHours: 1-40 (if part-time)
- yearsOfService: 0-50
- salaryEquivalent: $20,000-500,000
- currentBalance: 0-500 hours

**Default Values:**
- accrualPolicy: 'pay-period', 4 hours biweekly
- employmentStatus: 'full-time'
- yearsOfService: 2
- currentBalance: 40 hours

**Tiered Accrual Example:**
```typescript
const tierRates = {
  '0-1': 4,    // 4 hrs biweekly = 2 weeks/year
  '2-5': 6,    // 6 hrs biweekly = 3 weeks/year
  '5+': 8      // 8 hrs biweekly = 4 weeks/year
}
```

**UI Elements:**
- Input: Accrual policy (preset or custom), years of service
- Output: Annual days, current balance, cash value
- Visual: Gauge showing balance relative to annual accrual
- Table: Accrual rate by tenure (if tiered)

---

### 9. PTO Accrual Calculator
**KD: 20 | Vol: 1,900 | CPC: $2.92** ⭐ HIGHEST VOLUME

**Function Signature:**
```typescript
calculatePTOAccrual({
  employmentType: 'hourly' | 'salaried',
  accrualBasis: 'hours-worked' | 'pay-period' | 'monthly' | 'upfront',
  accrualRate: number,
  payPeriod: 'weekly' | 'biweekly' | 'semimonthly' | 'monthly',
  hoursWorkedPerPeriod?: number, // If hourly
  startDate: Date,
  currentDate: Date,
  usedHours: number,             // PTO already used
  maxAccrual?: number,
  policyDetails: {
    rollover: boolean,
    rolloverCap?: number,
    cashOut: boolean,
    cashOutRate?: number         // % of hourly rate
  }
}): {
  earnedToDate: number,
  used: number,
  currentBalance: number,
  projectedYearEnd: number,
  accrualSchedule: Array<{       // Next 12 months
    date: string,
    earned: number,
    projectedBalance: number
  }>,
  cashOutValue?: number,
  rolloverAmount?: number,       // If year-end
  forfeitureRisk?: number        // Hours above cap
}
```

**Validation:**
- accrualRate: 0-0.1 for hours-worked, 0-16 for period-based
- hoursWorkedPerPeriod: 0-80
- usedHours: 0-500
- maxAccrual: 0-500
- rolloverCap: 0-200

**Default Values:**
- employmentType: 'salaried'
- accrualBasis: 'pay-period'
- accrualRate: 4 hours biweekly
- payPeriod: 'biweekly'
- startDate: 1 year ago
- usedHours: 40
- maxAccrual: 160 hours

**Calculation:**
```
if (accrualBasis === 'hours-worked') {
  earnedToDate = hoursWorked * accrualRate
} else if (accrualBasis === 'pay-period') {
  periodsElapsed = daysBetween / daysPerPeriod
  earnedToDate = periodsElapsed * accrualRate
} else if (accrualBasis === 'upfront') {
  earnedToDate = annualAllowance // Full year given on Jan 1
}

currentBalance = min(earnedToDate - usedHours, maxAccrual)
forfeitureRisk = max(0, earnedToDate - maxAccrual)
```

**UI Elements:**
- Input: Employment type, accrual method (wizard-style)
- Output: Current balance (emphasized), projected year-end
- Visual: Area chart showing earned vs used over time
- Alert: "At risk of forfeiture" if near cap
- Table: Next 6 months accrual schedule

---

### 10. Sick Leave Accrual Calculator
**KD: 19 | Vol: 70**

**Function Signature:**
```typescript
calculateSickLeaveAccrual({
  jurisdiction: 'federal' | 'ca' | 'ny' | 'il' | 'custom',
  employmentType: 'full-time' | 'part-time',
  hoursWorkedPerYear: number,
  accrualRate?: number,        // If custom (1 hr per X worked)
  maxAccrual?: number,         // Jurisdiction-dependent
  rollover: boolean,
  startDate: Date,
  usedHours: number
}): {
  earnedToDate: number,
  currentBalance: number,
  daysAvailable: number,       // Balance / 8
  complianceStatus: 'compliant' | 'non-compliant',
  jurisdictionDetails: {
    minimumRequired: number,
    accrualMethod: string,
    rolloverRules: string,
    cashOutAllowed: boolean
  },
  projectedAnnual: number
}
```

**Jurisdiction Policies:**
```typescript
const sickLeaveLaws = {
  federal: null, // No federal mandate
  ca: {
    accrual: '1 hour per 30 worked',
    minAnnual: 24, // 3 days
    maxAccrual: 48, // 6 days or 3x annual
    rollover: true
  },
  ny: {
    accrual: '1 hour per 30 worked',
    minAnnual: 40, // 5 days (5-99 employees)
    maxAccrual: 40,
    rollover: true
  },
  il: {
    accrual: '1 hour per 40 worked',
    minAnnual: 40, // 5 days
    maxAccrual: 40,
    rollover: true
  }
}
```

**UI Elements:**
- Input: State/jurisdiction dropdown (auto-fills policy)
- Output: Balance, compliance status (green/red)
- Info box: Explanation of jurisdiction requirements
- Alert: "Non-compliant" if employer provides less than minimum

---

## PHASE 3: BUSINESS FINANCE TOOLS

### 11. Markup Percentage Calculator
**KD: 23 | Vol: 880**

**Function Signature:**
```typescript
calculateMarkup({
  cost: number,                // Cost of goods/service
  sellingPrice?: number,       // If known
  desiredMarkupPercent?: number, // If calculating price
  desiredMarginPercent?: number  // Alternative input
}): {
  markupPercent: number,       // (Price - Cost) / Cost * 100
  marginPercent: number,       // (Price - Cost) / Price * 100
  profit: number,              // Price - Cost
  sellingPrice: number,
  breakEvenUnits?: number,     // If fixed costs provided
  comparison: {
    markup: string,            // "Industry average: 30-50%"
    margin: string
  }
}
```

**Key Formulas:**
```
markup = ((sellingPrice - cost) / cost) * 100
margin = ((sellingPrice - cost) / sellingPrice) * 100

// Convert margin to markup:
markup = margin / (1 - margin/100)

// Convert markup to margin:
margin = markup / (1 + markup/100)
```

**Validation:**
- cost: $0.01 - $1,000,000
- sellingPrice: > cost
- desiredMarkupPercent: 0-1000%
- desiredMarginPercent: 0-90%

**UI Elements:**
- Input: Cost + either (selling price OR markup% OR margin%)
- Output: All 3 metrics calculated
- Visual: Side-by-side bars comparing markup vs margin
- Toggle: "Show formula explanation"

---

### 12. Profit and Loss Calculator
**KD: 23 | Vol: 260 | CPC: $5.08**

**Function Signature:**
```typescript
calculateProfitLoss({
  revenue: {
    sales: number,
    otherIncome: number
  },
  costOfGoodsSold: {
    materials: number,
    labor: number,
    shipping: number
  },
  operatingExpenses: {
    salaries: number,
    rent: number,
    utilities: number,
    marketing: number,
    insurance: number,
    other: number
  },
  interestExpense?: number,
  taxRate?: number             // Federal + state
}): {
  totalRevenue: number,
  totalCOGS: number,
  grossProfit: number,
  grossMargin: number,         // %
  totalOpEx: number,
  ebitda: number,              // Earnings before interest/tax/depreciation
  ebit: number,                // Operating income
  interestExpense: number,
  earningsBeforeTax: number,
  taxExpense: number,
  netIncome: number,
  netMargin: number,           // %
  breakdown: {
    cogsPercent: number,       // % of revenue
    opexPercent: number,
    netMarginPercent: number
  }
}
```

**Validation:**
- All revenue/expense fields: $0-10,000,000
- taxRate: 0-40%

**Default Values:**
- All expenses: 0 (user fills in)
- taxRate: 25%

**Calculation:**
```
grossProfit = totalRevenue - totalCOGS
grossMargin = (grossProfit / totalRevenue) * 100
operatingIncome = grossProfit - totalOpEx
earningsBeforeTax = operatingIncome - interestExpense
taxExpense = earningsBeforeTax * (taxRate / 100)
netIncome = earningsBeforeTax - taxExpense
netMargin = (netIncome / totalRevenue) * 100
```

**UI Elements:**
- Input: Collapsible sections (Revenue, COGS, OpEx)
- Output: P&L statement format (table)
- Visual: Waterfall chart from revenue to net income
- Export: "Download CSV" button

---

### 13. Restaurant Profit Margin Calculator
**KD: 21 | Vol: 170 | CPC: $4.81**

**Function Signature:**
```typescript
calculateRestaurantMargin({
  revenue: {
    foodSales: number,
    beverageSales: number,
    cateringSales: number
  },
  costs: {
    foodCost: number,          // COGS for food
    beverageCost: number,      // COGS for drinks
    laborCost: number,         // Staff wages + benefits
    rent: number,
    utilities: number,
    marketing: number,
    insurance: number,
    supplies: number,          // Disposables, cleaning, etc.
    other: number
  },
  seatingCapacity?: number,
  avgCheckSize?: number
}): {
  totalRevenue: number,
  totalCosts: number,
  netProfit: number,
  netMargin: number,           // %
  foodCostPercent: number,     // Industry benchmark: 28-35%
  laborCostPercent: number,    // Benchmark: 25-35%
  primeCost: number,           // Food + labor
  primeCostPercent: number,    // Benchmark: <60%
  revenuePerSeat?: number,     // If capacity provided
  breakEvenRevenue: number,
  industryComparison: {
    yourMargin: number,
    industryAverage: number,   // 3-5% for full-service
    rating: 'below' | 'average' | 'above'
  }
}
```

**Validation:**
- All revenue fields: $0-10,000,000/year
- foodCost: typically 28-35% of food sales
- laborCost: typically 25-35% of total sales
- seatingCapacity: 10-500
- avgCheckSize: $10-200

**Industry Benchmarks:**
```typescript
const restaurantBenchmarks = {
  fullService: {
    foodCost: 28-32%,
    beverageCost: 20-25%,
    laborCost: 30-35%,
    primeCost: <60%,
    netMargin: 3-5%
  },
  quickService: {
    foodCost: 25-30%,
    laborCost: 25-30%,
    primeCost: <55%,
    netMargin: 6-9%
  }
}
```

**UI Elements:**
- Input: Revenue/costs in restaurant-specific categories
- Output: Margin + benchmarks comparison
- Visual: Gauge charts for food%, labor%, prime cost%
- Alert: "Prime cost too high" if >60%

---

### 14. Gross Profit Calculator
**KD: 34 | Vol: 3,600** ⭐ HIGH VOLUME

**Function Signature:**
```typescript
calculateGrossProfit({
  revenue: number,
  costOfGoodsSold: number,
  quantity?: number,           // Units sold (optional)
}): {
  grossProfit: number,
  grossMargin: number,         // %
  contributionMargin?: number, // If per-unit
  markupPercent: number,
  breakEvenRevenue: number,    // If fixed costs known
  profitPerUnit?: number       // If quantity provided
}
```

**Formulas:**
```
grossProfit = revenue - cogs
grossMargin = (grossProfit / revenue) * 100
markupPercent = (grossProfit / cogs) * 100
profitPerUnit = grossProfit / quantity
```

**UI Elements:**
- Input: Revenue, COGS (large fields), optional quantity
- Output: Gross profit (primary), margin % (secondary)
- Visual: Pie chart (revenue split: COGS vs profit)
- Toggle: "Per-unit analysis" if quantity entered

---

### 15. Gross Profit Margin Calculator
**KD: 43 | Vol: 5,400** ⭐ HIGHEST VOLUME

**Function Signature:**
```typescript
calculateGrossProfitMargin({
  calculationMode: 'from-revenue' | 'from-margin' | 'from-markup',
  revenue?: number,
  cogs?: number,
  desiredMargin?: number,      // If calculating target price
  markupPercent?: number       // Alternative input
}): {
  grossProfit: number,
  grossMargin: number,
  revenue: number,             // If calculated
  cogs: number,                // If calculated
  markupEquivalent: number,    // Margin as markup %
  industryComparison: {
    retail: number,            // Typical margins by industry
    wholesale: number,
    software: number,
    manufacturing: number
  },
  improvement: {
    reduce5PercentCOGS: number, // New margin if COGS -5%
    increase5PercentPrice: number // New margin if price +5%
  }
}
```

**Mode Explanations:**
- **from-revenue:** Given revenue + COGS → Calculate margin
- **from-margin:** Given desired margin + COGS → Calculate required revenue
- **from-markup:** Given markup % → Calculate equivalent margin

**UI Elements:**
- Input: Radio buttons for mode, conditional fields
- Output: Margin % (large), dollar profit
- Visual: Bar comparison with industry benchmarks
- Tips: "Improve margin by X% with 5% cost reduction"

---

## BUILD PRIORITY SUMMARY

**Week 1:** Consulting Rate, Consulting Fee, Freelance Pricing
**Week 2:** Contractor Rate, Estimate Generator
**Week 3:** PTO (Hourly), Time Off Accrual, Vacation Accrual
**Week 4:** PTO Accrual (high volume!), Sick Leave Accrual
**Week 5:** Markup Percentage, Profit & Loss
**Week 6:** Restaurant Margin, Gross Profit, Gross Profit Margin

**Total:** 15 calculators, 6 weeks = 2.5 calculators/week

---

## REUSABLE COMPONENTS

Build these first to speed up development:

```typescript
// Input Components
<CurrencyInput />        // $ formatting, validation
<PercentInput />         // % formatting, 0-100 validation
<HoursInput />           // Time input with validation
<DateInput />            // Date picker with range limits
<RadioGroup />           // For calculation modes
<Slider />               // For ranges (experience level, etc.)

// Output Components
<ResultCard />           // Large number display + label
<ComparisonBar />        // Side-by-side metrics
<GaugeChart />           // For percentages (0-100%)
<WaterfallChart />       // For P&L breakdown
<LineChart />            // For accrual over time

// Utility Components
<Tooltip />              // Info icons with explanations
<CollapsibleSection />   // For optional inputs
<ShareButton />          // Copy link functionality
<ExportButton />         // PDF/CSV download
<FormReset />            // Clear inputs button
```
