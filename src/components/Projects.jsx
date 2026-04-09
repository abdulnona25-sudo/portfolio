import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Projects() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Projects",
      live: "Live Demo",
      code: "Code",
    },
    ar: {
      title: "المشاريع",
      live: "عرض مباشر",
      code: "الكود",
    },
  };

  const projects = [
    {
      name: {
        en: "Bun Drop",
        ar: "بن دروب",
      },
      desc: {
        en: "Restaurant ordering web app built with React.",
        ar: "تطبيق طلب طعام مبني باستخدام React.",
      },
      image: "src/assets/images/bundrop.png",
      live: "https://bundrop.netlify.app/",
      code: "https://github.com/abdulnona25-sudo/bun-drop",
    },
    {
      name: {
        en: "Barber App",
        ar: "تطبيق الحلاق",
      },
      desc: {
        en: "Barber booking website with modern UI.",
        ar: "موقع حجز حلاق بواجهة حديثة.",
      },
      image: "src/assets/images/barber.png",
      live: "https://fascinating-crepe-bd7c20.netlify.app/home",
      code: "https://github.com/abdulnona25-sudo/barber-website",
    },
  ];

  return (
    <section id="projects">
      <h2 className="center">{content[lang].title}</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            
            <img src={project.image} alt={project.name} />

            <div className="project-content">
              <h3>{project.name[lang]}</h3>
              <p>{project.desc[lang]}</p>

              <div className="project-buttons">
                <a href={project.live} target="_blank">
                  <button className="primary">{content[lang].live}</button>
                </a>

                <a href={project.code} target="_blank">
                  <button className="outline">{content[lang].code}</button>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;