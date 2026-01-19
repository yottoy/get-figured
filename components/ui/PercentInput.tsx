'use client'

import { cn } from '@/lib/utils'

interface PercentInputProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  helper?: string
  className?: string
}

export default function PercentInput({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  helper,
  className
}: PercentInputProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className="block w-full pr-8 pl-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-slate-500 sm:text-sm">%</span>
        </div>
      </div>
      {helper && (
        <p className="text-xs text-slate-500">{helper}</p>
      )}
    </div>
  )
}
