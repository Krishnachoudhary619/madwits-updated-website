"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Instagram, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    "Printing Services": [
      { name: "Flex Printing", href: "/flex-printing-mumbai" },
      { name: "Digital Printing", href: "/digital-printing-navi-mumbai" },
      { name: "Offset Printing", href: "/offset-printing-mumbai" },
      { name: "Banners & Standees", href: "/banner-printing-kharghar" },
      { name: "Business Cards", href: "/visiting-card-printing-navi-mumbai" },
    ],
    Products: [
      { name: "Corporate Gifts", href: "/corporate-gifting-mumbai" },
      { name: "Brochures & Flyers", href: "/brochure-printing-mumbai" },
      { name: "Stickers & Labels", href: "/sticker-printing-mumbai" },
      { name: "Trophies & Awards", href: "/#printing-categories" },
      { name: "Custom Packaging", href: "/#featured-products" },
    ],
    Support: [
      { name: "Contact Us", href: "/#contact" },
      { name: "Request Quote", href: "/#contact" },
      { name: "Bulk Orders", href: "/#contact" },
      { name: "Delivery Info", href: "/#why-choose-us" },
      { name: "FAQs", href: "/#contact" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/madwits_kharghar/" },
    {
      name: "Email madwitsdigital@gmail.com",
      icon: Mail,
      href: "mailto:madwitsdigital@gmail.com",
    },
  ]

  return (
    <footer className="mt-12 sm:mt-16 lg:mt-24 bg-white/[0.02] border-t border-white/[0.02]">
      <div className="container-custom py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="block relative h-14 w-[180px] sm:h-16 sm:w-[200px] mb-3 sm:mb-4">
                <Image
                  src="/madwits-logo.png"
                  alt="Madwits"
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </Link>
              <p className="text-neutral-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Mumbai &amp; Navi Mumbai&apos;s trusted printing partner. Expert flex, digital &amp; offset printing services.
                Quality printing, competitive prices, and fast delivery.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-3 sm:mb-4 text-sm sm:text-base">{category}</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center text-sm"
                        >
                          {link.name}
                          <ArrowUpRight
                            size={12}
                            className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="pt-6 sm:pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-3 text-xs sm:text-sm text-neutral-500 text-center">
            <p>&copy; {currentYear} Madwits. Best Printing Services in Mumbai &amp; Navi Mumbai. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy-policy" className="hover:text-neutral-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-neutral-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-neutral-700 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
