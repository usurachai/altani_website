import { createContext, useContext } from "react";

export type Lang = "th" | "en";

export const dict = {
  th: {
    nav: { p1: "P1", specs: "สเปก", colors: "สี", warranty: "การรับประกัน", testride: "ทดลองขับ", contact: "ติดต่อ", reserve: "จองเลย" },
    hero: {
      eyebrow: "NEW · ALTANI P1 ELECTRIC",
      title: "ALTANI P1",
      titleSub: "ELECTRIC",
      motto: "เคียงข้างคุณ ในทุกเส้นทาง",
      price: "เริ่มต้น 59,000 บาท",
      cta1: "จองเลย",
      cta2: "ดูสเปก",
      scroll: "เลื่อนลง",
    },
    stats: {
      heading: "ประสิทธิภาพระดับเมือง",
      sub: "ตัวเลขที่บอกทุกอย่างเกี่ยวกับ P1",
      items: [
        { v: "105", u: "km/h", l: "ความเร็วสูงสุด" },
        { v: "3.9", u: "วินาที", l: "0–60 km/h" },
        { v: "120", u: "km", l: "ระยะทางต่อการชาร์จ" },
        { v: "9,340", u: "W", l: "กำลังสูงสุดของมอเตอร์" },
        { v: "73.6V · 45Ah", u: "", l: "แบตเตอรี่ลิเธียม" },
      ],
    },
    lifestyle: {
      tag1: "ออกแบบเพื่อเมือง",
      h1: "เงียบ · ทรงพลัง · เป็นคุณ",
      p1: "ดีไซน์เรโทรคลาสสิกที่ขับเคลื่อนด้วยหัวใจไฟฟ้ายุคใหม่ คล่องตัวในทุกซอย เงียบในทุกการเดินทาง และพร้อมเคียงข้างคุณตั้งแต่เช้าจรดค่ำ",
      tag2: "เพื่อนคู่กายในทุกวัน",
      h2: "ทุกเช้า ทุกเย็น ทุกเส้นทาง",
      p2: "ตื่นเช้าไปทำงาน รับลูกที่โรงเรียน หรือออกทริปสุดสัปดาห์กับเพื่อน ALTANI P1 ถูกออกแบบมาเพื่อชีวิตเมืองในแบบที่คุณใช้ชีวิตจริง",
      banner: "ALTANI เคียงข้างคุณ ในทุกเส้นทาง",
      bannerSub: "Towards the Future City",
    },
    features: {
      eyebrow: "เทคโนโลยีอัจฉริยะ",
      heading: "ฉลาดขึ้นในทุกการเดินทาง",
      items: [
        { t: "ควบคุมผ่านแอป", d: "เชื่อมต่อสมาร์ทโฟนเพื่อตรวจสอบสถานะ ปลดล็อก และดูข้อมูลการเดินทาง" },
        { t: "อัปเดต OTA", d: "รับฟีเจอร์ใหม่และการปรับปรุงอย่างต่อเนื่อง โดยไม่ต้องเข้าศูนย์" },
        { t: "ระบบกันขโมย", d: "แจ้งเตือนการเคลื่อนไหวและติดตามตำแหน่งรถได้แบบเรียลไทม์" },
        { t: "ศูนย์บริการทั่วประเทศ", d: "เครือข่ายบริการมาตรฐานเดียวกัน ครอบคลุมทุกภูมิภาค" },
      ],
    },
    colors: {
      eyebrow: "หกสีให้เลือก",
      heading: "เลือกสไตล์ของคุณ",
      sub: "หกโทนสีที่ถูกออกแบบมาเพื่อทุกบุคลิก",
    },
    specs: {
      eyebrow: "ข้อมูลทางเทคนิค",
      heading: "สเปกแบบเต็ม",
      groups: [
        { name: "ระบบขับเคลื่อน", rows: [
          ["มอเตอร์", "3,000W (กำลังสูงสุด 9,340W)"],
          ["ความเร็วสูงสุด", "105 km/h (ความเร็วทั่วไป 80–100)"],
          ["อัตราเร่ง", "0–60 km/h ใน 3.9 วินาที"],
        ]},
        { name: "แบตเตอรี่ & ระยะทาง", rows: [
          ["แบตเตอรี่", "ลิเธียม 73.6V 45Ah"],
          ["ระยะทาง", "120 km ต่อการชาร์จ"],
        ]},
        { name: "ระบบเบรก & ตัวรถ", rows: [
          ["เบรก", "ดิสก์เบรกหน้า–หลัง"],
          ["การเชื่อมต่อ", "แอปมือถือ · OTA · กันขโมย"],
        ]},
      ],
    },
    warranty: {
      eyebrow: "การรับประกัน",
      heading: "เคียงข้างคุณ ไม่ใช่แค่คำพูด",
      sub: "การรับประกันที่ครอบคลุมและอุ่นใจในทุกการเดินทาง",
      items: [
        { t: "แบตเตอรี่", v: "5 ปี / 1,500 รอบชาร์จ" },
        { t: "มอเตอร์", v: "5 ปี / 30,000 km" },
        { t: "กล่องควบคุม", v: "1 ปี" },
        { t: "อุปกรณ์ไฟฟ้า", v: "2 ปี" },
      ],
      promo: "ฟรี! ค่าจดทะเบียน + พ.ร.บ. ประกันภัยพื้นฐาน",
    },
    reserve: {
      eyebrow: "จองวันนี้",
      heading: "เริ่มต้นเส้นทางของคุณ",
      price: "59,000 บาท",
      includes: ["ฟรีค่าจดทะเบียน", "ฟรี พ.ร.บ.", "รับประกันเต็มรูปแบบ"],
      form: { name: "ชื่อ-นามสกุล", phone: "เบอร์โทรศัพท์", email: "อีเมล", color: "สีที่ต้องการ", province: "จังหวัด", submit: "ส่งคำจอง" },
      success: "ขอบคุณ! เราจะติดต่อกลับโดยเร็วที่สุด",
    },
    faq: {
      eyebrow: "คำถามที่พบบ่อย",
      heading: "อยากรู้อะไรเกี่ยวกับ P1?",
      items: [
        { q: "ใช้เวลาชาร์จนานเท่าไหร่?", a: "ประมาณ 6–8 ชั่วโมงสำหรับชาร์จเต็มด้วยที่ชาร์จมาตรฐานที่บ้าน" },
        { q: "ชาร์จที่บ้านได้ไหม?", a: "ได้ครับ ใช้ปลั๊กไฟบ้าน 220V ทั่วไป พร้อมที่ชาร์จที่ให้มาในชุด" },
        { q: "ต้องใช้ใบขับขี่อะไร?", a: "ใบขับขี่รถจักรยานยนต์มาตรฐานของกรมการขนส่งทางบก" },
        { q: "ศูนย์บริการมีกี่แห่ง?", a: "เครือข่ายศูนย์บริการมาตรฐาน ALTANI ครอบคลุมทั่วประเทศ" },
        { q: "ค่าเปลี่ยนแบตเตอรี่?", a: "ภายในระยะรับประกัน 5 ปี / 1,500 รอบชาร์จ ไม่มีค่าใช้จ่าย" },
        { q: "ทดลองขับได้ที่ไหน?", a: "นัดทดลองขับได้ที่โชว์รูม ALTANI ผ่านแบบฟอร์มด้านบน" },
      ],
    },
    footer: {
      motto: "เคียงข้างคุณ ในทุกเส้นทาง",
      address: "โชว์รูม ALTANI · กรุงเทพมหานคร",
      rights: "สงวนลิขสิทธิ์",
    },
  },
  en: {
    nav: { p1: "The P1", specs: "Specs", colors: "Colors", warranty: "Warranty", testride: "Test Ride", contact: "Contact", reserve: "Reserve Now" },
    hero: {
      eyebrow: "NEW · ALTANI P1 ELECTRIC",
      title: "ALTANI P1",
      titleSub: "ELECTRIC",
      motto: "By Your Side, On Every Road",
      price: "From 59,000 THB",
      cta1: "Reserve Now",
      cta2: "Explore Specs",
      scroll: "Scroll",
    },
    stats: {
      heading: "City performance, redefined",
      sub: "Numbers that say everything about the P1",
      items: [
        { v: "105", u: "km/h", l: "Top speed" },
        { v: "3.9", u: "seconds", l: "0–60 km/h" },
        { v: "120", u: "km", l: "Range per charge" },
        { v: "9,340", u: "W", l: "Peak motor power" },
        { v: "73.6V · 45Ah", u: "", l: "Lithium battery" },
      ],
    },
    lifestyle: {
      tag1: "Designed for the city",
      h1: "Silent. Powerful. Yours.",
      p1: "A retro-classic silhouette with a modern electric heart. Agile in every alley, silent on every street — ready to be by your side from sunrise to dusk.",
      tag2: "Your daily companion",
      h2: "Every morning. Every evening. Every road.",
      p2: "From the morning commute to school runs and weekend rides, the ALTANI P1 is designed for the way you actually live in the city.",
      banner: "ALTANI — By Your Side, On Every Road",
      bannerSub: "Towards the Future City",
    },
    features: {
      eyebrow: "Smart technology",
      heading: "Smarter on every ride",
      items: [
        { t: "Mobile app control", d: "Pair your smartphone to monitor, unlock and view ride data anywhere." },
        { t: "OTA updates", d: "Receive new features and improvements over-the-air, no service trip required." },
        { t: "Anti-theft tracking", d: "Real-time movement alerts and remote location tracking, always-on." },
        { t: "Nationwide service", d: "A standardised ALTANI service network across every region." },
      ],
    },
    colors: {
      eyebrow: "Six finishes",
      heading: "Pick your character",
      sub: "Six tones designed for every personality.",
    },
    specs: {
      eyebrow: "Technical details",
      heading: "Full specifications",
      groups: [
        { name: "Powertrain", rows: [
          ["Motor", "3,000W rated · 9,340W peak"],
          ["Top speed", "105 km/h (80–100 cruising)"],
          ["Acceleration", "0–60 km/h in 3.9 s"],
        ]},
        { name: "Battery & Range", rows: [
          ["Battery", "73.6V 45Ah lithium"],
          ["Range", "120 km per charge"],
        ]},
        { name: "Brakes & Connectivity", rows: [
          ["Brakes", "Front & rear disc"],
          ["Connectivity", "Mobile app · OTA · Anti-theft"],
        ]},
      ],
    },
    warranty: {
      eyebrow: "Warranty",
      heading: "By your side, not just a slogan",
      sub: "Coverage that stays with you, mile after mile.",
      items: [
        { t: "Battery", v: "5 years / 1,500 cycles" },
        { t: "Motor", v: "5 years / 30,000 km" },
        { t: "Controller", v: "1 year" },
        { t: "Electrical parts", v: "2 years" },
      ],
      promo: "Free registration + compulsory insurance (พรบ.)",
    },
    reserve: {
      eyebrow: "Reserve today",
      heading: "Start your journey",
      price: "59,000 THB",
      includes: ["Free registration", "Free compulsory insurance", "Full factory warranty"],
      form: { name: "Full name", phone: "Phone number", email: "Email", color: "Preferred color", province: "Province", submit: "Submit reservation" },
      success: "Thank you! We'll be in touch shortly.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Questions about the P1?",
      items: [
        { q: "How long does it take to charge?", a: "Around 6–8 hours for a full charge using the included home charger." },
        { q: "Can I charge at home?", a: "Yes — a standard 220V home outlet with the bundled charger is all you need." },
        { q: "What license do I need in Thailand?", a: "A standard Thai motorcycle license issued by the Department of Land Transport." },
        { q: "Where are the service centers?", a: "A standardised ALTANI service network covers all major regions in Thailand." },
        { q: "What's the cost of battery replacement?", a: "Within the 5-year / 1,500-cycle warranty, replacement is free of charge." },
        { q: "Where can I test ride?", a: "Book a test ride at any ALTANI showroom using the form above." },
      ],
    },
    footer: {
      motto: "By Your Side, On Every Road",
      address: "ALTANI Showroom · Bangkok",
      rights: "All rights reserved",
    },
  },
} as const;

export const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "th",
  setLang: () => {},
});

export const useLang = () => useContext(LangContext);
export const useT = () => {
  const { lang } = useLang();
  return dict[lang];
};
