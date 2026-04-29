import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function Footer() {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: "12px" }}>
        <div className="footer-logo">AH<span>.</span></div>
        <p style={{ fontSize: "13px" }}>
          {lang === "en"
            ? "© 2026 Abdelrahman Hussein. Built with React."
            : "© 2026 عبدالرحمن حسين. مبني بـ React."}
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://github.com/abdulnona25-sudo" target="_blank" rel="noreferrer"
            style={{ color: "var(--muted)", fontSize: "13px", textDecoration: "none" }}>
            GitHub
          </a>
          <a href="mailto:abdulnona25@gmail.com"
            style={{ color: "var(--muted)", fontSize: "13px", textDecoration: "none" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
