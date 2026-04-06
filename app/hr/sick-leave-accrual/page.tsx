'use client'

import { useState } from 'react'
import NumberInput from '@/components/ui/NumberInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateSickLeaveAccrual, STATE_PRESETS } from '@/lib/calculators/sickLeaveAccrual'
import { formatNumber } from '@/lib/utils'

const presetOptions = [
  { value: 'california', label: 'California (1 hr / 30 hrs worked)' },
  { value: 'new-york-large', label: 'New York — 100+ employees (1 hr / 30 hrs)' },
  { value: 'new-york-small', label: 'New York — 5-99 employees (1 hr / 30 hrs)' },
  { value: 'illinois', label: 'Illinois (1 hr / 40 hrs worked)' },
  { value: 'custom', label: 'Custom' },
]

export default function SickLeaveAccrualCalculator() {
  const [preset, setPreset] = useState('california')
  const [inputs, setInputs] = useState({
    hoursWorkedPerWeek: 40,
    accrualRateHours: 1,
    accrualRateBasis: 30,
    annualCap: 48,
    existingBalance: 0,
  })

  function handlePresetChange(value: string) {
    setPreset(value)
    if (value !== 'custom') {
      const p = STATE_PRESETS[value]
      setInputs((prev) => ({
        ...prev,
        accrualRateHours: p.accrualRateHours,
        accrualRateBasis: p.accrualRateBasis,
        annualCap: p.annualCap,
      }))
    }
  }

  const results = calculateSickLeaveAccrual(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Sick Leave Accrual Calculator
        </h1>
        <p className="text-lg text-slate-600">
          Calculate sick leave accrual by state law. Select your state for automatic rules
          or enter custom accrual rates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Accrual Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                State / Policy
              </label>
              <select
                value={preset}
                onChange={(e) => handlePresetChange(e.target.value)}
                className="block w-full px-5 py-4 border-2 border-[#E2E8F0] rounded-lg bg-white text-[#0F172A] text-lg focus:outline-none focus:border-[#94A3B8] hover:border-[#CBD5E1] transition-all"
              >
                {presetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <NumberInput
              label="Hours Worked per Week"
              value={inputs.hoursWorkedPerWeek}
              onChange={(v) => setInputs({ ...inputs, hoursWorkedPerWeek: v })}
              suffix="hours"
              helper="Your regular weekly work hours"
            />

            <div className="grid grid-cols-2 gap-4">
              <NumberInput
                label="Hours Earned"
                value={inputs.accrualRateHours}
                onChange={(v) => {
                  setPreset('custom')
                  setInputs({ ...inputs, accrualRateHours: v })
                }}
                suffix="hr"
                step={0.5}
                helper="Sick hours earned"
              />
              <NumberInput
                label="Per Hours Worked"
                value={inputs.accrualRateBasis}
                onChange={(v) => {
                  setPreset('custom')
                  setInputs({ ...inputs, accrualRateBasis: v })
                }}
                suffix="hrs"
                helper="Hours you must work"
              />
            </div>

            <NumberInput
              label="Annual Cap"
              value={inputs.annualCap}
              onChange={(v) => {
                setPreset('custom')
                setInputs({ ...inputs, annualCap: v })
              }}
              suffix="hours"
              helper="Maximum hours accrued per year (0 = no cap)"
            />

            <NumberInput
              label="Existing Balance"
              value={inputs.existingBalance}
              onChange={(v) => setInputs({ ...inputs, existingBalance: v })}
              suffix="hours"
              helper="Sick leave hours already accrued"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Accrual Summary</h2>
          <div className="space-y-4">
            <ResultCard
              label="Accrual Per Week"
              value={`${formatNumber(results.hoursPerWeek, 2)} hours`}
              subtitle={`${formatNumber(results.hoursPerWeek * 60, 0)} minutes per week`}
              variant="primary"
            />

            <ResultCard
              label="Accrual Per Month"
              value={`${formatNumber(results.hoursPerMonth, 2)} hours`}
              subtitle={`${formatNumber(results.hoursPerMonth / 8, 1)} days per month`}
            />

            <ResultCard
              label="Annual Accrual"
              value={`${formatNumber(results.effectiveHoursPerYear, 1)} hours`}
              subtitle={
                results.isCapped
                  ? `Capped from ${formatNumber(results.hoursPerYear, 1)} hrs — ${formatNumber(results.effectiveDaysPerYear, 1)} days`
                  : `${formatNumber(results.effectiveDaysPerYear, 1)} days per year`
              }
              variant="secondary"
            />

            {results.weeksToCap < Infinity && (
              <ResultCard
                label="Weeks to Reach Cap"
                value={`${results.weeksToCap} weeks`}
                subtitle={`From current balance of ${formatNumber(inputs.existingBalance, 1)} hours`}
              />
            )}

            {results.isCapped && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-yellow-800">Annual Cap Applied</p>
                <p className="text-sm text-yellow-700">
                  Your uncapped accrual would be {formatNumber(results.hoursPerYear, 1)} hours/year,
                  but the {formatNumber(inputs.annualCap, 0)}-hour annual cap limits your effective accrual.
                </p>
              </div>
            )}

            {preset !== 'custom' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-blue-800">
                  {STATE_PRESETS[preset].name} Sick Leave Law
                </p>
                <p className="text-sm text-blue-700">
                  {preset === 'california' && 'California requires at least 1 hour of sick leave for every 30 hours worked, with a 48-hour annual cap (80-hour total balance cap).'}
                  {preset === 'new-york-large' && 'New York employers with 100+ employees must provide up to 56 hours of paid sick leave per year, accruing at 1 hour per 30 hours worked.'}
                  {preset === 'new-york-small' && 'New York employers with 5-99 employees must provide up to 40 hours of paid sick leave per year, accruing at 1 hour per 30 hours worked.'}
                  {preset === 'illinois' && 'Illinois requires 1 hour of paid leave for every 40 hours worked, with a 40-hour annual cap.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Common Scenarios - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Sick Leave Accrual Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { state: 'California', schedule: 'Full-time (40 hrs/week)', rate: '1 hr / 30 hrs', perWeek: '1.33 hrs', perYear: '48 hrs (capped)', days: '6 days' },
            { state: 'New York (large employer)', schedule: 'Full-time (40 hrs/week)', rate: '1 hr / 30 hrs', perWeek: '1.33 hrs', perYear: '56 hrs (capped)', days: '7 days' },
            { state: 'Illinois', schedule: 'Full-time (40 hrs/week)', rate: '1 hr / 40 hrs', perWeek: '1.00 hr', perYear: '40 hrs (capped)', days: '5 days' },
            { state: 'California', schedule: 'Part-time (20 hrs/week)', rate: '1 hr / 30 hrs', perWeek: '0.67 hrs', perYear: '34.7 hrs', days: '4.3 days' },
            { state: 'New York (small employer)', schedule: 'Part-time (25 hrs/week)', rate: '1 hr / 30 hrs', perWeek: '0.83 hrs', perYear: '40 hrs (capped)', days: '5 days' },
            { state: 'Generous policy', schedule: 'Full-time (40 hrs/week)', rate: '1 hr / 20 hrs', perWeek: '2.00 hrs', perYear: '80 hrs (if capped)', days: '10 days' },
          ].map((scenario, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-1">{scenario.state} — {scenario.schedule}</p>
              <p className="text-xs text-slate-500 mb-2">Rate: {scenario.rate}</p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Weekly accrual: <span className="font-semibold text-slate-800">{scenario.perWeek}</span></p>
                <p>Annual accrual: <span className="font-semibold text-slate-800">{scenario.perYear}</span></p>
                <p>Equivalent days: <span className="font-semibold text-slate-800">{scenario.days}</span></p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          These calculations assume standard 8-hour days and 52-week years.
          Use the calculator above for your exact situation, including existing balance and custom policies.
        </p>
      </div>
    </div>
  )
}
