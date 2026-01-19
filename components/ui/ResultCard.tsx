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
      "p-6 rounded-lg border",
      variant === 'primary' && "bg-primary/5 border-primary/20",
      variant === 'secondary' && "bg-secondary/5 border-secondary/20",
      variant === 'default' && "bg-white border-slate-200",
      className
    )}>
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className={cn(
        "text-3xl font-bold font-mono",
        variant === 'primary' && "text-primary",
        variant === 'secondary' && "text-secondary",
        variant === 'default' && "text-slate-900"
      )}>
        {value}
      </p>
      {subtitle && (
        <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
      )}
    </div>
  )
}
