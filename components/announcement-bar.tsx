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
          className="relative overflow-hidden bg-[#1C1917] text-[#D4AF37]"
        >
          <div className="flex items-center justify-center px-4 py-2.5">
            <p className="text-xs font-sans tracking-widest uppercase text-center">
              Livraison internationale offerte dès 300€ / 200 000 FCFA
              {"  "}—{"  "}
              Découvrez la collection Hivernage
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors"
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
