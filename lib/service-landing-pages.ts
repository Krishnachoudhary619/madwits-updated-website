export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceSection = {
  heading: string
  paragraphs: string[]
}

export type ServiceLandingPage = {
  slug: string
  /** Used with root layout title template → "{title} | Madwits" */
  title: string
  metaDescription: string
  h1: string
  /** Short label for internal link lists */
  linkLabel: string
  sections: ServiceSection[]
  faqs: ServiceFaq[]
}

const pages: ServiceLandingPage[] = [
  {
    slug: "flex-printing-mumbai",
    title: "Flex Printing Services in Mumbai",
    metaDescription:
      "High-quality flex printing in Mumbai for hoardings, shop boards, outdoor banners & signage. Fast turnaround, durable vinyl & eco-solvent options. Get a quote from Madwits — Kharghar, serving Mumbai.",
    h1: "Flex printing services in Mumbai",
    linkLabel: "Flex printing (Mumbai)",
    sections: [
      {
        heading: "Outdoor & storefront flex that lasts",
        paragraphs: [
          "Flex printing is the backbone of visible branding in Mumbai — from roadside hoardings and building wraps to shop fascia and event backdrops. At Madwits, we focus on sharp print clarity, accurate colours, and materials suited to sun, rain, and wind so your message stays readable.",
          "Whether you need a single-cut flex banner or a bulk run for a campaign, we help you pick the right gsm, finishing (eyelets, rope, stitching), and installation-friendly formats. Share your size, quantity, and artwork — we’ll confirm feasibility and timeline.",
        ],
      },
      {
        heading: "Who we help in Mumbai",
        paragraphs: [
          "Retail stores, restaurants, real estate promotions, schools, event organisers, and agencies trust us for dependable flex production with clear pricing. If you are comparing shops for flex printing near Mumbai or need delivery aligned to a launch date, WhatsApp us your specs for a quick estimate.",
        ],
      },
    ],
    faqs: [
      {
        question: "What file format should I send for flex printing?",
        answer:
          "PDF, AI, EPS, or high-resolution TIFF/JPEG work best. Vector logos and outlined fonts reduce surprises at print size. If you’re unsure, send what you have — we’ll advise on scaling and safe margins.",
      },
      {
        question: "How long does flex printing take in Mumbai?",
        answer:
          "Turnaround depends on size, finishing, and current queue. Many standard flex jobs are ready quickly; large hoardings or complex finishes may need more time. Message us with dimensions and deadline for an accurate schedule.",
      },
      {
        question: "Do you deliver flex banners across Mumbai?",
        answer:
          "We serve Mumbai and Navi Mumbai including areas around Kharghar. Tell us your location and whether you need rolled dispatch or installed delivery — we’ll confirm options.",
      },
      {
        question: "Can you match colours to my brand guidelines?",
        answer:
          "Yes — share Pantone references or a printed sample when possible. Outdoor viewing conditions differ from screen proofing; we’ll set expectations for closest match on flex media.",
      },
    ],
  },
  {
    slug: "digital-printing-navi-mumbai",
    title: "Digital Printing in Navi Mumbai",
    metaDescription:
      "Professional digital printing in Navi Mumbai — posters, brochures, catalogues, short runs & variable data. Sharp colour, quick turnaround. Madwits in Kharghar serves Panvel, Vashi, Nerul & nearby.",
    h1: "Digital printing services in Navi Mumbai",
    linkLabel: "Digital printing (Navi Mumbai)",
    sections: [
      {
        heading: "Short runs without compromising quality",
        paragraphs: [
          "Digital printing is ideal when you need crisp detail, predictable proofs, and flexible quantities — from marketing collateral to event graphics. Madwits supports businesses across Navi Mumbai with consistent colour management and media options suited to indoor displays and handouts.",
          "Use digital printing for brochures, flyers, posters, desk calendars, training kits, and personalised mailers. Because there’s no plate setup like offset, you can iterate creative versions or print on demand as campaigns evolve.",
        ],
      },
      {
        heading: "Serving Navi Mumbai businesses",
        paragraphs: [
          "If you search for digital printing near Vashi, Nerul, Kharghar, or Panvel, we’re a practical choice with WhatsApp-first quoting and clear timelines. Send your page count, paper preference, and deadline — we’ll recommend the most economical digital specification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Digital vs offset — which is cheaper for my job?",
        answer:
          "Generally, very large runs with stable artwork favour offset; smaller runs, frequent updates, or many SKUs favour digital. Share quantity and specs — we’ll recommend the better-value route.",
      },
      {
        question: "Can you print on special papers?",
        answer:
          "We offer a range of coated and uncoated stocks. Textured or niche papers may be subject to availability — tell us the feel you want and we’ll confirm options.",
      },
      {
        question: "Do you offer same-day digital printing in Navi Mumbai?",
        answer:
          "Rush jobs are sometimes possible depending on file readiness and media stock. Message us early with files and pickup/delivery location.",
      },
      {
        question: "Will colours match my screen?",
        answer:
          "Screens are backlit and vary by device. We calibrate for print; for critical brand work, request a physical proof or share Pantone numbers.",
      },
    ],
  },
  {
    slug: "offset-printing-mumbai",
    title: "Offset Printing Services in Mumbai",
    metaDescription:
      "Economical offset printing in Mumbai for magazines, books, large brochure runs & corporate stationery. Consistent colour at scale. Request bulk pricing from Madwits — trusted by Mumbai businesses.",
    h1: "Offset printing for high-volume jobs in Mumbai",
    linkLabel: "Offset printing (Mumbai)",
    sections: [
      {
        heading: "Quality and efficiency at scale",
        paragraphs: [
          "Offset printing remains the cost-effective choice for longer runs where colour consistency across thousands of sheets matters — annual reports, product catalogues, textbooks, and large brochure campaigns. Plates and ink discipline deliver repeatable results once the job is approved.",
          "Madwits helps Mumbai teams plan imposition, binding, and finishing so the project doesn’t stall at the last mile. If your artwork is still evolving, we’ll align digital proofs before locking plates.",
        ],
      },
      {
        heading: "When offset makes sense",
        paragraphs: [
          "Choose offset when quantity crosses the threshold where setup costs amortise across the run. Unsure? Send run length, page size, and pages — we’ll compare offset vs digital with transparent numbers.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the minimum quantity for offset printing?",
        answer:
          "There’s no universal minimum — it’s economics. Below a certain quantity, digital usually wins. Tell us your target quantity and we’ll show both options if helpful.",
      },
      {
        question: "How long does offset printing take?",
        answer:
          "Expect longer lead times than digital due to plates, drying, and finishing. Complex binding adds time. Share your event date early so we can reserve capacity.",
      },
      {
        question: "Can you handle Pantone colours?",
        answer:
          "Yes — specify coated or uncoated Pantone books and share ink drawdown expectations for brand-critical work.",
      },
      {
        question: "Do you deliver offset orders across Mumbai?",
        answer:
          "Yes — we coordinate dispatch for Mumbai and Navi Mumbai. Heavy cartons may need lift access details at delivery.",
      },
    ],
  },
  {
    slug: "banner-printing-kharghar",
    title: "Banner Printing in Kharghar & Navi Mumbai",
    metaDescription:
      "Banner printing in Kharghar for events, retail & promotions — vinyl, flex & indoor displays. Fast quotes, quality finishing. Madwits serves Kharghar, Navi Mumbai & Mumbai.",
    h1: "Banner printing in Kharghar",
    linkLabel: "Banner printing (Kharghar)",
    sections: [
      {
        heading: "Banners that read well from a distance",
        paragraphs: [
          "From shop-front roll-ups to wide outdoor banners, legibility and finishing define results. We print banners for launches, exhibitions, sports days, and retail pricing strips — with eyelets, pole pockets, or stand-compatible widths based on how you’ll mount them.",
          "Kharghar customers often need quick turnarounds for local events and society functions. Share your viewing distance and install location (indoor vs outdoor) so we suggest resolution and material appropriately.",
        ],
      },
      {
        heading: "Also serving nearby areas",
        paragraphs: [
          "Beyond Kharghar, we support banner printing for Panvel, Kalamboli, Ulwe, and greater Navi Mumbai. Search “banner printing near me” from Kharghar — Madwits is a WhatsApp message away with clear sizing help.",
        ],
      },
    ],
    faqs: [
      {
        question: "What banner width and height do you recommend?",
        answer:
          "It depends on viewing distance and frame hardware. Tell us where the banner will hang — we’ll suggest dimensions and safe zones for text.",
      },
      {
        question: "Can you print single-sided and double-sided banners?",
        answer:
          "Yes — options depend on material and hardware. Describe your use case and we’ll recommend the right build.",
      },
      {
        question: "Do you offer stands or only printed media?",
        answer:
          "We focus on print production and finishing. If you need roll-up or X-stand hardware, mention the model — we can align print sizes accordingly.",
      },
      {
        question: "How fast can I get a banner in Kharghar?",
        answer:
          "Many jobs move quickly when artwork is print-ready. Rush availability varies — contact us with your date and file.",
      },
    ],
  },
  {
    slug: "visiting-card-printing-navi-mumbai",
    title: "Visiting Card Printing in Navi Mumbai",
    metaDescription:
      "Premium visiting card printing in Navi Mumbai — matte, gloss, linen & special finishes. Fast turnaround for professionals & teams. Order business cards at Madwits, Kharghar.",
    h1: "Visiting card printing in Navi Mumbai",
    linkLabel: "Visiting cards (Navi Mumbai)",
    sections: [
      {
        heading: "Business cards that feel professional",
        paragraphs: [
          "Your visiting card is often the first physical brand asset you hand over. We print crisp typography, accurate logos, and finishes — lamination, rounded corners, UV spot, or thicker stocks — so cards survive pockets and meetings.",
          "Ideal for consultants, clinics, retail owners, and corporate teams ordering employee sets with consistent naming conventions. Share quantity per name and any hierarchy (names, titles, departments).",
        ],
      },
      {
        heading: "Local service you can count on",
        paragraphs: [
          "Serving Vashi, Nerul, Belapur, Panvel, and Kharghar, Madwits makes it easy to reorder cards when staff join or details change — keep your master design on file with us for faster repeats.",
        ],
      },
    ],
    faqs: [
      {
        question: "Standard visiting card size in India?",
        answer:
          "Commonly 90 × 50 mm (similar to ISO/MOO formats). Custom sizes are possible — confirm before design freeze.",
      },
      {
        question: "Can you print on both sides?",
        answer:
          "Yes — double-sided cards are standard. We’ll check ink density so nothing shows through on thin stocks.",
      },
      {
        question: "Do you offer design for visiting cards?",
        answer:
          "If you need layout help, share your logo and content — we’ll confirm whether in-house support is available for your timeline.",
      },
      {
        question: "Minimum order quantity for business cards?",
        answer:
          "Digital runs often start at practical box quantities; larger orders reduce per-card cost. Ask for a tiered quote.",
      },
    ],
  },
  {
    slug: "brochure-printing-mumbai",
    title: "Brochure Printing in Mumbai",
    metaDescription:
      "Brochure & catalogue printing in Mumbai — tri-fold, multi-page booklets, stitched & perfect bound. Marketing collateral that sells. Get quotes from Madwits for Mumbai delivery.",
    h1: "Brochure printing services in Mumbai",
    linkLabel: "Brochure printing (Mumbai)",
    sections: [
      {
        heading: "Collateral engineered for your sales funnel",
        paragraphs: [
          "Brochures explain what screenshots cannot — product ranges, service tiers, and proof points in a tactile format. We print tri-folds for leave-behinds, multi-page stitched booklets for catalogues, and heavier covers when durability matters.",
          "Choose finishes like matte lamination on covers, spot UV highlights, or folded inserts for pricing grids. We’ll align folding, creep, and pagination so artwork lines up after bind.",
        ],
      },
      {
        heading: "Mumbai-wide marketing teams",
        paragraphs: [
          "Agencies and in-house marketers across Mumbai use Madwits when campaigns launch on fixed dates. Send folded size, flat size, page count, and quantity — we’ll flag bleed and spine thickness early.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tri-fold vs booklet — how do I choose?",
        answer:
          "Tri-folds suit quick overviews; booklets suit dense SKU grids or storytelling across spreads. Page count and shelf life guide the decision.",
      },
      {
        question: "What binding options do you offer?",
        answer:
          "Saddle stitch for thinner booklets; perfect binding for thicker spine work; wire-o or spiral when lay-flat reading matters.",
      },
      {
        question: "Can you ship brochures across Mumbai?",
        answer:
          "Yes — packed flat or boxed depending on quantity. Mention lift access for large cartons.",
      },
      {
        question: "Do you check pagination before printing?",
        answer:
          "You approve proofs — we’ll highlight common pagination pitfalls so spreads align after folding or binding.",
      },
    ],
  },
  {
    slug: "corporate-gifting-mumbai",
    title: "Corporate Gifting & Branded Merchandise in Mumbai",
    metaDescription:
      "Corporate gifting in Mumbai — branded diaries, mugs, tech kits & promo items for employees & clients. Bulk pricing & logo printing. Talk to Madwits for year-end & event gifting.",
    h1: "Corporate gifting solutions in Mumbai",
    linkLabel: "Corporate gifting (Mumbai)",
    sections: [
      {
        heading: "Brand-safe merchandise for teams and clients",
        paragraphs: [
          "Corporate gifting strengthens relationships — onboarding kits, festival hampers, awards nights, and channel partner rewards. Madwits helps Mumbai businesses align print branding across packaging tags, inserts, and selected merchandise categories.",
          "Planning early unlocks better inventory and customisation windows. Share audience size, budget bands, delivery timeline, and logo guidelines — we’ll shortlist practical SKU mixes.",
        ],
      },
      {
        heading: "Bulk programmes",
        paragraphs: [
          "For recurring programmes (monthly joiner kits, quarterly partner rewards), consistent artwork templates reduce errors. We’ll structure repeats so each batch matches approved proofs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you supply gift items or only branding?",
        answer:
          "Scope varies by programme — some jobs combine sourcing plus branding; others are branding-only on client-supplied goods. Describe your needs and we’ll clarify.",
      },
      {
        question: "Minimum order for corporate gifting?",
        answer:
          "MOQs depend on product category and decoration method (screen, UV, emboss). Share quantities per SKU for tiered pricing.",
      },
      {
        question: "Can you ship to multiple Mumbai offices?",
        answer:
          "Yes — provide split addresses and packing lists. Split shipments may affect timelines.",
      },
      {
        question: "How far in advance should we plan Diwali or year-end gifting?",
        answer:
          "Peak seasons fill capacity early — ideally begin procurement discussions weeks ahead with locked artwork dates.",
      },
    ],
  },
  {
    slug: "sticker-printing-mumbai",
    title: "Sticker & Label Printing in Mumbai",
    metaDescription:
      "Custom sticker printing in Mumbai — product labels, vinyl decals, packaging seals & promo stickers. Durable adhesives & finishes. Request a sample quote from Madwits.",
    h1: "Sticker printing services in Mumbai",
    linkLabel: "Sticker printing (Mumbai)",
    sections: [
      {
        heading: "Labels and decals that stick with intent",
        paragraphs: [
          "Stickers power packaging, retail shelves, asset tagging, and promotional handouts. We print on substrates suited to indoor shelves or tougher outdoor exposure — with laminates when abrasion or UV resistance matters.",
          "Share die-cut shape, approximate size, indoor/outdoor use, and surface (glass, metal, plastic, paper) so we recommend adhesive class and finish.",
        ],
      },
      {
        heading: "From startups to FMCG pilots",
        paragraphs: [
          "Low-volume pilots test shelf appeal before national runs. We help Mumbai brands iterate SKUs with manageable quantities and consistent colour across batches when you scale.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sheet labels vs roll labels?",
        answer:
          "Sheets suit manual application or digital cutters; rolls suit dispensers and volume packing lines. Tell us your application method.",
      },
      {
        question: "Are stickers waterproof?",
        answer:
          "Media + laminate combinations achieve water resistance; full waterproof claims depend on exposure duration and chemistry — describe your use case.",
      },
      {
        question: "Can you match brand colours on stickers?",
        answer:
          "Yes — share Pantone references and substrate white point so we judge contrast correctly.",
      },
      {
        question: "Do you offer kiss-cut or die-cut stickers?",
        answer:
          "Both are feasible depending on artwork complexity and tooling. Complex shapes may need longer setup.",
      },
    ],
  },
]

export const serviceLandingPagesBySlug: Record<string, ServiceLandingPage> = Object.fromEntries(
  pages.map((p) => [p.slug, p]),
)

export const SERVICE_SLUGS = pages.map((p) => p.slug)

export function getServiceLandingPage(slug: string): ServiceLandingPage | undefined {
  return serviceLandingPagesBySlug[slug]
}

export function getRelatedServiceLinks(currentSlug: string): { href: string; label: string }[] {
  return pages.filter((p) => p.slug !== currentSlug).map((p) => ({ href: `/${p.slug}`, label: p.linkLabel }))
}
