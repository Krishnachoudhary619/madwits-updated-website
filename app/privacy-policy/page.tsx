import type { Metadata } from "next"
import Link from "next/link"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Madwits",
  description:
    "Privacy policy for Madwits printing services in Mumbai and Navi Mumbai. How we handle your information when you contact us or use madwits.com.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-16 px-4">
      <article className="container-custom max-w-3xl mx-auto">
        <p className="text-sm text-neutral-500 mb-8">
          <Link href="/" className="text-green-700 hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl font-bold text-neutral-900 mb-6">Privacy Policy</h1>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Madwits (“we”, “us”) respects your privacy. This policy describes how we handle information when you visit{" "}
          <strong>madwits.com</strong>, contact us by phone, WhatsApp, email, or visit our store.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Information we collect</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          We may collect information you provide directly (such as name, phone number, email, project details, or files
          you send for printing quotes) and basic technical data typical of websites (such as browser type and general
          location inferred from your connection) when necessary to operate and improve our services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">How we use information</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          We use your information to respond to enquiries, prepare quotes, fulfil printing orders, and communicate with you
          about your project. We do not sell your personal information.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-neutral-600 leading-relaxed">
          For privacy-related questions, contact us at{" "}
          <a className="text-green-700 underline" href="mailto:madwitsdigital@gmail.com">
            madwitsdigital@gmail.com
          </a>{" "}
          or call +91 98208 09898.
        </p>
        <p className="text-sm text-neutral-500 mt-12">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>
      </article>
    </main>
  )
}
