import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const skills = [
  { icon: "🌐", name: "HTML" },
  { icon: "🎨", name: "CSS" },
  { icon: "⚡", name: "JavaScript" },
  { icon: "⚛️", name: "React" },
  { icon: "🌿", name: "Git" },
  { icon: "🐙", name: "GitHub" },
  { icon: "📱", name: "Responsive Design" },
  { icon: "🔧", name: "Vite" },
];

export default function Skills() {
  const { lang } = useContext(LanguageContext);

  const labels = {
    en: { label: "Toolkit", title: "Skills" },
    ar: { label: "الأدوات", title: "المهارات" },
  };

  const { label, title } = labels[lang];

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">{label}</p>
        <h2 className="section-title">{title}</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
