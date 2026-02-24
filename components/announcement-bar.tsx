"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-[#D4AF37] text-[#0A0A0A]"
        >
          <div className="flex items-center justify-center px-4 py-2.5">
            <p className="text-xs font-sans tracking-widest uppercase text-center font-medium">
              {"Livraison internationale offerte des 300\u20AC / 200 000 FCFA  \u2014  La couture Africaine autrement !"}
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0A0A0A]/60 hover:text-[#0A0A0A] transition-colors"
              aria-label="Fermer le bandeau"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
