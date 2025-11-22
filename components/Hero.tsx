import React from 'react';
import { ArrowRight, ShieldCheck, CalendarCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const PROFILE_IMAGE_URL = "https://i.postimg.cc/6pkmgM4z/Whats-App-Image-2025-11-10-at-14-15-50-1fa977df.jpg"; 

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-light dark:bg-darkBg transition-colors duration-300">
      {/* Abstract Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-corporate/5 dark:bg-corporate/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 dark:bg-gold/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          
          {/* Text Content */}
          <div className="w-full md:w-3/5 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-corporate/5 dark:bg-corporate/20 text-corporate dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in border border-corporate/10 dark:border-corporate/30">
              <ShieldCheck size={14} />
              <span>Open for Audit & Finance Roles</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-navy dark:text-white animate-fade-in-up tracking-tight">
              Ankesh Kumar
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
               CA Finalist | <span className="text-corporate dark:text-gold">Statutory Audit Specialist</span>
            </h2>
            
            <p className="text-lg md:text-xl text-navy/80 dark:text-slate-300 font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              "From Drafting Financials to Finalizing Audits — Delivering End-to-End Financial Clarity."
            </p>

            <p className="text-base text-slate-600 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up border-l-4 border-gold pl-6" style={{ animationDelay: '0.3s' }}>
              Expertise in managing audits from scratch, handling high-volume GST compliance, and Transfer Pricing for large-cap entities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-corporate hover:bg-navy dark:bg-white dark:text-navy dark:hover:bg-slate-200 text-white px-8 py-4 rounded font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book a Consultation <CalendarCheck size={18} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-transparent border border-slate-300 dark:border-slate-700 hover:border-corporate dark:hover:border-gold text-navy dark:text-white hover:text-corporate dark:hover:text-gold px-8 py-4 rounded font-semibold transition-all hover:shadow-md">
                View Services
              </a>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center animate-fade-in relative py-6 md:py-0">
             {/* Glow Effect behind image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-corporate/20 to-gold/20 rounded-2xl blur-2xl transform rotate-3 scale-105 -z-10"></div>
             
             {/* Image Frame */}
             <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-yellow-500/20 shadow-2xl shadow-blue-900/20 bg-white dark:bg-darkCard group">
                <img 
                    src={PROFILE_IMAGE_URL} 
                    alt="Ankesh Kumar" 
                    className="w-full h-full object-cover object-[35%_30%] transition-transform duration-100 group-hover:scale-10"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop";
                    }}
                />
                {/* Subtle overlay for better text contrast if needed, though usually clean is better */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </div>
             
             {/* Decorative Status Element */}
             <div className="absolute -bottom-4 -right-2 md:right-10 bg-white dark:bg-darkCard px-4 py-2 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce-slow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-navy dark:text-white">Active</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;