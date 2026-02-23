"use client"

import { useEffect, useState } from "react"
import { Search, User, ShoppingBag, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

const NAV_LINKS = [
  "Nouveautés",
  "Prêt-à-Porter",
  "Sur-Mesure",
  "Accessoires",
  "La Maison",
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setIsOpen, totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E7E5E4]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Top bar with currency/lang - desktop only */}
          <div
            className={`hidden lg:flex items-center justify-between py-2 text-xs tracking-widest uppercase transition-colors duration-500 ${
              scrolled ? "text-[#78716C]" : "text-[#FDFBF7]/70"
            }`}
          >
            <div className="flex items-center gap-4">
              <Select defaultValue="eur">
                <SelectTrigger
                  className={`h-auto border-none shadow-none bg-transparent p-0 text-xs tracking-widest uppercase ${
                    scrolled ? "text-[#78716C]" : "text-[#FDFBF7]/70"
                  } hover:opacity-100 w-auto gap-1.5`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
                  <SelectItem value="xof" className="text-xs">XOF (FCFA)</SelectItem>
                  <SelectItem value="eur" className="text-xs">EUR (€)</SelectItem>
                  <SelectItem value="usd" className="text-xs">USD ($)</SelectItem>
                  <SelectItem value="gbp" className="text-xs">GBP (£)</SelectItem>
                </SelectContent>
              </Select>
              <span className="opacity-30">|</span>
              <Select defaultValue="fr">
                <SelectTrigger
                  className={`h-auto border-none shadow-none bg-transparent p-0 text-xs tracking-widest uppercase ${
                    scrolled ? "text-[#78716C]" : "text-[#FDFBF7]/70"
                  } hover:opacity-100 w-auto gap-1.5`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
                  <SelectItem value="fr" className="text-xs">FR</SelectItem>
                  <SelectItem value="en" className="text-xs">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div
              className={`flex items-center gap-6 transition-colors duration-500 ${
                scrolled ? "text-[#78716C]" : "text-[#FDFBF7]/70"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:opacity-100 transition-opacity text-[11px] tracking-[0.2em]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Main header row */}
          <div className="flex items-center justify-between py-4 lg:py-3">
            {/* Left: mobile hamburger */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`transition-colors ${scrolled ? "text-[#1C1917]" : "text-[#FDFBF7]"}`}
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Left spacer on desktop */}
            <div className="hidden lg:block w-24" />

            {/* Center: Logo */}
            <a href="#" className="flex items-center">
              <h1
                className={`font-serif text-2xl md:text-3xl font-bold tracking-[0.08em] transition-colors duration-500 ${
                  scrolled ? "text-[#1C1917]" : "text-[#FDFBF7]"
                }`}
              >
                MAISON DAKAR
              </h1>
            </a>

            {/* Right: icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className={`transition-colors ${scrolled ? "text-[#1C1917]" : "text-[#FDFBF7]"}`}
                aria-label="Rechercher"
              >
                <Search className="size-5" strokeWidth={1.5} />
              </button>
              <button
                className={`hidden md:block transition-colors ${
                  scrolled ? "text-[#1C1917]" : "text-[#FDFBF7]"
                }`}
                aria-label="Mon compte"
              >
                <User className="size-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`relative transition-colors ${
                  scrolled ? "text-[#1C1917]" : "text-[#FDFBF7]"
                }`}
                aria-label="Panier"
              >
                <ShoppingBag className="size-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-[#8B4513] text-[#FDFBF7] text-[10px] flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Dialog - Full Screen */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent
          className="max-w-full h-full sm:max-w-full bg-[#FDFBF7] border-none rounded-none flex flex-col items-center justify-center"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Rechercher</DialogTitle>
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 text-[#1C1917] hover:text-[#8B4513] transition-colors"
            aria-label="Fermer la recherche"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
          <div className="w-full max-w-xl px-4">
            <p className="text-xs uppercase tracking-widest text-[#78716C] mb-6 text-center">
              Rechercher
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Que cherchez-vous ?"
                className="w-full bg-transparent border-b border-[#1C1917] pb-3 text-2xl md:text-4xl font-serif text-[#1C1917] placeholder:text-[#78716C]/50 focus:outline-none"
                autoFocus
              />
              <Search className="absolute right-0 bottom-3 size-6 text-[#78716C]" strokeWidth={1.5} />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-80 bg-[#FDFBF7] border-r border-[#E7E5E4] flex flex-col">
          <SheetHeader className="border-b border-[#E7E5E4] pb-6">
            <SheetTitle className="font-serif text-xl text-[#1C1917] tracking-[0.08em]">
              MAISON DAKAR
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menu de navigation principal
            </SheetDescription>
          </SheetHeader>
          <nav className="flex-1 py-8">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="block py-3 text-sm uppercase tracking-widest text-[#1C1917] hover:text-[#8B4513] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-[#E7E5E4] pt-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <Select defaultValue="eur">
                <SelectTrigger className="h-auto border border-[#E7E5E4] bg-transparent text-xs tracking-widest uppercase text-[#78716C] rounded-sm px-3 py-2 w-auto gap-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
                  <SelectItem value="xof" className="text-xs">XOF</SelectItem>
                  <SelectItem value="eur" className="text-xs">EUR</SelectItem>
                  <SelectItem value="usd" className="text-xs">USD</SelectItem>
                  <SelectItem value="gbp" className="text-xs">GBP</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="fr">
                <SelectTrigger className="h-auto border border-[#E7E5E4] bg-transparent text-xs tracking-widest uppercase text-[#78716C] rounded-sm px-3 py-2 w-auto gap-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#FDFBF7] border-[#E7E5E4] rounded-sm">
                  <SelectItem value="fr" className="text-xs">FR</SelectItem>
                  <SelectItem value="en" className="text-xs">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#78716C] tracking-wider">
              <a href="#" className="hover:text-[#1C1917] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#1C1917] transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-[#1C1917] transition-colors">TikTok</a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
