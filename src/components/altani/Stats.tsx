import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

function CountUp({ value, active }: { value: string; active: boolean }) {
  const numeric = parseFloat(value.replace(/,/g, ""));
  const isNumber = !isNaN(numeric) && /^[\d.,]+$/.test(value);
  const [n, setN] = useState(isNumber ? 0 : numeric);
  useEffect(() => {
    if (!active || !isNumber) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(numeric * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, isNumber, numeric]);

  if (!isNumber) return <>{value}</>;
  const hasDecimal = value.includes(".");
  const display = hasDecimal ? n.toFixed(1) : Math.round(n).toLocaleString();
  return <>{display}</>;
}

export function Stats() {
  const t = useT();
  const { ref, seen } = useReveal<HTMLDivElement>(0.3);

  return (
    <section className="bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div ref={ref} className="mb-14 max-w-2xl">
          <p className="tracked text-[0.7rem] text-[var(--neon)]">P1 · PERFORMANCE</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {t.stats.heading}
          </h2>
          <p className="mt-4 text-white/60">{t.stats.sub}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5 md:gap-x-10">
          {t.stats.items.map((it, i) => (
            <div
              key={i}
              className="border-l pl-5 transition hover:border-[var(--neon)]"
              style={{ borderColor: i === 0 ? "var(--ember)" : "rgba(255,255,255,0.15)" }}
            >
              <div className="text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-none tracking-tight chrome-text">
                <CountUp value={it.v} active={seen} />
                {it.u && (
                  <span className="ml-1 text-base font-medium text-[var(--neon)]">{it.u}</span>
                )}
              </div>
              <div className="mt-3 text-xs uppercase tracking-wider text-white/55">{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
