import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function About() {
  const { lang } = useContext(LanguageContext);

const text = {
  en: (
    <>
      I'm a junior frontend developer based in the UK.
      <br /><br />

      I have two years of hands-on experience in web development. In my first year, I completed an apprenticeship where I worked with HTML, CSS, and JavaScript, building a strong foundation in frontend development.
      <br /><br />

      In my second year, I focused on React and built real-world projects such as a restaurant ordering app and a barber booking system.
      <br /><br />

      Alongside this, I completed my HNC in Computing while working night shifts as a delivery driver, which helped me develop strong discipline, time management, and responsibility.
      <br /><br />

      I'm now focused on growing as a frontend developer and looking for an opportunity to start my career in the industry.
    </>
  ),

  ar: (
    <>
      أنا مطور واجهات أمامية مبتدئ في المملكة المتحدة.
      <br /><br />

      لدي سنتان من الخبرة العملية في تطوير الويب. في السنة الأولى، أكملت تدريباً عملياً عملت خلاله باستخدام HTML و CSS و JavaScript، مما ساعدني على بناء أساس قوي.
      <br /><br />

      في السنة الثانية، ركزت على تعلم React وبناء مشاريع حقيقية مثل تطبيق مطعم ونظام حجز حلاق.
      <br /><br />

      بجانب ذلك، أنهيت دراسة HNC في الحوسبة، وكنت أعمل في الليل كسائق توصيل، مما ساعدني على تطوير مهارات الانضباط وإدارة الوقت وتحمل المسؤولية.
      <br /><br />

      حالياً أركز على تطوير نفسي والبحث عن فرصة لبدء مسيرتي المهنية كمطور واجهات أمامية.
    </>
  ),
};

  return (
    <section className="about center">
      <h2>{lang === "en" ? "About Me" : "عنّي"}</h2>
      <p>{text[lang]}</p>
    </section>
  );
}

export default About;