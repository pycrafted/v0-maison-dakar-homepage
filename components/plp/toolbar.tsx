"use client"

import { SlidersHorizontal } from "lucide-react"
import { motion } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SORT_OPTIONS } from "@/lib/plp-data"

interface ToolbarProps {
  totalProducts: number
  sortBy: string
  onSortChange: (value: string) => void
  onOpenFilters: () => void
  activeFilterCount: number
}

export function Toolbar({
  totalProducts,
  sortBy,
  onSortChange,
  onOpenFilters,
  activeFilterCount,
}: ToolbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center justify-between px-4 md:px-8 py-5 max-w-screen-2xl mx-auto"
    >
      <button
        onClick={onOpenFilters}
        className="flex items-center gap-2.5 text-xs font-sans uppercase tracking-widest text-[#F5F0EB] hover:text-[#D4AF37] transition-colors group"
      >
        <SlidersHorizontal className="size-4 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
        <span>Filtrer & Trier</span>
        {activeFilterCount > 0 && (
          <span className="size-5 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-[10px] flex items-center justify-center font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>

      <p className="hidden md:block text-xs font-sans tracking-widest text-[#8A8A8A] uppercase">
        {totalProducts} {totalProducts === 1 ? "piece" : "pieces"}
      </p>

      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="h-auto border-none shadow-none bg-transparent p-0 text-xs font-sans tracking-widest uppercase text-[#8A8A8A] hover:text-[#F5F0EB] transition-colors w-auto gap-1.5">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
          {SORT_OPTIONS.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="text-xs tracking-wider"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  )
}
