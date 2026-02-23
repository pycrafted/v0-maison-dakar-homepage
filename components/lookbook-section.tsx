"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

interface LookbookImageProps {
  src: string
  alt: string
  className?: string
}

function LookbookImage({ src, alt, className }: LookbookImageProps) {
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={imageRef}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Magnetic button */}
      {hovered && (
        <motion.div
          className="absolute z-10 pointer-events-none"
          animate={{
            x: mousePos.x - 48,
            y: mousePos.y - 16,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
        >
          <span className="inline-block bg-[#FDFBF7] text-[#1C1917] px-5 py-2.5 text-xs font-sans uppercase tracking-widest rounded-sm whitespace-nowrap">
            Voir le look
          </span>
        </motion.div>
      )}
    </div>
  )
}

export function LookbookSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <div className="flex items-center gap-6 mb-4">
          <div className="w-12 h-px bg-[#8B4513]" />
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#8B4513]">
            Lookbook
          </p>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1917] tracking-tight" style={{ letterSpacing: "-0.02em" }}>
          {"L'Art de la Silhouette"}
        </h2>
      </motion.div>

      {/* Asymmetric editorial grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
        style={{ gridAutoRows: "280px" }}
      >
        <LookbookImage
          src="/images/lookbook-1.jpg"
          alt="Robe sculpturale en bazin blanc et or"
          className="md:col-span-5 md:row-span-2"
        />
        <LookbookImage
          src="/images/lookbook-2.jpg"
          alt="Ensemble en pagne tissé manjak"
          className="md:col-span-7"
        />
        <LookbookImage
          src="/images/lookbook-3.jpg"
          alt="Robe du soir en bazin indigo"
          className="md:col-span-7"
        />
      </motion.div>
    </section>
  )
}
