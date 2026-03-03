"use client"

import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

const REVIEWS = [
  {
    id: 1,
    name: "Fatou Diallo",
    location: "Dakar, Senegal",
    rating: 5,
    date: "Fevrier 2026",
    product: "Grand Boubou Royal",
    text: "Un travail exceptionnel. Mon mari a porte le Grand Boubou Royal pour la Tabaski et tout le monde nous a demande l'adresse de la boutique. Le bazin est d'une qualite rare, et les broderies en fil d'or sont faites avec une precision incroyable. Merci Golden Pousso !",
    avatar: "/images/product-1a.jpg",
    verified: true,
  },
  {
    id: 2,
    name: "Amadou Ndiaye",
    location: "Thies, Senegal",
    rating: 5,
    date: "Janvier 2026",
    product: "Ensemble Bazin Indigo",
    text: "J'ai commande un ensemble sur-mesure pour mon mariage. Le processus de consultation etait tres professionnel, et le resultat final a depasse toutes mes attentes. La livraison a Thies a ete rapide et soignee. Je recommande a 100%.",
    avatar: "/images/product-2a.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Mariama Sow",
    location: "Paris, France",
    rating: 5,
    date: "Decembre 2025",
    product: "Robe Sculptee Terracotta",
    text: "J'habite en France mais je voulais absolument un boubou authentique de Dakar pour le bapteme de ma fille. La communication par WhatsApp etait facile, le paiement par Wave tres simple, et j'ai recu ma commande en 10 jours. La qualite est au rendez-vous.",
    avatar: "/images/product-3a.jpg",
    verified: true,
  },
  {
    id: 4,
    name: "Ousmane Ba",
    location: "Pikine, Senegal",
    rating: 5,
    date: "Novembre 2025",
    product: "Boubou Classique Blanc",
    text: "J'ai fait le retrait en boutique a Tally Boumack. L'accueil etait chaleureux et le boubou etait parfaitement emballe. Le rapport qualite-prix est imbattable pour ce niveau de finition. Golden Pousso est devenu ma reference pour les grandes occasions.",
    avatar: "/images/product-4a.jpg",
    verified: true,
  },
  {
    id: 5,
    name: "Aissatou Diop",
    location: "Dakar, Senegal",
    rating: 4,
    date: "Octobre 2025",
    product: "Ensemble Femme Emeraude",
    text: "Tres belle creation, le tissu est magnifique et les finitions impeccables. J'aurais aime un peu plus de choix dans les tailles standards, mais le service client m'a propose un ajustement gratuit. Resultat final : sublime.",
    avatar: "/images/product-5a.jpg",
    verified: true,
  },
  {
    id: 6,
    name: "Ibrahima Fall",
    location: "New York, USA",
    rating: 5,
    date: "Septembre 2025",
    product: "Grand Boubou Sur-Mesure",
    text: "Commander depuis les Etats-Unis etait tres simple. L'equipe a ete tres reactive sur WhatsApp pour prendre mes mesures a distance. Le boubou est arrive en parfait etat et la coupe est exactement ce que je voulais. Un vrai bijou artisanal.",
    avatar: "/images/product-1a.jpg",
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < rating
              ? "fill-[#D4AF37] text-[#D4AF37]"
              : "fill-transparent text-[#2A2A2A]"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(REVIEWS.length / reviewsPerPage)
  const currentReviews = REVIEWS.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  )

  const avgRating = (
    REVIEWS.reduce((sum, r) => sum + r.rating, 0) / REVIEWS.length
  ).toFixed(1)

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
            Avis Clients
          </p>
          <h2
            className="font-serif text-3xl md:text-5xl text-[#F5F0EB] mb-6 tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ce que disent nos clients
          </h2>
          {/* Summary bar */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl text-[#D4AF37]">{avgRating}</span>
              <StarRating rating={Math.round(Number(avgRating))} />
            </div>
            <span className="w-px h-6 bg-[#2A2A2A]" />
            <p className="text-sm text-[#8A8A8A]">
              {REVIEWS.length} avis verifies
            </p>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {currentReviews.map((review, i) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group relative bg-[#141414] border border-[#2A2A2A] rounded-sm p-8 flex flex-col hover:border-[#D4AF37]/30 transition-colors duration-500"
              >
                {/* Quote icon */}
                <Quote
                  className="size-8 text-[#D4AF37]/15 mb-4 -scale-x-100"
                  strokeWidth={1}
                />

                {/* Stars + date */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={review.rating} />
                  <span className="text-[11px] text-[#8A8A8A]/60 tracking-wider">
                    {review.date}
                  </span>
                </div>

                {/* Review text */}
                <p className="text-sm text-[#F5F0EB]/80 leading-relaxed mb-6 flex-1">
                  {`"${review.text}"`}
                </p>

                {/* Product tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative size-10 rounded-sm overflow-hidden bg-[#1A1A1A]">
                    <Image
                      src={review.avatar}
                      alt={review.product}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <span className="text-xs text-[#D4AF37]/70 tracking-wider">
                    {review.product}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-[#2A2A2A] pt-5">
                  <div>
                    <p className="text-sm font-medium text-[#F5F0EB]">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#8A8A8A] mt-0.5">
                      {review.location}
                    </p>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]/50 border border-[#D4AF37]/20 rounded-sm px-2 py-0.5">
                      Verifie
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="size-10 flex items-center justify-center border border-[#2A2A2A] rounded-sm text-[#F5F0EB] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors disabled:opacity-30 disabled:hover:border-[#2A2A2A] disabled:hover:text-[#F5F0EB]"
              aria-label="Avis precedents"
            >
              <ChevronLeft className="size-4" strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`size-2 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? "bg-[#D4AF37] w-6"
                      : "bg-[#2A2A2A] hover:bg-[#8A8A8A]"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="size-10 flex items-center justify-center border border-[#2A2A2A] rounded-sm text-[#F5F0EB] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors disabled:opacity-30 disabled:hover:border-[#2A2A2A] disabled:hover:text-[#F5F0EB]"
              aria-label="Avis suivants"
            >
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
