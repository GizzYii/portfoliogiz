import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import translations from './data/translations';

const App = () => {
  const scrollRef = useRef(null);
  const expRef = useRef(null);
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'tr');
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
  const t = translations[lang];

  useEffect(() => {
    document.title = `Gizem Yıldız Allıkan | Portfolyo`;
    document.documentElement.lang = lang;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, lang]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-[#F8F9FA] text-[#212529]'} font-sans overflow-x-hidden`}>
      <Navbar t={t} lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} scrollTo={scrollTo} />
      <main>
        <Hero t={t} isDark={isDark} scrollTo={scrollTo} />
        <Projects t={t} lang={lang} scrollRef={scrollRef} scrollContainer={scrollContainer} />
        <Experience t={t} lang={lang} expRef={expRef} scrollContainer={scrollContainer} />
        <Education t={t} lang={lang} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;