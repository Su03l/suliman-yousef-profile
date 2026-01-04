import React from 'react';
import { NavLink } from 'react-router-dom';
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
    const t = translations[lang];
    return (
        <nav className={`fixed top-0 left-0 w-full z-[99999] px-6 md:px-12 py-3 transition-all duration-500 flex justify-between items-center ${theme === 'dark' ? 'bg-black/90 text-white' : 'bg-white/90 text-slate-900'} backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50`}>
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-2xl shadow-blue-500/30">SY</div>
                <span className="font-black text-lg tracking-tighter hidden md:block">Suliman Yousef</span>
            </div>
            <div className="hidden lg:flex gap-8 text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
                {['home', 'about', 'resume', 'services', 'projects', 'contact'].map(link => {
                    const path = link === 'home' ? '/' : `/${link}`;
                    return (
                        <NavLink
                            key={link}
                            to={path}
                            className={({ isActive }) =>
                                `hover:opacity-100 hover:text-blue-500 transition-all ${isActive ? 'opacity-100 text-blue-500 underline underline-offset-8 decoration-2' : ''}`
                            }
                        >
                            {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                        </NavLink>
                    );
                })}
            </div>
            <div className="flex items-center gap-4">
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
        </nav>
    );
};

export default Navbar;
