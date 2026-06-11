import { useT } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export function Specs() {
  const t = useT();
  const { ref, seen } = useReveal<HTMLDivElement>(0.15);
  return (
    <section id="specs" className="bg-black py-28 text-white sm:py-36">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="tracked text-[0.7rem] font-semibold text-[var(--neon)]">{t.specs.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.specs.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-3">
          {t.specs.groups.map((g, gi) => (
            <div
              key={gi}
              className={`bg-black p-8 ${seen ? "revealed" : "reveal"}`}
              style={{ animationDelay: `${gi * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">{g.name}</p>
              <dl className="mt-6 space-y-5">
                {g.rows.map(([k, v], ri) => (
                  <div key={ri} className="border-b border-white/10 pb-4 last:border-0">
                    <dt className="text-xs uppercase tracking-wider text-white/45">{k}</dt>
                    <dd className="mt-1.5 text-lg font-medium text-white">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
