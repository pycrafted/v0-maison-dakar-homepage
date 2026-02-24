"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { MATIERES, TAILLES, COULEURS } from "@/lib/plp-data"
import { cn } from "@/lib/utils"

interface FilterSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedMatieres: string[]
  onToggleMatiere: (m: string) => void
  selectedTailles: string[]
  onToggleTaille: (t: string) => void
  selectedCouleurs: string[]
  onToggleCouleur: (c: string) => void
  onClearAll: () => void
  activeFilterCount: number
}

export function FilterSheet({
  open,
  onOpenChange,
  selectedMatieres,
  onToggleMatiere,
  selectedTailles,
  onToggleTaille,
  selectedCouleurs,
  onToggleCouleur,
  onClearAll,
  activeFilterCount,
}: FilterSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="w-[340px] sm:w-[380px] bg-[#0A0A0A] border-r border-[#2A2A2A] flex flex-col"
      >
        <SheetHeader className="border-b border-[#2A2A2A] pb-5">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-xl text-[#D4AF37] tracking-wide">
              Filtrer
            </SheetTitle>
            {activeFilterCount > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs font-sans uppercase tracking-widest text-[#C2662D] hover:text-[#F5F0EB] transition-colors"
              >
                Tout effacer ({activeFilterCount})
              </button>
            )}
          </div>
          <SheetDescription className="sr-only">
            Filtrer les produits par matiere, taille et couleur
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-2">
          <Accordion type="multiple" defaultValue={["matieres", "tailles", "couleurs"]}>
            <AccordionItem value="matieres" className="border-b border-[#2A2A2A]">
              <AccordionTrigger className="text-xs font-sans uppercase tracking-widest text-[#F5F0EB] hover:no-underline py-5">
                {"Matieres"}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-3.5 pb-2">
                  {MATIERES.map((matiere) => (
                    <label
                      key={matiere}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedMatieres.includes(matiere)}
                        onCheckedChange={() => onToggleMatiere(matiere)}
                        className="size-4 rounded-none border-[#2A2A2A] data-[state=checked]:bg-[#D4AF37] data-[state=checked]:border-[#D4AF37] data-[state=checked]:text-[#0A0A0A]"
                      />
                      <span className="text-sm font-sans text-[#8A8A8A] group-hover:text-[#F5F0EB] transition-colors">
                        {matiere}
                      </span>
                    </label>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tailles" className="border-b border-[#2A2A2A]">
              <AccordionTrigger className="text-xs font-sans uppercase tracking-widest text-[#F5F0EB] hover:no-underline py-5">
                Tailles
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-3 gap-2 pb-2">
                  {TAILLES.map((taille) => (
                    <button
                      key={taille}
                      onClick={() => onToggleTaille(taille)}
                      className={cn(
                        "py-2.5 px-3 text-xs font-sans tracking-wider uppercase border transition-all text-center",
                        selectedTailles.includes(taille)
                          ? "border-[#D4AF37] bg-[#D4AF37] text-[#0A0A0A]"
                          : "border-[#2A2A2A] text-[#8A8A8A] hover:border-[#D4AF37] hover:text-[#F5F0EB]"
                      )}
                    >
                      {taille}
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="couleurs" className="border-b-0">
              <AccordionTrigger className="text-xs font-sans uppercase tracking-widest text-[#F5F0EB] hover:no-underline py-5">
                Couleurs
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3 pb-2">
                  {COULEURS.map((couleur) => (
                    <button
                      key={couleur.name}
                      onClick={() => onToggleCouleur(couleur.name)}
                      className="flex flex-col items-center gap-1.5 group"
                      title={couleur.name}
                    >
                      <span
                        className={cn(
                          "size-8 rounded-full border-2 transition-all",
                          selectedCouleurs.includes(couleur.name)
                            ? "border-[#D4AF37] scale-110"
                            : "border-transparent group-hover:border-[#8A8A8A]"
                        )}
                        style={{ backgroundColor: couleur.hex }}
                      />
                      <span className="text-[10px] font-sans text-[#8A8A8A] group-hover:text-[#F5F0EB] transition-colors">
                        {couleur.name}
                      </span>
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-t border-[#2A2A2A] pt-5 pb-2">
          <button
            onClick={() => onOpenChange(false)}
            className="w-full bg-[#D4AF37] text-[#0A0A0A] py-3.5 text-xs font-sans uppercase tracking-widest font-medium hover:bg-[#C2662D] hover:text-[#F5F0EB] transition-colors"
          >
            Appliquer les filtres
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
