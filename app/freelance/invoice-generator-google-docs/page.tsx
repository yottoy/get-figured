'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function InvoiceGeneratorGoogleDocs() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Invoice Generator for Google Docs
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Create professional invoices and download them as PDFs you can edit in Google Docs or Microsoft Word.
        We&apos;re building a one-click generator — in the meantime, our estimate generator handles most invoicing needs.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-blue-800 font-medium mb-3">
          Use our Estimate Generator to create line-item invoices today:
        </p>
        <Link
          href="/freelance/estimate-generator"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
        >
          Open Estimate Generator
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="space-y-6 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Why Google Docs Invoices?</h2>
        <p>
          Google Docs is one of the most accessible ways to create and share invoices. It&apos;s free,
          works in any browser, and lets you collaborate with clients or accountants in real time.
          Unlike dedicated invoicing software, Google Docs requires no subscription, no learning curve,
          and no vendor lock-in. You can export to PDF, share via link, or print directly.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good Invoice Template</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Clear header</strong> — Your business name, logo, and contact info at the top</li>
          <li><strong>Unique invoice number</strong> — Sequential or date-based (e.g., 2026-001)</li>
          <li><strong>Client details</strong> — Name, address, and contact for the recipient</li>
          <li><strong>Itemized line items</strong> — Description, quantity, rate, and line total</li>
          <li><strong>Subtotal, tax, and total</strong> — Clearly separated and easy to scan</li>
          <li><strong>Payment terms</strong> — Net 15, Net 30, or Due on Receipt</li>
          <li><strong>Payment methods</strong> — Bank transfer, PayPal, Stripe, or other accepted options</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/freelance/estimate-generator" className="text-blue-600 hover:underline">Estimate Generator</Link> — Create line-item estimates with tax, discounts, and PDF export</li>
          <li><Link href="/freelance/consulting-fee-calculator" className="text-blue-600 hover:underline">Consulting Fee Calculator</Link> — Price your projects before invoicing</li>
          <li><Link href="/freelance/contractor-hourly-rate-calculator" className="text-blue-600 hover:underline">Contractor Hourly Rate Calculator</Link> — Set the right rate for your invoices</li>
        </ul>
      </div>
    </div>
  )
}
