/** Lightweight placeholder while below-the-fold sections lazy-load. */
export function SectionFallback() {
  return (
    <div className="animate-pulse bg-neutral-50 py-12 sm:py-16 lg:py-24" aria-hidden>
      <div className="container-custom px-4 sm:px-6 space-y-6">
        <div className="h-9 sm:h-11 bg-neutral-200 rounded-lg max-w-lg mx-auto" />
        <div className="h-4 bg-neutral-200 rounded max-w-xl mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 pt-4">
          <div className="h-36 sm:h-48 bg-neutral-200 rounded-xl" />
          <div className="h-36 sm:h-48 bg-neutral-200 rounded-xl" />
          <div className="h-36 sm:h-48 bg-neutral-200 rounded-xl hidden md:block" />
        </div>
      </div>
    </div>
  )
}
