import type { Metadata } from "next"
import { CartProvider } from "@/lib/cart-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CartDrawer } from "@/components/cart-drawer"
import { BottomNav } from "@/components/bottom-nav"
import { PdpBreadcrumb } from "@/components/pdp/pdp-breadcrumb"
import { ProductGallery } from "@/components/pdp/product-gallery"
import { ProductInfo } from "@/components/pdp/product-info"

export const metadata: Metadata = {
  title: "Boubou Modele Royal | GOLDEN POUSSO",
  description:
    "Boubou Modele Royal - Bazin riche avec broderie au fil d'or. Confectionne a la main a Dakar. 185 000 FCFA.",
}

export default function ProductPage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0A0A0A]">
        <SiteHeader variant="light" />

        <main className="pt-28 md:pt-36 pb-20 md:pb-32">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            {/* Breadcrumb */}
            <PdpBreadcrumb />

            {/* Product layout: Gallery | Info */}
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left: Gallery */}
              <div>
                <ProductGallery />
              </div>

              {/* Right: Info (sticky on desktop) */}
              <div className="lg:sticky lg:top-36 lg:self-start">
                <ProductInfo />
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
        <CartDrawer />
        <BottomNav />
      </div>
    </CartProvider>
  )
}
