import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      eyebrow: "Frontend Developer · Based in UK",
      h1a: "Abdelrahman",
      h1b: "Hussein",
      desc: "I craft modern, responsive web applications with React — focused on clean UI, real-world functionality, and user-first thinking.",
      cta1: "View Projects",
      cta2: "Download CV",
      stat1: { num: "2+", label: "Years Experience" },
      stat2: { num: "2", label: "Live Projects" },
      stat3: { num: "HNC", label: "Computing" },
    },
    ar: {
      eyebrow: "مطور واجهات أمامية · المملكة المتحدة",
      h1a: "عبدالرحمن",
      h1b: "حسين",
      desc: "أبني تطبيقات ويب حديثة وسريعة الاستجابة باستخدام React، مع تركيز على التصميم الأنيق وتجربة المستخدم.",
      cta1: "المشاريع",
      cta2: "تحميل السيرة",
      stat1: { num: "٢+", label: "سنوات خبرة" },
      stat2: { num: "٢", label: "مشاريع حية" },
      stat3: { num: "HNC", label: "الحوسبة" },
    },
  };

  const c = content[lang];
  const cvFile = lang === "en" ? "/AbdelrahmanEN.pdf" : "/CVArabic.pdf";

  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="container" style={{ width: "100%" }}>
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow fade-up fade-up-1">{c.eyebrow}</p>
            <h1 className="fade-up fade-up-2">
              {c.h1a}<br />
              <em>{c.h1b}</em>
            </h1>
            <p className="hero-desc fade-up fade-up-3">{c.desc}</p>
            <div className="hero-actions fade-up fade-up-4">
              <button
                className="btn-primary"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {c.cta1} →
              </button>
              <a href={cvFile} download>
                <button className="btn-outline">↓ {c.cta2}</button>
              </a>
            </div>

            <div className="hero-stats fade-up fade-up-4">
              {[c.stat1, c.stat2, c.stat3].map((s, i) => (
                <div key={i}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image-wrap fade-up fade-up-3">
            <img src={profile} alt="Abdelrahman Hussein" />
          </div>
        </div>
      </div>
    </section>
  );
}
