import { siteConfig, siteUrl } from "@/lib/site"

const orgId = `${siteUrl}/#organization`

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "PrintShop",
    "@id": orgId,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}/printing-hero.jpg`,
    logo: `${siteUrl}/madwits-logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: [...siteConfig.sameAs],
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kharghar",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  )
}
