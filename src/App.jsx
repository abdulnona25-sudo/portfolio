import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import Footer from "./components/Footer";


function App() {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="container" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact lang={lang} />
      <Footer />
    </div>
  );
}

export default App;