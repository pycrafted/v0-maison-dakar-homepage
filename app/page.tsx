"use client"

import { CartProvider } from "@/lib/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBand } from "@/components/marquee-band"
import { LookbookSection } from "@/components/lookbook-section"
import { ProductGrid } from "@/components/product-grid"
import { SavoirFaireSection } from "@/components/savoir-faire-section"
import { ReassuranceSection } from "@/components/reassurance-section"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FDFBF7]">
        <AnnouncementBar />
        <SiteHeader />
        <main>
          <HeroSection />
          <MarqueeBand />
          <LookbookSection />
          <ProductGrid />
          <SavoirFaireSection />
          <ReassuranceSection />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
