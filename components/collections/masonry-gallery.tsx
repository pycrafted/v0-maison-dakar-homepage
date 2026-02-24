"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CollectionItem {
  id: number
  image: string
  alt: string
  collection: string
  season: string
  format: "portrait" | "square"
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: 1,
    image: "/images/col-tabaski-1.jpg",
    alt: "Boubou royal or sur le podium - Collection Tabaski 2026",
    collection: "Collection Tabaski 2026",
    season: "Haute Couture",
    format: "portrait",
  },
  {
    id: 2,
    image: "/images/col-tabaski-2.jpg",
    alt: "Portrait mannequin headwrap or et blanc - Collection Tabaski 2026",
    collection: "Collection Tabaski 2026",
    season: "Haute Couture",
    format: "square",
  },
  {
    id: 3,
    image: "/images/col-noel-1.jpg",
    alt: "Trio mannequins en rouge et or - Collection Noel 2025",
    collection: "Collection Noel 2025",
    season: "Festive",
    format: "square",
  },
  {
    id: 4,
    image: "/images/col-tabaski-3.jpg",
    alt: "Robe sculpturale ivoire et or sur le podium - Collection Tabaski 2026",
    collection: "Collection Tabaski 2026",
    season: "Haute Couture",
    format: "portrait",
  },
  {
    id: 5,
    image: "/images/col-noel-2.jpg",
    alt: "Boubou avant-garde noir et or - Collection Noel 2025",
    collection: "Collection Noel 2025",
    season: "Festive",
    format: "portrait",
  },
  {
    id: 6,
    image: "/images/col-noel-3.jpg",
    alt: "Coulisses du defile - Collection Noel 2025",
    collection: "Collection Noel 2025",
    season: "Backstage",
    format: "square",
  },
  {
    id: 7,
    image: "/images/col-resort-1.jpg",
    alt: "Robe emeraude et or sur les toits de Dakar - Collection Resort 2026",
    collection: "Collection Resort 2026",
    season: "Resort",
    format: "portrait",
  },
  {
    id: 8,
    image: "/images/col-resort-2.jpg",
    alt: "Couple en tenues resort terracotta - Collection Resort 2026",
    collection: "Collection Resort 2026",
    season: "Resort",
    format: "square",
  },
  {
    id: 9,
    image: "/images/col-resort-3.jpg",
    alt: "Robe drapee ivoire et or dans la medina - Collection Resort 2026",
    collection: "Collection Resort 2026",
    season: "Resort",
    format: "portrait",
  },
]

function GalleryItem({ item, index }: { item: CollectionItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.08 * (index % 3), ease: "easeOut" }}
      className={`group relative overflow-hidden cursor-pointer ${
        item.format === "portrait" ? "row-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full ${
          item.format === "portrait" ? "aspect-[3/5]" : "aspect-square"
        }`}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/70 transition-all duration-500 flex flex-col items-center justify-center p-6">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0 text-center">
            <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
              {item.season}
            </p>
            <h3 className="font-serif text-xl md:text-2xl text-[#F5F0EB] uppercase tracking-wider mb-6">
              {item.collection}
            </h3>
            <span className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#D4AF37] border border-[#D4AF37]/40 px-5 py-2.5 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300">
              Voir la collection
              <ArrowRight className="size-3.5" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function MasonryGallery() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="px-4 md:px-8 py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Galerie
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F0EB] uppercase tracking-wider">
            Sur le podium
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-[#2A2A2A]" />
            <p className="text-xs text-[#8A8A8A] uppercase tracking-widest">
              3 Collections
            </p>
            <div className="h-px w-12 bg-[#2A2A2A]" />
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {COLLECTIONS.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
