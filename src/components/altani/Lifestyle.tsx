import { useT } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";
import greySide from "@/assets/altani/grey-side.jpg.asset.json";
import campaign from "@/assets/altani/campaign.jpg.asset.json";

function Block({
  img,
  alt,
  tag,
  h,
  p,
  reverse,
  imgClassName = "",
  bg = "bg-secondary",
}: {
  img: string;
  alt: string;
  tag: string;
  h: string;
  p: string;
  reverse?: boolean;
  imgClassName?: string;
  bg?: string;
}) {
  const { ref, seen } = useReveal<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div
        className={`overflow-hidden rounded-3xl ${bg} ${seen ? "revealed" : "reveal"}`}
      >
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className={`h-full w-full transition-transform duration-[1.6s] hover:scale-[1.03] ${imgClassName}`}
        />
      </div>
      <div className={seen ? "revealed" : "reveal"} style={{ animationDelay: "120ms" }}>
        <p className="tracked text-[0.7rem] font-semibold text-foreground/60">{tag}</p>
        <h3 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-5xl">{h}</h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">{p}</p>
      </div>
    </div>
  );
}

export function Lifestyle() {
  const t = useT();
  return (
    <section className="bg-background py-28 sm:py-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-28 px-5 sm:px-8 sm:gap-40">
        <Block
          img={greySide.url}
          alt="ALTANI P1 side profile in Urban Grey"
          tag={t.lifestyle.tag1}
          h={t.lifestyle.h1}
          p={t.lifestyle.p1}
          imgClassName="object-contain p-8 sm:p-14"
          bg="bg-[oklch(0.95_0.005_270)]"
        />
        <Block
          img={campaign.url}
          alt="ALTANI P1 lineup — four colorways"
          tag={t.lifestyle.tag2}
          h={t.lifestyle.h2}
          p={t.lifestyle.p2}
          reverse
          imgClassName="object-cover"
          bg="bg-secondary"
        />
      </div>

      <MottoBanner />
    </section>
  );
}

function MottoBanner() {
  const t = useT();
  const { ref, seen } = useReveal<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="mt-28 bg-black py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="tracked text-[0.7rem] font-semibold text-[var(--neon)]">ALTANI · MOTTO</p>
        <h3
          className={`mt-5 text-balance text-[clamp(2rem,6vw,5rem)] font-bold leading-tight text-white ${
            seen ? "revealed" : "reveal"
          }`}
        >
          {t.lifestyle.banner}
        </h3>
        <p className="mt-6 text-sm tracking-[0.28em] text-white/55 sm:text-base">
          {t.lifestyle.bannerSub}
        </p>
      </div>
    </div>
  );
}
