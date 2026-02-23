"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, subtotalCFA } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-[#FDFBF7] border-l border-[#E7E5E4] flex flex-col"
      >
        <SheetHeader className="border-b border-[#E7E5E4] pb-4">
          <SheetTitle className="font-serif text-xl text-[#1C1917] tracking-wide">
            Votre Panier
          </SheetTitle>
          <SheetDescription className="sr-only">
            Contenu de votre panier
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#78716C] text-sm tracking-wide uppercase">
              Votre panier est vide
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-28 flex-shrink-0 overflow-hidden rounded-sm bg-[#F5F0EB]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-sans text-sm font-medium text-[#1C1917] leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#78716C] hover:text-[#1C1917] transition-colors flex-shrink-0"
                          aria-label={`Retirer ${item.name} du panier`}
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#78716C] mt-1">
                        {item.priceCFA.toLocaleString("fr-FR")} FCFA | {item.price} €
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="size-7 flex items-center justify-center border border-[#E7E5E4] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FDFBF7] transition-colors rounded-sm"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="text-sm font-medium text-[#1C1917] w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="size-7 flex items-center justify-center border border-[#E7E5E4] text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FDFBF7] transition-colors rounded-sm"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="size-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <SheetFooter className="border-t border-[#E7E5E4] pt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm uppercase tracking-widest text-[#78716C]">
                Sous-total
              </span>
              <div className="text-right">
                <p className="text-base font-medium text-[#1C1917]">{subtotal} €</p>
                <p className="text-xs text-[#78716C]">
                  {subtotalCFA.toLocaleString("fr-FR")} FCFA
                </p>
              </div>
            </div>
            <button className="w-full bg-[#1C1917] text-[#FDFBF7] py-4 text-sm font-sans uppercase tracking-widest hover:bg-[#8B4513] transition-colors duration-300 rounded-sm">
              Procéder au paiement
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
