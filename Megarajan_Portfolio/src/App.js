import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/resume/Skills";
import FadeInSection from "./components/FadeInSection";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();
  return (
    <div className={`w-full h-auto px-4 transition-colors duration-500 ${
      darkMode
        ? 'bg-bodyColor text-lightText'
        : 'bg-lightBg text-lightBody'
    }`}>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <FadeInSection><Banner /></FadeInSection>
        <FadeInSection delay={0.1}><Features /></FadeInSection>
        <FadeInSection delay={0.2}><Projects /></FadeInSection>
        <FadeInSection delay={0.3}><Skills /></FadeInSection>
        <FadeInSection delay={0.4}><Contact /></FadeInSection>
        <FadeInSection delay={0.5}><Footer /></FadeInSection>
        <FadeInSection delay={0.6}><FooterBottom /></FadeInSection>
      </div>
    </div>
  );
}

export default App;
