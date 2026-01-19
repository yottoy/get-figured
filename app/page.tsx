import Link from 'next/link'
import { Calculator, Users, Clock, TrendingUp, ArrowRight } from 'lucide-react'

const calculators = [
  {
    category: 'Freelance & Consulting',
    icon: Calculator,
    color: 'blue',
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
    color: 'green',
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
    color: 'purple',
    tools: [
      { name: 'Calculate Overtime Hours', url: '/time/overtime-hours', volume: '90/mo' },
      { name: 'Work Hours with Lunch Break', url: '/time/work-hours-with-lunch', volume: '70/mo' },
    ]
  },
  {
    category: 'Finance & Profit',
    icon: TrendingUp,
    color: 'orange',
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
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Free Business Calculators for Freelancers & Small Businesses
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Calculate rates, manage PTO, track hours, and analyze profits. 
              19 free tools, no signup required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#calculators"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center"
              >
                Browse All Tools
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">19</div>
              <div className="text-slate-600">Free Calculators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5,500+</div>
              <div className="text-slate-600">Searches/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators by Category */}
      <section id="calculators" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {calculators.map((category, idx) => {
              const Icon = category.icon
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-700 border-blue-200',
                green: 'bg-green-50 text-green-700 border-green-200',
                purple: 'bg-purple-50 text-purple-700 border-purple-200',
                orange: 'bg-orange-50 text-orange-700 border-orange-200',
              }[category.color]

              return (
                <div key={idx}>
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg border ${colorClasses} mr-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">{category.category}</h2>
                      <p className="text-slate-600">{category.tools.length} calculators</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.tools.map((tool, toolIdx) => (
                      <Link
                        key={toolIdx}
                        href={tool.url}
                        className={`p-6 rounded-lg border-2 transition hover:shadow-lg ${
                          tool.featured 
                            ? 'border-primary/30 bg-primary/5 hover:border-primary' 
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-slate-900 leading-tight">
                            {tool.name}
                          </h3>
                          {tool.featured && (
                            <span className="text-xs bg-primary text-white px-2 py-1 rounded font-semibold ml-2">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-500">{tool.volume} searches</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Get Figured?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-slate-600">
                All calculators use industry-standard formulas and benchmarks. 
                Get reliable results every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Signup Required</h3>
              <p className="text-slate-600">
                Use all tools instantly without creating an account. 
                Your data stays private on your device.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-slate-600">
                All calculators work perfectly on mobile, tablet, and desktop. 
                Calculate on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Calculating Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of freelancers, consultants, and small business owners 
            who use Get Figured to make better financial decisions.
          </p>
          <Link 
            href="#calculators"
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition inline-block"
          >
            Browse All Calculators
          </Link>
        </div>
      </section>
    </div>
  )
}
