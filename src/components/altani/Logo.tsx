import logoAsset from "@/assets/altani/logo-mark.png.asset.json";

export function AltaniLogo({ className = "", size = 36 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoAsset.url}
      alt="ALTANI"
      height={size}
      style={{ height: size, width: "auto", filter: "drop-shadow(0 0 18px color-mix(in oklab, var(--neon) 45%, transparent))" }}
      className={`block w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
