import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ContactSection } from "@/components/contact-section"
import { ServiceLandingFaq } from "@/components/service-landing-faq"
import {
  SERVICE_SLUGS,
  getRelatedServiceLinks,
  getServiceLandingPage,
} from "@/lib/service-landing-pages"
import { siteUrl } from "@/lib/site"

const WA_NUMBER = "919820809898"

type Props = {
  params: Promise<{ serviceSlug: string }>
}

export function generateStaticParams() {
  return SERVICE_SLUGS.map((serviceSlug) => ({ serviceSlug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params
  const page = getServiceLandingPage(serviceSlug)
  if (!page) {
    return {}
  }
  const canonical = `${siteUrl}/${page.slug}`
  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: canonical,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription,
    },
    robots: { index: true, follow: true },
  }
}

export default async function ServiceLandingRoute({ params }: Props) {
  const { serviceSlug } = await params
  const page = getServiceLandingPage(serviceSlug)
  if (!page) {
    notFound()
  }

  const related = getRelatedServiceLinks(page.slug)
  const whatsappHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi Madwits — I'm interested in: ${page.h1}. Please share a quote and timeline.`,
  )}`

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 sm:pt-24 lg:pt-28">
        <article className="container-custom px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-24 max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="text-green-700 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-700">{page.h1}</li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 sm:mb-8 text-balance">
            {page.h1}
          </h1>

          <div>
            {page.sections.map((section) => (
              <section key={section.heading} className="mb-10 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-neutral-600 leading-relaxed mb-4 last:mb-0 text-base sm:text-lg">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section
            className="my-10 sm:my-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-600 to-green-700 p-6 sm:p-10 text-white shadow-xl"
            aria-labelledby="cta-heading"
          >
            <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-3">
              Get a free quote for this service
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl text-base sm:text-lg">
              Tell us your quantity, sizes, and deadline — we&apos;ll respond on WhatsApp with pricing and turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-green-700 shadow-md hover:bg-neutral-50 transition-colors"
              >
                WhatsApp Madwits
              </a>
              <Link
                href="/#contact"
                className="inline-flex justify-center items-center rounded-xl border-2 border-white/80 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Other ways to contact us
              </Link>
            </div>
          </section>

          <section className="mb-12 sm:mb-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-4">
              More printing services
            </h2>
            <p className="text-neutral-600 mb-6 text-base">
              Explore related services across Mumbai and Navi Mumbai — each page has dedicated information and FAQs.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {related.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-green-700 font-medium hover:border-green-300 hover:bg-green-50/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/" className="text-green-700 font-medium hover:underline">
                ← Back to Madwits home
              </Link>
            </p>
          </section>

          <ServiceLandingFaq faqs={page.faqs} />
        </article>

        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
