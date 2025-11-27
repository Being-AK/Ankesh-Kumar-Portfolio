import React from 'react';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-light dark:bg-darkBg transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Work Process Steps */}
        <div className="mb-20">
             <div className="text-center mb-12">
                <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">My Approach</h2>
                <h3 className="text-3xl font-extrabold text-navy dark:text-white">The Audit Execution Workflow</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { step: "01", title: "Discovery", desc: "Understanding business nature & gathering raw data." },
                    { step: "02", title: "Analysis", desc: "Granular vouching, ledgers scrutiny & variance analysis." },
                    { step: "03", title: "Execution", desc: "Drafting financials & preparing compliance reports." },
                    { step: "04", title: "Delivery", desc: "Final review, query resolution & sign-off." }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-darkCard p-6 rounded-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden group h-full shadow-sm hover:shadow-md transition-shadow">
                        {/* Fix: Moved number to Top-Right to avoid overlapping description text at the bottom. Brightened for Dark Mode visibility. */}
                        <span className="text-4xl font-bold text-slate-200 dark:text-slate-600 absolute top-4 right-4 group-hover:text-corporate/10 dark:group-hover:text-gold/10 transition-colors select-none pointer-events-none">{item.step}</span>
                        <div className="relative z-10">
                            <h4 className="font-bold text-navy dark:text-white text-xl mb-2">{item.title}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 pr-2 leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Mini Case Study */}
        <div className="bg-navy dark:bg-slate-900 rounded-2xl p-8 md:p-12 relative overflow-hidden text-white shadow-2xl border border-navy dark:border-slate-700">
            <div className="absolute top-0 right-0 w-64 h-64 bg-corporate rounded-full blur-[80px] opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                <div className="w-full md:w-2/3">
                    <div className="inline-block px-3 py-1 bg-gold text-white text-xs font-bold uppercase rounded mb-4">Case Study</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">The ₹300 Cr Transfer Pricing Challenge</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        <strong>Challenge:</strong> An IT client with ₹300Cr+ turnover faced complex cross-border transaction reporting requirements and tight deadlines for Form 3CEB filing.
                        <br/><br/>
                        <strong>Solution:</strong> I led the benchmarking analysis, prepared the Study Report, and managed the entire documentation process, coordinating with international teams to validate data.
                        <br/><br/>
                        <strong>Result:</strong> Zero non-compliance queries and 100% adherence to deadlines.
                    </p>
                </div>
                <div className="w-full md:w-1/3 flex flex-col gap-4 border-l border-white/10 pl-0 md:pl-8">
                    <div>
                        <span className="block text-3xl font-bold text-gold">₹300Cr</span>
                        <span className="text-sm text-slate-400">Client Turnover</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-gold">0</span>
                        <span className="text-sm text-slate-400">Compliance Errors</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Process;