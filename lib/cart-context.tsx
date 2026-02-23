"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { DEMO_CART_ITEMS, type CartItem } from "./cart-store"

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  updateQuantity: (id: number, delta: number) => void
  removeItem: (id: number) => void
  totalItems: number
  subtotal: number
  subtotalCFA: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEMO_CART_ITEMS)
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = useCallback((id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }, [])

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const subtotalCFA = items.reduce((sum, item) => sum + item.priceCFA * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        updateQuantity,
        removeItem,
        totalItems,
        subtotal,
        subtotalCFA,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
