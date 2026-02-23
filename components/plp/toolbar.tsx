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
      {/* Left: Filter button */}
      <button
        onClick={onOpenFilters}
        className="flex items-center gap-2.5 text-xs font-sans uppercase tracking-widest text-[#1C1917] hover:text-[#8B4513] transition-colors group"
      >
        <SlidersHorizontal className="size-4 group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
        <span>Filtrer & Trier</span>
        {activeFilterCount > 0 && (
          <span className="size-5 rounded-full bg-[#1C1917] text-[#FDFBF7] text-[10px] flex items-center justify-center font-medium">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Center: count */}
      <p className="hidden md:block text-xs font-sans tracking-widest text-[#78716C] uppercase">
        {totalProducts} {totalProducts === 1 ? "piece" : "pieces"}
      </p>

      {/* Right: Sort */}
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="h-auto border-none shadow-none bg-transparent p-0 text-xs font-sans tracking-widest uppercase text-[#78716C] hover:text-[#1C1917] transition-colors w-auto gap-1.5">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
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
