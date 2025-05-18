"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  variant?: "navbar" | "footer"
}

export default function LanguageSwitcher({ variant = "navbar" }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage()

  if (variant === "footer") {
    return (
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={() => setLanguage("en")}
          className={`text-xs px-2 py-1 transition-colors ${
            language === "en" ? "bg-sand text-stone" : "text-muted-foreground hover:text-stone"
          }`}
          aria-label="Switch to English"
        >
          {t.language.en}
        </button>
        <span className="text-muted-foreground">|</span>
        <button
          onClick={() => setLanguage("sk")}
          className={`text-xs px-2 py-1 transition-colors ${
            language === "sk" ? "bg-sand text-stone" : "text-muted-foreground hover:text-stone"
          }`}
          aria-label="Switch to Slovak"
        >
          {t.language.sk}
        </button>
      </div>
    )
  }

  return (
    <div className="w-10 flex justify-center">
      <div className="relative">
        <button
          onClick={() => setLanguage(language === "en" ? "sk" : "en")}
          className="w-10 h-10 flex items-center justify-center hover:text-stone transition-colors focus:outline-none"
          aria-label="Switch language"
        >
          <Globe size={18} />
          <span className="sr-only">Switch language</span>
        </button>
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] font-medium">
          {language.toUpperCase()}
        </span>
      </div>
    </div>
  )
}
