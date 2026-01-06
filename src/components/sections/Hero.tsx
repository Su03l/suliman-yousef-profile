import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Language, Translation, Theme } from '../../core/types';
import MagneticText from '../ui/MagneticText';
import WordCycler from '../ui/WordCycler';

import NebulaBackground from '../layout/NebulaBackground';

interface HeroProps {
    lang: Language;
    t: Translation;
    theme: Theme;
}

const Hero: React.FC<HeroProps> = ({ lang, t, theme }) => {
    const isDark = theme === 'dark';
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20 overflow-hidden">
            <NebulaBackground />
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <MagneticText className="mb-8">
                    <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black leading-none tracking-tighter uppercase italic select-none">
                        <span className="block drop-shadow-[0_20px_20px_rgba(59,130,246,0.3)]">Suliman</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Yousef</span>
                    </h1>
                </MagneticText>

                <WordCycler
                    words={lang === 'en'
                        ? ["Software Engineer", "Full Stack Developer", "Backend Expert", "React Specialist", "Laravel Enthusiast"]
                        : ["مهندس برمجيات", "مطور ويب متكامل", "خبير باك أند", "متخصص React", "محترف Laravel"]}
                    lang={lang}
                />

                <p className="max-w-3xl mx-auto text-base md:text-xl text-slate-400 mt-8 mb-12 font-medium leading-relaxed opacity-70">
                    {t.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <NavLink to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)] hover:bg-blue-700 transition-all flex items-center gap-3 group"
                            >
                                {t.heroBtnWork}
                                <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                            </motion.button>
                        </NavLink>
                        <a href="/SULIMAN_YOUSEF_CV.pdf" download className={`px-10 py-5 glass border ${isDark ? 'border-white/10 text-white hover:bg-white/5' : 'border-slate-200 text-slate-800 hover:bg-slate-50'} rounded-2xl font-black text-lg hover:border-blue-500/30 hover:scale-105 transition-all flex items-center gap-3 group`}>
                            <i className="fas fa-download group-hover:-translate-y-1 transition-transform"></i>
                            Download CV
                        </a>
                    </div>
                    <div className="flex gap-8 text-3xl opacity-30 hover:opacity-100 transition-opacity">
                        <a href="https://github.com/Su03l" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/suliaman-yousef-36265a320" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/Su05l" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 animate-bounce">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
            </div>
        </section>
    );
};

export default Hero;
