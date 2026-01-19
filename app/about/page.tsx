export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">About Get Figured</h1>
      
      <div className="prose prose-lg">
        <p>
          Get Figured is a free collection of business calculators designed for freelancers, 
          consultants, and small business owners. Our mission is to help you make better 
          financial decisions with accurate, easy-to-use tools.
        </p>

        <h2>Why We Built This</h2>
        <p>
          As freelancers ourselves, we struggled to find simple, reliable calculators for 
          common business tasks like setting rates, tracking PTO, and calculating margins. 
          Most tools were either too complex, required signup, or cost money.
        </p>
        <p>
          We built Get Figured to be different: completely free, no signup required, 
          mobile-friendly, and focused on the calculations that matter most to small businesses.
        </p>

        <h2>Our Principles</h2>
        <ul>
          <li><strong>Always Free:</strong> All 19 calculators are free forever, no hidden costs</li>
          <li><strong>Privacy First:</strong> No signup required, your data stays on your device</li>
          <li><strong>Accuracy:</strong> All formulas use industry standards and best practices</li>
          <li><strong>Mobile Friendly:</strong> Works perfectly on any device, anywhere</li>
        </ul>

        <h2>What We Offer</h2>
        <p>
          We currently offer 19 free calculators across 4 categories:
        </p>
        <ul>
          <li>Freelance & Consulting (8 tools)</li>
          <li>HR & PTO (5 tools)</li>
          <li>Time & Payroll (2 tools)</li>
          <li>Finance & Profit (4 tools)</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions, feedback, or suggestions? We'd love to hear from you at{' '}
          <a href="mailto:hello@getfigured.co">hello@getfigured.co</a>
        </p>
      </div>
    </div>
  )
}
