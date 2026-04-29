import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);

  const items = {
    en: [
      { label: "About", id: "about" },
      { label: "Projects", id: "projects" },
      { label: "Skills", id: "skills" },
      { label: "Contact", id: "contact" },
    ],
    ar: [
      { label: "عنّي", id: "about" },
      { label: "المشاريع", id: "projects" },
      { label: "المهارات", id: "skills" },
      { label: "تواصل", id: "contact" },
    ],
  };

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <div className="nav-logo" onClick={() => scroll("home")}>
          AH<span>.</span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {items[lang].map((item) => (
            <li key={item.id} onClick={() => scroll(item.id)}>
              {item.label}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button className="nav-lang" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}
