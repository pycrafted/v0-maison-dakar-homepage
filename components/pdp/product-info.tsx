"use client"

import { useState } from "react"
import { Check, ShoppingBag, Smartphone, Store, Gem } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const COLORS = [
  { name: "Noir", value: "#1A1A1A", border: "#3A3A3A" },
  { name: "Bazin Blanc", value: "#F5F0EB", border: "#D4D0CB" },
  { name: "Or", value: "#D4AF37", border: "#D4AF37" },
]

const SIZES = ["S", "M", "L", "XL", "Sur-mesure"]

export function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState("Noir")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    if (!selectedSize) return
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2200)
  }

  return (
    <div className="flex flex-col">
      {/* Title */}
      <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] uppercase tracking-wide text-[#F5F0EB] leading-tight text-balance">
        {"Boubou Modele Royal"}
      </h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-3xl md:text-4xl font-serif font-bold text-[#D4AF37] tracking-tight">
          185 000 FCFA
        </span>
      </div>
      <p className="text-sm text-[#8A8A8A] mt-1 tracking-wide">
        {"~ 282 \u20AC"}
      </p>

      {/* Separator */}
      <div className="h-px bg-[#2A2A2A] my-8" />

      {/* Colors */}
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">
          {"Couleur : "}
          <span className="text-[#F5F0EB]">{selectedColor}</span>
        </p>
        <div className="flex items-center gap-3">
          {COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`relative size-10 rounded-full transition-all duration-200 ${
                selectedColor === color.name
                  ? "ring-2 ring-[#D4AF37] ring-offset-2 ring-offset-[#0A0A0A]"
                  : "hover:ring-1 hover:ring-[#8A8A8A]/40 hover:ring-offset-2 hover:ring-offset-[#0A0A0A]"
              }`}
              style={{ backgroundColor: color.value, border: `1px solid ${color.border}` }}
              aria-label={`Couleur ${color.name}`}
            >
              {selectedColor === color.name && (
                <Check
                  className={`absolute inset-0 m-auto size-4 ${
                    color.name === "Bazin Blanc" ? "text-[#0A0A0A]" : "text-[#F5F0EB]"
                  }`}
                  strokeWidth={2.5}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">
          {"Taille"}
          {selectedSize && (
            <span className="text-[#F5F0EB]">{" : "}{selectedSize}</span>
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => {
            const isActive = selectedSize === size
            const isSurMesure = size === "Sur-mesure"
            return (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`relative h-11 rounded-sm text-sm tracking-wider uppercase transition-all duration-200 ${
                  isSurMesure ? "px-5" : "w-14"
                } ${
                  isActive
                    ? "bg-[#D4AF37] text-[#0A0A0A] font-medium border border-[#D4AF37]"
                    : "bg-transparent text-[#F5F0EB] border border-[#2A2A2A] hover:border-[#D4AF37]/50"
                }`}
                aria-label={`Taille ${size}`}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>

      {/* Add to cart button */}
      <div className="mt-10">
        <motion.button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          whileTap={{ scale: 0.97 }}
          className={`relative w-full h-14 rounded-sm text-sm font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 overflow-hidden ${
            !selectedSize
              ? "bg-[#2A2A2A] text-[#8A8A8A] cursor-not-allowed"
              : addedToCart
                ? "bg-[#2E7D32] text-[#F5F0EB]"
                : "bg-[#0A0A0A] text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
          }`}
        >
          <AnimatePresence mode="wait">
            {addedToCart ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2"
              >
                <Check className="size-5" strokeWidth={2} />
                {"Ajoute au panier"}
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center gap-2"
              >
                <ShoppingBag className="size-5" strokeWidth={1.5} />
                {selectedSize ? "Ajouter au panier" : "Choisir une taille"}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Accordion */}
      <div className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="description" className="border-[#2A2A2A]">
            <AccordionTrigger className="text-sm uppercase tracking-widest text-[#F5F0EB] hover:text-[#D4AF37] hover:no-underline py-5">
              {"Description & Tissu"}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[#8A8A8A] leading-relaxed pb-6">
              <p className="mb-4">
                {"Le Modele Royal incarne l\u2019excellence de l\u2019artisanat senegalais. Confectionne a la main dans notre atelier de Dakar, ce boubou d\u2019exception associe le bazin riche le plus fin a des broderies realisees au fil d\u2019or par nos maitres artisans."}
              </p>
              <ul className="flex flex-col gap-2 mt-4">
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#D4AF37]" />
                  {"Tissu : Bazin riche super premium (100% coton)"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#D4AF37]" />
                  {"Broderie : Fil d\u2019or veritable, technique traditionnelle Senegalaise"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#D4AF37]" />
                  {"Confection : Entierement cousu a la main"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-[#D4AF37]" />
                  {"Origine : Dakar, Senegal"}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sizes" className="border-[#2A2A2A]">
            <AccordionTrigger className="text-sm uppercase tracking-widest text-[#F5F0EB] hover:text-[#D4AF37] hover:no-underline py-5">
              Guide des tailles
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[#8A8A8A] leading-relaxed pb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#2A2A2A]">
                      <th className="py-3 pr-6 text-[#D4AF37] font-medium uppercase tracking-widest">Taille</th>
                      <th className="py-3 pr-6 text-[#D4AF37] font-medium uppercase tracking-widest">Tour Poitrine</th>
                      <th className="py-3 pr-6 text-[#D4AF37] font-medium uppercase tracking-widest">Longueur</th>
                      <th className="py-3 text-[#D4AF37] font-medium uppercase tracking-widest">Epaules</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "S", chest: "96-100 cm", length: "140 cm", shoulder: "44 cm" },
                      { size: "M", chest: "101-105 cm", length: "145 cm", shoulder: "46 cm" },
                      { size: "L", chest: "106-112 cm", length: "150 cm", shoulder: "48 cm" },
                      { size: "XL", chest: "113-120 cm", length: "155 cm", shoulder: "50 cm" },
                    ].map((row) => (
                      <tr key={row.size} className="border-b border-[#2A2A2A]/50">
                        <td className="py-3 pr-6 text-[#F5F0EB] font-medium">{row.size}</td>
                        <td className="py-3 pr-6">{row.chest}</td>
                        <td className="py-3 pr-6">{row.length}</td>
                        <td className="py-3">{row.shoulder}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-[#8A8A8A]/70">
                {"L\u2019option Sur-mesure vous permet de personnaliser chaque dimension pour un ajustement parfait."}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shipping" className="border-[#2A2A2A]">
            <AccordionTrigger className="text-sm uppercase tracking-widest text-[#F5F0EB] hover:text-[#D4AF37] hover:no-underline py-5">
              {"Livraison & Retours"}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-[#8A8A8A] leading-relaxed pb-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-[#F5F0EB] font-medium mb-1">Livraison Senegal</h4>
                  <p>{"Gratuite a Dakar (24-48h). Regions : 2 500 FCFA (3-5 jours)."}</p>
                </div>
                <div>
                  <h4 className="text-[#F5F0EB] font-medium mb-1">International</h4>
                  <p>{"Europe : 15 \u20AC (7-10 jours). Afrique : 10 000 FCFA (5-7 jours). Reste du monde : 25 \u20AC (10-15 jours)."}</p>
                </div>
                <div>
                  <h4 className="text-[#F5F0EB] font-medium mb-1">Retours</h4>
                  <p>{"Retours gratuits sous 14 jours. Les articles sur-mesure ne sont ni repris ni echanges."}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Reassurance badges */}
      <div className="mt-10 pt-8 border-t border-[#2A2A2A]">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Smartphone, label: "Paiement Mobile Securise", sub: "Wave, Orange Money" },
            { icon: Store, label: "Retrait en Boutique", sub: "Disponible a Dakar" },
            { icon: Gem, label: "Qualite Artisanale", sub: "Fait main au Senegal" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center text-center gap-2">
              <div className="size-10 rounded-full border border-[#2A2A2A] flex items-center justify-center">
                <badge.icon className="size-4 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#F5F0EB]/80 leading-tight">
                {badge.label}
              </p>
              <p className="text-[10px] text-[#8A8A8A]">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
