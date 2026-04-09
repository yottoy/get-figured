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

      {/* Common Scenarios - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Freelance Pricing Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { who: 'Junior Web Developer (US)', exp: '0-2 years experience', hourly: '$35-$60/hr', project: '$2,000-$5,000 small project', notes: 'Focus on building portfolio and recurring clients' },
            { who: 'Mid-level Designer (US)', exp: '2-5 years experience', hourly: '$60-$100/hr', project: '$3,500-$8,000 brand identity', notes: 'Specialization (e.g., SaaS UI) commands 20-30% premium' },
            { who: 'Senior Software Engineer (US)', exp: '5-10 years experience', hourly: '$100-$175/hr', project: '$15K-$40K MVP build', notes: 'Move toward value-based or retainer pricing' },
            { who: 'Expert Marketing Consultant (US)', exp: '10+ years experience', hourly: '$150-$300/hr', project: '$5K-$15K/mo retainer', notes: 'Position as strategist, not tactical executor' },
            { who: 'Mid-level Writer (Europe)', exp: '2-5 years experience', hourly: '$50-$85/hr', project: '$0.30-$0.80/word for long-form', notes: 'Niche expertise (fintech, health) doubles rates' },
            { who: 'Senior Developer (Latin America)', exp: '5-10 years experience', hourly: '$45-$85/hr', project: '$8K-$20K MVP build', notes: 'US clients pay 2-3x local market rates' },
            { who: 'Junior Designer (Asia)', exp: '0-2 years experience', hourly: '$20-$40/hr', project: '$800-$2,500 small project', notes: 'Build international portfolio on Dribbble/Behance' },
            { who: 'Expert Consultant (Europe)', exp: '10+ years experience', hourly: '$120-$250/hr', project: '$8K-$25K/mo retainer', notes: 'EU VAT considerations apply for cross-border work' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-1">{s.who}</p>
              <p className="text-xs text-slate-500 mb-2">{s.exp}</p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Hourly range: <span className="font-semibold text-slate-800">{s.hourly}</span></p>
                <p>Project: <span className="font-semibold text-slate-800">{s.project}</span></p>
                <p className="text-xs text-slate-500 italic mt-2">{s.notes}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          These ranges reflect 2026 market conditions. Actual rates vary by specialization, client size,
          and negotiation. Use the calculator above to fine-tune your rate based on your specific profile.
        </p>
      </div>
    </div>
  )
}
