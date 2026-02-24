import { create } from "zustand"

// We'll use React context instead for simplicity
// This is a simple cart state management approach

export interface CartItem {
  id: number
  name: string
  price: number
  priceCFA: number
  image: string
  quantity: number
  size?: string
}

export const DEMO_CART_ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Robe Sculptée Terracotta",
    price: 185,
    priceCFA: 120000,
    image: "/images/product-1a.jpg",
    quantity: 1,
    size: "M",
  },
  {
    id: 2,
    name: "Ensemble Bazin Indigo",
    price: 245,
    priceCFA: 160000,
    image: "/images/product-2a.jpg",
    quantity: 1,
    size: "L",
  },
]
