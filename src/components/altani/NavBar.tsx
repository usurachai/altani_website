import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { AltaniLogo } from "./Logo";

const NAV_KEYS = ["p1", "specs", "colors", "warranty", "testride", "contact"] as const;
const SECTION_IDS: Record<(typeof NAV_KEYS)[number], string> = {
  p1: "p1",
  specs: "specs",
  colors: "colors",
  warranty: "warranty",
  testride: "reserve",
  contact: "footer",
};

export function NavBar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labels = lang === "th"
    ? { p1: "P1", specs: "สเปก", colors: "สี", warranty: "การรับประกัน", testride: "ทดลองขับ", contact: "ติดต่อ", reserve: "จองเลย" }
    : { p1: "The P1", specs: "Specs", colors: "Colors", warranty: "Warranty", testride: "Test Ride", contact: "Contact", reserve: "Reserve Now" };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav-dark text-white" : "text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-white">
          <AltaniLogo />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_KEYS.map((k) => (
            <a
              key={k}
              href={`#${SECTION_IDS[k]}`}
              className="text-[0.82rem] font-medium text-white/75 transition hover:text-white"
            >
              {labels[k]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-white/15 p-0.5 text-[0.7rem] font-semibold tracking-wider sm:flex">
            {(["th", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition ${
                  lang === l ? "bg-white text-black" : "text-white/70 hover:text-white"
                }`}
                aria-label={`Switch to ${l.toUpperCase()}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#reserve"
            className="hidden rounded-full bg-[var(--neon)] px-4 py-2 text-[0.8rem] font-semibold text-black transition hover:brightness-110 sm:inline-flex"
          >
            {labels.reserve}
          </a>
          <button
            className="rounded-full border border-white/20 p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-nav-dark border-t border-white/10 lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_KEYS.map((k) => (
              <a
                key={k}
                href={`#${SECTION_IDS[k]}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-white/85 hover:bg-white/10"
              >
                {labels[k]}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 px-3">
              {(["th", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                    lang === l ? "border-white bg-white text-black" : "border-white/20 text-white/70"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
