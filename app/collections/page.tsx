"use client"

import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { BottomNav } from "@/components/bottom-nav"
import { CollectionsHero } from "@/components/collections/collections-hero"
import { MasonryGallery } from "@/components/collections/masonry-gallery"

export default function CollectionsPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <SiteHeader />
        <main>
          <CollectionsHero />
          <MasonryGallery />
        </main>
        <SiteFooter />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  )
}
