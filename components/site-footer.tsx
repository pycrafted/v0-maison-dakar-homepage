"use client"

import { useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

const FOOTER_LINKS = {
  "La Maison": ["Notre Histoire", "Savoir-Faire", "Atelier Dakar", "Carrières"],
  "Service Client": ["Livraison & Retours", "Guide des Tailles", "Entretien", "FAQ"],
  Légal: ["CGV", "Politique de Confidentialité", "Mentions Légales", "Cookies"],
}

export function SiteFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [email, setEmail] = useState("")

  return (
    <footer ref={ref} className="bg-[#0C0A09] text-[#D6D3D1]">
      {/* Newsletter section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-4 md:px-8 py-20 md:py-28 border-b border-[#292524]"
      >
        <div className="max-w-screen-2xl mx-auto max-w-2xl text-center mx-auto">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37] mb-6">
            Newsletter
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F5F5F4] mb-4 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
            {"Inscrivez-vous pour un accès exclusif"}
          </h3>
          <p className="text-sm text-[#A8A29E] mb-10 leading-relaxed">
            Recevez en avant-première nos nouvelles collections, invitations aux ventes privées et inspirations depuis Dakar.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setEmail("")
            }}
            className="relative max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="w-full bg-transparent border-b border-[#44403C] pb-3 pr-10 text-base text-[#F5F5F4] placeholder:text-[#78716C] focus:outline-none focus:border-[#D4AF37] transition-colors"
              required
              aria-label="Adresse email pour la newsletter"
            />
            <button
              type="submit"
              className="absolute right-0 bottom-3 text-[#D4AF37] hover:text-[#F5F5F4] transition-colors"
              aria-label="S'inscrire à la newsletter"
            >
              <ArrowRight className="size-5" strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </motion.div>

      {/* Links grid */}
      <div className="px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-sans uppercase tracking-widest text-[#A8A29E] mb-6">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#78716C] hover:text-[#F5F5F4] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-widest text-[#A8A29E] mb-6">
              Réseaux
            </h4>
            <ul className="flex flex-col gap-3">
              {["Instagram", "WhatsApp", "TikTok", "Pinterest"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-[#78716C] hover:text-[#F5F5F4] transition-colors"
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
      <div className="px-4 md:px-8 py-6 border-t border-[#292524]">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#78716C] tracking-wider">
            © {new Date().getFullYear()} Maison Dakar. Tous droits réservés.
          </p>
          <p className="text-xs text-[#78716C] tracking-wider">
            Made with passion in Dakar, Senegal
          </p>
          <div className="flex items-center gap-4 text-[10px] text-[#57534E] uppercase tracking-widest">
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
