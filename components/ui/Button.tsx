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
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200",
        "focus:outline-none focus-visible:shadow-focus",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant === 'primary' && "bg-[#0F172A] text-white border-0 hover:bg-[#1E293B] hover:-translate-y-0.5 active:translate-y-0 transition-all",
        variant === 'secondary' && "bg-white text-[#0F172A] border-2 border-[#E2E8F0] hover:border-[#94A3B8] hover:bg-[#F8FAFC]",
        variant === 'ghost' && "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A]",
        size === 'sm' && "px-4 py-2 text-sm gap-1.5",
        size === 'md' && "px-6 py-3 text-base gap-2",
        size === 'lg' && "px-8 py-3.5 text-base gap-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
