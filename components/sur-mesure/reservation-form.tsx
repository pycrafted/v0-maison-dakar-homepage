"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { CalendarIcon, ArrowRight, Check } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ReservationForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [date, setDate] = useState<Date | undefined>()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="reservation" className="px-4 md:px-8 py-24 md:py-32 lg:py-40 bg-[#F5F0EB]">
      <div ref={ref} className="max-w-screen-lg mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.35em] text-[#8B4513] mb-4">
            Rendez-vous
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1917] tracking-tight text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            {"Demander une Consultation Privee"}
          </h2>
        </motion.div>

        {/* Form card with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#FDFBF7]/70 backdrop-blur-xl border border-[#E7E5E4]/80 rounded-sm p-8 md:p-12 lg:p-16 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Aminata Diallo"
                  className="w-full bg-transparent border-b border-[#D6D3D1] pb-3 text-base text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B4513] transition-colors font-sans"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="aminata@email.com"
                  className="w-full bg-transparent border-b border-[#D6D3D1] pb-3 text-base text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B4513] transition-colors font-sans"
                />
              </div>
            </div>

            {/* Row 2: Phone & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
                >
                  {"Telephone (WhatsApp)"}
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+221 77 000 00 00"
                  className="w-full bg-transparent border-b border-[#D6D3D1] pb-3 text-base text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B4513] transition-colors font-sans"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
                >
                  Pays
                </label>
                <Select>
                  <SelectTrigger className="h-auto border-0 border-b border-[#D6D3D1] rounded-none shadow-none bg-transparent px-0 pb-3 text-base text-[#1C1917] focus:ring-0 focus:border-[#8B4513] font-sans">
                    <SelectValue placeholder="Selectionner votre pays" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
                    <SelectItem value="sn">Senegal</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="ci">{"Cote d'Ivoire"}</SelectItem>
                    <SelectItem value="us">{"Etats-Unis"}</SelectItem>
                    <SelectItem value="gb">Royaume-Uni</SelectItem>
                    <SelectItem value="ma">Maroc</SelectItem>
                    <SelectItem value="cm">Cameroun</SelectItem>
                    <SelectItem value="be">Belgique</SelectItem>
                    <SelectItem value="ch">Suisse</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3: Date picker */}
            <div className="flex flex-col gap-2">
              <label
                className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
              >
                Date souhaitee pour la premiere prise de contact
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="w-full md:w-1/2 bg-transparent border-b border-[#D6D3D1] pb-3 text-left text-base text-[#1C1917] focus:outline-none focus:border-[#8B4513] transition-colors font-sans flex items-center justify-between"
                  >
                    <span className={date ? "text-[#1C1917]" : "text-[#A8A29E]"}>
                      {date
                        ? format(date, "d MMMM yyyy", { locale: fr })
                        : "Choisir une date"}
                    </span>
                    <CalendarIcon className="size-4 text-[#78716C]" strokeWidth={1.5} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#FDFBF7] border-[#E7E5E4]" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#78716C]"
              >
                {"Parlez-nous de votre projet (Mariage, Gala, etc.)"}
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Decrivez-nous votre reve... L'occasion, les couleurs qui vous inspirent, les matieres qui vous attirent."
                className="w-full bg-transparent border-b border-[#D6D3D1] pb-3 text-base text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#8B4513] transition-colors font-sans resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full md:w-auto bg-[#1C1917] text-[#FDFBF7] px-16 py-5 text-xs font-sans uppercase tracking-[0.25em] rounded-sm flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
                whileHover={{ scale: 1.01, backgroundColor: "#8B4513" }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.3 }}
              >
                {submitted ? (
                  <>
                    <Check className="size-4" strokeWidth={1.5} />
                    Demande envoyee
                  </>
                ) : (
                  <>
                    Envoyer la demande
                    <ArrowRight className="size-4" strokeWidth={1.5} />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
