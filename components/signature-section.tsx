"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SignatureSection() {
  return (
    <section className="py-6 bg-[#9a8269]/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3a2e21]/10" aria-hidden="true"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-center">
          {/* Decorative line left */}
          <div className="w-[15%] md:w-[20%] h-[1px] bg-gradient-to-r from-transparent to-white/80"></div>

          {/* Decorative elements left */}
          <div className="flex mx-3 md:mx-6 space-x-1 md:space-x-2">
            <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-white/80"></div>
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/95"></div>
          </div>

          {/* Signature */}
          <div className="relative mx-2 md:mx-4 w-56 md:w-72 h-20 md:h-24 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signature%20%285%29-cSVZZQmwiqFjo9ZKC3qt7UmCfybIXH.png"
              alt="Bagira Signature"
              width={280}
              height={90}
              className={cn("object-contain opacity-95", "transition-all duration-500 hover:opacity-100")}
            />
          </div>

          {/* Decorative elements right */}
          <div className="flex mx-3 md:mx-6 space-x-1 md:space-x-2">
            <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/95"></div>
            <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-white/80"></div>
          </div>

          {/* Decorative line right */}
          <div className="w-[15%] md:w-[20%] h-[1px] bg-gradient-to-l from-transparent to-white/80"></div>
        </div>
      </div>
    </section>
  )
}
