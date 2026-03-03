"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  RotateCcw,
  Package,
  AlertCircle,
  CheckCircle2,
  Banknote,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { BottomNav } from "@/components/bottom-nav"

/* ───────── data ───────── */

const SHIPPING_ZONES = [
  {
    zone: "Dakar et banlieue",
    delay: "24 - 48h",
    price: "2 500 FCFA",
    icon: Truck,
  },
  {
    zone: "Thies et environs",
    delay: "2 - 4 jours",
    price: "4 000 FCFA",
    icon: Truck,
  },
  {
    zone: "Retrait en boutique",
    delay: "Immediat",
    price: "Gratuit",
    icon: MapPin,
    note: "Pikine Tally Boumack",
  },
]

const TIMELINE_STEPS = [
  {
    icon: ShieldCheck,
    title: "Commande confirmee",
    desc: "Vous recevez un SMS/WhatsApp de confirmation avec votre numero de commande.",
  },
  {
    icon: Package,
    title: "Preparation",
    desc: "Notre equipe prepare et emballe soigneusement votre commande sous 24h ouvrees.",
  },
  {
    icon: Truck,
    title: "Expedition",
    desc: "Votre colis est remis au livreur. Vous recevez un message avec le suivi.",
  },
  {
    icon: CheckCircle2,
    title: "Livraison",
    desc: "Vous etes contacte(e) avant la livraison. Paiement a la reception possible.",
  },
]

const RETURN_CONDITIONS = [
  "Article non porte, non lave, avec toutes ses etiquettes d'origine.",
  "Demande de retour effectuee dans les 7 jours suivant la reception.",
  "Les articles sur-mesure et les sous-vetements ne sont ni repris ni echanges.",
  "Les frais de retour sont a la charge du client (sauf article defectueux).",
]

const FAQ_ITEMS = [
  {
    q: "Puis-je suivre ma commande ?",
    a: "Oui, un numero de suivi vous est communique par SMS et WhatsApp des l'expedition de votre commande. Vous pouvez egalement nous contacter directement pour connaitre l'etat de votre livraison.",
  },
  {
    q: "Que faire si mon article est endommage a la reception ?",
    a: "Contactez-nous dans les 48h suivant la reception avec des photos du produit et de l'emballage. Nous procedons a un echange ou remboursement integral sous 72h.",
  },
  {
    q: "Livrez-vous en dehors du Senegal ?",
    a: "Actuellement, nous livrons uniquement au Senegal (Dakar, Thies et environs). Pour les commandes internationales, contactez-nous sur WhatsApp pour un devis personnalise.",
  },
  {
    q: "Comment fonctionne le retrait en boutique ?",
    a: "Selectionnez 'Retrait gratuit en boutique' lors du checkout. Vous recevrez un SMS quand votre commande sera prete. Presentez-vous a notre atelier de Pikine Tally Boumack avec votre confirmation.",
  },
  {
    q: "Quels sont les moyens de paiement acceptes ?",
    a: "Nous acceptons Orange Money, Wave, Free Money et le paiement a la livraison en especes (cash). Pour les commandes internationales, nous proposons des solutions de paiement adaptees.",
  },
  {
    q: "Puis-je echanger un article pour une autre taille ?",
    a: "Oui, les echanges de taille sont possibles dans les 7 jours suivant la reception, sous reserve que l'article soit dans son etat d'origine. Les frais d'envoi de l'echange sont a notre charge pour Dakar.",
  },
]

/* ───────── page ───────── */

export default function LivraisonRetoursPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const zonesRef = useRef(null)
  const zonesInView = useInView(zonesRef, { once: true, margin: "-60px" })
  const timelineRef = useRef(null)
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" })
  const returnsRef = useRef(null)
  const returnsInView = useInView(returnsRef, { once: true, margin: "-60px" })
  const faqRef = useRef(null)
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" })

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <SiteHeader variant="light" />

        <main>
          {/* ── Hero ── */}
          <section ref={heroRef} className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
            <div className="max-w-screen-2xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-6"
              >
                Informations
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] uppercase tracking-tight mb-6"
              >
                {"Livraison & Retours"}
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
                {"Toutes les informations sur nos zones de livraison, nos delais, nos tarifs et notre politique de retours et d'echanges."}
              </motion.p>
            </div>
          </section>

          {/* ── Zones de livraison ── */}
          <section ref={zonesRef} className="px-4 md:px-8 pb-20 md:pb-28">
            <div className="max-w-screen-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={zonesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                  Tarifs
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] uppercase tracking-tight">
                  Zones de livraison
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SHIPPING_ZONES.map((zone, i) => (
                  <motion.div
                    key={zone.zone}
                    initial={{ opacity: 0, y: 20 }}
                    animate={zonesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 flex flex-col items-center text-center group hover:border-[#D4AF37]/30 transition-colors duration-300"
                  >
                    <div className="size-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-5 group-hover:border-[#D4AF37] transition-colors duration-300">
                      <zone.icon className="size-5 text-[#D4AF37]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm uppercase tracking-widest text-[#F5F0EB] font-sans mb-1">
                      {zone.zone}
                    </h3>
                    {zone.note && (
                      <p className="text-xs text-[#8A8A8A] mb-3">{zone.note}</p>
                    )}
                    {!zone.note && <div className="mb-3" />}
                    <div className="flex items-center gap-2 text-xs text-[#8A8A8A] mb-4">
                      <Clock className="size-3.5" strokeWidth={1.5} />
                      <span>{zone.delay}</span>
                    </div>
                    <p className={`text-xl font-serif tracking-wide ${
                      zone.price === "Gratuit" ? "text-[#25D366]" : "text-[#D4AF37]"
                    }`}>
                      {zone.price}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Timeline Livraison ── */}
          <section ref={timelineRef} className="px-4 md:px-8 pb-20 md:pb-28">
            <div className="max-w-screen-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                  Processus
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] uppercase tracking-tight">
                  Comment ca fonctionne
                </h2>
              </motion.div>

              <div className="relative">
                {/* Vertical connecting line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={timelineInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#2A2A2A] origin-top"
                />

                <div className="flex flex-col gap-8 md:gap-0">
                  {TIMELINE_STEPS.map((step, i) => {
                    const isLeft = i % 2 === 0
                    return (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                        animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
                        className={`relative md:flex items-center md:min-h-[120px] ${
                          isLeft ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Content card */}
                        <div className={`md:w-[calc(50%-32px)] ${isLeft ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                          <div className={`bg-[#141414] border border-[#2A2A2A] rounded-sm p-5 hover:border-[#D4AF37]/20 transition-colors duration-300 ${isLeft ? "md:mr-0" : "md:ml-0"}`}>
                            <div className={`flex items-center gap-3 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                              <step.icon className="size-4 text-[#D4AF37] flex-shrink-0" strokeWidth={1.5} />
                              <h3 className="text-sm uppercase tracking-widest text-[#F5F0EB] font-sans">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-sm text-[#8A8A8A] leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>

                        {/* Center circle */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 size-8 rounded-full bg-[#0A0A0A] border-2 border-[#D4AF37]/40 items-center justify-center z-10">
                          <span className="text-[10px] font-bold text-[#D4AF37]">{i + 1}</span>
                        </div>

                        {/* Spacer on the other side */}
                        <div className="hidden md:block md:w-[calc(50%-32px)]" />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ── Politique de retours ── */}
          <section ref={returnsRef} className="px-4 md:px-8 pb-20 md:pb-28">
            <div className="max-w-screen-lg mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left: returns explanation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={returnsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                    Retours
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] uppercase tracking-tight mb-6">
                    Politique de retours
                  </h2>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed mb-4">
                    {"Nous souhaitons que vous soyez entierement satisfait(e) de votre achat. Si ce n'est pas le cas, vous disposez de 7 jours apres la reception pour effectuer un retour ou un echange."}
                  </p>
                  <p className="text-sm text-[#8A8A8A] leading-relaxed mb-8">
                    {"Le remboursement est effectue sous 5 jours ouvrables apres reception et verification de l'article retourne, via le meme moyen de paiement utilise lors de la commande."}
                  </p>

                  {/* Return steps badges */}
                  <div className="flex flex-col gap-3">
                    {[
                      { step: "1", text: "Contactez-nous par WhatsApp ou email" },
                      { step: "2", text: "Recevez votre autorisation de retour" },
                      { step: "3", text: "Deposez l'article a l'atelier ou envoyez-le" },
                      { step: "4", text: "Remboursement ou echange sous 5 jours" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -16 }}
                        animate={returnsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
                        className="flex items-center gap-4"
                      >
                        <span className="size-7 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[10px] text-[#D4AF37] font-bold flex-shrink-0">
                          {item.step}
                        </span>
                        <span className="text-sm text-[#F5F0EB]/80">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: conditions card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={returnsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="flex flex-col gap-6"
                >
                  {/* Conditions */}
                  <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <AlertCircle className="size-4 text-[#D4AF37]" strokeWidth={1.5} />
                      <h3 className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-sans">
                        Conditions de retour
                      </h3>
                    </div>
                    <ul className="flex flex-col gap-4">
                      {RETURN_CONDITIONS.map((cond, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="size-4 text-[#D4AF37]/50 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-sm text-[#8A8A8A] leading-relaxed">{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Refund methods */}
                  <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <Banknote className="size-4 text-[#D4AF37]" strokeWidth={1.5} />
                      <h3 className="text-xs uppercase tracking-widest text-[#D4AF37]/70 font-sans">
                        Moyens de remboursement
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {["Orange Money", "Wave", "Free Money", "Especes"].map((method) => (
                        <div
                          key={method}
                          className="flex items-center gap-2.5 bg-[#0A0A0A] border border-[#2A2A2A] rounded-sm px-4 py-3"
                        >
                          <div className="size-2 rounded-full bg-[#D4AF37]/50" />
                          <span className="text-xs text-[#F5F0EB]/70 tracking-wider">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reassurance */}
                  <div className="bg-[#141414] border border-[#D4AF37]/20 rounded-sm p-6 text-center">
                    <RotateCcw className="size-6 text-[#D4AF37] mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-sm text-[#F5F0EB] font-sans mb-1">
                      Retours sous 7 jours
                    </p>
                    <p className="text-xs text-[#8A8A8A]">
                      Satisfait ou rembourse, tout simplement.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section ref={faqRef} className="px-4 md:px-8 pb-24 md:pb-32">
            <div className="max-w-screen-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] mb-3">
                  FAQ
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] uppercase tracking-tight">
                  Questions frequentes
                </h2>
              </motion.div>

              <Accordion type="single" collapsible className="flex flex-col gap-3">
                {FAQ_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={faqInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                  >
                    <AccordionItem
                      value={`faq-${i}`}
                      className="bg-[#141414] border border-[#2A2A2A] rounded-sm px-6 hover:border-[#D4AF37]/20 transition-colors duration-300"
                    >
                      <AccordionTrigger className="text-sm text-[#F5F0EB] tracking-wide hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#8A8A8A] leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
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
