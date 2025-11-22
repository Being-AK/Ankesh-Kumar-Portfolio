import React from 'react';

const About: React.FC = () => {
  // Updated to use the direct image link (ending in .jpg) instead of the webpage link
  const ABOUT_IMAGE_URL = "https://i.postimg.cc/6pkmgM4z/Whats-App-Image-2025-11-10-at-14-15-50-1fa977df.jpg";

  return (
    <section id="about" className="py-20 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image / Visual Placeholder */}
          <div className="w-full md:w-1/2 relative group">
             <div className="aspect-[4/5] bg-navy dark:bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl border-8 border-white dark:border-slate-800 transform transition-transform duration-500 group-hover:scale-[1.01]">
                <img 
                    src={ABOUT_IMAGE_URL}
                    alt="Ankesh Kumar - Professional" 
                    className="w-full h-full object-cover object-[48%_20%] opacity-90 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-block px-3 py-1 mb-2 bg-gold text-white text-xs font-bold uppercase tracking-wider rounded-sm">Based in</div>
                    <p className="text-2xl font-bold">Hyderabad, India</p>
                </div>
             </div>
             {/* Decorative Elements behind */}
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/30 rounded-2xl -z-10"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-corporate/10 dark:bg-white/5 rounded-full blur-xl -z-10"></div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">Professional Background</h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                    I am a <strong>CA Finalist</strong> and <strong>B.Com graduate</strong> with a reputation for taking ownership.
                </p>
                <p>
                    Unlike typical assistance roles, I handle assignments <strong>end-to-end</strong>—from visiting client offices and gathering raw data to preparing final financial statements and compliance reports.
                </p>
                <p>
                    Currently at <strong className="text-corporate dark:text-gold">GPHK & Associates</strong>, my focus is on accuracy, regulatory adherence, and operational efficiency in Statutory Audits and International Taxation.
                </p>
                
                <div className="pt-6 grid grid-cols-2 gap-6">
                    <div className="border-l-2 border-gold pl-4">
                        <span className="block text-3xl font-bold text-navy dark:text-white">30+</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase">Audits Conducted</span>
                    </div>
                    <div className="border-l-2 border-gold pl-4">
                        <span className="block text-3xl font-bold text-navy dark:text-white">100+</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase">GST Returns Filed</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;