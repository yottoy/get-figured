import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-20 sm:mt-32 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-display text-white font-bold mb-3 sm:mb-4 text-lg">Get Figured</h3>
            <p className="text-[#94A3B8] leading-relaxed text-sm">
              Free business calculators for freelancers, consultants, and small business owners.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm">Tools</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/freelance" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Freelance</Link></li>
              <li><Link href="/hr" className="text-sm text-[#94A3B8] hover:text-white transition-colors">HR</Link></li>
              <li><Link href="/time" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Time</Link></li>
              <li><Link href="/finance" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Finance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/about" className="text-sm text-[#94A3B8] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="text-sm text-[#94A3B8] hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1E293B] mt-8 sm:mt-12 pt-6 sm:pt-8">
          <p className="text-[#64748B] text-center text-sm">&copy; {new Date().getFullYear()} Get Figured. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
