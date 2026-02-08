import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Get Figured',
  description: 'Privacy policy for Get Figured. Learn how we handle your data. All calculations are processed in your browser — no data is stored on our servers.',
  alternates: {
    canonical: 'https://www.getfigured.co/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-sm text-slate-600">Last updated: January 19, 2026</p>

        <h2>Overview</h2>
        <p>
          Get Figured ("we", "our", or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we handle information when you use our website 
          and calculators.
        </p>

        <h2>Information We Collect</h2>
        
        <h3>Calculator Data</h3>
        <p>
          All calculator inputs and results are processed entirely in your browser. 
          We do not collect, store, or transmit your calculation data to our servers. 
          Your data stays on your device.
        </p>

        <h3>Analytics</h3>
        <p>
          We use privacy-friendly analytics to understand how visitors use our site. 
          This includes:
        </p>
        <ul>
          <li>Pages visited</li>
          <li>Referring websites</li>
          <li>Browser type and version</li>
          <li>Device type (mobile, tablet, desktop)</li>
          <li>Country/region</li>
        </ul>
        <p>
          We do NOT collect:
        </p>
        <ul>
          <li>IP addresses</li>
          <li>Personal information</li>
          <li>Calculator inputs or results</li>
          <li>Cookies for tracking</li>
        </ul>

        <h3>Cookies</h3>
        <p>
          We may use minimal cookies for:
        </p>
        <ul>
          <li>Remembering your preferences (optional)</li>
          <li>Basic analytics (anonymized)</li>
        </ul>
        <p>
          You can disable cookies in your browser settings without affecting calculator functionality.
        </p>

        <h2>How We Use Information</h2>
        <p>
          The limited analytics data we collect is used only to:
        </p>
        <ul>
          <li>Improve our calculators and website</li>
          <li>Understand which tools are most useful</li>
          <li>Fix technical issues</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, rent, or share your data with third parties, except:
        </p>
        <ul>
          <li>When required by law</li>
          <li>To protect our rights or safety</li>
        </ul>

        <h2>Your Rights</h2>
        <p>
          Since we don't collect personal information, there's no data to access, 
          correct, or delete. Your calculator data never leaves your device.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. Changes will be posted on 
          this page with an updated date.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Contact us at{' '}
          <a href="mailto:hello@getfigured.co">hello@getfigured.co</a>
        </p>
      </div>
    </div>
  )
}
