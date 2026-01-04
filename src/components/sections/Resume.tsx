import React from 'react';
import { motion } from 'framer-motion';
import { Language, Translation } from '../../core/types';
import { EXPERIENCES, CERTIFICATIONS } from '../../core/constants';

interface ResumeProps {
    lang: Language;
    t: Translation;
}

const Resume: React.FC<ResumeProps> = ({ lang, t }) => {
    return (
        <section id="resume" className="py-40 bg-white/[0.01]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">Portfolio</h2>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">Professional Path</h3>
                    <div className="flex flex-wrap justify-center gap-6 pt-12">
                        <a href="/SULIMANYOUSEF.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_20px_40px_-12px_rgba(59,130,246,0.5)] hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3">
                            <i className="fas fa-eye text-lg"></i> View CV
                        </a>
                        <a href="/SULIMANYOUSEF.pdf" download className="px-10 py-5 glass border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 hover:border-blue-500/30 hover:scale-105 transition-all flex items-center gap-3">
                            <i className="fas fa-download text-lg"></i> Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-stretch">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full">
                        <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> {t.experienceTitle.toUpperCase()}</h2>
                        <div className="flex-1 p-10 md:p-14 glass rounded-[3.5rem] border-blue-600/20 group flex flex-col justify-center">
                            {EXPERIENCES.map((exp, i) => (
                                <div key={i} className="mb-12 last:mb-0">
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-500 font-black tracking-[0.3em] mb-4 text-[10px] uppercase rounded-full border border-blue-600/20">{exp.period}</span>
                                        <h4 className="text-3xl font-black mb-1 tracking-tighter group-hover:text-blue-500 transition-colors leading-tight uppercase italic">{exp.role[lang]}</h4>
                                        <p className="text-xl text-slate-400 font-light opacity-60 italic">{exp.company[lang]}</p>
                                    </div>
                                    <ul className="space-y-6 text-slate-300 text-sm font-medium">
                                        {exp.bullets[lang].map((bullet, idx) => (
                                            <li key={idx} className="flex gap-4">
                                                <span className="text-blue-600 font-black text-lg">/</span>
                                                <span className="opacity-80 group-hover:opacity-100 transition-opacity leading-relaxed">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full">
                        <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> {t.educationTitle.toUpperCase()}</h2>
                        <div className="flex-1 p-10 md:p-14 glass rounded-[3.5rem] border-blue-600/20 group flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-500 font-black tracking-[0.3em] mb-4 text-[10px] uppercase rounded-full border border-blue-600/20 w-fit">2020 — 2025</span>
                            <h4 className="text-4xl font-black mb-4 tracking-tighter group-hover:text-blue-500 transition-colors uppercase leading-none italic">Bachelor of <br /> Computer Science</h4>
                            <p className="text-2xl text-slate-400 italic mb-12 font-light">{t.universityName}</p>
                            <div className="flex items-center gap-4 opacity-50 uppercase tracking-[0.3em] text-[10px] font-black border-t border-white/5 pt-10">
                                <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i> Madina - Saudi Arabia
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <div className="mt-32">
                    <h2 className="text-3xl font-black tracking-tighter mb-12 flex items-center gap-4">
                        <span className="w-10 h-1 bg-blue-600"></span> {t.certificationTitle.toUpperCase()}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CERTIFICATIONS.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/5 blur-2xl rounded-full group-hover:bg-blue-600/10 transition-colors"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                                        <i className="fas fa-medal text-xl"></i>
                                    </div>
                                    <span className="text-[10px] font-black tracking-[0.2em] text-blue-500/60 uppercase">{cert.year}</span>
                                </div>

                                <h4 className="text-xl font-black mb-2 tracking-tight group-hover:text-blue-500 transition-colors uppercase italic leading-tight">
                                    {cert.title[lang]}
                                </h4>
                                <p className="text-blue-400/80 text-xs font-bold mb-4 uppercase tracking-widest italic tracking-tighter">
                                    {cert.issuer[lang]}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity line-clamp-3">
                                    {cert.description[lang]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
