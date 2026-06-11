import { useEffect, useMemo, useState } from "react";
import { useT } from "@/lib/i18n";
import { Tilt, Magnetic } from "@/components/altani/Tilt";
import blackFront from "@/assets/altani/black-front.jpg.asset.json";
import campaign from "@/assets/altani/campaign.jpg.asset.json";

export function Hero() {
  const t = useT();
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(Math.min(window.scrollY, 600));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Deterministic particle layout (no hydration mismatch).
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => {
        const s = ((i * 9301 + 49297) % 233280) / 233280;
        const t2 = ((i * 1103 + 12345) % 233280) / 233280;
        return {
          left: `${(s * 100).toFixed(2)}%`,
          top: `${(t2 * 100).toFixed(2)}%`,
          size: 1 + (i % 3),
          delay: `${(s * 6).toFixed(2)}s`,
          dur: `${(5 + t2 * 7).toFixed(2)}s`,
        };
      }),
    [],
  );

  return (
    <section
      id="p1"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#050505] text-white"
    >
      {/* Layered backdrops: neon + ember + chrome */}
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 55%, color-mix(in oklab, var(--neon) 24%, transparent), transparent 70%), radial-gradient(40% 35% at 20% 30%, color-mix(in oklab, var(--ember) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(60% 60% at 50% 60%, #000 0%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-b from-transparent to-black" />

      {/* Floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full float-y"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: i % 4 === 0 ? "var(--ember)" : "var(--neon)",
              filter: "blur(0.4px)",
              opacity: 0.55,
              animationDelay: p.delay,
              animationDuration: p.dur,
              boxShadow: "0 0 12px currentColor",
              color: i % 4 === 0 ? "var(--ember)" : "var(--neon)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1.05fr_1.2fr] lg:gap-6 lg:pb-16">
        <div className="revealed-fade order-2 lg:order-1">
          <span className="tracked inline-flex items-center gap-2 text-[0.72rem] font-semibold text-[var(--neon)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] pulse-ring" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-[clamp(2.6rem,7.5vw,6.4rem)] font-extrabold leading-[0.95] tracking-tight">
            <span className="chrome-text">{t.hero.title}</span>
            <span className="block text-white/55 font-light">{t.hero.titleSub}</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg font-light text-white/80 sm:text-xl">
            {t.hero.motto}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#reserve"
                className="tactile-btn neon-glow inline-block rounded-full bg-[var(--neon)] px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-px hover:brightness-110"
              >
                {t.hero.cta1}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#specs"
                className="tactile-btn inline-block rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-[var(--gold)] hover:bg-white/5 hover:text-[var(--gold)]"
              >
                {t.hero.cta2}
              </a>
            </Magnetic>
            <span className="ml-1 text-sm text-white/55">· {t.hero.price}</span>
          </div>
        </div>

        {/* Product spotlight with 3D tilt */}
        <Tilt max={10} className="order-1 lg:order-2">
          <div
            className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] lg:aspect-[6/5]"
            style={{
              background:
                "radial-gradient(70% 70% at 50% 70%, oklch(0.32 0.005 270), oklch(0.10 0.005 270) 75%)",
              transform: `translate3d(0, ${y * -0.04}px, 0)`,
            }}
          >
            {/* Light streak sweep */}
            <div aria-hidden className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
              <div
                className="absolute -inset-y-10 left-0 w-1/3 streak"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.18) 50%, transparent)",
                }}
              />
            </div>

            <img
              src={blackFront.url}
              alt="ALTANI P1 Electric — matte black"
              className="absolute inset-0 h-full w-full object-contain p-6 sm:p-10 float-y"
              style={{ mixBlendMode: "screen", transform: "translateZ(40px)" }}
              loading="eager"
              fetchPriority="high"
            />
            {/* Neon ring + ember edge */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[2.5rem]"
              style={{
                boxShadow:
                  "inset 0 0 140px 20px color-mix(in oklab, var(--neon) 14%, transparent), inset 0 0 0 1px color-mix(in oklab, var(--silver) 25%, transparent)",
              }}
            />
            {/* Tag */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.24em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ember)]" />
              P1 · ELECTRIC
            </div>
            {/* Floating spec chip */}
            <div className="absolute bottom-5 right-5 hidden rounded-2xl border border-white/15 bg-black/55 px-4 py-3 text-right backdrop-blur sm:block">
              <p className="text-[0.6rem] uppercase tracking-[0.24em] text-white/55">Top Speed</p>
              <p className="text-2xl font-bold text-white">
                105 <span className="text-sm font-medium text-[var(--neon)]">km/h</span>
              </p>
            </div>
          </div>
        </Tilt>
      </div>

      {/* Marquee strip with campaign image preview */}
      <div className="relative border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-white/55 sm:px-8">
          <span className="text-[var(--neon)]">●</span>
          <span>Towards the Future City</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[var(--gold)]">59,000 บาท</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">5 ปี / 1,500 รอบชาร์จ</span>
          <span className="ml-auto hidden md:inline">{t.hero.scroll} ↓</span>
        </div>
      </div>

      {/* preload */}
      <link rel="preload" as="image" href={campaign.url} />
    </section>
  );
}
