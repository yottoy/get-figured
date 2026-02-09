import Link from 'next/link'

interface Calculator {
  name: string
  description: string
  href: string
}

interface RelatedCalculatorsProps {
  calculators: Calculator[]
}

export default function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  return (
    <section className="mt-16 pt-12 border-t border-[#E2E8F0]">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-6">Related Calculators</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {calculators.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="group p-5 rounded-lg border border-[#E2E8F0] hover:border-[#0F172A] hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-[#0F172A] group-hover:underline mb-1">
              {calc.name}
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {calc.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
