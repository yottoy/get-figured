import Link from 'next/link'
import { Calculator, ArrowRight } from 'lucide-react'

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 mr-4">
            <Calculator className="w-10 h-10 text-blue-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Freelance & Consulting Calculators
            </h1>
            <p className="text-lg text-slate-600">
              {tools.length} free tools for freelancers and consultants
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-600 mt-4">
          Calculate your rates, price projects, generate estimates and invoices. 
          All tools are free and require no signup.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className={`p-6 rounded-lg border-2 transition hover:shadow-lg group ${
              tool.featured 
                ? 'border-primary/30 bg-primary/5 hover:border-primary' 
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-primary transition">
                {tool.name}
              </h2>
              {tool.featured && (
                <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{tool.volume} searches</span>
              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
