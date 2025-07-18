"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState } from "react"
import { Check, Play, X } from "lucide-react"

export default function EquipmentSection() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")
  const [videoPopup, setVideoPopup] = useState<string | null>(null)

  // Handle ESC key to close video popup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && videoPopup) {
        setVideoPopup(null)
      }
    }

    if (videoPopup) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent body scroll when popup is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [videoPopup])

  const equipmentImages = [
    "/stroje/stroj1.png",
    "/stroje/stroj2.png",
    "/stroje/stroj3.png",
    "/stroje/stroj4.jpg",
    "/stroje/stroj5.png",
    "/stroje/stroj6.jpg",
    "/stroje/stroj7.png",
    "/stroje/stroj8.png",
    "/stroje/stroj9.png", // MP GUN
    "/stroje/stroj10.jpg", // MINECEL AIR JET
  ]

  // Filter equipment based on active category
  const filteredEquipment = activeCategory === "all" 
    ? t.equipment.items 
    : t.equipment.items.filter(item => item.category === activeCategory)

  const categories = [
    { key: "all", label: t.equipment.categories.all },
    { key: "face", label: t.equipment.categories.face },
    { key: "body", label: t.equipment.categories.body },
    { key: "hair", label: t.equipment.categories.hair },
    { key: "pigment", label: t.equipment.categories.pigment },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-once="true">
          <h2 className="text-2xl uppercase tracking-[0.2em] mb-4">{t.equipment.title}</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{t.equipment.subtitle}</p>
        </div>

        {/* Category Toggle */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up" data-aos-once="true">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-stone text-white shadow-lg'
                  : 'bg-white text-stone border border-stone hover:bg-stone hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {filteredEquipment.map((item, index) => {
            // Find the original index of this item in the full array
            const originalIndex = t.equipment.items.findIndex(originalItem => originalItem.name === item.name)
            
            return (
            <div
              key={item.name}
              id={`equipment-item-${originalIndex}`}
              className="relative z-10 border-b border-sand pb-8"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={index * 50}
              data-aos-duration="800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Content Column - Now First */}
                <div className="order-2 md:order-1">
                  <h3 className="uppercase tracking-wider text-lg font-bold mb-3">{item.name}</h3>

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

                    {/* Why Use */}
                    <div>
                      <h4 className="uppercase tracking-wider text-sm mb-2">
                        {t.equipment.whyUseTitle || "Why Use This Procedure"}
                      </h4>
                      <p className="text-xs text-muted-foreground">{item.whyUse}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="uppercase tracking-wider text-sm mb-2">
                        {t.equipment.benefitsTitle || "Benefits"}
                      </h4>
                      <p className="text-xs text-muted-foreground">{item.benefits}</p>
                    </div>

                    {/* Video Section */}
                    {(item as any).video && (
                      <div>
                        <h4 className="uppercase tracking-wider text-sm mb-2">
                          {t.equipment.videoTitle || "Video"}
                        </h4>
                        <button
                          onClick={() => setVideoPopup((item as any).video)}
                          className="flex items-center gap-2 text-xs text-stone hover:text-stone/80 transition-colors"
                        >
                          <Play size={14} />
                          Pozrieť video
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Column - Now Second */}
                <div className="order-1 md:order-2">
                  <div className="overflow-hidden relative">
                    <Image
                      src={equipmentImages[originalIndex] || "/placeholder.svg"}
                      alt={item.name}
                      width={0}
                      height={200}
                      className="object-cover w-2/3 h-auto rounded-xl"
                      style={{ transform: "none", transition: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up" data-aos-once="true">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">{t.equipment.conclusion}</p>
        </div>
      </div>

      {/* Video Popup */}
      {videoPopup && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setVideoPopup(null)}
        >
          <div 
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoPopup(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <video
              src={videoPopup}
              controls
              autoPlay
              className="w-full h-auto"
              onError={() => {
                console.error("Video failed to load:", videoPopup)
                setVideoPopup(null)
              }}
            >
              Váš prehliadač nepodporuje video element.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
