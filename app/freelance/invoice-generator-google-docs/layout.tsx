import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Invoice Generator for Google Docs - Free Template',
  description: 'Free invoice generator compatible with Google Docs. Create professional invoices, download as PDF or edit in Google Docs.',
  keywords: 'invoice generator, Google Docs invoice, invoice template, free invoice maker',
  alternates: {
    canonical: 'https://www.getfigured.co/freelance/invoice-generator-google-docs',
  },
  openGraph: {
    title: 'Invoice Generator for Google Docs - Free Template',
    description: 'Free invoice generator compatible with Google Docs. Create professional invoices instantly.',
    url: 'https://www.getfigured.co/freelance/invoice-generator-google-docs',
    siteName: 'Get Figured',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
