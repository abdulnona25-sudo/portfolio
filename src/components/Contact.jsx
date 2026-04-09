function Contact({ lang }) {
  return (
    <section id="contact" className="contact">
      <h2>{lang === "en" ? "Contact" : "تواصل"}</h2>

      <p className="contact-text">
        {lang === "en"
          ? "Feel free to reach out to me for any opportunities or questions."
          : "لا تتردد في التواصل معي لأي فرص أو استفسارات."}
      </p>

      <a href="mailto:abdulnona25@gmail.com">
        <button className="primary">
          {lang === "en" ? "Email Me" : "راسلني"}
        </button>
      </a>
    </section>
  );
}

export default Contact;