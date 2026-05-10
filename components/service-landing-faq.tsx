"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ServiceFaq } from "@/lib/service-landing-pages"

type Props = {
  faqs: ServiceFaq[]
}

export function ServiceLandingFaq({ faqs }: Props) {
  return (
    <section className="border-t border-neutral-200 pt-10 sm:pt-14" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6 sm:mb-8">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-base sm:text-lg text-neutral-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-neutral-600 leading-relaxed text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
