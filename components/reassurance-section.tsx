"use client"

import { useRef } from "react"
import { Truck, RefreshCcw, Shield, Headphones } from "lucide-react"
import { motion, useInView } from "framer-motion"

const ITEMS = [
  {
    icon: Truck,
    title: "Livraison DHL Express Mondiale",
    description: "Expedition securisee dans le monde entier",
  },
  {
    icon: RefreshCcw,
    title: "Retours sous 14 jours",
    description: "Retour gratuit, sans questions",
  },
  {
    icon: Shield,
    title: "Paiement Securise",
    description: "Wave, Orange Money, Stripe",
  },
  {
    icon: Headphones,
    title: "Service Client Sur-Mesure",
    description: "Conseillere dediee par WhatsApp",
  },
]

export function ReassuranceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section ref={ref} className="px-4 md:px-8 py-20 md:py-24 border-y border-[#2A2A2A] bg-[#0A0A0A]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <item.icon
                className="size-8 text-[#D4AF37] mb-4"
                strokeWidth={1}
              />
              <h3 className="text-sm font-sans font-medium text-[#F5F0EB] uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
