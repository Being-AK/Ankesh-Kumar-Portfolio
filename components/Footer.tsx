import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-darkBg py-8 border-t border-gray-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Ankesh Kumar. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-corporate dark:hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;