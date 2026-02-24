"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Boutique", href: "#" },
  { label: "Boubous", href: "#" },
]

export function CategoryHero() {
  return (
    <section className="pt-36 md:pt-44 pb-12 md:pb-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Fil d'Ariane"
        className="mb-10 md:mb-14"
      >
        <ol className="flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#8A8A8A]">
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="size-3 text-[#8A8A8A]/40" strokeWidth={1.5} />
              )}
              {i === breadcrumbs.length - 1 ? (
                <span className="text-[#D4AF37]">{crumb.label}</span>
              ) : (
                <a
                  href={crumb.href}
                  className="hover:text-[#F5F0EB] transition-colors"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center"
      >
        <h1
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#F5F0EB] uppercase tracking-[0.06em] mb-6"
          style={{ letterSpacing: "0.06em" }}
        >
          Boubous Africains
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-[#8A8A8A] leading-relaxed font-sans">
          {"Decouvrez nos pieces d'exception. L'alliance parfaite entre les coupes contemporaines et la noblesse des tissus africains traditionnels."}
        </p>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 md:mt-16 h-px bg-[#2A2A2A] origin-center"
      />
    </section>
  )
}
