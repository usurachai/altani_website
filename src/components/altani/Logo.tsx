import logoUrl from "@/assets/altani/altani-logo.png";

export function AltaniLogo({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoUrl}
      alt="ALTANI"
      height={size}
      style={{ height: size, width: "auto", filter: "drop-shadow(0 0 18px color-mix(in oklab, var(--neon) 45%, transparent))" }}
      className={`block w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
