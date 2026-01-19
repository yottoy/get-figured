import { cn } from '@/lib/utils'

interface ResultCardProps {
  label: string
  value: string
  subtitle?: string
  variant?: 'primary' | 'secondary' | 'default'
  className?: string
}

export default function ResultCard({
  label,
  value,
  subtitle,
  variant = 'default',
  className
}: ResultCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-lg border transition-all",
      variant === 'primary' && "bg-[#F8FAFC] border-2 border-[#0F172A]",
      variant === 'secondary' && "bg-[#F8FAFC] border border-[#E2E8F0]",
      variant === 'default' && "bg-[#F8FAFC] border border-[#E2E8F0]",
      className
    )}>
      <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className={cn(
        "font-bold font-mono tabular-nums mb-1",
        variant === 'primary' ? "text-4xl text-[#0F172A]" : "text-3xl text-[#0F172A]"
      )}>
        {value}
      </p>
      {subtitle && (
        <p className="text-sm text-[#64748B] mt-2 leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
