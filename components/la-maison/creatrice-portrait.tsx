"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function CreateurPortrait() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left: Portrait image (40%) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[3/4.5] w-full overflow-hidden">
            <Image
              src="/images/creatrice-portrait.jpg"
              alt="Awa Diop, directrice artistique de Golden Pousso"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-[#A8A29E]">
            Awa Diop, Directrice Artistique
          </p>
        </motion.div>

        {/* Right: Text content (60%) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 lg:pt-16"
        >
          <div className="w-10 h-px bg-[#D4AF37] mb-8" />
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] mb-8 tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"L\u2019\u00c2me derri\u00e8re\nles \u00c9toffes"}
          </h2>
          <div className="flex flex-col gap-6 text-base md:text-lg text-[#57534E] leading-relaxed max-w-xl">
            <p>
              {
                "Awa Diop a grandi entre les ateliers de teinture de sa grand-m\u00e8re \u00e0 Ziguinchor et les pages \u00e9corn\u00e9es de Vogue que sa m\u00e8re collectionnait. Cette dualit\u00e9 \u2014 l\u2019artisanat brut et le r\u00eave de la haute couture \u2014 est devenue l\u2019essence m\u00eame de Golden Pousso."
              }
            </p>
            <p>
              {
                "Chaque saison, elle parcourt les villages du S\u00e9n\u00e9gal oriental pour sourcer ses tissus aupr\u00e8s des femmes tisserandes de Manjak. Le pagne tiss\u00e9 \u00e0 la main, le bazin riche teint \u00e0 l\u2019indigo naturel \u2014 ces mati\u00e8res nobles deviennent la toile de ses cr\u00e9ations."
              }
            </p>
            <p>
              {
                "Chaque collection est dessin\u00e9e dans son atelier de la M\u00e9dina, o\u00f9 le bruit des machines \u00e0 coudre se m\u00eale au chant de la pri\u00e8re. Ici, la mode n\u2019est pas une industrie. C\u2019est une po\u00e9sie."
              }
            </p>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="mt-12"
          >
            <svg
              viewBox="0 0 200 60"
              className="w-40 h-auto text-[#1C1917]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 45 C20 10, 35 10, 40 35 C45 55, 55 15, 65 30 C70 40, 75 20, 85 25 C95 30, 90 40, 100 35" />
              <path d="M105 38 C110 25, 120 20, 125 35 C128 42, 135 15, 145 28 C150 35, 155 25, 165 30 C170 32, 178 28, 185 32" />
            </svg>
            <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#A8A29E]">
              Awa Diop
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
