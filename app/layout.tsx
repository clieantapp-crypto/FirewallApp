import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"



export const metadata: Metadata = {
  title: "TelecomInsider - Your Source for Telecom News & Insights",
  description:
    "Stay updated with the latest telecommunications news, 5G technology, network infrastructure, and industry analysis. Expert insights for telecom professionals.",
  keywords: "telecom, telecommunications, 5G, network, mobile, wireless, technology, news",
  authors: [{ name: "TelecomInsider Team" }],
  creator: "TelecomInsider",
  publisher: "TelecomInsider",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://telecominsider.com",
    siteName: "TelecomInsider",
    title: "TelecomInsider - Your Source for Telecom News & Insights",
    description:
      "Stay updated with the latest telecommunications news, 5G technology, network infrastructure, and industry analysis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TelecomInsider - Telecom News & Insights",
    description: "Your trusted source for telecommunications industry news and analysis.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
