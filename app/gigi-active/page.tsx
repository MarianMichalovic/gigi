"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

export default function GigiActivePage() {
  const { t } = useLanguage()

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-[#f8f5f2] flex flex-col">
      <Navbar />

      <section className="flex-1 pt-32 pb-20 md:pt-40 md:pb-32 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
              <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-stone transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.gigiActive.backLink}
              </Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Image on the left */}
            <div className="w-full md:w-2/5 h-[500px] md:h-[600px] relative">
              <Image
                src="/gigi_active.jpg"
                alt="Gigi Active"
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-3/5 py-20 md:py-32 px-8 md:px-16 flex items-center">
              <div className="max-w-md space-y-8" data-aos="fade-left">
                <h1 className="uppercase tracking-[0.3em] text-2xl md:text-3xl">{t.gigiActive.title}</h1>
                {/* <p className="text-sm text-muted-foreground">{t.gigiActive.description}</p> */}
                <div>
                  <h4 className="uppercase tracking-wider font-bold text-sm mb-4">{t.footer.hours}</h4>
                  <div>
                    <p>{t.gigiActive.weekdays}</p>
                    <p>{t.gigiActive.saturday}</p>
                    <p>{t.gigiActive.sunday}</p>
                    <div className="flex space-x-4 mt-4">
                      <Link href="#" className="text-gray-400 hover:text-gray-500" aria-label="Instagram">
                        <Instagram size={20} />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-gray-500" aria-label="Facebook">
                        <Facebook size={20} />
                      </Link>
                      <Link href="#" className="text-gray-400 hover:text-gray-500" aria-label="Twitter">
                        <Twitter size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["/logos/img1.webp", "/logos/img2.webp", "/logos/img3.webp"].map((src, index) => (
              <div
                key={index}
                onClick={() => setLightboxSrc(src)}
                className="cursor-pointer relative w-full h-56 rounded-md overflow-hidden shadow-md"
              >
                <Image
                  src={src}
                  alt={`Mini photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div> */}

        </div>
      </section>

      {/* Lightbox overlay */}
      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center cursor-zoom-out"
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={lightboxSrc}
              alt="Zväčšená fotka"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
