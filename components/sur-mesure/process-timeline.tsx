"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const STEPS = [
  {
    number: "01",
    title: "La Consultation",
    description:
      "En visio ou dans notre showroom a Dakar, notre creatrice prend le temps de comprendre vos envies, votre style et l'occasion. C'est le debut d'un dialogue intime entre votre vision et notre savoir-faire.",
    image: "/images/sur-mesure-consultation.jpg",
    imageAlt: "Consultation privee dans l'atelier Golden Pousso",
  },
  {
    number: "02",
    title: "Croquis & Tissus",
    description:
      "Nos croquis prennent vie sous vos yeux. Nous vous guidons dans la selection des etoffes les plus rares : bazin riche, pagne tisse manjak a la main, soie naturelle, broderies dorees. Chaque tissu raconte une histoire.",
    image: "/images/sur-mesure-croquis.jpg",
    imageAlt: "Croquis de mode et selection de tissus premium",
  },
  {
    number: "03",
    title: "Les Essayages",
    description:
      "Deux a trois seances d'essayage ou chaque couture est verifiee, chaque courbe ajustee au millimetre. La toile prend forme et epouse votre silhouette avec une precision absolue.",
    image: "/images/sur-mesure-essayage.jpg",
    imageAlt: "Seance d'essayage en atelier haute couture",
  },
  {
    number: "04",
    title: "La Revelation",
    description:
      "Le moment tant attendu. Votre creation unique vous est remise dans un ecrin signe Golden Pousso. Vous portez desormais une piece d'art, entierement pensee et realisee pour vous.",
    image: "/images/sur-mesure-revelation.jpg",
    imageAlt: "Revelation de la robe sur-mesure terminee",
  },
]

function TimelineStep({
  step,
  index,
}: {
  step: (typeof STEPS)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative">
      {/* Vertical connector line (not on last item) */}
      {index < STEPS.length - 1 && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-px top-full w-px h-16 md:h-24 bg-[#E7E5E4] origin-top hidden md:block"
        />
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center ${
          !isEven ? "md:direction-rtl" : ""
        }`}
      >
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`md:direction-ltr ${!isEven ? "md:order-2" : ""}`}
        >
          <div className="flex items-baseline gap-4 mb-4">
            <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#E7E5E4] leading-none" style={{ letterSpacing: "-0.04em" }}>
              {step.number}
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#1C1917] mb-6 tracking-tight">
            {step.title}
          </h3>
          <p className="text-sm md:text-base text-[#78716C] leading-relaxed max-w-md">
            {step.description}
          </p>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={`${!isEven ? "md:order-1" : ""}`}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={step.image}
              alt={step.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function ProcessTimeline() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" })

  return (
    <section className="px-4 md:px-8 py-24 md:py-32 lg:py-40">
      <div className="max-w-screen-xl mx-auto">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-20 md:mb-28 lg:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans uppercase tracking-[0.35em] text-[#8B4513] mb-4"
          >
            Le Processus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1917] tracking-tight text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"De l'Esquisse a l'Ecrin"}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-px bg-[#D4AF37] mx-auto mt-8 origin-center"
          />
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {STEPS.map((step, i) => (
            <TimelineStep key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
