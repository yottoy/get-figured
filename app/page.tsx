import Link from 'next/link'
import { Calculator, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react'

const calculators = [
  {
    category: 'Freelance & Consulting',
    icon: Calculator,
    tools: [
      { name: 'Consulting Rate Calculator', url: '/freelance/consulting-rate-calculator', volume: '170/mo', featured: true },
      { name: 'Consulting Fee Calculator', url: '/freelance/consulting-fee-calculator', volume: '140/mo', featured: true },
      { name: 'Freelance Pricing Calculator', url: '/freelance/pricing-calculator', volume: '140/mo', featured: true },
      { name: 'Contractor Rate Calculator', url: '/freelance/contractor-rate-calculator', volume: '90/mo' },
      { name: 'Contractor Hourly Rate Calculator', url: '/freelance/contractor-hourly-rate-calculator', volume: '90/mo' },
      { name: 'Estimate Generator', url: '/freelance/estimate-generator', volume: '110/mo' },
      { name: 'Proforma Invoice Generator', url: '/freelance/proforma-invoice-generator', volume: '70/mo' },
      { name: 'Invoice Generator Google Docs', url: '/freelance/invoice-generator-google-docs', volume: '30/mo' },
    ]
  },
  {
    category: 'HR & PTO',
    icon: Users,
    tools: [
      { name: 'PTO Accrual Calculator', url: '/hr/pto-accrual', volume: '1,900/mo', featured: true },
      { name: 'Vacation Accrual Calculator', url: '/hr/vacation-accrual', volume: '590/mo', featured: true },
      { name: 'Time Off Accrual Calculator', url: '/hr/time-off-accrual', volume: '480/mo', featured: true },
      { name: 'PTO Calculator for Hourly Employees', url: '/hr/pto-calculator-hourly', volume: '90/mo' },
      { name: 'Sick Leave Accrual Calculator', url: '/hr/sick-leave-accrual', volume: '70/mo' },
    ]
  },
  {
    category: 'Time & Payroll',
    icon: Clock,
    tools: [
      { name: 'Calculate Overtime Hours', url: '/time/overtime-hours', volume: '90/mo' },
      { name: 'Work Hours with Lunch Break', url: '/time/work-hours-with-lunch', volume: '70/mo' },
    ]
  },
  {
    category: 'Finance & Profit',
    icon: TrendingUp,
    tools: [
      { name: 'Markup Percentage Calculator', url: '/finance/markup-percentage', volume: '880/mo', featured: true },
      { name: 'Profit and Loss Calculator', url: '/finance/profit-loss', volume: '260/mo' },
      { name: 'Restaurant Profit Margin Calculator', url: '/finance/restaurant-profit-margin', volume: '170/mo' },
      { name: 'Calculate Margin from Markup', url: '/finance/margin-from-markup', volume: '50/mo' },
    ]
  }
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold text-[#0F172A] mb-6 leading-tight tracking-tight">
              Free Business Calculators for Freelancers & Small Businesses
            </h1>
            <p className="text-lg sm:text-xl text-[#64748B] mb-12 leading-relaxed max-w-2xl mx-auto">
              Calculate consulting rates, PTO accrual, profit margins, and more. 
              No signup required.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#calculators"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0F172A] text-white rounded-lg font-semibold hover:bg-[#1E293B] hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                Browse Calculators
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators by Category */}
      <section id="calculators" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {calculators.map((category, idx) => {
              const Icon = category.icon

              return (
                <div key={idx}>
                  <div className="flex items-start gap-4 mb-8">
                    <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                      <Icon className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-1 tracking-tight">{category.category}</h2>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.tools.map((tool, toolIdx) => (
                      <Link
                        key={toolIdx}
                        href={tool.url}
                        className="group p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg hover:border-[#94A3B8] transition-all cursor-pointer"
                      >
                        <h3 className="font-semibold text-[#0F172A] leading-tight text-base group-hover:text-[#64748B] transition-colors">
                          {tool.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
