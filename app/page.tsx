"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { CollectionStrip } from "@/components/collection-strip"
import { MaterialsSection } from "@/components/materials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ContactSection } from "@/components/contact-section"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { Footer } from "@/components/footer"

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
