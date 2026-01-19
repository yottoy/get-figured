'use client'

import Link from 'next/link'

export default function TimeOffAccrualCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Time Off Accrual Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        This calculator is the same as our PTO Accrual Calculator.
      </p>
      <Link 
        href="/hr/pto-accrual"
        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
      >
        Go to PTO Accrual Calculator →
      </Link>
    </div>
  )
}
