"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const PRODUCT_IMAGES = [
  { src: "/images/pdp-royal-1.jpg", alt: "Boubou Modele Royal - Vue de face" },
  { src: "/images/pdp-royal-2.jpg", alt: "Boubou Modele Royal - Detail broderie or" },
  { src: "/images/pdp-royal-3.jpg", alt: "Boubou Modele Royal - Vue de dos" },
  { src: "/images/pdp-royal-4.jpg", alt: "Boubou Modele Royal - Portrait editorial" },
]

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPosition({ x, y })
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main image with zoom */}
      <div
        ref={imageRef}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#141414] cursor-crosshair"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={PRODUCT_IMAGES[activeIndex].src}
              alt={PRODUCT_IMAGES[activeIndex].alt}
              fill
              priority
              className="object-cover transition-transform duration-300 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                transform: isZooming ? "scale(2)" : "scale(1)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom hint */}
        {!isZooming && (
          <div className="absolute bottom-4 right-4 bg-[#0A0A0A]/70 backdrop-blur-sm text-[#F5F0EB]/60 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-sm pointer-events-none">
            Survoler pour zoomer
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {PRODUCT_IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative aspect-[3/4] overflow-hidden rounded-sm transition-all duration-300 ${
              activeIndex === i
                ? "ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#0A0A0A]"
                : "opacity-50 hover:opacity-80"
            }`}
            aria-label={`Voir ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
