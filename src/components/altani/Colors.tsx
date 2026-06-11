import { useEffect, useState } from "react";
import { useT, useLang } from "@/lib/i18n";
import { Tilt } from "@/components/altani/Tilt";
import greyFront from "@/assets/altani/grey-front.jpg.asset.json";
import greySide from "@/assets/altani/grey-side.jpg.asset.json";
import greenFront from "@/assets/altani/green-front.jpg.asset.json";
import greenSide from "@/assets/altani/green-side.jpg.asset.json";
import blackFront from "@/assets/altani/black-front.jpg.asset.json";
import blackSide from "@/assets/altani/black-side.jpg.asset.json";
import whiteFront from "@/assets/altani/white-front.jpg.asset.json";
import whitePinkSide from "@/assets/altani/white-pink-side.jpg.asset.json";

// theme = drives global --neon / --ember / page tint when user picks a colorway
export const COLORS = [
  { id: "grey",  nameTh: "เทา",   nameEn: "Grey",  body: "#8a8d92", seat: "#1a1a1a", accent: "#c9cdd3", theme: "#c9cdd3", themeWarm: "#6b7280", bg: "#e9ebee", fg: "#0f1115", front: greyFront.url,  side: greySide.url },
  { id: "black", nameTh: "ดำ",    nameEn: "Black", body: "#1a1a1a", seat: "#5a3a22", accent: "#2d2d2d", theme: "#c6f432", themeWarm: "#ff3b30", bg: "#070707", fg: "#f5f7ea", front: blackFront.url, side: blackSide.url },
  { id: "white", nameTh: "ขาว",   nameEn: "White", body: "#ececea", seat: "#d99aa8", accent: "#ffffff", theme: "#f7c7d0", themeWarm: "#e85a7a", bg: "#fff5f7", fg: "#1a0c10", front: whiteFront.url, side: whitePinkSide.url },
  { id: "green", nameTh: "เขียว", nameEn: "Green", body: "#5a6648", seat: "#4a5236", accent: "#7a8866", theme: "#9bbf6a", themeWarm: "#5a6648", bg: "#0f1410", fg: "#eaf2dc", front: greenFront.url, side: greenSide.url },
];

export function Colors() {
  const t = useT();
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"front" | "side">("side");
  const c = COLORS[active];

  // Theme the whole site to the selected colorway.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--neon", c.theme);
    root.style.setProperty("--neon-glow", c.theme);
    root.style.setProperty("--ember", c.themeWarm);
    root.style.setProperty("--ring", c.theme);
    root.style.setProperty("--accent", c.theme);
    root.style.setProperty("--background", c.bg);
    root.style.setProperty("--foreground", c.fg);
    root.style.setProperty("--card", c.bg);
    root.style.setProperty("--card-foreground", c.fg);
    root.style.setProperty("--popover", c.bg);
    root.style.setProperty("--popover-foreground", c.fg);
    root.style.setProperty("--muted", `color-mix(in oklab, ${c.bg} 82%, ${c.fg} 18%)`);
    root.style.setProperty("--muted-foreground", `color-mix(in oklab, ${c.fg} 65%, ${c.bg} 35%)`);
    root.style.setProperty("--border", `color-mix(in oklab, ${c.fg} 16%, transparent)`);
    root.style.setProperty("--input", `color-mix(in oklab, ${c.fg} 16%, transparent)`);
    root.dataset.colorway = c.id;
  }, [c]);

  return (
    <section id="colors" className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="tracked text-[0.7rem] font-semibold text-foreground/60">{t.colors.eyebrow}</p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              {t.colors.heading}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.colors.sub}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
            {(["side", "front"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`rounded-full px-3 py-1.5 capitalize transition ${
                  view === v ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Tilt max={6}>
            <div
              className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] transition-colors duration-700"
              style={{ background: `radial-gradient(120% 80% at 50% 100%, ${c.accent}, ${c.body})` }}
            >
              <img
                key={`${c.id}-${view}`}
                src={view === "front" ? c.front : c.side}
                alt={`ALTANI P1 — ${c.nameEn} (${view})`}
                loading="lazy"
                className="revealed-fade absolute inset-0 h-full w-full object-contain p-6 sm:p-12"
                style={{ transform: "translateZ(30px)" }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
                <div className="rounded-2xl bg-black/55 px-4 py-2.5 text-white backdrop-blur">
                  <p className="text-[0.6rem] uppercase tracking-[0.28em] opacity-70">Colorway</p>
                  <p className="mt-0.5 text-lg font-semibold leading-tight">
                    {lang === "en" ? c.nameEn : c.nameTh}
                  </p>
                </div>
                <span className="rounded-full bg-black/55 px-3 py-1 text-[0.7rem] font-semibold tracking-widest text-white backdrop-blur">
                  {String(active + 1).padStart(2, "0")} / {String(COLORS.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </Tilt>

          <div className="space-y-3">
            {COLORS.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                  i === active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:border-foreground/40"
                }`}
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full ring-1 ring-black/10"
                  style={{ background: opt.body }}
                >
                  <span className="block h-4 w-7 rounded-sm" style={{ background: opt.seat }} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{opt.nameEn}</span>
                  <span className="block text-xs opacity-60">{opt.nameTh}</span>
                </span>
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${
                    i === active ? "border-[var(--neon)] bg-[var(--neon)]" : "border-border"
                  }`}
                  aria-hidden
                >
                  {i === active && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
                      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
