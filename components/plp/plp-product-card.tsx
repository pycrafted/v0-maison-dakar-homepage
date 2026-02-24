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
      initial={index < 3 ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.06 * index, ease: "easeOut" }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#1A1A1A]">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-[#D4AF37] text-[#0A0A0A] text-[10px] font-sans uppercase tracking-widest px-3 py-1.5 font-medium">
            {"Nouveaute"}
          </span>
        )}

        <Image
          src={product.imageA}
          alt={product.name}
          fill
          priority={index < 3}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div
          className={`absolute inset-0 bg-[#0A0A0A]/20 transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />

        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#0A0A0A] py-3 text-xs font-sans uppercase tracking-widest font-medium hover:bg-[#C2662D] hover:text-[#F5F0EB] transition-colors"
          aria-label={`Apercu rapide de ${product.name}`}
        >
          <Eye className="size-3.5" strokeWidth={1.5} />
          Apercu Rapide
        </motion.button>
      </div>

      <div className="px-0.5">
        <h3 className="font-serif text-sm md:text-base text-[#F5F0EB] mb-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-[#D4AF37]">
          {product.priceCFA.toLocaleString("fr-FR")} FCFA{" "}
          <span className="text-[#8A8A8A]">| {product.priceEUR} {"\u20AC"}</span>
        </p>
      </div>
    </motion.article>
  )
}
