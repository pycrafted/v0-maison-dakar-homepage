"use client"

import { CartProvider } from "@/lib/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { ManifesteHero } from "@/components/la-maison/manifeste-hero"
import { CreateurPortrait } from "@/components/la-maison/creatrice-portrait"
import { SavoirFaireGallery } from "@/components/la-maison/savoir-faire-gallery"
import { EngagementBand } from "@/components/la-maison/engagement-band"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function LaMaisonPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FDFBF7]">
        <AnnouncementBar />
        <SiteHeader variant="light" />
        <main>
          <ManifesteHero />
          <CreateurPortrait />
          <SavoirFaireGallery />
          <EngagementBand />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
