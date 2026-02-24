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
  { label: "Collections", href: "/collections" },
  { label: "Boubous", href: "/pret-a-porter" },
  { label: "Chaussures", href: "#" },
  { label: "Sacs", href: "#" },
  { label: "Bijoux", href: "#" },
  { label: "Sur-Mesure", href: "/sur-mesure" },
  { label: "La Maison", href: "/la-maison" },
]

interface SiteHeaderProps {
  variant?: "hero" | "light"
}

export function SiteHeader({ variant = "hero" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setIsOpen, totalItems } = useCart()

  const isDark = variant === "light" || scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isDark
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Top bar with currency/lang - desktop only */}
          <div
            className={`hidden lg:flex items-center justify-between py-2 text-xs tracking-widest uppercase transition-colors duration-500 ${
              isDark ? "text-[#8A8A8A]" : "text-[#F5F0EB]/60"
            }`}
          >
            <div className="flex items-center gap-4">
              <Select defaultValue="eur">
                <SelectTrigger
                  className={`h-auto border-none shadow-none bg-transparent p-0 text-xs tracking-widest uppercase ${
                    isDark ? "text-[#8A8A8A]" : "text-[#F5F0EB]/60"
                  } hover:opacity-100 w-auto gap-1.5`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
                  <SelectItem value="xof" className="text-xs">XOF (FCFA)</SelectItem>
                  <SelectItem value="eur" className="text-xs">EUR</SelectItem>
                  <SelectItem value="usd" className="text-xs">USD ($)</SelectItem>
                  <SelectItem value="gbp" className="text-xs">GBP</SelectItem>
                </SelectContent>
              </Select>
              <span className="opacity-30">|</span>
              <Select defaultValue="fr">
                <SelectTrigger
                  className={`h-auto border-none shadow-none bg-transparent p-0 text-xs tracking-widest uppercase ${
                    isDark ? "text-[#8A8A8A]" : "text-[#F5F0EB]/60"
                  } hover:opacity-100 w-auto gap-1.5`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
                  <SelectItem value="fr" className="text-xs">FR</SelectItem>
                  <SelectItem value="en" className="text-xs">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div
              className={`flex items-center gap-6 transition-colors duration-500 ${
                isDark ? "text-[#8A8A8A]" : "text-[#F5F0EB]/60"
              }`}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#D4AF37] transition-colors text-[11px] tracking-[0.2em]"
                >
                  {link.label}
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
                className={`transition-colors ${isDark ? "text-[#F5F0EB]" : "text-[#F5F0EB]"}`}
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Left spacer on desktop */}
            <div className="hidden lg:block w-24" />

            {/* Center: Logo */}
            <a href="/" className="flex items-center">
              <h1
                className={`font-serif text-xl md:text-2xl font-bold tracking-[0.06em] transition-colors duration-500 ${
                  isDark ? "text-[#D4AF37]" : "text-[#D4AF37]"
                }`}
              >
                GOLDEN POUSSO
              </h1>
            </a>

            {/* Right: icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-[#F5F0EB] hover:text-[#D4AF37] transition-colors"
                aria-label="Rechercher"
              >
                <Search className="size-5" strokeWidth={1.5} />
              </button>
              <button
                className="hidden md:block text-[#F5F0EB] hover:text-[#D4AF37] transition-colors"
                aria-label="Mon compte"
              >
                <User className="size-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className="relative text-[#F5F0EB] hover:text-[#D4AF37] transition-colors"
                aria-label="Panier"
              >
                <ShoppingBag className="size-5" strokeWidth={1.5} />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-[10px] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent
          className="max-w-full h-full sm:max-w-full bg-[#0A0A0A] border-none rounded-none flex flex-col items-center justify-center"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">Rechercher</DialogTitle>
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 text-[#F5F0EB] hover:text-[#D4AF37] transition-colors"
            aria-label="Fermer la recherche"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
          <div className="w-full max-w-xl px-4">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-6 text-center">
              Rechercher
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Que cherchez-vous ?"
                className="w-full bg-transparent border-b border-[#D4AF37]/40 pb-3 text-2xl md:text-4xl font-serif text-[#F5F0EB] placeholder:text-[#8A8A8A]/50 focus:outline-none focus:border-[#D4AF37]"
                autoFocus
              />
              <Search className="absolute right-0 bottom-3 size-6 text-[#D4AF37]" strokeWidth={1.5} />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-80 bg-[#0A0A0A] border-r border-[#2A2A2A] flex flex-col">
          <SheetHeader className="border-b border-[#2A2A2A] pb-6">
            <SheetTitle className="font-serif text-xl text-[#D4AF37] tracking-[0.06em]">
              GOLDEN POUSSO
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menu de navigation principal
            </SheetDescription>
          </SheetHeader>
          <nav className="flex-1 py-8">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm uppercase tracking-widest text-[#F5F0EB]/80 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-[#2A2A2A] pt-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <Select defaultValue="eur">
                <SelectTrigger className="h-auto border border-[#2A2A2A] bg-transparent text-xs tracking-widest uppercase text-[#8A8A8A] rounded-sm px-3 py-2 w-auto gap-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
                  <SelectItem value="xof" className="text-xs">XOF</SelectItem>
                  <SelectItem value="eur" className="text-xs">EUR</SelectItem>
                  <SelectItem value="usd" className="text-xs">USD</SelectItem>
                  <SelectItem value="gbp" className="text-xs">GBP</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="fr">
                <SelectTrigger className="h-auto border border-[#2A2A2A] bg-transparent text-xs tracking-widest uppercase text-[#8A8A8A] rounded-sm px-3 py-2 w-auto gap-1.5">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#2A2A2A] rounded-sm text-[#F5F0EB]">
                  <SelectItem value="fr" className="text-xs">FR</SelectItem>
                  <SelectItem value="en" className="text-xs">EN</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#8A8A8A] tracking-wider">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">TikTok</a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
