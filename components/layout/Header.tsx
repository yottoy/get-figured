import Link from 'next/link'
import { Calculator } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-70 transition-opacity">
            <span className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">Get Figured</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/freelance" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
              Freelance
            </Link>
            <Link href="/hr" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
              HR
            </Link>
            <Link href="/time" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
              Time
            </Link>
            <Link href="/finance" className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors">
              Finance
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
