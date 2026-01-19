import Link from 'next/link'
import { Calculator } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Calculator className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-slate-900">Get Figured</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/freelance" className="text-slate-600 hover:text-primary transition">
              Freelance
            </Link>
            <Link href="/hr" className="text-slate-600 hover:text-primary transition">
              HR
            </Link>
            <Link href="/time" className="text-slate-600 hover:text-primary transition">
              Time
            </Link>
            <Link href="/finance" className="text-slate-600 hover:text-primary transition">
              Finance
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
