import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-darkBg pt-16 pb-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Brand */}
            <div className="space-y-4">
                <a href="#home" className="flex flex-col leading-tight group w-fit">
                    <span className="font-bold text-2xl text-corporate dark:text-white tracking-tight">
                    Ankesh
                    <span className="text-navy dark:text-gold ml-0.5">Kumar</span>
                    </span>
                    <span className="text-[10px] font-medium text-gold tracking-widest uppercase">CA Finalist</span>
                </a>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                    Bridging the gap between Complex Compliance and Financial Clarity. Specialized in Statutory Audits and Transfer Pricing.
                </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
                <h4 className="font-bold text-navy dark:text-white mb-6 uppercase text-sm tracking-wider">Quick Links</h4>
                <ul className="space-y-3">
                    <li><a href="#home" className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">Home</a></li>
                    <li><a href="#experience" className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">Experience</a></li>
                    <li><a href="#services" className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">Services</a></li>
                    <li><a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">Contact Me</a></li>
                </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
                <h4 className="font-bold text-navy dark:text-white mb-6 uppercase text-sm tracking-wider">Connect</h4>
                <ul className="space-y-3">
                    <li>
                        <a href="mailto:ankeshkumar9949@gmail.com" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">
                            <Mail size={16} /> ankeshkumar9949@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/ankeshkumar9949" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-corporate dark:hover:text-gold transition-colors text-sm">
                            <Linkedin size={16} /> LinkedIn Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-500 text-xs font-medium">
                © 2025 Ankesh Kumar. Designed for Financial Excellence.
            </p>
            <div className="flex gap-6 text-xs text-slate-400 font-medium">
                <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Terms of Use</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;