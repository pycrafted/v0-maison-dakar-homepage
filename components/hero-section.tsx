"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Collection Héritage Manjak - Haute couture sénégalaise"
        fill
        priority
        className="object-cover brightness-[0.6]"
        sizes="100vw"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.35em] text-[#FDFBF7]/80 mb-6"
        >
          Artisanat & Avant-Garde
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#FDFBF7] tracking-tight leading-[0.9] text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          Héritage Manjak
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <motion.a
            href="#collection"
            className="inline-block bg-[#FDFBF7] text-[#1C1917] px-10 py-4 text-xs font-sans uppercase tracking-[0.25em] rounded-sm"
            whileHover={{
              backgroundColor: "#1C1917",
              color: "#FDFBF7",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            Découvrir la collection
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10" />
    </section>
  )
}
