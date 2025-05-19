"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Info, ChevronRight, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function PricingSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<string>(t.pricing.categories.hair)
  const [navigationLevel, setNavigationLevel] = useState<"main" | "subcategory" | "pricing">("main")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("")

  // Map category keys to their respective service arrays
  const categoryServices = {
    [t.pricing.categories.hair]: t.pricing.hairServices,
    [t.pricing.categories.nails]: t.pricing.nailServices,
    [t.pricing.categories.face]: t.pricing.faceServices,
    [t.pricing.categories.body]: t.pricing.bodyServices,
    [t.pricing.categories.new]: t.pricing.newServices,
  }

  const categoryWithSubcategories = t.pricing.categories.face

  // Get all category keys
  const categories = Object.keys(t.pricing.categories).map(
    (key) => t.pricing.categories[key as keyof typeof t.pricing.categories],
  )

  // Define subcategories for each main category
  const subcategories = {
    [t.pricing.categories.hair]: [
      { name: "Haircuts & Styling", key: "haircuts" },
      { name: "Coloring", key: "coloring" },
      { name: "Treatments", key: "treatments" },
    ],
    [t.pricing.categories.nails]: [
      { name: "Manicure", key: "manicure" },
      { name: "Pedicure", key: "pedicure" },
      { name: "Nail Art", key: "nailart" },
    ],
    [t.pricing.categories.face]: [
      { name: "Čistenie pleti", key: "key1" },
      { name: "SQT Biomicroneedling", key: "key2" },
      { name: "Exosomy smart therapy", key: "key3"},
      { name: "Relaxácia", key: "Relaxácia" },
      { name: "Špeciálne ošetrenia pleti", key: "key4" },
      { name: "Dermaplaning", key: "key5" },
      { name: "LashLift / Laminácia", key: "key6" },
      { name: "Microneedling", key: "key7" },
      { name: "Plasmapenfibroplast", key: "key8" },
    ],
    [t.pricing.categories.body]: [
      { name: "Massage", key: "massage" },
      { name: "Body Treatments", key: "treatments" },
      { name: "Hair Removal", key: "removal" },
    ],
    [t.pricing.categories.new]: [
      { name: "neww", key: "new" },
      { name: "neww1 Treatments", key: "new2" },
      { name: "neww2 Removal", key: "new3" },
    ],
  }

  // Get varied descriptions with translations
  const getGenericDescription = (service: string, category: string, index: number) => {
    const language = t.language?.en === "English" ? "en" : "sk"

    // Create varied descriptions based on service name and index
    if (category === t.pricing.categories.hair) {
      const hairDescriptions = {
        en: [
          "Precision cutting with attention to detail",
          "Customized styling for your unique look",
          "Expert coloring with premium products",
          "Gentle treatment for healthy, vibrant hair",
          "Specialized technique for dimensional results",
          "Long-lasting color with minimal damage",
          "Personalized consultation and styling",
          "Revitalizing care for all hair types",
        ],
        sk: [
          "Precízne strihanie s dôrazom na detail",
          "Prispôsobený styling pre váš jedinečný vzhľad",
          "Odborné farbenie s prémiovými produktmi",
          "Jemné ošetrenie pre zdravé, žiarivé vlasy",
          "Špecializovaná technika pre dimenzionálne výsledky",
          "Dlhotrvajúca farba s minimálnym poškodením",
          "Personalizovaná konzultácia a styling",
          "Revitalizačná starostlivosť pre všetky typy vlasov",
        ],
      }
      return hairDescriptions[language][index % hairDescriptions[language].length]
    } else if (category === t.pricing.categories.nails) {
      const nailDescriptions = {
        en: [
          "Meticulous care for beautiful, healthy nails",
          "Long-lasting finish with premium products",
          "Relaxing treatment with expert technique",
          "Precision shaping and polishing",
          "Gentle care for sensitive hands and feet",
          "Artistic design with attention to detail",
          "Strengthening treatment for natural nails",
          "Luxurious experience with lasting results",
        ],
        sk: [
          "Dôkladná starostlivosť pre krásne, zdravé nechty",
          "Dlhotrvajúca úprava s prémiovými produktmi",
          "Relaxačné ošetrenie s odbornou technikou",
          "Precízne tvarovanie a leštenie",
          "Jemná starostlivosť pre citlivé ruky a nohy",
          "Umelecký dizajn s dôrazom na detail",
          "Posilňujúce ošetrenie pre prirodzené nechty",
          "Luxusný zážitok s dlhotrvajúcimi výsledkami",
        ],
      }
      return nailDescriptions[language][index % nailDescriptions[language].length]
    } else if (category === t.pricing.categories.face) {
      const faceDescriptions = {
        en: [
          "Refreshing treatment for glowing skin",
          "Deep cleansing for a clear complexion",
          "Targeted care for specific skin concerns",
          "Advanced technology for visible results",
          "Gentle exfoliation for renewed skin",
          "Customized treatment for your skin type",
          "Rejuvenating therapy for youthful appearance",
          "Soothing care for sensitive skin",
        ],
        sk: [
          "Osviežujúce ošetrenie pre žiarivú pleť",
          "Hĺbkové čistenie pre jasnú pleť",
          "Cielená starostlivosť pre špecifické problémy pleti",
          "Pokročilá technológia pre viditeľné výsledky",
          "Jemná exfoliácia pre obnovenú pleť",
          "Prispôsobené ošetrenie pre váš typ pleti",
          "Omladzujúca terapia pre mladistvý vzhľad",
          "Upokojujúca starostlivosť pre citlivú pleť",
        ],
      }
      return faceDescriptions[language][index % faceDescriptions[language].length]
    } else if (category === t.pricing.categories.body) {
      const bodyDescriptions = {
        en: [
          "Relaxing technique for stress relief",
          "Therapeutic treatment for muscle tension",
          "Invigorating experience for total wellbeing",
          "Gentle care with premium products",
          "Customized pressure for maximum benefit",
          "Advanced technology for lasting results",
          "Targeted treatment for problem areas",
          "Luxurious experience for mind and body",
        ],
        sk: [
          "Relaxačná technika pre úľavu od stresu",
          "Terapeutické ošetrenie pre svalové napätie",
          "Povzbudzujúci zážitok pre celkovú pohodu",
          "Jemná starostlivosť s prémiovými produktmi",
          "Prispôsobený tlak pre maximálny úžitok",
          "Pokročilá technológia pre dlhotrvajúce výsledky",
          "Cielené ošetrenie problémových oblastí",
          "Luxusný zážitok pre myseľ a telo",
        ],
      }
      return bodyDescriptions[language][index % bodyDescriptions[language].length]
    }

    // Default fallback
    return language === "en" ? "Premium service with expert care" : "Prémiová služba s odbornou starostlivosťou"
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  
    if (category === categoryWithSubcategories) {
      setNavigationLevel("subcategory")
    } else {
      setSelectedSubcategory("") // vymažeme prípadný starý výber
      setActiveTab(category)
      setNavigationLevel("pricing")
    }
  }

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory)
    setActiveTab(selectedCategory)
    setNavigationLevel("pricing")
  }

  const handleBackToMain = () => {
    setNavigationLevel("main")
    setSelectedCategory("")
    setSelectedSubcategory("")
  }

  const handleBackToSubcategory = () => {
    setNavigationLevel("subcategory")
    setSelectedSubcategory("")
  }

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 bg-cream min-h-[50vh]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl uppercase tracking-[0.2em] mb-4">{t.pricing.title}</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        {/* Breadcrumb navigation */}
        {navigationLevel !== "main" && (
          <div className="mb-8 flex items-center text-sm overflow-x-auto whitespace-nowrap">
            <button
              onClick={handleBackToMain}
              className="flex items-center text-stone hover:text-charcoal transition-colors"
            >
              <ArrowLeft size={16} className="mr-1" />
              {t.pricing.title}
            </button>

            {navigationLevel === "subcategory" && (
              <span className="flex items-center">
                <ChevronRight size={16} className="mx-2 text-muted-foreground" />
                <span>{selectedCategory}</span>
              </span>
            )}

            {navigationLevel === "pricing" && (
              <>
                <span className="flex items-center">
                  <ChevronRight size={16} className="mx-2 text-muted-foreground" />
                  <button
                    onClick={handleBackToSubcategory}
                    className="text-stone hover:text-charcoal transition-colors"
                  >
                    {selectedCategory}
                  </button>
                </span>
                <span className="flex items-center">
                  <ChevronRight size={16} className="mx-2 text-muted-foreground" />
                  <span>{selectedSubcategory}</span>
                </span>
              </>
            )}
          </div>
        )}

        {/* Main categories view */}
        {navigationLevel === "main" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full"
              >
                <h3 className="text-lg uppercase tracking-wider mb-4">{category}</h3>
                <p className="text-xs text-muted-foreground">
                  {t.pricing.genericDescriptions[
                    category.toLowerCase() as keyof typeof t.pricing.genericDescriptions
                  ] || t.pricing.genericDescriptions.default}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Subcategories view */}
        {navigationLevel === "subcategory" && selectedCategory === categoryWithSubcategories && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {subcategories[selectedCategory].map((subcat) => (
              <button
                key={subcat.key}
                onClick={() => handleSubcategoryClick(subcat.name)}
                className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full"
              >
                <h3 className="text-lg mb-2">{subcat.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {t.pricing.genericDescriptions[
                    selectedCategory.toLowerCase() as keyof typeof t.pricing.genericDescriptions
                  ] || t.pricing.genericDescriptions.default}
                </p>
              </button>
            ))}
          </div>
        )}

        {/* Pricing table view */}
        {navigationLevel === "pricing" && (
  <>
    {/* Desktop Table */}
    <div className="bg-white shadow-sm overflow-x-auto hidden md:block">
      <table className="w-full border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-cream">
            <th className="text-left py-4 px-6 font-medium uppercase tracking-wider text-xs">
              {t.pricing.tableHeaders.service}
            </th>
            <th className="text-right py-4 px-6 font-medium uppercase tracking-wider text-xs w-24">
              {t.pricing.tableHeaders.price}
            </th>
            <th className="text-right py-4 px-6 font-medium uppercase tracking-wider text-xs w-32">
              {t.pricing.tableHeaders.duration}
            </th>
          </tr>
        </thead>
        <tbody>
          {categoryServices[selectedCategory].map((item, index) => (
            <tr
              key={`${item.service}-${index}`}
              className={cn(
                "border-t border-sand transition-colors",
                index % 2 === 0 ? "bg-white" : "bg-cream/30",
              )}
            >
              <td className="py-4 px-6">
                <div className="font-medium text-sm">{item.service}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {item.description || getGenericDescription(item.service, selectedCategory, index)}
                </div>
              </td>
              <td className="text-right py-4 px-6 font-medium whitespace-nowrap text-sm">{item.price}</td>
              <td className="text-right py-4 px-6 text-muted-foreground text-xs">
                {item.duration || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Card View */}
    <div className="md:hidden space-y-0">
      {categoryServices[selectedCategory].map((item, index) => (
        <div
          key={`${item.service}-${index}`}
          className="bg-white p-4 shadow-sm rounded-lg border border-sand"
        >
          <div className="font-medium text-base mb-1">{item.service}</div>
          <div className="text-xs text-muted-foreground mb-2">
            {item.description || getGenericDescription(item.service, selectedCategory, index)}
          </div>
          <div className="flex justify-between text-sm text-stone font-medium">
            <span>{item.price}</span>
            <span>{item.duration || "-"}</span>
          </div>
        </div>
      ))}
    </div>
  </>
)}
      </div>
    </section>
  )
}
