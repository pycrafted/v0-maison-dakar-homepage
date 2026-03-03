"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="size-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
          <Check className="size-7 text-[#D4AF37]" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-2xl text-[#F5F0EB] mb-3">Message envoye</h3>
        <p className="text-sm text-[#8A8A8A] max-w-xs leading-relaxed">
          {"Notre equipe vous repondra dans les 24 heures. Merci de votre confiance."}
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="prenom" className="text-xs uppercase tracking-widest text-[#8A8A8A]">
            Prenom
          </Label>
          <Input
            id="prenom"
            required
            placeholder="Votre prenom"
            className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus-visible:ring-0 focus-visible:border-[#D4AF37] transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nom" className="text-xs uppercase tracking-widest text-[#8A8A8A]">
            Nom
          </Label>
          <Input
            id="nom"
            required
            placeholder="Votre nom"
            className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus-visible:ring-0 focus-visible:border-[#D4AF37] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-xs uppercase tracking-widest text-[#8A8A8A]">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="votre@email.com"
          className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus-visible:ring-0 focus-visible:border-[#D4AF37] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="telephone" className="text-xs uppercase tracking-widest text-[#8A8A8A]">
          Telephone / WhatsApp
        </Label>
        <Input
          id="telephone"
          type="tel"
          placeholder="+221 7X XXX XX XX"
          className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus-visible:ring-0 focus-visible:border-[#D4AF37] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-xs uppercase tracking-widest text-[#8A8A8A]">
          Sujet
        </Label>
        <Select>
          <SelectTrigger className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] focus:ring-0 focus:border-[#D4AF37] transition-colors h-auto py-2">
            <SelectValue placeholder="Selectionnez un sujet" />
          </SelectTrigger>
          <SelectContent className="bg-[#141414] border-[#2A2A2A] text-[#F5F0EB]">
            <SelectItem value="commande">Suivi de commande</SelectItem>
            <SelectItem value="sur-mesure">Demande sur-mesure</SelectItem>
            <SelectItem value="retour">Retour ou echange</SelectItem>
            <SelectItem value="partenariat">Partenariat</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-xs uppercase tracking-widest text-[#8A8A8A]">
          Message
        </Label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="Decrivez votre demande..."
          className="bg-transparent border-0 border-b border-[#2A2A2A] rounded-none px-0 text-[#F5F0EB] placeholder:text-[#8A8A8A]/40 focus-visible:outline-none focus-visible:border-[#D4AF37] transition-colors resize-none text-sm leading-relaxed"
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.98 }}
        className="mt-4 w-full bg-[#D4AF37] text-[#0A0A0A] py-4 text-sm font-sans uppercase tracking-widest font-semibold hover:bg-[#F5F0EB] transition-colors duration-300 rounded-sm flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <div className="size-5 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
        ) : (
          <>
            <Send className="size-4" strokeWidth={1.5} />
            Envoyer le message
          </>
        )}
      </motion.button>
    </form>
  )
}
