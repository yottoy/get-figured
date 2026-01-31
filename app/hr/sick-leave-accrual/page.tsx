'use client'

export default function SickLeaveAccrualCalculator() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Sick Leave Accrual Calculator
      </h1>
      <p className="text-lg text-slate-600 mb-8">
        Calculate sick leave accrual by state law. Check compliance and track balance.
      </p>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Coming Soon: State-Specific Sick Leave Calculator
        </h2>
        <p className="text-blue-800 mb-4">
          We're building a comprehensive sick leave accrual calculator that supports state-specific laws including California, New York, Illinois, and more. This tool will help you:
        </p>
        <ul className="list-disc list-inside text-blue-800 space-y-2 mb-6">
          <li>Calculate sick leave accrual based on hours worked</li>
          <li>Track sick leave balances and carryover</li>
          <li>Ensure compliance with state and local laws</li>
          <li>Understand different accrual rates by state</li>
          <li>Manage sick leave caps and limits</li>
        </ul>
        <p className="text-blue-800 font-semibold">
          This calculator is currently under development. Check back soon!
        </p>
      </div>

      <div className="prose max-w-none">
        <h2>Understanding Sick Leave Accrual</h2>
        <p>
          Sick leave accrual is the process by which employees earn paid time off for illness or medical appointments. 
          Many states have laws requiring employers to provide paid sick leave, with specific accrual rates and rules.
        </p>

        <h3>Common State Requirements</h3>
        
        <h4>California</h4>
        <p>
          California requires employers to provide at least 1 hour of sick leave for every 30 hours worked. 
          Employees can accrue up to 48 hours (6 days) per year, with a cap of 80 hours total.
        </p>

        <h4>New York</h4>
        <p>
          New York's sick leave requirements vary by employer size. Most employees accrue at least 1 hour 
          per 30 hours worked, with annual caps ranging from 40 to 56 hours depending on employer size.
        </p>

        <h4>Illinois</h4>
        <p>
          Illinois requires 1 hour of sick leave for every 40 hours worked, with employees able to accrue 
          up to 40 hours per year.
        </p>

        <h3>Key Sick Leave Terms</h3>
        <dl>
          <dt className="font-semibold mt-4">Accrual Rate</dt>
          <dd>The rate at which sick leave hours are earned, typically expressed as hours earned per hours worked.</dd>
          
          <dt className="font-semibold mt-4">Annual Cap</dt>
          <dd>The maximum number of sick leave hours an employee can accrue in a single year.</dd>
          
          <dt className="font-semibold mt-4">Carryover</dt>
          <dd>Unused sick leave that can be carried over to the next year, often subject to overall caps.</dd>
          
          <dt className="font-semibold mt-4">Front-Loading</dt>
          <dd>Providing the full annual sick leave allotment at the beginning of the year instead of accruing gradually.</dd>
        </dl>

        <h3>Why Track Sick Leave Accrual?</h3>
        <ul>
          <li><strong>Legal Compliance:</strong> Ensure you meet state and local sick leave requirements</li>
          <li><strong>Payroll Accuracy:</strong> Maintain accurate records for payroll processing</li>
          <li><strong>Employee Transparency:</strong> Provide clear information to employees about their benefits</li>
          <li><strong>Audit Preparedness:</strong> Keep detailed records for potential labor audits</li>
        </ul>

        <h3>Related Calculators</h3>
        <p>
          While we're building this sick leave calculator, check out our other HR calculators:
        </p>
        <ul>
          <li><a href="/hr/pto-accrual" className="text-blue-600 hover:underline">PTO Accrual Calculator</a> - Track general paid time off</li>
          <li><a href="/hr/vacation-accrual" className="text-blue-600 hover:underline">Vacation Accrual Calculator</a> - Calculate vacation time</li>
          <li><a href="/hr/time-off-accrual" className="text-blue-600 hover:underline">Time Off Accrual Calculator</a> - Manage all time off types</li>
        </ul>
      </div>
    </div>
  )
}
