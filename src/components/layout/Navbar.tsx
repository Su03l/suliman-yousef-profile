import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Theme } from '../../core/types';
import { translations } from '../../core/translations';

interface NavbarProps {
    lang: Language;
    setLang: (l: Language) => void;
    theme: Theme;
    setTheme: (t: Theme) => void;
    scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme, scrolled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = translations[lang];
    const isDark = theme === 'dark';

    const menuLinks = ['home', 'about', 'resume', 'services', 'projects', 'contact'];

    return (
        <nav className={`fixed top-0 left-0 w-full z-[99999] px-6 md:px-12 py-4 transition-all duration-500 flex justify-between items-center ${isDark ? 'bg-white/[0.03] text-white border-white/5' : 'bg-white/60 text-slate-900 border-slate-200'} backdrop-blur-2xl border-b shadow-2xl shadow-black/10`}>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-2xl shadow-blue-500/30">SY</div>
                <span className="font-black text-lg tracking-tighter hidden md:block uppercase italic">Suliman Yousef</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8 text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
                {menuLinks.map(link => (
                    <NavLink
                        key={link}
                        to={link === 'home' ? '/' : `/${link}`}
                        className={({ isActive }) =>
                            `hover:opacity-100 hover:text-blue-500 transition-all ${isActive ? 'opacity-100 text-blue-500 underline underline-offset-8 decoration-2' : ''}`
                        }
                    >
                        {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                    </NavLink>
                ))}
            </div>

            <div className="flex items-center gap-4">
                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                        className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 font-black text-xs transition-colors hover:bg-white/10"
                    >
                        {lang === 'en' ? 'AR' : 'EN'}
                    </button>
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-lg hover:text-blue-500 transition-all border-white/10"
                    >
                        {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl text-blue-500 border-white/10 relative z-50"
                >
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Scrim (Background Overlay) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[100000] lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={`fixed top-0 right-0 h-full w-[280px] z-[100001] lg:hidden flex flex-col p-8 ${isDark ? 'bg-[#0a0a0a] text-white border-l border-white/5' : 'bg-white text-slate-900 border-l border-slate-200'} shadow-2xl shadow-black/50`}
                        >
                            {/* Close Button Inside Menu */}
                            <div className="flex justify-end mb-12">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl text-blue-500 border ${isDark ? 'border-white/5 bg-white/5' : 'border-black/5 bg-black/5'}`}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 w-full mb-auto">
                                {menuLinks.map((link, i) => (
                                    <motion.div
                                        key={link}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <NavLink
                                            to={link === 'home' ? '/' : `/${link}`}
                                            onClick={() => setIsOpen(false)}
                                            className={({ isActive }) =>
                                                `text-2xl font-black uppercase tracking-tighter italic transition-all block py-2 ${isActive ? 'text-blue-600' : 'opacity-40'}`
                                            }
                                        >
                                            {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Settings Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className={`flex items-center gap-4 p-5 rounded-[2rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5'} w-full justify-around mt-10`}
                            >
                                <button
                                    onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setIsOpen(false); }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-[10px] font-black tracking-widest shadow-lg shadow-blue-500/20">
                                        {lang === 'en' ? 'AR' : 'EN'}
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{lang === 'en' ? 'Arabic' : 'English'}</span>
                                </button>

                                <button
                                    onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setIsOpen(false); }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-blue-500/20">
                                        {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                                    </div>
                                    <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{isDark ? 'Light' : 'Dark'}</span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;