'use client'

import Link from 'next/link'

export default function ContractorHourlyRateCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Contractor Hourly Rate Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        This calculator is the same as our Contractor Rate Calculator.
      </p>
      <Link 
        href="/freelance/contractor-rate-calculator"
        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
      >
        Go to Contractor Rate Calculator →
      </Link>
    </div>
  )
}
