"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const ARTISAN_IMAGES = [
  { src: "/images/artisan-1.jpg", alt: "Broderie d'or sur bazin riche dans l'atelier de Dakar" },
  { src: "/images/artisan-2.jpg", alt: "Tissage traditionnel du pagne manjak" },
  { src: "/images/artisan-3.jpg", alt: "Textiles de luxe dans l'atelier Golden Pousso" },
]

export function SavoirFaireSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-6 mb-4">
            <div className="w-12 h-px bg-[#D4AF37]" />
            <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37]">
              Savoir-Faire
            </p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            Le Geste Artisanal
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="text-base md:text-lg text-[#8A8A8A] leading-relaxed mb-8 max-w-md">
              {"Chaque piece Golden Pousso nait de la rencontre entre un patrimoine textile seculaire et une vision contemporaine. Nos artisans maitres perpetuent les techniques ancestrales du bazin riche et du tissage manjak, sublimees par une approche sculpturale de la haute couture."}
            </p>
            <p className="text-base md:text-lg text-[#8A8A8A] leading-relaxed mb-10 max-w-md">
              {"De la selection des fibres les plus nobles au geste final de la broderie doree, chaque etape est un acte de devotion. C'est cette exigence absolue qui fait de chaque creation une oeuvre singuliere."}
            </p>
            <motion.a
              href="/la-maison"
              className="inline-block bg-[#D4AF37] text-[#0A0A0A] px-8 py-4 text-xs font-sans uppercase tracking-[0.25em] rounded-sm font-medium"
              whileHover={{
                backgroundColor: "#C2662D",
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
            >
              {"Decouvrir l'atelier"}
            </motion.a>
          </motion.div>

          <div className="flex flex-col gap-6">
            {ARTISAN_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                className="relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
