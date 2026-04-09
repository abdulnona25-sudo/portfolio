import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Skills() {
  const { lang } = useContext(LanguageContext);

  return (
  <section id="skills">
    <h2 className="center">
      {lang === "en" ? "Skills" : "المهارات"}
    </h2>

    <div className="skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Git</span>
      <span>GitHub</span>
    </div>
  </section>
  );
}

export default Skills;