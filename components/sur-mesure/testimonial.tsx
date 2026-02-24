"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="px-4 md:px-8 py-28 md:py-36 lg:py-44 bg-[#FDFBF7]">
      <div className="max-w-screen-md mx-auto text-center">
        {/* Decorative gold quote marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="font-serif text-7xl md:text-8xl text-[#D4AF37]/40 leading-none select-none"
            aria-hidden="true"
          >
            {"\u201C"}
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <p className="font-serif text-xl md:text-2xl lg:text-3xl italic text-[#1C1917] leading-relaxed tracking-tight text-balance">
            {"Golden Pousso a su traduire mon ame dans une robe. Le tombe du bazin et la precision des broderies sont incomparables."}
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="w-10 h-px bg-[#D4AF37]" />
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#78716C]">
            Cliente Anonyme, Paris
          </p>
        </motion.div>
      </div>
    </section>
  )
}
