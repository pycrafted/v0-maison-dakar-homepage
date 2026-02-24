import { ChevronRight } from "lucide-react"

const CRUMBS = [
  { label: "Accueil", href: "/" },
  { label: "Boubous Africains", href: "/pret-a-porter" },
  { label: "Modele Royal", href: null },
]

export function PdpBreadcrumb() {
  return (
    <nav aria-label="Fil d'Ariane" className="py-4">
      <ol className="flex items-center flex-wrap gap-1 text-xs tracking-wider">
        {CRUMBS.map((crumb, i) => (
          <li key={crumb.label} className="flex items-center gap-1">
            {i > 0 && (
              <ChevronRight className="size-3 text-[#8A8A8A]/40 mx-0.5" strokeWidth={1.5} />
            )}
            {crumb.href ? (
              <a
                href={crumb.href}
                className="text-[#8A8A8A] hover:text-[#D4AF37] transition-colors uppercase"
              >
                {crumb.label}
              </a>
            ) : (
              <span className="text-[#D4AF37]/80 uppercase">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
