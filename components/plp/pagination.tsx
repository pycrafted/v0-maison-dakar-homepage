"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      aria-label="Pagination"
      className="flex items-center justify-center gap-1 pt-16 md:pt-20 pb-4"
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-xs font-sans uppercase tracking-widest transition-colors",
          currentPage === 1
            ? "text-[#2A2A2A] cursor-not-allowed"
            : "text-[#8A8A8A] hover:text-[#D4AF37]"
        )}
        aria-label="Page precedente"
      >
        <ArrowLeft className="size-3.5" strokeWidth={1.5} />
        {"Precedent"}
      </button>

      <span className="w-8 h-px bg-[#2A2A2A] mx-2" />

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "relative size-9 flex items-center justify-center text-sm font-sans transition-colors",
            currentPage === page
              ? "text-[#D4AF37]"
              : "text-[#8A8A8A] hover:text-[#F5F0EB]"
          )}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
          {currentPage === page && (
            <motion.span
              layoutId="page-indicator"
              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-px bg-[#D4AF37]"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      ))}

      <span className="w-8 h-px bg-[#2A2A2A] mx-2" />

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-xs font-sans uppercase tracking-widest transition-colors",
          currentPage === totalPages
            ? "text-[#2A2A2A] cursor-not-allowed"
            : "text-[#8A8A8A] hover:text-[#D4AF37]"
        )}
        aria-label="Page suivante"
      >
        Suivant
        <ArrowRight className="size-3.5" strokeWidth={1.5} />
      </button>
    </motion.nav>
  )
}
