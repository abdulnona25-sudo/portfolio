import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Contact() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      label: "Get In Touch",
      title: "Let's Work Together",
      desc: "I'm actively looking for frontend developer opportunities. Whether you have a role, a project, or just want to say hello — my inbox is always open.",
      email: "Email Me",
      github: "GitHub",
    },
    ar: {
      label: "تواصل معي",
      title: "لنعمل معاً",
      desc: "أبحث بنشاط عن فرص كمطور واجهات أمامية. سواء كان لديك دور أو مشروع أو تريد فقط قول مرحبا — بريدي مفتوح دائماً.",
      email: "راسلني",
      github: "GitHub",
    },
  };

  const c = content[lang];

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <p className="section-label" style={{ justifyContent: "center" }}>{c.label}</p>
          <h2 className="section-title">{c.title}</h2>
          <p>{c.desc}</p>
          <div className="contact-actions">
            <a href="mailto:abdulnona25@gmail.com">
              <button className="btn-primary">✉ {c.email}</button>
            </a>
            <a href="https://github.com/abdulnona25-sudo" target="_blank" rel="noreferrer">
              <button className="btn-outline">⌥ {c.github}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
