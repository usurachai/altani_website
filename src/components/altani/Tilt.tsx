import { useRef, type ReactNode } from "react";

/**
 * Adds a pointer-following 3D tilt to the wrapped element.
 * Respects reduced motion implicitly (no listeners attached without hover).
 */
export function Tilt({
  children,
  max = 8,
  glare = true,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  glare?: boolean;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef(0);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = wrap.current;
    const node = inner.current;
    if (!el || !node) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (glareRef.current) {
        glareRef.current.style.background = `radial-gradient(420px circle at ${px * 100}% ${py * 100}%, color-mix(in oklab, var(--neon) 28%, transparent), transparent 60%)`;
        glareRef.current.style.opacity = "1";
      }
    });
  };

  const handleLeave = () => {
    const node = inner.current;
    if (node) node.style.transform = "perspective(1100px) rotateX(0) rotateY(0)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={wrap}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative [perspective:1100px] ${className}`}
    >
      <div
        ref={inner}
        className="h-full w-full will-change-transform transition-transform duration-200 ease-out"
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 mix-blend-screen"
          />
        )}
      </div>
    </div>
  );
}

/** Magnetic button — gently pulls toward the cursor. */
export function Magnetic({
  children,
  strength = 0.25,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
