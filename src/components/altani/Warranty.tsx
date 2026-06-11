import { useT } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function Warranty() {
  const t = useT();
  const { ref, seen } = useReveal<HTMLDivElement>(0.2);
  return (
    <section id="warranty" className="bg-background py-28 sm:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="tracked text-[0.7rem] font-semibold text-foreground/60">{t.warranty.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.warranty.heading}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.warranty.sub}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.warranty.items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-3xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] ${
                seen ? "revealed" : "reveal"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-6 text-xl font-semibold tracking-tight">{it.t}</div>
              <div className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{it.v}</div>
              <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--neon)]/15" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-foreground p-7 text-background sm:p-10">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--neon)] text-black">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-lg font-semibold sm:text-xl">{t.warranty.promo}</p>
          </div>
          <a
            href="#reserve"
            className="rounded-full bg-[var(--neon)] px-5 py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            {t.warranty.eyebrow} →
          </a>
        </div>
      </div>
    </section>
  );
}
