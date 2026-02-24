"use client"

import { usePathname } from "next/navigation"
import { Home, LayoutGrid, ShoppingBag, User } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "@/lib/cart-context"

const NAV_ITEMS = [
  { label: "Accueil", icon: Home, href: "/" },
  { label: "Boutique", icon: LayoutGrid, href: "/pret-a-porter" },
  { label: "Panier", icon: ShoppingBag, href: "__cart__" },
  { label: "Profil", icon: User, href: "#" },
]

export function BottomNav() {
  const pathname = usePathname()
  const { setIsOpen, totalItems } = useCart()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      aria-label="Navigation mobile"
    >
      {/* Glassmorphism background */}
      <div className="mx-3 mb-3 rounded-2xl border border-[#D4AF37]/15 bg-[#0A0A0A]/70 backdrop-blur-xl shadow-[0_-4px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-around py-2">
          {NAV_ITEMS.map((item) => {
            const isCart = item.href === "__cart__"
            const isActive = !isCart && pathname === item.href

            return (
              <button
                key={item.label}
                onClick={() => {
                  if (isCart) {
                    setIsOpen(true)
                  } else {
                    window.location.href = item.href
                  }
                }}
                className="relative flex flex-col items-center gap-0.5 px-4 py-2 group"
                aria-label={item.label}
              >
                <div className="relative">
                  <item.icon
                    className={`size-5 transition-colors duration-200 ${
                      isActive
                        ? "text-[#D4AF37]"
                        : "text-[#F5F0EB]/50 group-hover:text-[#F5F0EB]"
                    }`}
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                  {/* Cart badge */}
                  {isCart && totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1.5 -right-2 size-4 rounded-full bg-[#D4AF37] text-[#0A0A0A] text-[9px] flex items-center justify-center font-bold"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </div>
                <span
                  className={`text-[10px] tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#D4AF37] font-medium"
                      : "text-[#F5F0EB]/40 group-hover:text-[#F5F0EB]/70"
                  }`}
                >
                  {item.label}
                </span>
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-indicator"
                    className="absolute -top-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-[#D4AF37]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
