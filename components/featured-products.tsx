"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

const featuredProducts = [
  {
    id: "1",
    name: "Flex Banners & Hoardings",
    price: "Get Quote",
    image: "/flex-printing.jpg",
    badge: "Bestseller" as const,
    materials: ["Star Flex", "Frontlit", "Backlit"],
    swatches: [
      { name: "Matte Finish", color: "#e5e5e5" },
      { name: "Glossy Finish", color: "#ffffff" },
      { name: "Backlit", color: "#f0f9ff" },
    ],
    quickLookImages: [
      "/flex-printing.jpg",
      "/banners-standees.jpg",
      "/printing-services.jpg",
    ],
    dimensions: "All sizes - Small to Large Format",
  },
  {
    id: "2",
    name: "Business Cards & Stationery",
    price: "Get Quote",
    image: "/business-cards.png",
    badge: "Popular" as const,
    materials: ["Premium Paper", "Matte Lamination", "Spot UV"],
    swatches: [
      { name: "Classic White", color: "#ffffff" },
      { name: "Ivory", color: "#fffef0" },
      { name: "Premium Black", color: "#1a1a1a" },
    ],
    quickLookImages: [
      "/business-cards.png",
      "/digital-printing.jpg",
      "/design-services.png",
    ],
    dimensions: "Standard & Custom sizes",
  },
  {
    id: "3",
    name: "Brochures & Catalogs",
    price: "Get Quote",
    image: "/digital-printing.jpg",
    badge: "New" as const,
    materials: ["Art Paper", "Maplitho", "Coated Paper"],
    swatches: [
      { name: "Glossy", color: "#ffffff" },
      { name: "Matte", color: "#f5f5f5" },
      { name: "Silk", color: "#fafafa" },
    ],
    quickLookImages: [
      "/digital-printing.jpg",
      "/printing-services.jpg",
      "/offset-printing.jpg",
    ],
    dimensions: "A4, A5, Custom sizes",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-32" id="featured-products">
      <div className="container-custom px-4 sm:px-6">
        <Reveal>
          <div className="text-left mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4 lg:text-6xl">
              Popular <span className="italic font-light">Printing Products</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl">
              Our most requested printing services in Mumbai &amp; Navi Mumbai. Quality printing for businesses, events, and marketing campaigns.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <ProductCard product={product} onQuickLook={handleQuickLook} />
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
