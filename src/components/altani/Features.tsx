import { useT } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = [
  // app
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" key="0">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
      <path d="M9.5 8.5h5M9.5 11h5M9.5 13.5h3" />
    </svg>
  ),
  // OTA
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" key="1">
      <path d="M4 14a8 8 0 0 1 14-5.3" />
      <path d="M20 10a8 8 0 0 1-14 5.3" />
      <path d="M18 4v4.7h-4M6 19.3V14.6h4" />
    </svg>
  ),
  // shield/anti-theft
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" key="2">
      <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
      <path d="M9.5 12.5l2 2 3.5-4" />
    </svg>
  ),
  // network
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" key="3">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" />
    </svg>
  ),
];

export function Features() {
  const t = useT();
  const { ref, seen } = useReveal<HTMLDivElement>(0.2);
  return (
    <section className="bg-secondary py-28 sm:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="tracked text-[0.7rem] font-semibold text-foreground/60">{t.features.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.features.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((f, i) => (
            <div
              key={i}
              className={`group relative flex flex-col gap-6 overflow-hidden bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-card/70 hover:shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--ember)_45%,transparent)] ${
                seen ? "revealed" : "reveal"
              }`}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* reflective sweep on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
              />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background transition group-hover:bg-[var(--neon)] group-hover:text-black group-hover:shadow-[0_0_30px_-2px_var(--neon)]">
                <span className="h-6 w-6">{ICONS[i]}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
