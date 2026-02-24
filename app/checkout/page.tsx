"use client"

import { useState, useCallback } from "react"
import { ArrowLeft, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { CartProvider, useCart } from "@/lib/cart-context"
import { OrderSummary } from "@/components/checkout/order-summary"
import { ShippingForm, ZONES } from "@/components/checkout/shipping-form"
import { PaymentSelector } from "@/components/checkout/payment-selector"

function CheckoutContent() {
  const { items, subtotalCFA } = useCart()
  const [zone, setZone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)

  const selectedZone = ZONES.find((z) => z.value === zone)
  const shippingFee = selectedZone?.fee ?? 0
  const total = subtotalCFA + shippingFee
  const canSubmit = items.length > 0 && zone !== "" && paymentMethod !== ""

  const handleConfirm = useCallback(() => {
    if (!canSubmit) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsConfirmed(true)
    }, 2400)
  }, [canSubmit])

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Top bar */}
      <header className="border-b border-[#2A2A2A] bg-[#0A0A0A]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <a
            href="/"
            className="flex items-center gap-2 text-[#8A8A8A] hover:text-[#F5F0EB] transition-colors"
          >
            <ArrowLeft className="size-4" strokeWidth={1.5} />
            <span className="text-xs uppercase tracking-widest hidden sm:inline">
              Retour
            </span>
          </a>
          <a href="/" className="font-serif text-lg text-[#D4AF37] tracking-[0.06em] font-bold">
            GOLDEN POUSSO
          </a>
          <div className="flex items-center gap-1.5 text-[#8A8A8A]">
            <ShieldCheck className="size-4 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest hidden sm:inline">
              Paiement securise
            </span>
          </div>
        </div>
      </header>

      {/* Confirmed state */}
      <AnimatePresence mode="wait">
        {isConfirmed ? (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-[70vh] px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="size-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center mb-8"
            >
              <CheckCircle2 className="size-10 text-[#D4AF37]" strokeWidth={1.5} />
            </motion.div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] tracking-wide uppercase mb-3 text-center">
              Commande confirmee
            </h2>
            <p className="text-sm text-[#8A8A8A] text-center max-w-md leading-relaxed mb-2">
              Merci pour votre commande. Vous recevrez une confirmation par WhatsApp et email
              dans les prochaines minutes.
            </p>
            <p className="text-sm text-[#D4AF37] font-medium tabular-nums mb-8">
              Total : {total.toLocaleString("fr-FR")} FCFA
            </p>
            <a
              href="/"
              className="text-xs uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] px-8 py-3 rounded-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Retour a la boutique
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Stepper */}
            <div className="border-b border-[#2A2A2A]">
              <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center justify-center gap-8">
                  {["Panier", "Livraison", "Paiement"].map((step, i) => {
                    const stepNum = i + 1
                    const isActive =
                      (stepNum === 1) ||
                      (stepNum === 2 && zone !== "") ||
                      (stepNum === 3 && paymentMethod !== "")

                    return (
                      <div key={step} className="flex items-center gap-2">
                        <div
                          className={`size-6 rounded-full flex items-center justify-center text-xs font-serif transition-colors duration-300 ${
                            isActive
                              ? "bg-[#D4AF37] text-[#0A0A0A]"
                              : "border border-[#2A2A2A] text-[#8A8A8A]"
                          }`}
                        >
                          {stepNum}
                        </div>
                        <span
                          className={`text-xs uppercase tracking-widest transition-colors duration-300 hidden sm:inline ${
                            isActive ? "text-[#F5F0EB]" : "text-[#8A8A8A]/60"
                          }`}
                        >
                          {step}
                        </span>
                        {i < 2 && (
                          <div className="w-8 md:w-16 h-px bg-[#2A2A2A] ml-2" />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left: Order summary */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="lg:sticky lg:top-24 bg-[#141414] rounded-sm border border-[#2A2A2A] p-6 md:p-8">
                    <OrderSummary />

                    {/* Totals breakdown */}
                    {items.length > 0 && (
                      <div className="border-t border-[#2A2A2A] mt-6 pt-6 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#8A8A8A] uppercase tracking-widest">
                            Frais de livraison
                          </span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={shippingFee}
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              className={`text-sm tabular-nums ${
                                shippingFee === 0 && zone
                                  ? "text-green-500"
                                  : "text-[#F5F0EB]"
                              }`}
                            >
                              {!zone
                                ? "--"
                                : shippingFee === 0
                                  ? "Gratuit"
                                  : `${shippingFee.toLocaleString("fr-FR")} FCFA`}
                            </motion.span>
                          </AnimatePresence>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#2A2A2A]/60">
                          <span className="text-sm uppercase tracking-widest text-[#F5F0EB] font-medium">
                            Total
                          </span>
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={total}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xl font-serif text-[#D4AF37] tabular-nums"
                            >
                              {total.toLocaleString("fr-FR")} FCFA
                            </motion.span>
                          </AnimatePresence>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Forms */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-10">
                  <ShippingForm
                    zone={zone}
                    setZone={setZone}
                    shippingFee={shippingFee}
                  />

                  <div className="h-px bg-[#2A2A2A]" />

                  <PaymentSelector
                    selected={paymentMethod}
                    setSelected={setPaymentMethod}
                  />

                  {/* Confirm button */}
                  <div className="pt-4 pb-24 md:pb-8">
                    <button
                      onClick={handleConfirm}
                      disabled={!canSubmit || isSubmitting}
                      className={`w-full py-4 rounded-sm text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                        canSubmit && !isSubmitting
                          ? "bg-[#D4AF37] text-[#0A0A0A] hover:bg-[#C2662D] hover:text-[#F5F0EB] cursor-pointer"
                          : "bg-[#2A2A2A] text-[#8A8A8A] cursor-not-allowed"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Traitement en cours...
                        </>
                      ) : (
                        <>Confirmer la commande</>
                      )}
                    </button>
                    <p className="text-[10px] text-[#8A8A8A]/60 text-center mt-4 tracking-wider">
                      En confirmant, vous acceptez nos CGV et politique de confidentialite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <CartProvider>
      <CheckoutContent />
    </CartProvider>
  )
}
