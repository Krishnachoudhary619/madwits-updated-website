"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  const whatsappNumber = "919820809898"
  const whatsappMessage = encodeURIComponent("Hi Madwits! I need printing services. Please share details.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      <span className="font-medium text-sm sm:text-base hidden sm:inline">Get Quote</span>
    </motion.a>
  )
}
