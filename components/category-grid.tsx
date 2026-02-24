"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const CATEGORIES = [
  {
    title: "Boubous Africains",
    image: "/images/cat-boubous.jpg",
    href: "/pret-a-porter",
  },
  {
    title: "Chaussures",
    image: "/images/cat-chaussures.jpg",
    href: "#",
  },
  {
    title: "Sacs a Main",
    image: "/images/cat-sacs.jpg",
    href: "#",
  },
  {
    title: "Bijoux",
    image: "/images/cat-bijoux.jpg",
    href: "#",
  },
]

export function CategoryGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="categories"
      ref={ref}
      className="px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 md:mb-20"
      >
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-12 h-px bg-[#D4AF37]" />
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37]">
            Nos Collections
          </p>
          <div className="w-12 h-px bg-[#D4AF37]" />
        </div>
        <h2
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          {"Explorez l'Univers"}
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((cat, i) => (
          <motion.a
            key={cat.title}
            href={cat.href}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: "easeOut" }}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer block"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.65] group-hover:brightness-[0.4]"
              sizes="(max-width: 640px) 50vw, 25vw"
            />
            {/* Gold border overlay on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/50 transition-colors duration-500 z-10 rounded-sm" />

            {/* Category text */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-8 px-4">
              <motion.div
                className="text-center"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-[#F5F0EB] tracking-tight mb-2 text-balance">
                  {cat.title}
                </h3>
                <span className="inline-block text-[10px] font-sans uppercase tracking-[0.3em] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {"Decouvrir \u2192"}
                </span>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
