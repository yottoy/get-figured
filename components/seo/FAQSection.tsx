interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="mt-16 pt-12 border-t border-[#E2E8F0]">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
              {item.question}
            </h3>
            <p className="text-[#64748B] leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
