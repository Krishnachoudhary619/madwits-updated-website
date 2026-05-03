"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Gift, Printer, Layers, Package, Award, FileText } from "lucide-react"

const services = [
  {
    id: "flex-printing",
    title: "Flex Printing",
    description: "Large format flex banners, hoardings, outdoor advertising, and signage for maximum visibility",
    image: "/flex-printing.jpg",
    icon: Layers,
    color: "bg-blue-600",
  },
  {
    id: "digital-printing",
    title: "Digital Printing",
    description: "High-quality brochures, flyers, visiting cards, catalogs, and short-run printing",
    image: "/digital-printing.jpg",
    icon: Printer,
    color: "bg-green-600",
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    description: "High-volume printing for magazines, newspapers, packaging, and bulk marketing materials",
    image: "/offset-printing.jpg",
    icon: FileText,
    color: "bg-purple-600",
  },
  {
    id: "banners-standees",
    title: "Banners & Standees",
    description: "Roll-up banners, X-standees, pop-up displays, and exhibition materials",
    image: "/banners-standees.jpg",
    icon: Package,
    color: "bg-orange-500",
  },
  {
    id: "corporate-gifting",
    title: "Corporate Gifting",
    description: "Premium gift sets, branded merchandise, and customized corporate gifts",
    image: "/corporate-gifts.jpg",
    icon: Gift,
    color: "bg-amber-500",
  },
  {
    id: "trophies-awards",
    title: "Trophies & Awards",
    description: "Recognition awards, plaques, mementos, and custom trophies",
    image: "/trophies-awards.jpg",
    icon: Award,
    color: "bg-rose-500",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-neutral-100" id="services-grid">
      <div className="container-custom px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4 lg:text-6xl">
              Our Printing <span className="italic font-light">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-2">
              Expert printing solutions in Mumbai &amp; Navi Mumbai. From flex banners to premium business cards, we handle all your printing needs.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <motion.div
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 ${service.color} p-1.5 sm:p-3 rounded-lg sm:rounded-xl text-white`}>
                    <service.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="p-3 sm:p-6">
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-neutral-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-2 hidden sm:block">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="mt-2 sm:mt-4 flex items-center text-blue-600 font-medium text-xs sm:text-sm"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="hidden sm:inline">Explore Products</span>
                    <span className="sm:hidden">View</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
