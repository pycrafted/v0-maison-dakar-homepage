"use client"

import { motion } from "framer-motion"
import { Smartphone, Waves, Wifi, Banknote, Check } from "lucide-react"

const PAYMENT_METHODS = [
  {
    id: "orange-money",
    label: "Orange Money",
    description: "Payez avec votre compte Orange Money",
    icon: Smartphone,
    accentColor: "#FF6600",
    borderColor: "#FF6600",
  },
  {
    id: "wave",
    label: "Wave",
    description: "Transfert instantane via Wave",
    icon: Waves,
    accentColor: "#1DC3E0",
    borderColor: "#1DC3E0",
  },
  {
    id: "free-money",
    label: "Free Money",
    description: "Payez avec Free Money",
    icon: Wifi,
    accentColor: "#E30613",
    borderColor: "#E30613",
  },
  {
    id: "cash",
    label: "Paiement a la livraison",
    description: "Reglez en especes a la reception",
    icon: Banknote,
    accentColor: "#D4AF37",
    borderColor: "#D4AF37",
  },
]

interface PaymentSelectorProps {
  selected: string
  setSelected: (id: string) => void
}

export function PaymentSelector({ selected, setSelected }: PaymentSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="size-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
          <span className="text-sm font-serif">2</span>
        </div>
        <h2 className="font-serif text-lg md:text-xl text-[#F5F0EB] tracking-wide uppercase">
          Paiement
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PAYMENT_METHODS.map((method) => {
          const isSelected = selected === method.id

          return (
            <motion.button
              key={method.id}
              onClick={() => setSelected(method.id)}
              whileTap={{ scale: 0.98 }}
              className="relative text-left p-5 rounded-sm border-2 transition-all duration-300 group"
              style={{
                borderColor: isSelected ? method.borderColor : "#2A2A2A",
                backgroundColor: isSelected ? `${method.borderColor}08` : "#141414",
              }}
            >
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 size-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: method.accentColor }}
                >
                  <Check className="size-3 text-[#0A0A0A]" strokeWidth={2.5} />
                </motion.div>
              )}

              {/* Icon */}
              <div
                className="size-10 rounded-sm flex items-center justify-center mb-3 transition-colors duration-300"
                style={{
                  backgroundColor: isSelected ? `${method.accentColor}20` : "#1A1A1A",
                }}
              >
                <method.icon
                  className="size-5 transition-colors duration-300"
                  style={{ color: isSelected ? method.accentColor : "#8A8A8A" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Text */}
              <h3
                className="text-sm font-medium mb-1 transition-colors duration-300"
                style={{ color: isSelected ? method.accentColor : "#F5F0EB" }}
              >
                {method.label}
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                {method.description}
              </p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
