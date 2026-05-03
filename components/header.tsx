"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 sm:h-[5.5rem] lg:h-24 relative py-1 sm:py-1.5">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a
              href="#"
              className="block relative h-14 w-[200px] sm:h-[4.25rem] sm:w-[240px] lg:h-16 lg:w-[248px]"
              aria-label="Madwits - Best Printing Services in Mumbai"
            >
              <Image
                src="/madwits-logo.png"
                alt=""
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 248px"
                priority
              />
            </a>
          </motion.div>

          {/* Phone Number */}
          <a
            href="https://wa.me/919820809898"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 text-sm sm:text-base font-medium transition-colors shrink-0",
              isScrolled ? "text-neutral-700 hover:text-neutral-900" : "text-white/90 hover:text-white",
            )}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">+91 98208 09898</span>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
