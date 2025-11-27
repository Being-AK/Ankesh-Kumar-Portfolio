import React, { ReactNode } from 'react';
import { Quote, Building2, Factory, Cpu, Briefcase, ShoppingBag, PieChart } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo: ReactNode;
}

const testimonials: Testimonial[] = [
  {
    quote: "Ankesh handles complex compliance with the precision of a senior auditor. His work on the ₹300Cr transfer pricing project was flawless.",
    author: "Senior Partner",
    role: "GPHK & Associates",
    logo: <Building2 size={20} className="text-corporate dark:text-gold" />
  },
  {
    quote: "Efficient, knowledgeable, and always on time. He simplified our GST filing process significantly.",
    author: "Client Recommendation",
    role: "Manufacturing Sector",
    logo: <Factory size={20} className="text-slate-500 dark:text-slate-400" />
  },
  {
    quote: "His understanding of transfer pricing regulations saved us significantly during our annual audit. Highly recommended.",
    author: "CFO",
    role: "IT Solutions Company",
    logo: <Cpu size={20} className="text-blue-500" />
  },
  {
    quote: "One of the most proactive articles I've worked with. He owns the process from start to finish, requiring minimal supervision.",
    author: "Audit Manager",
    role: "GPHK & Associates",
    logo: <Briefcase size={20} className="text-corporate dark:text-gold" />
  },
  {
    quote: "Ankesh's GST reconciliation work was incredibly thorough. He spotted discrepancies our previous team missed.",
    author: "Director",
    role: "Retail Chain",
    logo: <ShoppingBag size={20} className="text-rose-500" />
  },
  {
    quote: "Professional, punctual, and precise. A great asset for any statutory audit assignment.",
    author: "Head of Finance",
    role: "SME Client",
    logo: <PieChart size={20} className="text-emerald-500" />
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-darkBg border-t border-slate-100 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-3">Professional Endorsement</h2>
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy dark:text-white">Trusted by Leadership</h3>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for fade effect */}
        <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-white dark:from-darkBg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-white dark:from-darkBg to-transparent z-10 pointer-events-none"></div>

        {/* Seamless Marquee Container */}
        <div className="flex overflow-hidden">
            {/* List 1 */}
            <div className="flex shrink-0 animate-marquee gap-6 md:gap-8 py-4 px-3 md:px-4" style={{ animationDuration: '15s' }}>
                {testimonials.map((item, idx) => (
                    <TestimonialCard key={`orig-${idx}`} item={item} />
                ))}
            </div>
            {/* List 2 (Duplicate for seamless loop) */}
            <div className="flex shrink-0 animate-marquee gap-6 md:gap-8 py-4 px-3 md:px-4" style={{ animationDuration: '15s' }}>
                {testimonials.map((item, idx) => (
                    <TestimonialCard key={`dup-${idx}`} item={item} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

// Helper Component for consistency
const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <div className="w-[320px] md:w-[480px] bg-light dark:bg-darkCard p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative group hover:shadow-md transition-all flex-shrink-0 whitespace-normal flex flex-col justify-between h-full">
        <div>
            {/* Quote Icon with improved positioning/opacity */}
            <div className="text-corporate/10 dark:text-gold/10 mb-2 absolute top-6 left-6">
                <Quote size={40} fill="currentColor" />
            </div>
            <div className="relative z-10 pt-6">
                 <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed text-sm md:text-base mb-8">
                    "{item.quote}"
                </p>
            </div>
        </div>
        
        {/* Author Section with Logo */}
        <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4 mt-auto">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 shadow-sm">
                {item.logo}
            </div>
            <div>
                <h4 className="font-bold text-navy dark:text-white text-base leading-tight">{item.author}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide mt-1">{item.role}</p>
            </div>
        </div>
    </div>
);

export default Testimonials;