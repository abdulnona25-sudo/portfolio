import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function About() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      label: "About Me",
      title: "Who I Am",
      p1: "I'm a junior frontend developer based in the UK with two years of hands-on web development experience. My journey started with an apprenticeship building real-world projects in HTML, CSS, and JavaScript.",
      p2: "In my second year I went deep on <strong>React</strong>, building a restaurant ordering app and a barber booking system — both live and production-ready.",
      p3: "Alongside all of this, I completed my <strong>HNC in Computing</strong> while working night shifts as a delivery driver — which taught me discipline, time management, and resilience.",
      highlights: [
        { icon: "🎓", title: "HNC in Computing", desc: "Completed while working full-time night shifts." },
        { icon: "🛠️", title: "Apprenticeship Graduate", desc: "One year of structured industry training in frontend development." },
        { icon: "🚀", title: "Looking for My First Role", desc: "Eager to contribute, grow, and make an impact at a real company." },
      ],
    },
    ar: {
      label: "عنّي",
      title: "من أنا",
      p1: "أنا مطور واجهات أمامية مبتدئ في المملكة المتحدة، لديّ سنتان من الخبرة العملية في تطوير الويب. بدأت مسيرتي من خلال تدريب مهني عملت فيه على HTML و CSS و JavaScript.",
      p2: "في السنة الثانية ركزت على <strong>React</strong> وبنيت تطبيق طلب طعام ونظام حجز حلاق — كلاهما مباشر ومكتمل.",
      p3: "بجانب ذلك، أتممت <strong>HNC في الحوسبة</strong> وكنت أعمل في الليل كسائق توصيل، مما طوّر لديّ مهارات الانضباط وإدارة الوقت والمثابرة.",
      highlights: [
        { icon: "🎓", title: "HNC في الحوسبة", desc: "أتممته أثناء العمل بدوام كامل ليلاً." },
        { icon: "🛠️", title: "خريج تدريب مهني", desc: "سنة من التدريب المنظم في تطوير الواجهات الأمامية." },
        { icon: "🚀", title: "أبحث عن أول فرصة", desc: "مستعد للمساهمة والنمو والتأثير في شركة حقيقية." },
      ],
    },
  };

  const c = content[lang];

  return (
    <section id="about">
      <div className="container">
        <p className="section-label">{c.label}</p>
        <h2 className="section-title">{c.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{c.p1}</p>
            <p dangerouslySetInnerHTML={{ __html: c.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: c.p3 }} />
          </div>
          <div className="about-highlights">
            {c.highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
