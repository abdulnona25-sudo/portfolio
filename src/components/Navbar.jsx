import { useContext, useState } from "react";
import { LanguageContext } from "../LanguageContext";

function Navbar() {
  const { lang, setLang } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = {
    en: [
      { name: "Home", id: "home" },
      { name: "Projects", id: "projects" },
      { name: "Skills", id: "skills" },
      { name: "Contact", id: "contact" },
    ],
    ar: [
      { name: "الرئيسية", id: "home" },
      { name: "المشاريع", id: "projects" },
      { name: "المهارات", id: "skills" },
      { name: "تواصل", id: "contact" },
    ],
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="nav">
      <h2 onClick={() => handleScroll("home")} style={{ cursor: "pointer" }}>
        {lang === "en" ? "Abdelrahman" : "عبدالرحمن"}
      </h2>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {navItems[lang].map((item, i) => (
          <span
            key={i}
            onClick={() => handleScroll(item.id)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </span>
        ))}
      </div>

      <button onClick={() => setLang(lang === "en" ? "ar" : "en")}>
        {lang === "en" ? "AR" : "EN"}
      </button>
    </nav>
  );
}

export default Navbar;