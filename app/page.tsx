"use client"

import { CartProvider } from "@/lib/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBand } from "@/components/marquee-band"
import { CategoryGrid } from "@/components/category-grid"
import { ProductGrid } from "@/components/product-grid"
import { ReassuranceSection } from "@/components/reassurance-section"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <AnnouncementBar />
        <SiteHeader />
        <main>
          <HeroSection />
          <MarqueeBand />
          <CategoryGrid />
          <ProductGrid />
          <ReassuranceSection />
        </main>
        <SiteFooter />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  )
}
