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
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-xs font-sans uppercase tracking-widest transition-colors",
          currentPage === 1
            ? "text-[#D6D3D1] cursor-not-allowed"
            : "text-[#78716C] hover:text-[#1C1917]"
        )}
        aria-label="Page precedente"
      >
        <ArrowLeft className="size-3.5" strokeWidth={1.5} />
        {"Precedent"}
      </button>

      {/* Separator */}
      <span className="w-8 h-px bg-[#E7E5E4] mx-2" />

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "relative size-9 flex items-center justify-center text-sm font-sans transition-colors",
            currentPage === page
              ? "text-[#1C1917]"
              : "text-[#78716C] hover:text-[#1C1917]"
          )}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
          {currentPage === page && (
            <motion.span
              layoutId="page-indicator"
              className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-px bg-[#1C1917]"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      ))}

      {/* Separator */}
      <span className="w-8 h-px bg-[#E7E5E4] mx-2" />

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center gap-2 px-4 py-2 text-xs font-sans uppercase tracking-widest transition-colors",
          currentPage === totalPages
            ? "text-[#D6D3D1] cursor-not-allowed"
            : "text-[#78716C] hover:text-[#1C1917]"
        )}
        aria-label="Page suivante"
      >
        Suivant
        <ArrowRight className="size-3.5" strokeWidth={1.5} />
      </button>
    </motion.nav>
  )
}
