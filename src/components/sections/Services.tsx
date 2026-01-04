import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../../core/types';
import { SERVICES } from '../../core/constants';

interface ServicesProps {
    lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
    return (
        <section id="services" className="py-32 container mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
                <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">Services</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase italic">Technology Solutions & Expertise</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((s, i) => (
                    <motion.div key={i} whileHover={{ y: -10 }} className="p-8 glass rounded-[2.5rem] border-white/5 group relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <i className={`fas ${s.icon} text-[8rem]`}></i>
                        </div>
                        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                            <i className={`fas ${s.icon} text-white`}></i>
                        </div>
                        <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase italic group-hover:text-blue-500 transition-colors">
                            {s.title[lang]}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 opacity-80 flex-grow">{s.description[lang]}</p>
                        <ul className="space-y-4">
                            {s.features[lang].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 group/item">
                                    <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all">
                                        <i className="fas fa-check text-[8px] text-blue-500 group-hover/item:text-white"></i>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover/item:text-white transition-colors">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
