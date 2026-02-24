"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ManifesteHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-32 md:py-40"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Small decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-12 h-px bg-[#D4AF37] mx-auto mb-12 origin-center"
        />

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#1C1917] tracking-tight mb-12 md:mb-16"
          style={{ letterSpacing: "-0.03em" }}
        >
          Notre Manifeste.
        </motion.h1>

        {/* Justified paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#57534E] leading-relaxed md:leading-loose text-justify max-w-3xl mx-auto"
          style={{ textAlignLast: "center" }}
        >
          {
            "N\u00e9e sous le soleil de Dakar, nourrie par l\u2019effervescence de l\u2019Afrique contemporaine et l\u2019\u00e9l\u00e9gance intemporelle des grandes maisons de couture. Golden Pousso est une lettre d\u2019amour \u00e0 notre h\u00e9ritage. Nous croyons que la vraie beaut\u00e9 na\u00eet de la rencontre entre tradition ancestrale et vision avant-gardiste \u2014 chaque pi\u00e8ce est un pont entre deux mondes."
          }
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 md:mt-20 flex items-center justify-center gap-3"
        >
          <span className="block w-8 h-px bg-[#D6D3D1]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A8A29E]">
            Depuis 2018
          </span>
          <span className="block w-8 h-px bg-[#D6D3D1]" />
        </motion.div>
      </div>
    </section>
  )
}
