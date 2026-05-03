"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"
import Image from "next/image"
import { PackageCheck, Rocket, ShieldCheck } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"

const HERO_SIZES =
  "(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1920px"

function InfoStrip() {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <BlurPanel className="mx-4 sm:mx-6 mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 max-md:!bg-black/60 max-md:backdrop-blur-none md:bg-black/24 md:backdrop-blur-md border-white/20">
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-white/90 flex-wrap">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
            <span className="text-xs sm:text-sm">Bulk Printing</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm">Same Day Delivery</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span className="text-xs sm:text-sm">Premium Quality</span>
          </div>
        </div>
      </BlurPanel>
    </motion.div>
  )
}

/** Lighter hero: no scroll-linked motion, no per-character heading — best for mobile / reduced motion. */
function HeroStatic() {
  return (
    <section className="relative h-screen min-h-[32rem] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/printing-hero.jpg"
          alt="Madwits - Best Printing Services in Mumbai and Navi Mumbai - Flex, Digital, Offset Printing"
          fill
          className="object-cover"
          priority
          sizes={HERO_SIZES}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white px-4">
          <Reveal>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-white/70 mb-2 sm:mb-4">
              Mumbai &amp; Navi Mumbai&apos;s Trusted Printing Partner
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6">
              Expert Printing for
              <br />
              <span className="italic font-light">every need.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
              Flex Printing, Digital Printing, Offset Printing &amp; Corporate Gifting — all under one roof.
            </p>
          </Reveal>
        </div>
      </div>

      <InfoStrip />
    </section>
  )
}

function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <section ref={containerRef} className="relative h-screen min-h-[32rem] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/printing-hero.jpg"
          alt="Madwits - Best Printing Services in Mumbai and Navi Mumbai - Flex, Digital, Offset Printing"
          fill
          className="object-cover"
          priority
          sizes={HERO_SIZES}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white px-4">
          <Reveal>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-white/70 mb-2 sm:mb-4">
              Mumbai &amp; Navi Mumbai&apos;s Trusted Printing Partner
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6">
              <AnimatedText text="Expert Printing for" delay={0.5} />
              <br />
              <span className="italic font-light">
                <AnimatedText text="every need." delay={1.1} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Flex Printing, Digital Printing, Offset Printing &amp; Corporate Gifting — all under one roof.
            </motion.p>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-4 sm:mx-6 mb-4 sm:mb-6 px-4 sm:px-6 py-3 sm:py-4 bg-black/24 backdrop-blur-md border-white/20">
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-white/90 flex-wrap">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-xs sm:text-sm">Bulk Printing</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span className="text-xs sm:text-sm">Same Day Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm">Premium Quality</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}

export function HeroSection() {
  const prefersReduced = useReducedMotion()
  const [useParallax, setUseParallax] = useState(false)

  useLayoutEffect(() => {
    if (prefersReduced) return
    const mq = window.matchMedia("(min-width: 768px)")
    const sync = () => setUseParallax(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [prefersReduced])

  if (prefersReduced) {
    return <HeroStatic />
  }
  if (!useParallax) {
    return <HeroStatic />
  }
  return <HeroParallax />
}
