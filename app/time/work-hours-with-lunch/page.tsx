'use client'

import { useState } from 'react'
import NumberInput from '@/components/ui/NumberInput'
import ResultCard from '@/components/ui/ResultCard'
import { calculateWorkHours } from '@/lib/calculators/workHours'
import { formatNumber } from '@/lib/utils'

export default function WorkHoursWithLunch() {
  const [inputs, setInputs] = useState({
    clockIn: '9:00 AM',
    clockOut: '5:00 PM',
    lunchBreakMinutes: 30,
    paidLunch: false,
    workDays: 5
  })

  const results = calculateWorkHours(inputs)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Work Hours Calculator with Lunch Break
        </h1>
        <p className="text-lg text-slate-600">
          Calculate total work hours minus unpaid lunch breaks. Perfect for timesheets 
          and hourly employees.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Time Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Clock In
              </label>
              <input
                type="text"
                value={inputs.clockIn}
                onChange={(e) => setInputs({ ...inputs, clockIn: e.target.value })}
                placeholder="9:00 AM"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Clock Out
              </label>
              <input
                type="text"
                value={inputs.clockOut}
                onChange={(e) => setInputs({ ...inputs, clockOut: e.target.value })}
                placeholder="5:00 PM"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
              />
            </div>

            <NumberInput
              label="Lunch Break"
              value={inputs.lunchBreakMinutes}
              onChange={(v) => setInputs({ ...inputs, lunchBreakMinutes: v })}
              suffix="minutes"
              max={120}
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={inputs.paidLunch}
                onChange={(e) => setInputs({ ...inputs, paidLunch: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm text-slate-700">Paid lunch break</label>
            </div>

            <NumberInput
              label="Work Days per Week"
              value={inputs.workDays}
              onChange={(v) => setInputs({ ...inputs, workDays: v })}
              suffix="days"
              max={7}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">Hours Summary</h2>
          <div className="space-y-4">
            <ResultCard
              label="Net Work Hours"
              value={`${formatNumber(results.billableHours, 2)} hours`}
              subtitle={inputs.paidLunch ? 'Including lunch' : 'Excluding lunch'}
              variant="primary"
            />

            <ResultCard
              label="Gross Hours"
              value={`${formatNumber(results.hoursBreakdown.grossHours, 2)} hours`}
              subtitle="Clock in to clock out"
            />

            <ResultCard
              label="Lunch Break"
              value={`${formatNumber(results.hoursBreakdown.lunchHours, 2)} hours`}
              subtitle={`${inputs.lunchBreakMinutes} minutes`}
            />

            {inputs.workDays > 1 && results.weeklyTotal && (
              <>
                <ResultCard
                  label="Weekly Total"
                  value={`${formatNumber(results.weeklyTotal, 2)} hours`}
                  subtitle={`${inputs.workDays} days per week`}
                  variant="secondary"
                />

                {results.overtimeHours && results.overtimeHours > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm font-semibold text-yellow-800">
                      ⚠️ Overtime Hours
                    </p>
                    <p className="text-sm text-yellow-700">
                      {formatNumber(results.overtimeHours, 1)} hours of overtime 
                      (over 40 hours/week)
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Common Scenarios - targets long-tail queries */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Work Hour Scenarios</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { schedule: '8 AM to 5 PM, 30-min lunch', gross: '9 hours', net: '8.5 hours', weekly: '42.5 hours' },
            { schedule: '8 AM to 5 PM, 1-hour lunch', gross: '9 hours', net: '8 hours', weekly: '40 hours' },
            { schedule: '9 AM to 5 PM, 30-min lunch', gross: '8 hours', net: '7.5 hours', weekly: '37.5 hours' },
            { schedule: '9 AM to 6 PM, 1-hour lunch', gross: '9 hours', net: '8 hours', weekly: '40 hours' },
            { schedule: '7 AM to 3:30 PM, 30-min lunch', gross: '8.5 hours', net: '8 hours', weekly: '40 hours' },
            { schedule: '10 AM to 6 PM, 30-min lunch', gross: '8 hours', net: '7.5 hours', weekly: '37.5 hours' },
            { schedule: '8 AM to 4 PM, 30-min lunch', gross: '8 hours', net: '7.5 hours', weekly: '37.5 hours' },
            { schedule: '8 AM to 4:30 PM, 30-min lunch', gross: '8.5 hours', net: '8 hours', weekly: '40 hours' },
          ].map((scenario, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-medium text-slate-900 mb-2">{scenario.schedule}</p>
              <div className="text-sm text-slate-600 space-y-1">
                <p>Gross hours: {scenario.gross}</p>
                <p>Net work hours: <span className="font-semibold text-slate-800">{scenario.net}</span></p>
                <p>Weekly total (5 days): <span className="font-semibold text-slate-800">{scenario.weekly}</span></p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 mt-4">
          These calculations assume a 5-day work week with unpaid lunch breaks.
          Use the calculator above for custom schedules and paid lunch scenarios.
        </p>
      </div>
    </div>
  )
}
