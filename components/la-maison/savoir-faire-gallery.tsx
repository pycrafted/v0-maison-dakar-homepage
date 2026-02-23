"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const GALLERY_ITEMS = [
  {
    src: "/images/savoir-faire-fil-or.jpg",
    alt: "Fil d'or, broderie main",
    caption: "Broderie main, 40 heures de travail",
  },
  {
    src: "/images/savoir-faire-couture.jpg",
    alt: "Machine a coudre traditionnelle dans l'atelier",
    caption: "Couture sur machine vintage Singer",
  },
  {
    src: "/images/savoir-faire-broderie.jpg",
    alt: "Mains artisanes brodant un motif",
    caption: "Motifs ancestraux, gestes transmis",
  },
  {
    src: "/images/savoir-faire-textile.jpg",
    alt: "Texture de pagne tisse manjak",
    caption: "Pagne manjak tisse a la main",
  },
]

function GalleryCard({
  item,
  index,
}: {
  item: (typeof GALLERY_ITEMS)[number]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div
        className={`relative w-full overflow-hidden ${
          index === 0 || index === 3 ? "aspect-[4/5]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1C1917]/0 group-hover:bg-[#1C1917]/60 transition-all duration-500 flex items-end p-6">
          <motion.p
            className="text-sm text-[#FDFBF7] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-3 group-hover:translate-y-0"
            style={{ transitionProperty: "opacity, transform", transitionDuration: "500ms" }}
          >
            {item.caption}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export function SavoirFaireGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Artisanat
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1917] tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"Nos Mains d\u2019Or"}
          </h2>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.src}
              className={i === 1 || i === 2 ? "sm:mt-8 lg:mt-12" : ""}
            >
              <GalleryCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
