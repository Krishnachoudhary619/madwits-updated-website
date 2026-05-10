import { JsonLd } from "@/components/seo/json-ld"
import { siteUrl } from "@/lib/site"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const ogImage = {
  url: "/madwits-og.jpeg",
  width: 1200,
  height: 630,
  alt: "Madwits printing services — Mumbai & Navi Mumbai",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Madwits | Best Printing Services in Mumbai & Navi Mumbai | Flex, Digital & Offset Printing",
  description:
    "Leading printing experts in Mumbai & Navi Mumbai. Flex printing, digital printing, offset printing, banners, standees, visiting cards, brochures & corporate gifting. Quality printing at competitive prices. Call +91 98208 09898.",
  keywords: [
    "printing services Mumbai",
    "flex printing Navi Mumbai",
    "digital printing Mumbai",
    "offset printing",
    "banner printing",
    "standee printing",
    "visiting card printing",
    "brochure printing",
    "corporate gifts Mumbai",
    "bulk printing services",
    "best printing shop Mumbai",
    "printing press Navi Mumbai",
    "Madwits Kharghar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Madwits",
    title: "Best Printing Services in Mumbai & Navi Mumbai | Madwits",
    description:
      "Your trusted printing partner in Mumbai & Navi Mumbai. Expert flex, digital & offset printing services. Banners, standees, brochures, visiting cards & more. Fast delivery, competitive prices.",
    type: "website",
    url: siteUrl,
    locale: "en_IN",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Printing Services in Mumbai & Navi Mumbai | Madwits",
    description:
      "Your trusted printing partner in Mumbai & Navi Mumbai. Expert flex, digital & offset printing services. Fast delivery, competitive prices.",
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  authors: [{ name: "Madwits", url: siteUrl }],
  creator: "Madwits",
  publisher: "Madwits",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
