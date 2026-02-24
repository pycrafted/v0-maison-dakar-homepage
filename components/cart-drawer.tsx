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
        className="w-full sm:max-w-md bg-[#0A0A0A] border-l border-[#2A2A2A] flex flex-col"
      >
        <SheetHeader className="border-b border-[#2A2A2A] pb-4">
          <SheetTitle className="font-serif text-xl text-[#D4AF37] tracking-wide">
            Votre Panier
          </SheetTitle>
          <SheetDescription className="sr-only">
            Contenu de votre panier
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-[#8A8A8A] text-sm tracking-wide uppercase">
              Votre panier est vide
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative w-20 h-28 flex-shrink-0 overflow-hidden rounded-sm bg-[#1A1A1A]">
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
                        <h3 className="font-sans text-sm font-medium text-[#F5F0EB] leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#8A8A8A] hover:text-[#F5F0EB] transition-colors flex-shrink-0"
                          aria-label={`Retirer ${item.name} du panier`}
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#8A8A8A] mt-1">
                        {item.priceCFA.toLocaleString("fr-FR")} FCFA | {item.price} {"\u20AC"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="size-7 flex items-center justify-center border border-[#2A2A2A] text-[#F5F0EB] hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:border-[#D4AF37] transition-colors rounded-sm"
                        aria-label="Diminuer la quantite"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="text-sm font-medium text-[#F5F0EB] w-4 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="size-7 flex items-center justify-center border border-[#2A2A2A] text-[#F5F0EB] hover:bg-[#D4AF37] hover:text-[#0A0A0A] hover:border-[#D4AF37] transition-colors rounded-sm"
                        aria-label="Augmenter la quantite"
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
          <SheetFooter className="border-t border-[#2A2A2A] pt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm uppercase tracking-widest text-[#8A8A8A]">
                Sous-total
              </span>
              <div className="text-right">
                <p className="text-base font-medium text-[#D4AF37]">{subtotal} {"\u20AC"}</p>
                <p className="text-xs text-[#8A8A8A]">
                  {subtotalCFA.toLocaleString("fr-FR")} FCFA
                </p>
              </div>
            </div>
            <button className="w-full bg-[#D4AF37] text-[#0A0A0A] py-4 text-sm font-sans uppercase tracking-widest font-medium hover:bg-[#C2662D] hover:text-[#F5F0EB] transition-colors duration-300 rounded-sm">
              {"Proceder au paiement"}
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
