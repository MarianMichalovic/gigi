"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Hardcoded reviews in Slovak
const reviews = [
  {
    id: 1,
    name: "Katarína M.",
    avatar: "/professional-woman-portrait.png",
    rating: 5,
    date: "15.3.2025",
    text: "Úžasný salón s profesionálnym prístupom. Vlasová terapia mi úplne zmenila kvalitu vlasov. Odporúčam každému, kto hľadá prvotriednu starostlivosť!",
    service: "Vlasová terapia",
  },
  {
    id: 2,
    name: "Martina K.",
    avatar: "/elegant-woman-portrait.png",
    rating: 5,
    date: "2.4.2025",
    text: "GIGI Beauty Salón je môj obľúbený. Manikúra a pedikúra bola perfektná, personál je vždy milý a priestory čisté a príjemné. Vždy odchádzam spokojná.",
    service: "Manikúra a pedikúra",
  },
  {
    id: 3,
    name: "Tomáš B.",
    avatar: "/professional-man-portrait.png",
    rating: 5,
    date: "28.2.2025",
    text: "Konečne som našiel miesto, kde vedia, čo robia s pánskymi vlasmi. Strih bol presne podľa mojich predstáv a atmosféra v salóne je veľmi príjemná.",
    service: "Pánsky strih",
  },
  {
    id: 4,
    name: "Zuzana H.",
    avatar: "/smiling-woman-portrait.png",
    rating: 5,
    date: "10.4.2025",
    text: "Hydrafacial v GIGI salóne je najlepší, aký som kedy mala. Moja pleť žiari ešte týždeň po ošetrení. Personál je odborný a vždy poradí s domácou starostlivosťou.",
    service: "Hydrafacial",
  },
  {
    id: 5,
    name: "Lucia V.",
    avatar: "/elegant-woman-portrait.png",
    rating: 4,
    date: "5.3.2025",
    text: "Masáž chrbta bola vynikajúca, presne to, čo som potrebovala po dlhom sedení v práci. Terapeutka vedela presne, kde mám problémové miesta. Určite sa vrátim.",
    service: "Masáž chrbta",
  },
]

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1))
  }, [])

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="py-20 md:py-32 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl uppercase tracking-[0.2em] text-center mb-4" data-aos="fade-up">
          Recenzie našich klientov
        </h2>
        <p className="text-center text-sm text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          Prečítajte si, čo o nás hovoria naši spokojní klienti
        </p>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          data-aos="fade-up"
        >
          {/* Carousel container */}
          <div className="overflow-hidden bg-cream">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="uppercase tracking-wider text-sm">{review.name}</h3>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={cn("mr-1", i < review.rating ? "text-stone fill-stone" : "text-gray-300")}
                          />
                        ))}
                        <span className="ml-2 text-xs text-muted-foreground">{review.service}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center text-stone hover:bg-cream transition-colors z-10"
            aria-label="Predchádzajúca recenzia"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white flex items-center justify-center text-stone hover:bg-cream transition-colors z-10"
            aria-label="Nasledujúca recenzia"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 transition-all duration-300",
                  activeIndex === index ? "bg-stone w-6" : "bg-stone/30 hover:bg-stone/50",
                )}
                aria-label={`Prejsť na recenziu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
