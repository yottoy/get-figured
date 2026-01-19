import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-lg transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === 'primary' && "bg-primary text-white hover:bg-blue-700 focus:ring-primary",
        variant === 'secondary' && "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-slate-500",
        variant === 'ghost' && "text-slate-600 hover:bg-slate-100",
        size === 'sm' && "px-3 py-1.5 text-sm",
        size === 'md' && "px-6 py-3 text-base",
        size === 'lg' && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
