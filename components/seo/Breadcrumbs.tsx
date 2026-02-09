import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-sm text-[#64748B]">
        <li>
          <Link href="/" className="hover:text-[#0F172A] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <span className="text-[#CBD5E1]">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-[#0F172A] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0F172A] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
