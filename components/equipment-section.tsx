"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useEffect } from "react"
import { Check } from "lucide-react"

export default function EquipmentSection() {
  const { t } = useLanguage()

  // Initialize AOS with once:true to prevent reverse animations

  const equipmentImages = [
    "/sleek-laser-device.png",
    "/professional-hydrafacial-setup.png",
    "/futuristic-facial-therapy.png",
    "/professional-microdermabrasion-setup.png",
  ]

  return (
    <section id="equipment" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-once="true">
          <h2 className="text-2xl uppercase tracking-[0.2em] mb-4">{t.equipment.title}</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{t.equipment.subtitle}</p>
        </div>

        <div className="space-y-12">
          {t.equipment.items.map((item, index) => (
            <div
              key={index}
              id={`equipment-item-${index}`}
              className="relative z-10 border-b border-sand pb-8"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={index * 50}
              data-aos-duration="800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Content Column - Now First */}
                <div className="order-2 md:order-1">
                  <h3 className="uppercase tracking-wider text-lg mb-3">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{item.description}</p>

                  <div className="space-y-6 mt-6">
                    {/* Procedures */}
                    <div>
                      <h4 className="uppercase tracking-wider text-sm mb-2">
                        {t.equipment.proceduresTitle || "Procedures"}
                      </h4>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {item.procedures.map((procedure, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-stone mt-1">
                              <Check size={12} />
                            </span>
                            {procedure}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h4 className="uppercase tracking-wider text-sm mb-2">
                        {t.equipment.specificationsTitle || "Technical Specifications"}
                      </h4>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {item.specifications.map((spec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-stone mt-1">
                              <Check size={12} />
                            </span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="uppercase tracking-wider text-sm mb-2">
                        {t.equipment.benefitsTitle || "Benefits"}
                      </h4>
                      <p className="text-xs text-muted-foreground">{item.benefits}</p>
                    </div>
                  </div>
                </div>

                {/* Image Column - Now Second */}
                <div className="order-1 md:order-2">
                  <div className="overflow-hidden relative">
                    <Image
                      src={equipmentImages[index] || "/placeholder.svg"}
                      alt={item.name}
                      width={0}
                      height={400}
                      className="object-cover w-full h-auto"
                      style={{ transform: "none", transition: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-once="true">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">{t.equipment.conclusion}</p>
        </div>
      </div>
    </section>
  )
}
