"use client"

const WORDS = [
  "BOUBOUS AFRICAINS",
  "CHAUSSURES",
  "SACS A MAIN",
  "BIJOUX",
  "SUR-MESURE",
  "GOLDEN POUSSO",
  "ARTISANAT",
  "DAKAR",
]

export function MarqueeBand() {
  const content = WORDS.map((w) => `${w} \u00b7 `).join("")

  return (
    <section className="py-6 border-y border-[#2A2A2A] overflow-hidden bg-[#0A0A0A]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-[#D4AF37]/50 mr-0"
            aria-hidden={i > 0}
          >
            {content}
          </span>
        ))}
      </div>
    </section>
  )
}
