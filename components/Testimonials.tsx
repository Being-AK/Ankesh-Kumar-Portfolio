import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-darkBg border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Professional Endorsement</h2>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy dark:text-white">Trusted by Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-light dark:bg-darkCard p-8 pl-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                 {/* Fix: Moved quote to left-6 for proper 'opening quote' visual and increased contrast */}
                 <div className="absolute top-6 left-6 text-corporate/10 dark:text-gold/10">
                    <Quote size={48} fill="currentColor" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed mb-6 relative z-10 pt-4">
                    "Ankesh brings a rare combination of technical precision and operational ownership. His ability to handle high-volume compliance independently is exceptional for a CA Finalist."
                </p>
                <div className="relative z-10">
                    <h4 className="font-bold text-navy dark:text-white">Senior Partner</h4>
                    <p className="text-xs text-slate-500 font-medium uppercase">GPHK & Associates</p>
                </div>
            </div>

             {/* Testimonial 2 */}
             <div className="bg-light dark:bg-darkCard p-8 pl-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                {/* Fix: Moved quote to left-6 and increased contrast */}
                <div className="absolute top-6 left-6 text-corporate/10 dark:text-gold/10">
                    <Quote size={48} fill="currentColor" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed mb-6 relative z-10 pt-4">
                    "From the initial audit visit to the finalization of financial statements, Ankesh manages the entire process with remarkable autonomy and accuracy."
                </p>
                <div className="relative z-10">
                    <h4 className="font-bold text-navy dark:text-white">Audit Manager</h4>
                    <p className="text-xs text-slate-500 font-medium uppercase">Statutory Audit Division</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;