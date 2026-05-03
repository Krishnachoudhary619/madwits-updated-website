"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"
import { Reveal } from "./reveal"

export function ContactSection() {
  const whatsappNumber = "919820809898"
  const whatsappMessage = encodeURIComponent("Hi Madwits! I'm interested in your printing services. Please share details.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const mapsLink = "https://maps.app.goo.gl/oveXizRLjybghZP47"

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              Get a <span className="italic font-light">Free Quote</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Need printing services in Mumbai or Navi Mumbai? WhatsApp us for instant quotes and same-day delivery options.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <Reveal delay={0.1}>
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-neutral-900">WhatsApp Us</h3>
                  <p className="text-neutral-600 text-sm sm:text-base">Quick response guaranteed</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 text-neutral-700">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-base sm:text-lg font-medium">+91 98208 09898</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-neutral-700">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Mon - Sat: 10 AM - 8 PM</span>
                </div>
              </div>

              <motion.div
                className="mt-4 sm:mt-6 bg-green-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-center font-semibold text-base sm:text-lg"
                whileHover={{ backgroundColor: "#16a34a" }}
              >
                Chat Now on WhatsApp
              </motion.div>
            </motion.a>
          </Reveal>

          {/* Location Card */}
          <Reveal delay={0.2}>
            <motion.a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-neutral-900">Visit Our Store</h3>
                  <p className="text-neutral-600 text-sm sm:text-base">Come see our products</p>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-4">
                <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                  Visit our printing facility in Mumbai/Navi Mumbai to discuss your project, see samples, and get expert advice on your printing needs.
                </p>
              </div>

              <motion.div
                className="mt-4 sm:mt-6 bg-blue-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-center font-semibold text-base sm:text-lg"
                whileHover={{ backgroundColor: "#2563eb" }}
              >
                Get Directions
              </motion.div>
            </motion.a>
          </Reveal>
        </div>

        {/* Floating WhatsApp Button Info */}
        <Reveal delay={0.3}>
          <p className="text-center text-white/80 mt-8 sm:mt-12 text-xs sm:text-sm">
            Prefer email? Write to us at <span className="font-medium text-white">madwitsdigital@gmail.com</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
