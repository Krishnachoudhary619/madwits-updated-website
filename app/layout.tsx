import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Madwits | Best Printing Services in Mumbai & Navi Mumbai | Flex, Digital & Offset Printing",
  description: "Leading printing experts in Mumbai & Navi Mumbai. Flex printing, digital printing, offset printing, banners, standees, visiting cards, brochures & corporate gifting. Quality printing at competitive prices. Call +91 98208 09898.",
  generator: "v0.app",
  keywords: ["printing services Mumbai", "flex printing Navi Mumbai", "digital printing Mumbai", "offset printing", "banner printing", "standee printing", "visiting card printing", "brochure printing", "corporate gifts Mumbai", "bulk printing services", "best printing shop Mumbai", "printing press Navi Mumbai", "Madwits Kharghar"],
  alternates: {
    canonical: "https://madwits.com/",
  },
  openGraph: {
    siteName: "Madwits",
    title: "Best Printing Services in Mumbai & Navi Mumbai | Madwits",
    description: "Your trusted printing partner in Mumbai & Navi Mumbai. Expert flex, digital & offset printing services. Banners, standees, brochures, visiting cards & more. Fast delivery, competitive prices.",
    type: "website",
    url: "https://madwits.com/",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Printing Services in Mumbai & Navi Mumbai | Madwits",
    description: "Your trusted printing partner in Mumbai & Navi Mumbai. Expert flex, digital & offset printing services. Fast delivery, competitive prices.",
    site: "@madwits",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Madwits" }],
  creator: "Madwits",
  publisher: "Madwits",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
    </html>
  )
}
