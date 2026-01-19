import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Get Figured</h3>
            <p className="text-sm">
              Free business calculators for freelancers, consultants, and small business owners.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/freelance">Freelance</Link></li>
              <li><Link href="/hr">HR</Link></li>
              <li><Link href="/time">Time</Link></li>
              <li><Link href="/finance">Finance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@getfigured.co">hello@getfigured.co</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Get Figured. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
