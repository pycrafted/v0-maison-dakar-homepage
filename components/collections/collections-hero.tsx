"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function CollectionsHero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/collections-hero.jpg"
        alt="Defile Golden Pousso - Haute couture africaine"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-px bg-[#D4AF37] mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs font-sans uppercase tracking-[0.35em] text-[#D4AF37] mb-6"
        >
          Golden Pousso Presents
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F5F0EB] uppercase tracking-wider"
        >
          {"Nos D\u00e9fil\u00e9s"}
          <br />
          <span className="text-[#D4AF37]">{"& Collections"}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 text-sm md:text-base text-[#F5F0EB]/60 max-w-lg mx-auto leading-relaxed"
        >
          {"Plongez dans l\u2019univers Golden Pousso \u00e0 travers nos d\u00e9fil\u00e9s exclusifs et nos collections saisonni\u00e8res."}
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="h-px bg-[#D4AF37] mx-auto mt-8"
        />
      </div>
    </section>
  )
}
