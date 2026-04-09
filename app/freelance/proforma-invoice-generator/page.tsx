'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ProformaInvoiceGenerator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Proforma Invoice Generator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Create proforma invoices for international shipments, customs clearance, and advance quotations.
        We&apos;re building a dedicated tool — for now, our estimate generator covers most proforma needs.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <p className="text-blue-800 font-medium mb-3">
          Use our Estimate Generator to create proforma-style documents today:
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
        <h2 className="text-2xl font-semibold text-slate-900">What is a Proforma Invoice?</h2>
        <p>
          A proforma invoice is a preliminary bill of sale sent before goods are shipped or services
          rendered. It commits the seller to a price and terms, and is commonly used for international
          trade, customs declarations, and securing advance payment. Unlike a commercial invoice, it
          is not a legal demand for payment — it&apos;s more of a formal quotation with full transaction
          details.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900">When to Use a Proforma Invoice</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>International shipping</strong> — Customs authorities use them to assess duties and taxes</li>
          <li><strong>Letters of credit</strong> — Banks require them to process international payment instruments</li>
          <li><strong>Import licensing</strong> — Buyers need them to apply for import permits</li>
          <li><strong>Advance payment</strong> — Sellers use them to invoice for deposits before delivery</li>
          <li><strong>Formal price quotes</strong> — When a buyer needs a binding-feeling document for budgeting or approval</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Required Fields for International Shipments</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Seller and buyer contact details (with country)</li>
          <li>Unique invoice number and date</li>
          <li>Detailed item descriptions and HS (Harmonized System) codes</li>
          <li>Quantity, unit price, and total value</li>
          <li>Currency of the transaction</li>
          <li>Country of origin for the goods</li>
          <li>Package weight and dimensions</li>
          <li>Shipping method and Incoterms (e.g., FOB, CIF, DDP)</li>
          <li>Payment terms and accepted methods</li>
        </ul>

        <h2 className="text-2xl font-semibold text-slate-900">Related Tools</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><Link href="/freelance/estimate-generator" className="text-blue-600 hover:underline">Estimate Generator</Link> — Create line-item documents with tax and discounts</li>
          <li><Link href="/freelance/consulting-fee-calculator" className="text-blue-600 hover:underline">Consulting Fee Calculator</Link> — Price your services before quoting</li>
        </ul>
      </div>
    </div>
  )
}
