import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LangContext, type Lang } from "@/lib/i18n";
import { NavBar } from "@/components/altani/NavBar";
import { Hero } from "@/components/altani/Hero";
import { Stats } from "@/components/altani/Stats";
import { Lifestyle } from "@/components/altani/Lifestyle";
import { Features } from "@/components/altani/Features";
import { Colors } from "@/components/altani/Colors";
import { Specs } from "@/components/altani/Specs";
import { Warranty } from "@/components/altani/Warranty";
import { Reserve } from "@/components/altani/Reserve";
import { FAQ } from "@/components/altani/FAQ";
import { Footer } from "@/components/altani/Footer";
import { ScrollProgress, CursorSpotlight } from "@/components/altani/Interactive";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALTANI P1 Electric Scooter Thailand — 59,000 THB | เคียงข้างคุณ ในทุกเส้นทาง" },
      {
        name: "description",
        content:
          "ALTANI P1 Electric — สกูตเตอร์ไฟฟ้าดีไซน์เรโทรล้ำสมัยจากไทย ความเร็วสูงสุด 105 km/h ระยะทาง 120 km ต่อการชาร์จ เริ่มต้น 59,000 บาท",
      },
      { property: "og:title", content: "ALTANI P1 Electric — By Your Side, On Every Road" },
      {
        property: "og:description",
        content: "Premium Thai electric scooter. 105 km/h top speed · 120 km range · From 59,000 THB.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("th");
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div id="top" className="bg-background text-foreground">
        <ScrollProgress />
        <CursorSpotlight />
        <NavBar />
        <main>
          <Hero />
          <Stats />
          <Lifestyle />
          <Features />
          <Colors />
          <Specs />
          <Warranty />
          <Reserve />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}
