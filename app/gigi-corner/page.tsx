"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function GigiCornerPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-[#f8f5f2] flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
              <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-stone transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.gigiCorner.backLink}
              </Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Image on the left - narrower than half */}
            <div className="w-full md:w-2/5 h-[500px] md:h-[600px] relative">
              <Image
                src="/beige-coffee-haven.png"
                alt="Gigi Corner Coffee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text on the right - wider than half */}
            <div className="w-full md:w-3/5 py-20 md:py-32 px-8 md:px-16 flex items-center">
              <div className="max-w-md space-y-8" data-aos="fade-left">
                <h1 className="uppercase tracking-[0.3em] text-2xl md:text-3xl">{t.gigiCorner.title}</h1>
                <p className="text-sm text-muted-foreground">{t.gigiCorner.description}</p>
                <p className="text-sm text-muted-foreground">{t.gigiCorner.comingSoon}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
