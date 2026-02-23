"use client"

const WORDS = [
  "PRÊT-À-PORTER",
  "SUR-MESURE",
  "BAZIN RICHE",
  "PAGNE TISSÉ",
  "HAUTE COUTURE SÉNÉGALAISE",
  "SOIE",
  "ARTISANAT",
  "DAKAR",
]

export function MarqueeBand() {
  const content = WORDS.map((w) => `${w} · `).join("")

  return (
    <section className="py-6 border-y border-[#E7E5E4] overflow-hidden bg-[#FDFBF7]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-[#78716C] mr-0"
            aria-hidden={i > 0}
          >
            {content}
          </span>
        ))}
      </div>
    </section>
  )
}
