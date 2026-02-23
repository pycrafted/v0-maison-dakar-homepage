"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ENGAGEMENTS = [
  {
    title: "H\u00e9ritage",
    description:
      "Soutien direct aux tisserands locaux du S\u00e9n\u00e9gal. Chaque m\u00e8tre de tissu achet\u00e9 finance l\u2019\u00e9ducation et l\u2019autonomie des communaut\u00e9s artisanes de Ziguinchor \u00e0 Tambacounda.",
  },
  {
    title: "\u00c9co-responsabilit\u00e9",
    description:
      "Production en s\u00e9ries limit\u00e9es, z\u00e9ro d\u00e9chet textile. Nos chutes de bazin sont transform\u00e9es en accessoires, nos teintures sont naturelles. La mode lente comme philosophie.",
  },
  {
    title: "Excellence",
    description:
      "Coupes parfaites, finitions dignes de l\u2019avenue Montaigne. Chaque pi\u00e8ce est contr\u00f4l\u00e9e \u00e0 la main avant de quitter notre atelier de la M\u00e9dina.",
  },
]

export function EngagementBand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="bg-[#1C1917] py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Nos engagements
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F5F4] tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ce en quoi nous croyons
          </h2>
        </motion.div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {ENGAGEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 * i, ease: "easeOut" }}
              className="text-center"
            >
              {/* Number */}
              <span className="block font-serif text-6xl md:text-7xl text-[#D4AF37]/20 mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#F5F5F4] mb-4 tracking-tight">
                {item.title}
              </h3>
              <div className="w-8 h-px bg-[#D4AF37] mx-auto mb-6" />
              <p className="text-sm text-[#A8A29E] leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
