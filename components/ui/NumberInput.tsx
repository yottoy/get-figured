'use client'

import { cn } from '@/lib/utils'

interface NumberInputProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  helper?: string
  suffix?: string
  className?: string
}

export default function NumberInput({
  label,
  value,
  onChange,
  min = 0,
  max = 10000000,
  step = 1,
  helper,
  suffix,
  className
}: NumberInputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-sm font-semibold text-[#0F172A]">
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
          inputMode="numeric"
          className={cn(
            "block w-full px-5 py-4 border-2 border-[#E2E8F0] rounded-lg bg-white text-[#0F172A] font-mono text-lg tabular-nums focus:outline-none focus:border-[#94A3B8] hover:border-[#CBD5E1] transition-all",
            suffix && "pr-24"
          )}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
            <span className="text-[#64748B] text-base font-medium">{suffix}</span>
          </div>
        )}
      </div>
      {helper && (
        <p className="text-sm text-[#64748B] leading-relaxed">{helper}</p>
      )}
    </div>
  )
}
