"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "corporate-gifting",
    name: "Corporate Gifting",
    description: "Premium gift sets, branded merchandise, and customized corporate gifts for every occasion",
    image: "/corporate-gifts.jpg",
    backgroundImage: "/gift-hamper.jpg",
    features: ["Custom Branding", "Bulk Orders", "Gift Packaging"],
  },
  {
    id: "printing",
    name: "Heavy Printing",
    description: "High-quality printing services for boxes, banners, standees, brochures and more",
    image: "/printing-services.jpg",
    backgroundImage: "/banners-standees.jpg",
    features: ["Large Format", "Custom Sizes", "Premium Finish"],
  },
  {
    id: "office-supplies",
    name: "Office Supplies",
    description: "Complete range of office essentials from stationery to organizational tools",
    image: "/office-supplies.jpg",
    backgroundImage: "/desk-accessories.jpg",
    features: ["Quality Products", "Best Prices", "Fast Delivery"],
  },
]

export function MaterialsSection() {
  const [activeService, setActiveService] = useState("corporate-gifting")

  const activeServiceData = services.find((s) => s.id === activeService) || services[0]

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="services">
      <div className="absolute inset-0 z-0">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="absolute inset-0"
            initial={{ opacity: service.id === activeService ? 1 : 0 }}
            animate={{ opacity: service.id === activeService ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Image
              src={service.backgroundImage || "/placeholder.svg"}
              alt={`${service.name} services`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute top-20 sm:top-24 lg:top-[120px] left-0 right-0 z-10 px-4 sm:px-6">
        <div className="container-custom text-white">
          <Reveal>
            <div>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="font-bold mb-3 sm:mb-6 text-3xl sm:text-5xl md:text-7xl"
                >
                  <AnimatedText text={activeServiceData.name} delay={0.2} />
                </motion.h2>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeService + "-desc"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-sm sm:text-lg text-white/90 leading-relaxed max-w-2xl mb-4 sm:mb-8"
                >
                  {activeServiceData.description}
                </motion.p>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService + "-features"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {activeServiceData.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/90 border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-10 px-4 sm:px-6">
        <div className="container-custom">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  className={cn(
                    "px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md text-sm sm:text-base",
                    activeService === service.id
                      ? "bg-white text-neutral-900"
                      : "bg-white/20 text-white hover:bg-white/30",
                  )}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {service.name}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
