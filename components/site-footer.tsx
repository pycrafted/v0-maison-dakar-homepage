"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const FOOTER_LINKS = {
  "La Maison": ["Notre Histoire", "Savoir-Faire", "Atelier Dakar", "Carrieres"],
  "Service Client": ["Livraison & Retours", "Guide des Tailles", "Entretien", "FAQ"],
  "Legal": ["CGV", "Politique de Confidentialite", "Mentions Legales", "Cookies"],
}

export function SiteFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} className="bg-[#0A0A0A] text-[#8A8A8A] border-t border-[#2A2A2A]">
      {/* Links grid */}
      <div className="px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]/60 mb-6">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#8A8A8A] hover:text-[#F5F0EB] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#D4AF37]/60 mb-6">
              Reseaux
            </h4>
            <ul className="flex flex-col gap-3">
              {["Instagram", "WhatsApp", "TikTok", "Pinterest"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-[#8A8A8A] hover:text-[#F5F0EB] transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 md:px-8 py-6 border-t border-[#2A2A2A]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A8A8A]/60 tracking-wider">
            {"\u00A9"} {new Date().getFullYear()} Golden Pousso. Tous droits reserves.
          </p>
          <p className="text-xs text-[#8A8A8A]/60 tracking-wider">
            Made with passion in Dakar, Senegal
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#8A8A8A]/40 uppercase tracking-widest">
            <span>Stripe</span>
            <span>Wave</span>
            <span>Orange Money</span>
            <span>Visa</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
