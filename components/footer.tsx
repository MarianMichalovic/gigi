"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#333333] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="uppercase tracking-[0.2em] text-lg mb-4">GIGI</h3>
            <p className="text-xs text-white/70">{t.footer.tagline}</p>
            {/* Add language switcher to footer */}
            <LanguageSwitcher variant="footer" />
          </div>

          <div>
            <h4 className="uppercase tracking-wider text-sm mb-4">{t.footer.contact}</h4>
            <address className="not-italic text-xs text-white/70">
              <p>Lazaretská 2422/24</p>
              <p>811 08, Bratislava</p>
              <p className="mt-2">0911 556 999</p>
              <p><a href="mailto:ggbratislava@gmail.com">ggbratislava@gmail.com</a></p>
            </address>
          </div>

          <div>
            <h4 className="uppercase tracking-wider text-sm mb-4">{t.footer.hours}</h4>
            <div className="text-xs text-white/70">
              <p>{t.footer.weekdays}</p>
              <p>{t.footer.saturday}</p>
              <p>{t.footer.sunday}</p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-white/70 hover:text-white" aria-label="Instagram">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white" aria-label="Facebook">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white" aria-label="Twitter">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-xs text-white/50">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
