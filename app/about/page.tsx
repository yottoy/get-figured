import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Get Figured - Free Business Calculators',
  description: 'Get Figured provides free business calculators for freelancers, consultants, and small business owners. Calculate rates, PTO, profit margins, and more.',
  alternates: {
    canonical: 'https://www.getfigured.co/about',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#0F172A] mb-6">About Get Figured</h1>
      
      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0F172A] prose-p:text-[#64748B] prose-p:leading-relaxed prose-ul:text-[#64748B] prose-strong:text-[#0F172A]">
        <p>
          Get Figured provides free business calculators for freelancers, consultants, and small business owners. 
          Calculate consulting rates, PTO accrual, profit margins, and other essential business metrics.
        </p>

        <h2>Business Calculators We Offer</h2>
        
        <h3>Freelance & Consulting Calculators</h3>
        <p>
          Our freelance calculators help independent professionals determine appropriate rates and fees. 
          Calculate consulting hourly rates, project fees, contractor rates, and generate estimates and invoices.
        </p>

        <h3>HR & PTO Calculators</h3>
        <p>
          Human resources calculators for tracking employee time off. Calculate PTO accrual, vacation accrual, 
          sick leave accrual, and time off for both salaried and hourly employees.
        </p>

        <h3>Time & Payroll Calculators</h3>
        <p>
          Time tracking and payroll calculators for accurate wage calculations. Calculate overtime hours, 
          total work hours with lunch breaks, and other payroll-related metrics.
        </p>

        <h3>Finance & Profit Calculators</h3>
        <p>
          Financial calculators for business profitability analysis. Calculate markup percentages, profit margins, 
          profit and loss statements, and restaurant-specific profit margins.
        </p>

        <h2>Why Use Get Figured</h2>
        <p>
          All calculators use industry-standard formulas and are completely free to use. 
          No signup or registration required. Your data remains private and is not stored on our servers.
        </p>
      </div>
    </div>
  )
}
