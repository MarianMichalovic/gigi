"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"
import { scrollToSection } from "@/utils/scroll-utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  // Optimize scroll handler with throttling
  useEffect(() => {
    let lastScrollY = 0
    let ticking = false

    const handleScroll = () => {
      lastScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(lastScrollY > 10)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Memoize event handlers
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 px-6",
        isScrolled ? "bg-cream shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Mobile menu and language switcher */}
        <div className="flex items-center gap-4 md:w-1/4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center - Navigation and Logo */}
        <div className="hidden md:flex items-center justify-center gap-8 md:w-2/4">
          <a
            href="#services"
            className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
            onClick={(e) => handleNavClick(e, "services")}
          >
            {t.nav.services}
          </a>

          <Link href="/" className="uppercase tracking-widest text-2xl mx-4">
            <img src="/logos/logo7.png" alt="" className="w-28"/>
          </Link>

          <a
            href="#pricing"
            className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
            onClick={(e) => handleNavClick(e, "pricing")}
          >
            {t.nav.pricing}
          </a>
        </div>

        {/* Center - Logo only for mobile */}
        <div className="md:hidden">
          <Link href="/" className="uppercase tracking-widest text-2xl">
            GIGI
          </Link>
        </div>

        {/* Right side - Coffee link */}
        <div className="flex items-center justify-end gap-4 md:w-1/4">
          <Link
            href="/gigi-corner"
            className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
          >
            {t.nav.gigiCorner}
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#services"
              className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
              onClick={(e) => handleNavClick(e, "services")}
            >
              {t.nav.services}
            </a>
            <a
              href="#pricing"
              className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
              onClick={(e) => handleNavClick(e, "pricing")}
            >
              {t.nav.pricing}
            </a>
            <Link
              href="/gigi-corner"
              className="uppercase tracking-wider text-xs hover:text-stone transition-colors"
            >
              {t.nav.gigiCorner}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
