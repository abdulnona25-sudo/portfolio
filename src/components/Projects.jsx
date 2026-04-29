import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import bundrop from "../assets/images/bundrop.png";
import barber from "../assets/images/barber.png";

export default function Projects() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: { label: "Work", title: "Projects", live: "Live Demo →", code: "View Code", comingSoon: "Coming Soon" },
    ar: { label: "الأعمال", title: "المشاريع", live: "عرض مباشر →", code: "الكود", comingSoon: "قريباً" },
  };

  const projects = [
    {
      tag: { en: "React App", ar: "تطبيق React" },
      name: { en: "Bun Drop", ar: "بن دروب" },
      desc: {
        en: "A full restaurant ordering web app built with React. Features a dynamic menu, cart system, and smooth order flow — designed for real-world use.",
        ar: "تطبيق طلب طعام متكامل مبني بـ React، يتضمن قائمة ديناميكية وسلة تسوق وتدفق طلبات سلس.",
      },
      image: bundrop,
      live: "https://bun-drop.vercel.app/",
      code: "https://github.com/abdulnona25-sudo/bun-drop",
      blank: false,
    },
    {
      tag: { en: "React App", ar: "تطبيق React" },
      name: { en: "Barber App", ar: "تطبيق الحلاق" },
      desc: {
        en: "A barber booking website with a modern, stylish UI. Includes service listings, booking flow, and polished responsive design.",
        ar: "موقع حجز حلاق بواجهة حديثة وأنيقة، يشمل قائمة الخدمات وتدفق الحجز وتصميماً متجاوباً.",
      },
      image: barber,
      live: "barber-flame-phi.vercel.app",
      code: "https://github.com/abdulnona25-sudo/barber-website",
      blank: false,
    },
    {
      tag: { en: "React App", ar: "تطبيق React" },
      name: { en: "New Project", ar: "مشروع جديد" },
      desc: {
        en: "Coming soon — a brand new project currently in development. Check back shortly.",
        ar: "قريباً — مشروع جديد قيد التطوير حالياً. تابعنا.",
      },
      image: null,
      live: null,
      code: null,
      blank: true,
    },
  ];

  const c = content[lang];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">{c.label}</p>
        <h2 className="section-title">{c.title}</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className={`project-card${p.blank ? " project-card--blank" : ""}`} key={i}>
              <div className="project-img-wrap">
                {p.image ? (
                  <img className="project-img" src={p.image} alt={p.name[lang]} />
                ) : (
                  <div className="project-img-placeholder">
                    <span>🚧</span>
                    <p>{c.comingSoon}</p>
                  </div>
                )}
              </div>
              <div className="project-body">
                <span className="project-tag">{p.tag[lang]}</span>
                <h3>{p.name[lang]}</h3>
                <p>{p.desc[lang]}</p>
                {!p.blank && (
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noreferrer">
                      <button className="project-link-btn filled">{c.live}</button>
                    </a>
                    <a href={p.code} target="_blank" rel="noreferrer">
                      <button className="project-link-btn ghost">{c.code}</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
