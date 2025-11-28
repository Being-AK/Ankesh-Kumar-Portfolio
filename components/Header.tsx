import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Icon3D, Icons3D } from './Icons3D';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // User must place 'Sample_Resume.pdf' in the public folder
  const RESUME_PATH = "/Sample_Resume.pdf";

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/90 dark:bg-darkBg/90 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col leading-tight group">
            <span className="font-bold text-2xl text-corporate dark:text-white tracking-tight">
              Ankesh
              <span className="text-navy dark:text-gold ml-0.5">Kumar</span>
            </span>
            <span className="text-[10px] font-medium text-gold tracking-widest uppercase">CA Finalist & Article Assistant</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 dark:text-slate-300 hover:text-corporate dark:hover:text-gold font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Toggle Theme"
          >
            <Icon3D icon={darkMode ? Icons3D.Sun : Icons3D.Moon} theme={darkMode ? 'gold' : 'navy'} size="sm" />
          </button>

          <a 
            href={RESUME_PATH}
            download="Ankesh_Kumar_Resume.pdf"
            className="group flex items-center gap-2 bg-corporate hover:bg-navy dark:bg-white dark:text-navy dark:hover:bg-slate-200 text-white px-5 py-2.5 rounded text-sm font-semibold transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95"
          >
            <Icon3D icon={Icons3D.Download} theme={darkMode ? 'navy' : 'gold'} size="sm" className="w-5 h-5 p-1" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme} 
                className="p-1 rounded-full text-navy dark:text-white"
            >
                <Icon3D icon={darkMode ? Icons3D.Sun : Icons3D.Moon} theme={darkMode ? 'gold' : 'navy'} size="sm" />
            </button>
            <button 
            className="text-navy dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-darkCard shadow-lg border-t border-gray-100 dark:border-slate-800 animate-fade-in-up">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-light dark:hover:bg-slate-800 hover:text-corporate dark:hover:text-gold font-medium rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a 
                href={RESUME_PATH}
                download="Ankesh_Kumar_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-corporate text-white px-4 py-3 rounded font-semibold mt-4 shadow-md active:scale-95 transition-transform"
            >
                <Download size={16} />
                <span>Download Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;