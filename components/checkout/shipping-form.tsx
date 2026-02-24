"use client"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Truck, Store } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ZONES = [
  {
    value: "dakar",
    label: "Dakar et banlieue",
    fee: 2500,
    delay: "24-48h",
    icon: Truck,
  },
  {
    value: "thies",
    label: "Thies et environs",
    fee: 4000,
    delay: "48-72h",
    icon: Truck,
  },
  {
    value: "retrait",
    label: "Retrait gratuit en boutique (Pikine Tally Boumack)",
    fee: 0,
    delay: "Disponible sous 24h",
    icon: Store,
  },
]

interface ShippingFormProps {
  zone: string
  setZone: (z: string) => void
  shippingFee: number
}

export function ShippingForm({ zone, setZone, shippingFee }: ShippingFormProps) {
  const selectedZone = ZONES.find((z) => z.value === zone)

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="size-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
          <span className="text-sm font-serif">1</span>
        </div>
        <h2 className="font-serif text-lg md:text-xl text-[#F5F0EB] tracking-wide uppercase">
          Livraison
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              Prenom
            </Label>
            <input
              type="text"
              placeholder="Amadou"
              className="w-full bg-transparent border-b border-[#2A2A2A] pb-3 text-sm text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              Nom
            </Label>
            <input
              type="text"
              placeholder="Diallo"
              className="w-full bg-transparent border-b border-[#2A2A2A] pb-3 text-sm text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              Telephone / WhatsApp
            </Label>
            <input
              type="tel"
              placeholder="+221 77 123 45 67"
              className="w-full bg-transparent border-b border-[#2A2A2A] pb-3 text-sm text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
              Email
            </Label>
            <input
              type="email"
              placeholder="amadou@email.com"
              className="w-full bg-transparent border-b border-[#2A2A2A] pb-3 text-sm text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2">
          <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
            Adresse de livraison
          </Label>
          <input
            type="text"
            placeholder="Quartier, rue, repere..."
            className="w-full bg-transparent border-b border-[#2A2A2A] pb-3 text-sm text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
        </div>

        {/* Zone de livraison */}
        <div className="flex flex-col gap-3 mt-2">
          <Label className="text-xs uppercase tracking-widest text-[#8A8A8A] flex items-center gap-2">
            <MapPin className="size-3.5" />
            Zone de livraison
          </Label>
          <Select value={zone} onValueChange={setZone}>
            <SelectTrigger className="w-full h-12 border-[#2A2A2A] bg-[#141414] text-[#F5F0EB] rounded-sm text-sm tracking-wide hover:border-[#D4AF37]/50 transition-colors">
              <SelectValue placeholder="Choisir votre zone" />
            </SelectTrigger>
            <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
              {ZONES.map((z) => (
                <SelectItem key={z.value} value={z.value} className="text-sm py-3">
                  <div className="flex items-center gap-2">
                    <z.icon className="size-4 text-[#D4AF37]" />
                    <span>{z.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Shipping info card */}
          <AnimatePresence mode="wait">
            {selectedZone && (
              <motion.div
                key={zone}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between p-4 rounded-sm bg-[#1A1A1A] border border-[#2A2A2A]"
              >
                <div className="flex items-center gap-3">
                  <selectedZone.icon className="size-5 text-[#D4AF37]" />
                  <div>
                    <p className="text-xs text-[#8A8A8A]">{selectedZone.delay}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium tabular-nums ${
                    selectedZone.fee === 0 ? "text-green-500" : "text-[#D4AF37]"
                  }`}
                >
                  {selectedZone.fee === 0
                    ? "Gratuit"
                    : `${selectedZone.fee.toLocaleString("fr-FR")} FCFA`}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export { ZONES }
