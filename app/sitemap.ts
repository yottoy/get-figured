import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.getfigured.co'
  
  const staticPages = [
    '',
    '/freelance',
    '/hr',
    '/time',
    '/finance',
    '/about',
    '/privacy',
    '/terms',
  ]

  const freelanceTools = [
    '/freelance/consulting-rate-calculator',
    '/freelance/consulting-fee-calculator',
    '/freelance/pricing-calculator',
    '/freelance/contractor-rate-calculator',
    '/freelance/contractor-hourly-rate-calculator',
    '/freelance/estimate-generator',
    '/freelance/proforma-invoice-generator',
    '/freelance/invoice-generator-google-docs',
  ]

  const hrTools = [
    '/hr/pto-calculator-hourly',
    '/hr/pto-accrual',
    '/hr/time-off-accrual',
    '/hr/vacation-accrual',
    '/hr/sick-leave-accrual',
  ]

  const timeTools = [
    '/time/work-hours-with-lunch',
    '/time/overtime-hours',
  ]

  const financeTools = [
    '/finance/markup-percentage',
    '/finance/profit-loss',
    '/finance/restaurant-profit-margin',
    '/finance/margin-from-markup',
  ]

  const allPages = [
    ...staticPages,
    ...freelanceTools,
    ...hrTools,
    ...timeTools,
    ...financeTools,
  ]

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1.0 : ['/about', '/privacy', '/terms'].includes(path) ? 0.3 : path.includes('/freelance/') || path.includes('/hr/') || path.includes('/time/') || path.includes('/finance/') ? 0.8 : 0.9,
  }))
}
