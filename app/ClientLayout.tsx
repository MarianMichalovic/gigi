"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { useEffect, useState } from "react"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Optimize font loading
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isAosLoaded, setIsAosLoaded] = useState(false)

  useEffect(() => {
    // Initialize AOS only after it's loaded
    if (isAosLoaded) {
      import("aos").then((AOS) => {
        AOS.default.init({
          duration: 800,
          once: false,
          // Disable AOS on mobile for better performance
          disable: window.innerWidth < 768,
        })
      })
    }
  }, [isAosLoaded])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      </head>
      <body className={`${inter.variable}`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
          strategy="lazyOnload"
          onLoad={() => setIsAosLoaded(true)}
        />
      </body>
    </html>
  )
}
