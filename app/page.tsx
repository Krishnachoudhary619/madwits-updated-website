"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SectionFallback } from "@/components/section-fallback"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"

const ServicesGrid = dynamic(
  () => import("@/components/services-grid").then((m) => ({ default: m.ServicesGrid })),
  { loading: () => <SectionFallback /> },
)

const FeaturedProducts = dynamic(
  () => import("@/components/featured-products").then((m) => ({ default: m.FeaturedProducts })),
  { loading: () => <SectionFallback /> },
)

const CollectionStrip = dynamic(
  () => import("@/components/collection-strip").then((m) => ({ default: m.CollectionStrip })),
  { loading: () => <SectionFallback /> },
)

const MaterialsSection = dynamic(
  () => import("@/components/materials-section").then((m) => ({ default: m.MaterialsSection })),
  { loading: () => <SectionFallback /> },
)

const WhyChooseUs = dynamic(
  () => import("@/components/why-choose-us").then((m) => ({ default: m.WhyChooseUs })),
  { loading: () => <SectionFallback /> },
)

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((m) => ({ default: m.ContactSection })),
  { loading: () => <SectionFallback /> },
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <FeaturedProducts />
      <CollectionStrip />
      <MaterialsSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
