import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Free Business Calculators for Freelancers & Small Business | Get Figured",
  description: "Free online calculators for consulting rates, PTO accrual, work hours, profit margins, and invoices. No signup required -- instant results in your browser.",
  keywords: "business calculator, consulting rate calculator, PTO calculator, profit margin calculator, freelance pricing, work hours calculator",
  metadataBase: new URL('https://www.getfigured.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Free Business Calculators for Freelancers & Small Business | Get Figured',
    description: 'Free online calculators for consulting rates, PTO accrual, work hours, profit margins, and invoices. No signup required.',
    url: 'https://www.getfigured.co',
    siteName: 'Get Figured',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Business Calculators for Freelancers & Small Business | Get Figured',
    description: 'Free online calculators for consulting rates, PTO accrual, work hours, profit margins, and invoices. No signup required.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3F213CNK4P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3F213CNK4P');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
