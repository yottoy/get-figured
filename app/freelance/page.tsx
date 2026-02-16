import Link from 'next/link'
import { Calculator } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Freelance & Consulting Calculators: Rates, Pricing & Invoices | Get Figured',
  description: '8 free tools for freelancers and consultants. Calculate your hourly rate, price projects, convert W2 to 1099, generate estimates and invoices. No signup.',
  keywords: 'consulting rate calculator, freelance pricing calculator, contractor rate calculator, invoice generator, estimate generator, consulting fee calculator',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance',
  },
  openGraph: {
    title: 'Free Freelance & Consulting Calculators: Rates, Pricing & Invoices | Get Figured',
    description: '8 free tools for freelancers and consultants. Calculate your hourly rate, price projects, convert W2 to 1099, generate estimates and invoices.',
    url: 'https://www.getfigured.co/freelance',
    siteName: 'Get Figured',
    type: 'website',
  },
}

const tools = [
  { 
    name: 'Consulting Rate Calculator', 
    url: '/freelance/consulting-rate-calculator', 
    description: 'Calculate your hourly consulting rate based on salary, expenses, and profit margin.',
    volume: '170/mo',
    featured: true 
  },
  { 
    name: 'Consulting Fee Calculator', 
    url: '/freelance/consulting-fee-calculator', 
    description: 'Price projects with hourly, fixed, or value-based fee structures.',
    volume: '140/mo',
    featured: true 
  },
  { 
    name: 'Freelance Pricing Calculator', 
    url: '/freelance/pricing-calculator', 
    description: 'Find your market rate based on experience, industry, and location.',
    volume: '140/mo',
    featured: true 
  },
  { 
    name: 'Contractor Rate Calculator', 
    url: '/freelance/contractor-rate-calculator', 
    description: 'Convert W2 salary to 1099 contractor hourly rate with benefits and taxes.',
    volume: '90/mo' 
  },
  { 
    name: 'Contractor Hourly Rate Calculator', 
    url: '/freelance/contractor-hourly-rate-calculator', 
    description: 'Calculate your contractor hourly rate from W2 compensation.',
    volume: '90/mo' 
  },
  { 
    name: 'Estimate Generator', 
    url: '/freelance/estimate-generator', 
    description: 'Create professional estimates with line items, discounts, and tax.',
    volume: '110/mo' 
  },
  { 
    name: 'Proforma Invoice Generator', 
    url: '/freelance/proforma-invoice-generator', 
    description: 'Generate proforma invoices for international shipments.',
    volume: '70/mo' 
  },
  { 
    name: 'Invoice Generator Google Docs', 
    url: '/freelance/invoice-generator-google-docs', 
    description: 'Create invoices compatible with Google Docs.',
    volume: '30/mo' 
  },
]

export default function FreelanceToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <Calculator className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Freelance & Consulting Calculators
            </h1>
          </div>
        </div>
        <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl">
          Calculate your rates, price projects, generate estimates and invoices. 
          All tools are free and require no signup.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className="group p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:border-[#94A3B8] transition-all"
          >
            <h2 className="font-semibold text-[#0F172A] leading-tight text-base mb-2 group-hover:text-[#64748B] transition-colors">
              {tool.name}
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
