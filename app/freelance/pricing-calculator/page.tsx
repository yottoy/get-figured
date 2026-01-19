'use client'

import { useState } from 'react'
import ResultCard from '@/components/ui/ResultCard'
import { calculateFreelancePricing, type ExperienceLevel, type Industry, type Location } from '@/lib/calculators/freelancePricing'
import { formatCurrency } from '@/lib/utils'

export default function FreelancePricingCalculator() {
  const [inputs, setInputs] = useState<{
    experienceLevel: ExperienceLevel
    industry: Industry
    location: Location
  }>({
    experienceLevel: 'intermediate',
    industry: 'development',
    location: 'us'
  })

  const results = calculateFreelancePricing(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Freelance Pricing Calculator - Find Your Market Rate
        </h1>
        <p className="text-lg text-slate-600">
          Calculate your freelance rate based on experience, industry, and location. 
          Compare with market rates and get pricing guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Your Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
              <select
                value={inputs.industry}
                onChange={(e) => setInputs({ ...inputs, industry: e.target.value as Industry })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="development">Software Development</option>
                <option value="design">Design</option>
                <option value="writing">Writing</option>
                <option value="marketing">Marketing</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Experience Level</label>
              <select
                value={inputs.experienceLevel}
                onChange={(e) => setInputs({ ...inputs, experienceLevel: e.target.value as ExperienceLevel })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="advanced">Advanced (5-10 years)</option>
                <option value="expert">Expert (10+ years)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
              <select
                value={inputs.location}
                onChange={(e) => setInputs({ ...inputs, location: e.target.value as Location })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              >
                <option value="us">United States</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia</option>
                <option value="latam">Latin America</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Recommended Rates</h2>
          <div className="space-y-4">
            <ResultCard
              label="Average Hourly Rate"
              value={formatCurrency(results.hourlyRate.average)}
              subtitle="Market median"
              variant="primary"
            />
            <ResultCard
              label="Minimum Rate"
              value={formatCurrency(results.hourlyRate.minimum)}
              subtitle="Entry level"
            />
            <ResultCard
              label="Premium Rate"
              value={formatCurrency(results.hourlyRate.premium)}
              subtitle="Top tier"
            />

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Project Rates</h3>
              <div className="space-y-3">
                <ResultCard
                  label="Small Project (15 hrs)"
                  value={formatCurrency(results.projectRate.small)}
                />
                <ResultCard
                  label="Medium Project (60 hrs)"
                  value={formatCurrency(results.projectRate.medium)}
                />
                <ResultCard
                  label="Large Project (150 hrs)"
                  value={formatCurrency(results.projectRate.large)}
                />
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Monthly Retainer</h3>
              <ResultCard
                label="Monthly Retainer"
                value={formatCurrency(results.retainerRate.monthly)}
                subtitle={results.retainerRate.commitment}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
