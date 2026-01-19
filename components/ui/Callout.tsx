import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
  variant?: 'info' | 'tip' | 'warning' | 'success'
  className?: string
}

export default function Callout({
  children,
  variant = 'info',
  className
}: CalloutProps) {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-primary',
      icon: '💡',
      title: 'Info'
    },
    tip: {
      bg: 'bg-blue-50',
      border: 'border-primary',
      icon: '💡',
      title: 'Pro Tip'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-400',
      icon: '⚠️',
      title: 'Warning'
    },
    success: {
      bg: 'bg-emerald-50',
      border: 'border-success',
      icon: '✓',
      title: 'Success'
    }
  }

  const config = variants[variant]

  return (
    <div className={cn(
      "p-6 rounded-r-lg border-l-4",
      config.bg,
      config.border,
      className
    )}>
      <div className="flex gap-3">
        <div className="text-2xl flex-shrink-0">{config.icon}</div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}
