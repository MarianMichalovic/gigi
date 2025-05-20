"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <>
      {/* First about section */}
      <section id="about" className="relative bg-[#29272b]">
        <div className="flex flex-col md:flex-row">
          {/* Image on the left - narrower than half */}
          <div className="w-full md:w-2/5 h-[500px] md:h-[600px] relative">
            <Image src="/serene-beige-salon.png" alt="Beauty salon interior" fill className="object-cover" />
          </div>

          {/* Text on the right - wider than half */}
          <div className="w-full md:w-3/5 py-20 md:py-32 px-8 md:px-16 flex items-center text-slate-100">
            <div className="max-w-md space-y-6" data-aos="fade-left">
              <h2 className="sm:text-2xl text-xl uppercase pb-16 tracking-[0.2em] relative">
                {t.about.title}
                {/* Dlhá čiara pod nadpisom */}
                <div className="absolute left-6 sm:top-[40px] top-[48px] h-[2px] sm:w-96 w-80 bg-slate-300 opacity-60" />
              </h2>
              <p className="text-sm text-slate-200">{t.about.paragraph1}</p>
              <p className="text-sm text-slate-200">{t.about.paragraph2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Second about section with reversed layout */}
      <section className="relative bg-white">
        <div className="flex flex-col md:flex-row">
          {/* Text on the left - wider than half */}
          <div className="w-full md:w-3/5 py-20 md:py-32 px-8 md:px-16 flex items-center order-2 md:order-1">
            <div className="max-w-md space-y-6" data-aos="fade-right">
              <p className="text-sm text-muted-foreground">{t.about1.paragraph1}</p>
              <p className="text-sm text-muted-foreground">{t.about1.paragraph2}</p>
              <p className="text-sm text-muted-foreground">{t.about1.paragraph3}</p>
            </div>
            <div className="absolute left-6 bottom-40 h-[2px] sm:w-96 w-80 bg-slate-300 opacity-60" />
          </div>

          {/* Image on the right - narrower than half */}
          <div className="w-full md:w-2/5 h-[500px] md:h-[600px] relative order-1 md:order-2">
            <Image src="/about2.jpg" alt="Beauty salon services" fill className="object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
