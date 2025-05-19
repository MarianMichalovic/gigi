"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Head from "next/head"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        {/* Preload the background image */}
        <link rel="preload" href="/ivory-paper-texture.jpeg" as="image" />
      </Head>
      <section
        className="h-screen flex flex-col items-center justify-center px-4 relative bg-[#f5f2e9]"
        style={{
          backgroundImage: "url('/ivory-paper-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logos/logo2.png"
              alt="GIGI Beauty Studio"
              width={0}
              height={0}
              sizes="(max-width: 768px) 120px, 200px"
              className="w-full max-w-[120px] sm:max-w-[200px] h-auto object-contain"
            />
          </div>
          <h1 className="uppercase tracking-[0.3em] text-xl md:text-3xl mb-4">Gigi Beauty Corner</h1>
        </div>
        
        {/* Animated arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex justify-center w-full">
          <ChevronDown className="w-8 h-8 text-stone/60" />
        </div>
      </section>
    </>
  )
}
