import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import profile from "../assets/images/profile.jpg";

function Hero() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Hi, I'm Abdelrahman",
      role: "Frontend Developer",
      desc: "I build modern, responsive and user-focused web applications using React. Passionate about clean UI and real-world projects.",
      btn1: "View Projects",
      btn2: "Download CV",
    },
    ar: {
      title: "مرحباً، أنا عبدالرحمن",
      role: "مطور واجهات أمامية",
      desc: "أبني تطبيقات ويب حديثة وسريعة باستخدام React مع تركيز على التصميم وتجربة المستخدم.",
      btn1: "المشاريع",
      btn2: "تحميل السيرة الذاتية",
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">

        <div className="hero-left">
          <h1 className="fade-in">{content[lang].title}</h1>
          <h2 className="typing-text">{content[lang].role}</h2>
          <p className="fade-in fade-in-delay-2">{content[lang].desc}</p>

          <div className="hero-buttons">
            <button
              className="primary"
              onClick={() => {
                setTimeout(() => {
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              {content[lang].btn1}
            </button>

            <a
              href={lang === "en" ? "/AbdelrahmanEN.pdf" : "/CVArabic.pdf"}
              download
            >
              <button className="outline">
                {content[lang].btn2}
              </button>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <img src={profile} alt="profile" />
        </div>

      </div>
    </section>
  );
}

export default Hero;