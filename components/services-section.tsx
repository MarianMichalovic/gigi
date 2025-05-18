"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl uppercase tracking-[0.2em] text-center mb-16" data-aos="fade-up">
          {t.services.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-64 h-64 mb-6">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={
                      [
                        "/sophisticated-salon-interior.png",
                        "/deep-wine-elegance.png",
                        "/serene-skin-sanctuary.png",
                        "/serene-spa-treatment.png",
                      ][index] || "/placeholder.svg"
                    }
                    alt={service.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <h3 className="uppercase tracking-wider text-sm mb-2 transition-colors duration-300 group-hover:text-stone">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-16 max-w-2xl mx-auto" data-aos="fade-up">
          {t.services.note}
        </p>
      </div>
    </section>
  )
}
