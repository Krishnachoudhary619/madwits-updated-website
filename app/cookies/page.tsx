import type { Metadata } from "next"
import Link from "next/link"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Cookie Policy | Madwits",
  description:
    "How Madwits uses cookies and similar technologies on madwits.com. Printing services Mumbai & Navi Mumbai.",
  alternates: {
    canonical: `${siteUrl}/cookies`,
  },
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-16 px-4">
      <article className="container-custom max-w-3xl mx-auto">
        <p className="text-sm text-neutral-500 mb-8">
          <Link href="/" className="text-green-700 hover:underline">
            ← Back to home
          </Link>
        </p>
        <h1 className="text-3xl font-bold text-neutral-900 mb-6">Cookie Policy</h1>
        <p className="text-neutral-600 leading-relaxed mb-4">
          This site may use cookies or similar technologies to ensure basic functionality, remember preferences, or
          measure traffic if analytics are enabled by your hosting provider. You can control cookies through your browser
          settings.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-4">
          If we add third-party analytics or marketing tools, we will update this page to list them and your choices.
        </p>
        <p className="text-sm text-neutral-500 mt-12">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>
      </article>
    </main>
  )
}
