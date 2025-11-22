import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-light text-navy dark:bg-darkBg dark:text-darkText transition-colors duration-300">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Services />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}