"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { Truck, BadgeCheck, HeadphonesIcon, Sparkles, Clock, Users } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "State-of-the-art printing technology for crisp, vibrant results every time",
  },
  {
    icon: Truck,
    title: "Fast Turnaround",
    description: "Same-day and next-day delivery available across Mumbai & Navi Mumbai",
  },
  {
    icon: Sparkles,
    title: "Custom Printing",
    description: "Flex, digital, and offset printing tailored to your exact specifications",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand deadlines and always deliver on schedule",
  },
  {
    icon: Users,
    title: "Bulk Orders",
    description: "Special pricing for large print runs and corporate clients",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Dedicated printing specialists to guide your projects",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-32" id="why-choose-us">
      <div className="container-custom px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4 lg:text-6xl">
              Why Choose <span className="italic font-light">Madwits</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Mumbai &amp; Navi Mumbai&apos;s preferred printing partner. Trusted by 500+ businesses for premium printing services.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <motion.div
                className="text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -3 }}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-neutral-900 text-white mb-3 sm:mb-6">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                </div>
                <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-neutral-900 mb-1 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm lg:text-base hidden sm:block">
                  {feature.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 sm:mt-16 text-center">
            <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap justify-center gap-4 sm:gap-8 lg:gap-16 p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-neutral-900 text-white">
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Business Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">50K+</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Print Jobs Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">3</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Printing Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">10+</div>
                <div className="text-neutral-400 text-xs sm:text-sm">Years in Mumbai</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
