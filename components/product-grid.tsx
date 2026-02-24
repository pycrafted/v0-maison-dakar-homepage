"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Plus } from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  priceEUR: number
  priceCFA: number
  imageA: string
  imageB: string
  category: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Boubou Terracotta Sculpte",
    description: "Bazin riche, drapé sculptural",
    priceEUR: 185,
    priceCFA: 120000,
    imageA: "/images/product-1a.jpg",
    imageB: "/images/product-1b.jpg",
    category: "boubous",
  },
  {
    id: 2,
    name: "Ensemble Bazin Indigo",
    description: "Broderies or, coupe structuree",
    priceEUR: 245,
    priceCFA: 160000,
    imageA: "/images/product-2a.jpg",
    imageB: "/images/product-2b.jpg",
    category: "boubous",
  },
  {
    id: 3,
    name: "Robe Manjak Ivoire",
    description: "Soie et pagne tisse, fluide",
    priceEUR: 310,
    priceCFA: 205000,
    imageA: "/images/product-3a.jpg",
    imageB: "/images/product-3b.jpg",
    category: "boubous",
  },
  {
    id: 4,
    name: "Tailleur Emeraude",
    description: "Bazin riche, tailleur power",
    priceEUR: 275,
    priceCFA: 180000,
    imageA: "/images/product-4a.jpg",
    imageB: "/images/product-4b.jpg",
    category: "boubous",
  },
]

const FILTERS = [
  { label: "Toutes les pieces", value: "all" },
  { label: "Boubous", value: "boubous" },
]

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#1A1A1A] rounded-sm">
        <Image
          src={product.imageA}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-700 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <Image
          src={product.imageB}
          alt={`${product.name} - vue arriere`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] py-3 text-xs font-sans uppercase tracking-widest rounded-sm hover:bg-[#C2662D] hover:text-[#F5F0EB] transition-colors font-medium"
          aria-label={`Ajouter ${product.name} au panier`}
        >
          <Plus className="size-3.5" strokeWidth={2} />
          Ajouter
        </motion.button>
      </div>
      <h3 className="font-sans text-sm font-medium text-[#F5F0EB] mb-1">
        {product.name}
      </h3>
      <p className="text-xs text-[#8A8A8A] mb-2">{product.description}</p>
      <p className="text-sm text-[#D4AF37]">
        {product.priceCFA.toLocaleString("fr-FR")} FCFA{" "}
        <span className="text-[#8A8A8A]">| {product.priceEUR} {"\u20AC"}</span>
      </p>
    </motion.div>
  )
}

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filtered =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter)

  return (
    <section
      id="collection"
      ref={ref}
      className="px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-6 mb-4">
          <div className="w-12 h-px bg-[#D4AF37]" />
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37]">
            Collection
          </p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] tracking-tight" style={{ letterSpacing: "-0.02em" }}>
          {"Pieces Selectionnees"}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-6 md:gap-8 mb-10 md:mb-14"
      >
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`relative text-sm font-sans transition-colors pb-1 ${
              activeFilter === f.value
                ? "text-[#D4AF37]"
                : "text-[#8A8A8A] hover:text-[#F5F0EB]"
            }`}
          >
            {f.label}
            {activeFilter === f.value && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {filtered.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
