"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Golden Pousso - La couture Africaine autrement"
        fill
        priority
        className="object-cover brightness-[0.4]"
        sizes="100vw"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Gold decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-[#D4AF37] mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.35em] text-[#D4AF37] mb-6"
        >
          La couture Africaine autrement !
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#F5F0EB] tracking-tight leading-[0.9] text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          GOLDEN POUSSO
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10"
        >
          <motion.a
            href="#categories"
            className="inline-block bg-[#D4AF37] text-[#0A0A0A] px-10 py-4 text-xs font-sans uppercase tracking-[0.25em] rounded-sm font-medium"
            whileHover={{
              backgroundColor: "#C2662D",
              color: "#F5F0EB",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            {"Decouvrir la collection"}
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  )
}
