"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function BespokeHero() {
  const scrollToForm = () => {
    const el = document.getElementById("reservation")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/sur-mesure-hero.jpg"
        alt="Atelier de haute couture Maison Dakar - Robe en cours de creation"
        fill
        priority
        className="object-cover brightness-[0.45]"
        sizes="100vw"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-[#D4AF37] mb-8 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs md:text-sm font-sans uppercase tracking-[0.4em] text-[#D4AF37] mb-6"
        >
          Sur-Mesure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-[8.5rem] text-[#FDFBF7] tracking-tight leading-[0.9] text-balance"
          style={{ letterSpacing: "-0.02em" }}
        >
          {"L'ART DU"}
          <br />
          SUR-MESURE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8 max-w-xl text-sm md:text-base text-[#FDFBF7]/70 leading-relaxed font-sans text-balance"
        >
          {"Votre silhouette, notre toile. Une creation unique, pensee par notre creatrice et cousue a la main dans nos ateliers a Dakar."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <motion.button
            onClick={scrollToForm}
            className="inline-block bg-[#FDFBF7] text-[#1C1917] px-12 py-4 text-xs font-sans uppercase tracking-[0.25em] rounded-sm cursor-pointer"
            whileHover={{
              backgroundColor: "#1C1917",
              color: "#FDFBF7",
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
          >
            {"Reserver une Consultation"}
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10" />
    </section>
  )
}
