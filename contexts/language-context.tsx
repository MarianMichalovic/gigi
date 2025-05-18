"use client"

import { createContext, useContext, useState, useEffect, type ReactNode, useMemo, useCallback } from "react"
import { en } from "@/dictionaries/en"
import { sk } from "@/dictionaries/sk"

type Language = "en" | "sk"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isChanging: boolean
}

const defaultValue: LanguageContextType = {
  language: "sk",
  setLanguage: () => {},
  t: sk,
  isChanging: false,
}

const LanguageContext = createContext<LanguageContextType>(defaultValue)

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("sk")
  const [translations, setTranslations] = useState<Translations>(sk)
  const [isChanging, setIsChanging] = useState(false)

  // Load language preference once on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language | null
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "sk")) {
        setLanguageState(savedLanguage)
      }
    } catch (error) {
      // Handle localStorage errors (e.g., in incognito mode)
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  // Memoize the setLanguage function
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem("language", lang)
    } catch (error) {
      console.error("Error writing to localStorage:", error)
    }
  }, [])

  // Update translations when language changes
  useEffect(() => {
    setIsChanging(true)

    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setTranslations(language === "en" ? en : sk)
      setIsChanging(false)
    }, 10)

    return () => clearTimeout(timer)
  }, [language])

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations,
      isChanging,
    }),
    [language, setLanguage, translations, isChanging],
  )

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}
