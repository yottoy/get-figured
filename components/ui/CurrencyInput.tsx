'use client'

import { cn } from '@/lib/utils'

interface CurrencyInputProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  helper?: string
  className?: string
}

export default function CurrencyInput({
  label,
  value,
  onChange,
  min = 0,
  max = 10000000,
  step = 1,
  helper,
  className
}: CurrencyInputProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <label className="block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-slate-500 sm:text-sm">$</span>
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className="block w-full pl-7 pr-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>
      {helper && (
        <p className="text-xs text-slate-500">{helper}</p>
      )}
    </div>
  )
}
