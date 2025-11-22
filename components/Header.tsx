import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

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
            {/* Fix: Ensure 'Kumar' is visible in dark mode (dark:text-white) */}
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
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="#" 
            className="flex items-center gap-2 bg-corporate hover:bg-navy dark:bg-white dark:text-navy dark:hover:bg-slate-200 text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-navy dark:text-white"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-darkCard shadow-lg border-t border-gray-100 dark:border-slate-800">
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
                href="#" 
                className="flex items-center justify-center gap-2 bg-corporate text-white px-4 py-3 rounded font-semibold mt-4"
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