"use client"

import { useState, useMemo, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CartProvider } from "@/lib/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CategoryHero } from "@/components/plp/category-hero"
import { Toolbar } from "@/components/plp/toolbar"
import { FilterSheet } from "@/components/plp/filter-sheet"
import { PLPProductCard } from "@/components/plp/plp-product-card"
import { Pagination } from "@/components/plp/pagination"
import { ALL_PRODUCTS } from "@/lib/plp-data"

const ITEMS_PER_PAGE = 9

export default function PretAPorterPage() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedMatieres, setSelectedMatieres] = useState<string[]>([])
  const [selectedTailles, setSelectedTailles] = useState<string[]>([])
  const [selectedCouleurs, setSelectedCouleurs] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)

  const toggleMatiere = useCallback(
    (m: string) => {
      setSelectedMatieres((prev) =>
        prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
      )
      setCurrentPage(1)
    },
    []
  )

  const toggleTaille = useCallback(
    (t: string) => {
      setSelectedTailles((prev) =>
        prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
      )
      setCurrentPage(1)
    },
    []
  )

  const toggleCouleur = useCallback(
    (c: string) => {
      setSelectedCouleurs((prev) =>
        prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
      )
      setCurrentPage(1)
    },
    []
  )

  const clearAll = useCallback(() => {
    setSelectedMatieres([])
    setSelectedTailles([])
    setSelectedCouleurs([])
    setCurrentPage(1)
  }, [])

  const activeFilterCount =
    selectedMatieres.length + selectedTailles.length + selectedCouleurs.length

  // Filtered + sorted products
  const processedProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS]

    // Filter by matiere
    if (selectedMatieres.length > 0) {
      products = products.filter((p) => selectedMatieres.includes(p.matiere))
    }
    // Filter by taille
    if (selectedTailles.length > 0) {
      products = products.filter((p) =>
        p.tailles.some((t) => selectedTailles.includes(t))
      )
    }
    // Filter by couleur
    if (selectedCouleurs.length > 0) {
      products = products.filter((p) => selectedCouleurs.includes(p.couleur))
    }

    // Sort
    switch (sortBy) {
      case "newest":
        products.sort((a, b) => b.createdAt - a.createdAt)
        break
      case "price-asc":
        products.sort((a, b) => a.priceEUR - b.priceEUR)
        break
      case "price-desc":
        products.sort((a, b) => b.priceEUR - a.priceEUR)
        break
      default:
        break
    }

    return products
  }, [selectedMatieres, selectedTailles, selectedCouleurs, sortBy])

  const totalPages = Math.max(1, Math.ceil(processedProducts.length / ITEMS_PER_PAGE))
  const paginatedProducts = processedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FDFBF7]">
        <AnnouncementBar />
        <SiteHeader variant="light" />
        <main>
          <CategoryHero />

          <Toolbar
            totalProducts={processedProducts.length}
            sortBy={sortBy}
            onSortChange={(v) => {
              setSortBy(v)
              setCurrentPage(1)
            }}
            onOpenFilters={() => setFilterOpen(true)}
            activeFilterCount={activeFilterCount}
          />

          {/* Active filter tags */}
          {activeFilterCount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 md:px-8 pb-6 max-w-screen-2xl mx-auto"
            >
              <div className="flex flex-wrap items-center gap-2">
                {[...selectedMatieres, ...selectedTailles, ...selectedCouleurs].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        if (selectedMatieres.includes(tag)) toggleMatiere(tag)
                        else if (selectedTailles.includes(tag)) toggleTaille(tag)
                        else toggleCouleur(tag)
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-sans uppercase tracking-widest text-[#1C1917] border border-[#E7E5E4] hover:border-[#1C1917] transition-colors group"
                    >
                      {tag}
                      <span className="text-[#78716C] group-hover:text-[#1C1917] transition-colors">
                        {"\u00D7"}
                      </span>
                    </button>
                  )
                )}
                <button
                  onClick={clearAll}
                  className="text-[11px] font-sans uppercase tracking-widest text-[#8B4513] hover:text-[#1C1917] transition-colors ml-2"
                >
                  Tout effacer
                </button>
              </div>
            </motion.div>
          )}

          {/* Product Grid */}
          <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${sortBy}-${activeFilterCount}-${currentPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {paginatedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-14">
                    {paginatedProducts.map((product, i) => (
                      <PLPProductCard
                        key={product.id}
                        product={product}
                        index={i}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-24 text-center">
                    <p className="font-serif text-2xl text-[#1C1917] mb-3">
                      Aucune piece trouvee
                    </p>
                    <p className="text-sm text-[#78716C] mb-6">
                      Essayez de modifier vos filtres pour decouvrir nos creations.
                    </p>
                    <button
                      onClick={clearAll}
                      className="text-xs font-sans uppercase tracking-widest text-[#8B4513] hover:text-[#1C1917] transition-colors border-b border-[#8B4513] hover:border-[#1C1917] pb-0.5"
                    >
                      Reinitialiser les filtres
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </main>

        <SiteFooter />
        <CartDrawer />

        <FilterSheet
          open={filterOpen}
          onOpenChange={setFilterOpen}
          selectedMatieres={selectedMatieres}
          onToggleMatiere={toggleMatiere}
          selectedTailles={selectedTailles}
          onToggleTaille={toggleTaille}
          selectedCouleurs={selectedCouleurs}
          onToggleCouleur={toggleCouleur}
          onClearAll={clearAll}
          activeFilterCount={activeFilterCount}
        />
      </div>
    </CartProvider>
  )
}
