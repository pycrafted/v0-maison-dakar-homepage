"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Pret-a-Porter", href: "#" },
  { label: "Robes", href: "#" },
]

export function CategoryHero() {
  return (
    <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Fil d'Ariane"
        className="mb-10 md:mb-14"
      >
        <ol className="flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#78716C]">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="size-3 text-[#D6D3D1]" strokeWidth={1.5} />
              )}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-[#1C1917]">{crumb.label}</span>
              ) : (
                <a
                  href={crumb.href}
                  className="hover:text-[#1C1917] transition-colors"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </motion.nav>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center"
      >
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1C1917] uppercase tracking-[0.06em] mb-6"
          style={{ letterSpacing: "0.06em" }}
        >
          {"Pret-a-Porter"}
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#78716C] leading-relaxed font-sans">
          {"Decouvrez nos pieces d'exception. L'alliance parfaite entre les coupes contemporaines et la noblesse des tissus africains traditionnels (Bazin riche, Soie, Pagne Manjak)."}
        </p>
      </motion.div>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 md:mt-16 h-px bg-[#E7E5E4] origin-center"
      />
    </section>
  )
}
