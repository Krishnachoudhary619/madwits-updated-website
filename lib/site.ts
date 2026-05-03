/** Production site URL — used for metadata, JSON-LD, sitemap, and canonicals. */
export const siteUrl = "https://madwits.com" as const

export const siteConfig = {
  name: "Madwits",
  url: siteUrl,
  description:
    "Leading printing experts in Mumbai & Navi Mumbai. Flex, digital, and offset printing, banners, standees, visiting cards, brochures, and corporate gifting.",
  phone: "+91-98208-09898",
  email: "madwitsdigital@gmail.com",
  instagram: "https://www.instagram.com/madwits_kharghar/",
  sameAs: ["https://www.instagram.com/madwits_kharghar/"] as const,
  /** Service area; add full street address in Google Business Profile and here when available. */
  areaServed: ["Mumbai", "Navi Mumbai", "Kharghar"] as const,
} as const
