"use client"

import { useRef, useState, useEffect, useLayoutEffect } from "react"
import { motion, useAnimationControls, useReducedMotion } from "framer-motion"
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

const itemWidth = 320 + 32
const totalWidth = collections.length * itemWidth

function CollectionCard({
  collection,
  reduced,
}: {
  collection: (typeof collections)[0]
  reduced: boolean
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-48 sm:w-64 lg:w-80 group cursor-pointer snap-start"
      whileHover={reduced ? undefined : { scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-4">
        <div className="relative w-full h-full">
          <Image
            src={collection.image || "/placeholder.svg"}
            alt={collection.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-2 sm:px-4">
            <h3 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-wider mb-1 sm:mb-2 leading-tight">
              {collection.name}
            </h3>
            <p className="text-xs sm:text-sm opacity-90">{collection.count}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function CollectionStrip() {
  const containerRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const controls = useAnimationControls()
  const prefersReduced = useReducedMotion()

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el || prefersReduced) return
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "100px 0px", threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReduced])

  useEffect(() => {
    if (prefersReduced || !inView || isPaused) {
      controls.stop()
      return
    }
    let cancelled = false
    const run = async () => {
      if (cancelled) return
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
    run()
    return () => {
      cancelled = true
    }
  }, [prefersReduced, inView, isPaused, controls])

  const duplicatedCollections = [...collections, ...collections]

  return (
    <section ref={containerRef} className="py-12 sm:py-16 lg:py-32 overflow-hidden">
      <div className="mb-8 sm:mb-12">
        <Reveal>
          <div className="container-custom text-center px-4 sm:px-6">
            <h2 className="text-neutral-900 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-6xl font-normal">
              Printing <span className="italic font-light">Categories</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our comprehensive range of printing services. From flex banners to premium business cards, we&apos;ve
              got Mumbai &amp; Navi Mumbai covered.
            </p>
          </div>
        </Reveal>
      </div>

      {prefersReduced ? (
        <div className="overflow-x-auto px-4 sm:px-6 pb-2 snap-x snap-mandatory">
          <div className="flex gap-3 sm:gap-6 lg:gap-8 w-max">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} reduced />
            ))}
          </div>
        </div>
      ) : (
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
              <CollectionCard key={`${collection.id}-${index}`} collection={collection} reduced={false} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  )
}
