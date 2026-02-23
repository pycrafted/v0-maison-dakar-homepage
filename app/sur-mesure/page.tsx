"use client"

import { CartProvider } from "@/lib/cart-context"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { BespokeHero } from "@/components/sur-mesure/bespoke-hero"
import { ProcessTimeline } from "@/components/sur-mesure/process-timeline"
import { ReservationForm } from "@/components/sur-mesure/reservation-form"
import { Testimonial } from "@/components/sur-mesure/testimonial"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"

export default function SurMesurePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FDFBF7]">
        <AnnouncementBar />
        <SiteHeader />
        <main>
          <BespokeHero />
          <ProcessTimeline />
          <ReservationForm />
          <Testimonial />
        </main>
        <SiteFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
