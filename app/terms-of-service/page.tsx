import type { Metadata } from "next"
import Link from "next/link"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms of Service | Madwits",
  description:
    "Terms of service for using Madwits printing services and madwits.com. Mumbai & Navi Mumbai printing partner.",
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
  robots: { index: true, follow: true },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-16 px-4">
      <article className="container-custom max-w-3xl mx-auto">
        <p className="text-sm text-neutral-500 mb-8">
          <Link href="/" className="text-green-700 hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl font-bold text-neutral-900 mb-6">Terms of Service</h1>
        <p className="text-neutral-600 leading-relaxed mb-4">
          By using <strong>madwits.com</strong> or engaging Madwits for printing services, you agree to these terms. If you
          do not agree, please do not use our website or services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Services</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          We provide printing and related services as described in your quote or order. Specifications, timelines, and
          pricing are confirmed per project.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Orders &amp; payment</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Payment terms, delivery dates, and artwork approvals are agreed before production. Custom orders may not be
          returnable once approved for print.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Limitation</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          To the extent permitted by law, Madwits is not liable for indirect or consequential damages arising from use of
          the site or services. Your statutory rights are not affected where applicable.
        </p>
        <p className="text-sm text-neutral-500 mt-12">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>
      </article>
    </main>
  )
}
