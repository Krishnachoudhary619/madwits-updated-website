"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"


const collections = [
  {
    id: "flex-printing",
    name: "FLEX PRINTING",
    image: "/flex-printing.jpg",
    count: "All sizes",
  },
  {
    id: "digital-printing",
    name: "DIGITAL PRINTING",
    image: "/digital-printing.jpg",
    count: "Premium quality",
  },
  {
    id: "offset-printing",
    name: "OFFSET PRINTING",
    image: "/offset-printing.jpg",
    count: "Bulk orders",
  },
  {
    id: "design-services",
    name: "DESIGN SERVICES",
    image: "/design-services.png",
    count: "Custom designs",
  },
  {
    id: "banners-standees",
    name: "BANNERS & STANDEES",
    image: "/banners-standees.jpg",
    count: "Custom sizes",
  },
  {
    id: "visiting-cards",
    name: "BUSINESS CARDS",
    image: "/business-cards.png",
    count: "Premium quality",
  },
  {
    id: "brochures-flyers",
    name: "BROCHURES & FLYERS",
    image: "/printing-services.jpg",
    count: "All formats",
  },
  {
    id: "custom-boxes",
    name: "CUSTOM PACKAGING",
    image: "/custom-boxes.jpg",
    count: "All sizes",
  },
  {
    id: "corporate-gifting",
    name: "CORPORATE GIFTING",
    image: "/corporate-gifts.jpg",
    count: "500+ items",
  },
  {
    id: "trophies-awards",
    name: "TROPHIES & AWARDS",
    image: "/trophies-awards.jpg",
    count: "200+ designs",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimationControls()

  const itemWidth = 320 + 32 // width + gap
  const totalWidth = collections.length * itemWidth

  // Auto-scroll animation
  useEffect(() => {
    const animate = async () => {
      if (!isPaused) {
        await controls.start({
          x: -totalWidth / 2,
          transition: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          },
        })
      }
    }
    animate()
  }, [isPaused, controls, totalWidth])

  // Duplicate collections for seamless loop
  const duplicatedCollections = [...collections, ...collections]

  return (
    <section ref={containerRef} className="py-12 sm:py-16 lg:py-32 overflow-hidden">
      <div className="mb-8 sm:mb-12">
        <Reveal>
          <div className="container-custom text-center px-4 sm:px-6">
            <h2 className="text-neutral-900 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-6xl font-normal">Printing <span className="italic font-light">Categories</span></h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our comprehensive range of printing services. From flex banners to premium business cards, we&apos;ve got Mumbai &amp; Navi Mumbai covered.
            </p>
          </div>
        </Reveal>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      >
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-6"
          animate={controls}
          style={{ width: "fit-content" }}
        >
          {duplicatedCollections.map((collection, index) => (
            <motion.div
              key={`${collection.id}-${index}`}
              className="flex-shrink-0 w-48 sm:w-64 lg:w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white px-2 sm:px-4"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-wider mb-1 sm:mb-2 leading-tight">{collection.name}</h3>
                    <p className="text-xs sm:text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
