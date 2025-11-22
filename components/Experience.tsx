import React from 'react';
import { Briefcase, Calendar, ClipboardCheck, Globe, Landmark, Users, FileText } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-darkBg border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Career Trajectory</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white">Professional Experience</h3>
            </div>
            <div className="w-full md:w-1/3 h-1 bg-slate-100 dark:bg-slate-800 rounded-full">
                <div className="w-1/3 h-full bg-corporate dark:bg-gold rounded-full"></div>
            </div>
        </div>

        <div className="max-w-5xl mx-auto">
            <div className="relative pl-8 md:pl-12 border-l-2 border-slate-200 dark:border-slate-700 space-y-12">
                
                {/* Item 1 */}
                <div className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[41px] md:-left-[57px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-darkBg bg-corporate dark:bg-gold shadow-md group-hover:scale-125 transition-transform"></div>
                    
                    <div className="bg-light dark:bg-darkCard p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-corporate/30 dark:hover:border-gold/30 transition-all hover:shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                            <div>
                                <h4 className="text-2xl font-bold text-navy dark:text-white">CA Article Assistant</h4>
                                <div className="flex items-center gap-2 text-corporate dark:text-blue-400 font-semibold mt-1">
                                    <Briefcase size={16} />
                                    <span>GPHK & Associates</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-4 py-2 rounded border border-slate-100 dark:border-slate-700">
                                <Calendar size={14} />
                                <span>Dec 2024 – Present</span>
                            </div>
                        </div>
                        
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                <div className="mt-1 text-gold shrink-0"><ClipboardCheck size={20} /></div>
                                <span><strong>Independent Audit Management:</strong> Managed 30+ Statutory & 15+ Tax Audits <em>from scratch</em>, handling entire audit workings, schedules, and drafting Financial Statements for final review.</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                <div className="mt-1 text-gold shrink-0"><FileText size={20} /></div>
                                <span><strong>High-Volume Compliance:</strong> Executed end-to-end GST & TDS compliance, successfully filing <strong>100+ GST Returns</strong> and managing reconciliation independently.</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                <div className="mt-1 text-gold shrink-0"><Globe size={20} /></div>
                                <span><strong>Transfer Pricing Expert:</strong> Handled compliance for IT companies (Turnover exceeding ₹300 Cr), including Form 3CEB filings, TP Study Report preparation, and benchmarking.</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                <div className="mt-1 text-gold shrink-0"><Landmark size={20} /></div>
                                <span><strong>Corporate & Bank Audits:</strong> Conducted Bank Audits (Verification & Certification) and managed ROC Compliance (filing statutory forms/returns).</span>
                            </li>
                            <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                                <div className="mt-1 text-gold shrink-0"><Users size={20} /></div>
                                <span><strong>Client Coordination:</strong> Led on-site audit visits, coordinating directly with client teams for data verification and ensuring smooth closure of audit queries.</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;