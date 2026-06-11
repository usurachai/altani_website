import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { useT, useLang } from "@/lib/i18n";
import { COLORS } from "./Colors";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(8).max(20).regex(/^[0-9+\-\s]+$/),
  email: z.string().trim().email().max(200),
  color: z.string().min(1),
  province: z.string().trim().min(2).max(80),
});

export function Reserve() {
  const t = useT();
  const { lang } = useLang();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof typeof schema.shape, string>>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.issues.forEach((iss) => {
        const k = iss.path[0] as keyof typeof schema.shape;
        if (k) fieldErrors[k] = iss.message;
      });
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    // TODO: wire to backend / email endpoint
    setStatus("ok");
    (e.target as HTMLFormElement).reset();
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-[var(--neon)] focus:bg-white/10";

  return (
    <section id="reserve" className="relative overflow-hidden bg-black py-28 text-white sm:py-36">
      <div className="absolute inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-[var(--neon)]/10 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="tracked text-[0.7rem] font-semibold text-[var(--neon)]">{t.reserve.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            {t.reserve.heading}
          </h2>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Price</p>
            <p className="mt-2 text-5xl font-bold text-[var(--neon)] sm:text-6xl">{t.reserve.price}</p>
          </div>
          <ul className="mt-10 space-y-3">
            {t.reserve.includes.map((i, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/75">
                <span className="mt-1.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--neon)] text-black">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t.reserve.form.name} error={errors.name}>
              <input name="name" required maxLength={80} className={fieldClass} />
            </Field>
            <Field label={t.reserve.form.phone} error={errors.phone}>
              <input name="phone" required maxLength={20} className={fieldClass} inputMode="tel" />
            </Field>
            <div className="sm:col-span-2">
              <Field label={t.reserve.form.email} error={errors.email}>
                <input name="email" type="email" required maxLength={200} className={fieldClass} />
              </Field>
            </div>
            <Field label={t.reserve.form.color} error={errors.color}>
              <select name="color" required className={fieldClass} defaultValue="">
                <option value="" disabled className="bg-black">—</option>
                {COLORS.map((c) => (
                  <option key={c.id} value={c.id} className="bg-black">
                    {lang === "en" ? c.nameEn : c.nameTh}
                  </option>
                ))}
              </select>
            </Field>
            <Field label={t.reserve.form.province} error={errors.province}>
              <input name="province" required maxLength={80} className={fieldClass} />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--neon)] text-sm font-semibold text-black transition hover:brightness-110"
          >
            {t.reserve.form.submit}
          </button>
          {status === "ok" && (
            <p className="mt-4 rounded-xl bg-[var(--neon)]/15 px-4 py-3 text-sm text-[var(--neon)]">
              {t.reserve.success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
