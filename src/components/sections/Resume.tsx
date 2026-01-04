import React from 'react';
import { motion } from 'framer-motion';
import { Language, Translation } from '../../core/types';
import { EXPERIENCES } from '../../core/constants';

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
                    <div className="flex justify-center gap-6 pt-12">
                        <a href="SULIMANYOUSEF.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                            <i className="fas fa-eye"></i> View CV
                        </a>
                        <a href="SULIMANYOUSEF.pdf" download className="px-10 py-4 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
                            <i className="fas fa-download"></i> Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40 items-stretch">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full">
                        <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> EXPERIENCE</h2>
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
                        <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> {t.educationTitle}</h2>
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
            </div>
        </section>
    );
};

export default Resume;
