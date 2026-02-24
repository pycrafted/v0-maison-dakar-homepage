"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useCart } from "@/lib/cart-context"

export function OrderSummary() {
  const { items, updateQuantity, removeItem, subtotalCFA } = useCart()

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-xl md:text-2xl text-[#D4AF37] tracking-wide uppercase">
          Votre Panier
        </h2>
        <span className="text-xs text-[#8A8A8A] tracking-widest uppercase">
          {items.length} {items.length > 1 ? "articles" : "article"}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="flex-1 flex items-center justify-center py-20">
          <p className="text-[#8A8A8A] text-sm tracking-wide">
            Votre panier est vide
          </p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-6 flex-1">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4 pb-6 border-b border-[#2A2A2A] last:border-0"
                >
                  {/* Image */}
                  <div className="relative w-20 h-28 md:w-24 md:h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#1A1A1A]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <h3 className="font-serif text-sm md:text-base text-[#F5F0EB] leading-tight tracking-wide">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="text-xs text-[#8A8A8A] mt-1 tracking-wider uppercase">
                          Taille : {item.size}
                        </p>
                      )}
                      <p className="text-sm text-[#D4AF37] font-medium mt-2 tabular-nums">
                        {item.priceCFA.toLocaleString("fr-FR")} FCFA
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="size-8 flex items-center justify-center border border-[#2A2A2A] text-[#F5F0EB] hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:border-[#D4AF37] transition-all duration-200 rounded-sm"
                          aria-label="Diminuer la quantite"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="text-sm font-medium text-[#F5F0EB] w-6 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="size-8 flex items-center justify-center border border-[#2A2A2A] text-[#F5F0EB] hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:border-[#D4AF37] transition-all duration-200 rounded-sm"
                          aria-label="Augmenter la quantite"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#8A8A8A] hover:text-[#B91C1C] transition-colors"
                        aria-label={`Supprimer ${item.name}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {/* Subtotal */}
          <div className="border-t border-[#2A2A2A] pt-6 mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest text-[#8A8A8A]">
                Sous-total
              </span>
              <span className="text-lg font-serif text-[#D4AF37] tabular-nums">
                {subtotalCFA.toLocaleString("fr-FR")} FCFA
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
