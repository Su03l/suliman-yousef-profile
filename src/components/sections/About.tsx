import React from 'react';
import { Translation } from '../../core/types';
import TechMarquee from '../ui/TechMarquee';

interface AboutProps {
    t: Translation;
}

const About: React.FC<AboutProps> = ({ t }) => {
    return (
        <section id="about" className="py-40 container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">{t.aboutTitle}</h2>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                        Software Engineering & <br /> Web Development
                    </h3>
                </div>
                <div className="flex justify-center gap-4 md:gap-12 mb-20">
                    {[
                        { val: "1+", label: t.statsYears },
                        { val: "30+", label: t.statsProjects },
                        { val: "10+", label: t.statsTechs }
                    ].map((stat, i) => (
                        <div key={i} className="glass py-8 px-6 md:px-12 rounded-[2.5rem] border-white/5 text-center min-w-[120px] md:min-w-[180px]">
                            <span className="text-4xl md:text-5xl font-black text-blue-600 block mb-2">{stat.val}</span>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="space-y-6 text-xl text-slate-400 font-light leading-relaxed">
                        <p>{t.aboutText1}</p>
                        <p>{t.aboutText2}</p>
                        <p>{t.aboutText3}</p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[450px] aspect-square">
                            <div className="relative z-10 rounded-[3rem] overflow-hidden w-full h-full border-2 border-white/10 shadow-2xl group grayscale hover:grayscale-0 transition-all duration-700">
                                <img src="/img/avatar.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Suliman Yousef" />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
                        </div>
                    </div>
                </div>
                <TechMarquee />
            </div>
        </section>
    );
};

export default About;
