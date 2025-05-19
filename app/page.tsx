"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ReviewsCarousel from "@/components/reviews-carousel"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { lazy, Suspense } from "react"

// Lazy load less critical components
const LazyAboutSection = lazy(() => import("@/components/about-section"))
const LazyEquipmentSection = lazy(() => import("@/components/equipment-section"))
const LazyPricingSection = lazy(() => import("@/components/pricing-section"))

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyAboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyEquipmentSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
        <LazyPricingSection />
      </Suspense>

      <section id="book" className="w-full py-36 px-4 relative my-0 bg-white" aria-labelledby="cta-heading">
        <div
          className="flex flex-col items-center justify-center text-center space-y-8 relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 id="cta-heading" className="text-2xl uppercase tracking-[0.2em] text-charcoal">
            {t.cta.title}
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">{t.cta.subtitle}</p>
          <Button
            asChild
            size="lg"
            className="bg-charcoal hover:bg-stone text-white px-10 py-6 text-sm uppercase tracking-wider"
          >
            <Link href="https://services.bookio.com/gigi-beautycorner/widget?lang=sk" target="_blank" rel="noopener noreferrer" className="flex items-center">
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}
