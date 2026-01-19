'use client'

import { useState } from 'react'
import CurrencyInput from '@/components/ui/CurrencyInput'
import NumberInput from '@/components/ui/NumberInput'
import PercentInput from '@/components/ui/PercentInput'
import ResultCard from '@/components/ui/ResultCard'
import Button from '@/components/ui/Button'
import { calculateConsultingRate } from '@/lib/calculators/consultingRate'
import { formatCurrency } from '@/lib/utils'
import { RefreshCw } from 'lucide-react'

export default function ConsultingRateCalculator() {
  const [inputs, setInputs] = useState({
    desiredSalary: 100000,
    billableHours: 1560,
    overheadPercent: 25,
    taxPercent: 30,
    profitMargin: 20
  })

  const results = calculateConsultingRate(inputs)

  const handleReset = () => {
    setInputs({
      desiredSalary: 100000,
      billableHours: 1560,
      overheadPercent: 25,
      taxPercent: 30,
      profitMargin: 20
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Consulting Rate Calculator - Calculate Your Hourly Rate
        </h1>
        <p className="text-lg text-slate-600">
          Calculate your consulting rate based on your desired annual income, billable hours, 
          and business expenses. Get accurate hourly, daily, and project rates in seconds.
        </p>
      </div>

      {/* Calculator */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Inputs */}
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Information</h2>
          
          <div className="space-y-4">
            <CurrencyInput
              label="Desired Annual Salary"
              value={inputs.desiredSalary}
              onChange={(v) => setInputs({ ...inputs, desiredSalary: v })}
              min={20000}
              max={500000}
              helper="How much do you want to take home per year?"
            />

            <NumberInput
              label="Billable Hours per Year"
              value={inputs.billableHours}
              onChange={(v) => setInputs({ ...inputs, billableHours: v })}
              min={1000}
              max={2080}
              suffix="hours"
              helper="Most consultants bill 1,500-1,800 hours per year (75% utilization)"
            />

            <PercentInput
              label="Overhead & Expenses"
              value={inputs.overheadPercent}
              onChange={(v) => setInputs({ ...inputs, overheadPercent: v })}
              min={15}
              max={40}
              helper="Business expenses (software, insurance, equipment, etc.)"
            />

            <PercentInput
              label="Self-Employment Tax"
              value={inputs.taxPercent}
              onChange={(v) => setInputs({ ...inputs, taxPercent: v })}
              min={25}
              max={35}
              helper="Federal + state income tax + self-employment tax"
            />

            <PercentInput
              label="Desired Profit Margin"
              value={inputs.profitMargin}
              onChange={(v) => setInputs({ ...inputs, profitMargin: v })}
              min={10}
              max={30}
              helper="Additional profit for business growth and savings"
            />

            <Button variant="secondary" onClick={handleReset} className="w-full">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset to Defaults
            </Button>
          </div>
        </div>

        {/* Results */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Your Rates</h2>
          
          <div className="space-y-4">
            <ResultCard
              label="Recommended Hourly Rate"
              value={formatCurrency(results.recommendedRate)}
              subtitle="Rounded to nearest $5"
              variant="primary"
            />

            <ResultCard
              label="Exact Hourly Rate"
              value={formatCurrency(results.hourlyRate)}
              subtitle="Based on your inputs"
            />

            <ResultCard
              label="Daily Rate"
              value={formatCurrency(results.dailyRate)}
              subtitle="8 hours per day"
            />

            <ResultCard
              label="Weekly Rate"
              value={formatCurrency(results.weeklyRate)}
              subtitle="40 hours per week"
            />

            <ResultCard
              label="Monthly Rate"
              value={formatCurrency(results.monthlyRate)}
              subtitle="~173 hours per month"
            />

            <ResultCard
              label="Annual Revenue Needed"
              value={formatCurrency(results.annualRevenue)}
              subtitle="Total revenue to achieve your goals"
            />

            <ResultCard
              label="Break-Even Rate"
              value={formatCurrency(results.breakEvenRate)}
              subtitle="Minimum rate to cover costs (no profit)"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="prose max-w-none">
        <h2>How to Use the Consulting Rate Calculator</h2>
        
        <h3>Step 1: Enter Your Desired Annual Salary</h3>
        <p>
          Start by entering how much you want to earn per year as a consultant. This should be your 
          take-home salary goal, similar to what you'd earn as a W2 employee. For example, if you 
          want to earn $100,000 per year, enter that amount.
        </p>
        <p>
          <strong>Example:</strong> Enter $100,000 if you want to earn six figures annually.
        </p>

        <h3>Step 2: Set Your Billable Hours</h3>
        <p>
          Not all hours in a year are billable. You'll spend time on marketing, administration, 
          professional development, and vacations. Most consultants achieve 60-80% utilization, 
          meaning 1,200-1,600 billable hours per year.
        </p>
        <p>
          <strong>Tip:</strong> New consultants should aim for 1,200-1,400 hours. Established 
          consultants can target 1,500-1,800 hours.
        </p>

        <h3>Step 3: Account for Business Expenses</h3>
        <p>
          As a consultant, you'll have overhead costs that employees don't pay: health insurance, 
          software subscriptions, professional liability insurance, equipment, home office expenses, 
          and more. Typically, this ranges from 15-40% of your revenue.
        </p>

        <h3>Step 4: Review Your Results</h3>
        <p>
          The calculator shows your recommended rate (rounded to the nearest $5 for easy quoting), 
          plus daily, weekly, and monthly rates for different project structures.
        </p>

        <h3>Common Mistakes to Avoid:</h3>
        <ul>
          <li>❌ <strong>Forgetting about taxes:</strong> Self-employment tax adds 15.3% on top of 
          income tax</li>
          <li>❌ <strong>Overestimating billable hours:</strong> Assuming 2,080 hours (100% 
          utilization) is unrealistic</li>
          <li>❌ <strong>Not including profit margin:</strong> You need savings for slow periods 
          and business growth</li>
          <li>✅ <strong>Correct approach:</strong> Be conservative with billable hours and 
          realistic about expenses</li>
        </ul>

        <h2>Why Use a Consulting Rate Calculator?</h2>

        <h3>Benefits:</h3>
        <ul>
          <li><strong>Accurate Pricing:</strong> Ensure you're charging enough to meet your 
          financial goals</li>
          <li><strong>Save Time:</strong> No more manual calculations or spreadsheet errors</li>
          <li><strong>Professional Confidence:</strong> Back up your rates with data when 
          negotiating with clients</li>
          <li><strong>Free & Private:</strong> No signup required, your data stays on your device</li>
        </ul>

        <h3>Who Should Use This Calculator:</h3>
        <ul>
          <li>New freelancers transitioning from W2 employment</li>
          <li>Experienced consultants raising their rates</li>
          <li>Agencies pricing client projects</li>
          <li>Anyone evaluating contractor vs employee opportunities</li>
        </ul>

        <h2>Understanding Consulting Rates</h2>

        <h3>The 2-3x Rule</h3>
        <p>
          A common rule of thumb is that consultants should charge 2-3 times their previous hourly 
          W2 rate. If you earned $50/hour as an employee ($100,000 salary), you should charge 
          $100-150/hour as a consultant. This accounts for:
        </p>
        <ul>
          <li>Self-employment taxes (15.3% additional)</li>
          <li>Health insurance ($12,000-20,000/year)</li>
          <li>Retirement contributions (no employer match)</li>
          <li>Paid time off (no paid vacation or sick days)</li>
          <li>Business expenses (software, equipment, insurance)</li>
          <li>Non-billable time (marketing, admin, training)</li>
        </ul>

        <h3>Industry Benchmarks</h3>
        <table>
          <thead>
            <tr>
              <th>Industry</th>
              <th>Beginner Rate</th>
              <th>Intermediate Rate</th>
              <th>Expert Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software Development</td>
              <td>$75-100/hr</td>
              <td>$125-175/hr</td>
              <td>$175-400/hr</td>
            </tr>
            <tr>
              <td>Management Consulting</td>
              <td>$100-150/hr</td>
              <td>$150-250/hr</td>
              <td>$250-500/hr</td>
            </tr>
            <tr>
              <td>Marketing Consulting</td>
              <td>$75-125/hr</td>
              <td>$125-200/hr</td>
              <td>$200-350/hr</td>
            </tr>
            <tr>
              <td>Design</td>
              <td>$60-100/hr</td>
              <td>$100-150/hr</td>
              <td>$150-300/hr</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I know if my rate is too high or too low?</h3>
        <p>
          Research market rates for your industry and experience level. If you're consistently 
          winning every project you bid on, your rates might be too low. If you're losing most 
          opportunities, they might be too high. A 30-50% win rate is healthy.
        </p>

        <h3>Should I charge hourly, daily, or project-based rates?</h3>
        <p>
          Hourly is best for undefined scopes and ongoing relationships. Daily rates work well for 
          workshops or focused engagements. Project-based (value-based) pricing can earn more but 
          requires accurate scoping. Many consultants use a mix depending on the client and project.
        </p>

        <h3>How often should I raise my rates?</h3>
        <p>
          Review your rates annually, or after completing 10-15 successful projects. Factor in 
          inflation (3-5%), increased experience, new certifications, and market demand. Most 
          consultants raise rates 5-15% per year.
        </p>

        <h3>What if clients say I'm too expensive?</h3>
        <p>
          Focus on value, not price. Demonstrate ROI, share case studies, and consider offering 
          payment plans or retainers. Some clients aren't your ideal customer - it's okay to lose 
          price-focused prospects to find value-focused clients.
        </p>

        <h3>Should I offer discounts?</h3>
        <p>
          Avoid percentage discounts that devalue your work. Instead, offer volume discounts 
          (retainers), faster payment terms (2% discount for payment within 7 days), or package 
          deals that provide more value. Never discount for vague reasons like "to win the project."
        </p>
      </div>
    </div>
  )
}
