import { useState } from "react";
import { useT } from "@/lib/i18n";

export function FAQ() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="tracked text-[0.7rem] font-semibold text-foreground/60">{t.faq.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.faq.heading}
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium tracking-tight sm:text-xl">{item.q}</span>
                  <span
                    className={`mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${
                      isOpen ? "rotate-45 border-foreground bg-foreground text-background" : "border-border"
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="min-h-0">
                    <p className="pb-7 pr-12 text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
