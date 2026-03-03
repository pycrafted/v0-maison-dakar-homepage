"use client"

import { useRef } from "react"
import dynamic from "next/dynamic"
import { motion, useInView } from "framer-motion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { BottomNav } from "@/components/bottom-nav"
import { ContactForm } from "@/components/contact/contact-form"

const AtelierMap = dynamic(
  () => import("@/components/contact/atelier-map").then((m) => m.AtelierMap),
  { ssr: false, loading: () => <div className="w-full h-full min-h-[400px] bg-[#141414] rounded-sm animate-pulse" /> }
)

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Notre Atelier",
    lines: ["Pikine Tally Boumack", "Dakar, Senegal"],
  },
  {
    icon: Phone,
    title: "Telephone",
    lines: ["+221 77 123 45 67", "+221 33 456 78 90"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["contact@goldenpousso.com", "surmesure@goldenpousso.com"],
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun - Sam : 9h - 19h", "Dimanche : Ferme"],
  },
]

const FAQ_ITEMS = [
  {
    q: "Quel est le delai de livraison a Dakar ?",
    a: "La livraison est effectuee sous 24 a 48h pour Dakar et sa banlieue. Pour Thies et environs, comptez 2 a 4 jours ouvrables.",
  },
  {
    q: "Proposez-vous des retouches ?",
    a: "Oui, toutes nos creations beneficient d'un service de retouches gratuit dans les 7 jours suivant la reception. Rendez-vous a l'atelier avec votre piece.",
  },
  {
    q: "Comment passer une commande sur-mesure ?",
    a: "Rendez-vous sur notre page Sur-Mesure pour reserver une consultation privee. Nous vous guiderons a travers le choix du tissu, les mesures et le design.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Nous acceptons Orange Money, Wave, Free Money et le paiement a la livraison (cash). Les paiements par carte sont disponibles pour les commandes internationales.",
  },
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-80px" })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" })

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <SiteHeader variant="light" />

        <main>
          {/* Hero section */}
          <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8">
            <div className="max-w-screen-2xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
              >
                Contact
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] uppercase tracking-tight mb-6"
              >
                Nous Rencontrer
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={heroInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-16 h-px bg-[#D4AF37] mx-auto mb-8"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-sm md:text-base text-[#8A8A8A] max-w-lg mx-auto leading-relaxed"
              >
                {"Visitez notre atelier a Pikine Tally Boumack ou contactez-nous pour toute question. Notre equipe est a votre disposition."}
              </motion.p>
            </div>
          </section>

          {/* Info Cards */}
          <section className="px-4 md:px-8 pb-20">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
              {INFO_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-colors duration-300"
                >
                  <div className="size-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:border-[#D4AF37] transition-colors duration-300">
                    <card.icon className="size-4 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs uppercase tracking-widest text-[#D4AF37]/70 mb-3 font-sans">
                    {card.title}
                  </h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-[#F5F0EB]/80 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Map + Form */}
          <section ref={formRef} className="px-4 md:px-8 pb-24">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Localisation de l&apos;atelier
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] mb-6 uppercase tracking-tight">
                  Pikine Tally Boumack
                </h2>
                <div className="h-[400px] lg:h-[520px] mb-6">
                  <AtelierMap />
                </div>
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/221771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-sm px-6 py-3 text-sm tracking-wider hover:bg-[#25D366]/20 transition-colors duration-300"
                >
                  <MessageCircle className="size-5" strokeWidth={1.5} />
                  Discuter sur WhatsApp
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="order-1 lg:order-2"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Nous ecrire
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] mb-8 uppercase tracking-tight">
                  Envoyez-nous un message
                </h2>
                <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 md:p-8">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ */}
          <section ref={faqRef} className="px-4 md:px-8 pb-24 md:pb-32">
            <div className="max-w-screen-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  FAQ
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#F5F0EB] uppercase tracking-tight">
                  Questions frequentes
                </h2>
              </motion.div>

              <div className="flex flex-col gap-4">
                {FAQ_ITEMS.map((item, i) => (
                  <motion.details
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="group bg-[#141414] border border-[#2A2A2A] rounded-sm overflow-hidden hover:border-[#D4AF37]/20 transition-colors duration-300"
                  >
                    <summary className="px-6 py-5 cursor-pointer text-sm text-[#F5F0EB] font-sans tracking-wide flex items-center justify-between list-none [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="ml-4 text-[#D4AF37] text-lg transition-transform duration-300 group-open:rotate-45 flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-[#8A8A8A] leading-relaxed border-t border-[#2A2A2A] pt-4">
                      {item.a}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  )
}
