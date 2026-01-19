import Link from 'next/link'
import { TrendingUp } from 'lucide-react'

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
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
      <div className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <TrendingUp className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Finance & Profit Calculators
            </h1>
          </div>
        </div>
        <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl">
          Calculate profit margins, markup, P&L statements, and more. 
          Make better financial decisions for your business.
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
