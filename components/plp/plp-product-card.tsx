"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Eye } from "lucide-react"
import type { PLPProduct } from "@/lib/plp-data"

interface PLPProductCardProps {
  product: PLPProduct
  index: number
}

export function PLPProductCard({ product, index }: PLPProductCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.06 * index, ease: "easeOut" }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#F5F0EB]">
        {/* Badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-[#FDFBF7] text-[#1C1917] text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 border border-[#E7E5E4]">
            {"Nouveaute"}
          </span>
        )}

        {/* Primary image */}
        <Image
          src={product.imageA}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-[#1C1917]/10 transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick View button */}
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2.5 bg-[#FDFBF7] text-[#1C1917] py-3 text-xs font-sans uppercase tracking-widest hover:bg-[#1C1917] hover:text-[#FDFBF7] transition-colors border border-[#E7E5E4]"
          aria-label={`Apercu rapide de ${product.name}`}
        >
          <Eye className="size-3.5" strokeWidth={1.5} />
          Apercu Rapide
        </motion.button>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="font-serif text-sm md:text-base text-[#1C1917] mb-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-[#1C1917]">
          {product.priceCFA.toLocaleString("fr-FR")} FCFA{" "}
          <span className="text-[#78716C]">| {product.priceEUR} {"\u20AC"}</span>
        </p>
      </div>
    </motion.article>
  )
}
