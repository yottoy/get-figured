import Link from 'next/link'
import { TrendingUp, ArrowRight } from 'lucide-react'

const tools = [
  { 
    name: 'Markup Percentage Calculator', 
    url: '/finance/markup-percentage', 
    description: 'Calculate markup percentage from cost and selling price with equivalent margin.',
    volume: '880/mo',
    featured: true 
  },
  { 
    name: 'Profit and Loss Calculator', 
    url: '/finance/profit-loss', 
    description: 'Calculate profit and loss with revenue, COGS, and expenses. Generate P&L statement.',
    volume: '260/mo',
    featured: true 
  },
  { 
    name: 'Restaurant Profit Margin Calculator', 
    url: '/finance/restaurant-profit-margin', 
    description: 'Calculate restaurant margins with food cost %, labor cost %, and prime cost.',
    volume: '170/mo',
    featured: true 
  },
  { 
    name: 'Calculate Margin from Markup', 
    url: '/finance/margin-from-markup', 
    description: 'Convert markup percentage to profit margin and understand the difference.',
    volume: '50/mo' 
  },
]

export default function FinanceToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-orange-50 border border-orange-200 mr-4">
            <TrendingUp className="w-10 h-10 text-orange-700" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Finance & Profit Calculators
            </h1>
            <p className="text-lg text-slate-600">
              {tools.length} free tools for financial analysis
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-600 mt-4">
          Calculate profit margins, markup, P&L statements, and more. 
          Make better financial decisions for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, idx) => (
          <Link
            key={idx}
            href={tool.url}
            className={`p-6 rounded-lg border-2 transition hover:shadow-lg group ${
              tool.featured 
                ? 'border-orange-300 bg-orange-50 hover:border-orange-500' 
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-orange-700 transition">
                {tool.name}
              </h2>
              {tool.featured && (
                <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded font-semibold ml-2">
                  Popular
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 mb-3">{tool.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{tool.volume} searches</span>
              <ArrowRight className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
