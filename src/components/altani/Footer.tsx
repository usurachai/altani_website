import { useT } from "@/lib/i18n";
import { AltaniLogo } from "./Logo";

const SOCIALS = [
  { name: "Facebook", d: "M13 22v-8h3l1-4h-4V7.5C13 6.7 13.3 6 14.5 6H17V2.3C16.5 2.2 15.3 2 14 2c-2.8 0-4.5 1.7-4.5 4.8V10H6v4h3.5v8H13z" },
  { name: "LINE", d: "M12 3C6.5 3 2 6.6 2 11c0 2.6 1.6 4.9 4.1 6.4-.2.7-.7 2.4-.8 2.8 0 0-.1.3.2.4.2 0 .3 0 .5-.2.2-.1 2.5-1.7 3.5-2.4.8.1 1.6.2 2.5.2 5.5 0 10-3.6 10-8S17.5 3 12 3z" },
  { name: "Instagram", d: "M12 4.5c2.4 0 2.7 0 3.7.1 1 .1 1.5.2 1.8.4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.1.3.3.8.4 1.8 0 1 .1 1.3.1 3.7s0 2.7-.1 3.7c-.1 1-.2 1.5-.4 1.8-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.3.1-.8.3-1.8.4-1 0-1.3.1-3.7.1s-2.7 0-3.7-.1c-1-.1-1.5-.2-1.8-.4-.5-.2-.8-.4-1.2-.8-.4-.4-.6-.7-.8-1.2-.1-.3-.3-.8-.4-1.8 0-1-.1-1.3-.1-3.7s0-2.7.1-3.7c.1-1 .2-1.5.4-1.8.2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.3-.1.8-.3 1.8-.4 1 0 1.3-.1 3.7-.1M12 3c-2.4 0-2.7 0-3.7.1-1 0-1.7.2-2.3.5-.6.2-1.2.6-1.7 1.1S3.5 5.7 3.3 6.3c-.3.6-.5 1.3-.5 2.3C2.7 9.3 2.7 9.6 2.7 12s0 2.7.1 3.7c0 1 .2 1.7.5 2.3.2.6.6 1.2 1.1 1.7s1 .9 1.7 1.1c.6.3 1.3.5 2.3.5 1 .1 1.3.1 3.7.1s2.7 0 3.7-.1c1 0 1.7-.2 2.3-.5.6-.2 1.2-.6 1.7-1.1s.9-1 1.1-1.7c.3-.6.5-1.3.5-2.3 0-1 .1-1.3.1-3.7s0-2.7-.1-3.7c0-1-.2-1.7-.5-2.3-.2-.6-.6-1.2-1.1-1.7s-1-.9-1.7-1.1c-.6-.3-1.3-.5-2.3-.5C14.7 3 14.4 3 12 3zm0 4.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm4.8-7.8a1.1 1.1 0 1 1 0 0z" },
  { name: "TikTok", d: "M16 3v3.2c1.1.7 2.4 1.1 3.8 1.1v3.1c-1.4 0-2.7-.3-3.8-.9v6.3c0 3.4-2.8 6.2-6.2 6.2S3.6 19.2 3.6 15.8s2.8-6.2 6.2-6.2c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.1-1.4 3.1-3.1V3H16z" },
];

export function Footer() {
  const t = useT();
  return (
    <footer id="footer" className="bg-black pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <AltaniLogo />
            <p className="mt-5 max-w-sm text-2xl font-light leading-tight text-white/80">
              {t.footer.motto}
            </p>
            <p className="mt-4 text-sm text-white/45">Towards the Future City</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <p>{t.footer.address}</p>
              <p>hello@altani.co.th</p>
              <p>02-000-0000</p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Follow</p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[var(--neon)] hover:text-[var(--neon)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45">
          <p>© {new Date().getFullYear()} ALTANI · {t.footer.rights}</p>
          <p>Made in Thailand</p>
        </div>
      </div>
    </footer>
  );
}
