import React from 'react';
import { NavLink } from 'react-router-dom';
import { Translation, Theme } from '../../core/types';

interface FooterProps {
    t: Translation;
    theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ t, theme }) => {
    const isDark = theme === 'dark';

    return (
        <footer className={`pt-24 pb-12 border-t transition-colors duration-500 ${isDark ? 'border-white/5 bg-black/40' : 'border-slate-200 bg-slate-100'} backdrop-blur-md`}>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-blue-500/20">SY</div>
                            <span className={`font-black text-xl tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Suliman Yousef</span>
                        </div>
                        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed opacity-70 font-medium`}>{t.footerDesc}</p>
                        <div className="flex gap-6">
                            <a href="https://github.com/Su03l" target="_blank" rel="noopener noreferrer" className={`text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/suliaman-yousef-36265a320" target="_blank" rel="noopener noreferrer" className={`text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}><i className="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/Su05l" target="_blank" rel="noopener noreferrer" className={`text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.footerQuickLinks}</h4>
                        <ul className="space-y-4">
                            {['home', 'about', 'resume', 'services', 'projects', 'contact'].map(link => {
                                const path = link === 'home' ? '/' : `/${link}`;
                                return (
                                    <li key={link}>
                                        <NavLink to={path} className={`text-sm ${isDark ? 'text-slate-400 hover:text-blue-500' : 'text-slate-600 hover:text-blue-500'} transition-colors font-medium opacity-80 hover:opacity-100`}>
                                            {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.servicesTitle}</h4>
                        <ul className={`space-y-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                            <li className="opacity-80 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">Front-end Development</li>
                            <li className="opacity-80 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">Backend Development</li>
                            <li className="opacity-80 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">Software Engineering</li>
                            <li className="opacity-80 hover:opacity-100 hover:text-blue-500 transition-all cursor-default">UI/UX Design</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.footerConnect}</h4>
                        <ul className={`space-y-6 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} font-medium`}>
                            <li className="flex items-center gap-4">
                                <i className="fab fa-twitter text-blue-500"></i>
                                <a href="https://twitter.com/su05l" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">@su05l</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fas fa-envelope text-blue-500"></i>
                                <a href="mailto:sulimany662@gmail.com" className="hover:text-blue-500 transition-colors">sulimany662@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fas fa-phone text-blue-500"></i>
                                <a href="tel:+966590128804" className="hover:text-blue-500 transition-colors">+966 59 012 8804</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <i className="fas fa-map-marker-alt text-blue-500"></i>
                                <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>Medina - Saudi Arabia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`pt-12 border-t ${isDark ? 'border-white/5' : 'border-slate-200'} flex flex-col md:flex-row justify-between items-center gap-6`}>
                    <p className={`text-[10px] font-black uppercase tracking-[0.4em] opacity-30 ${isDark ? 'text-white' : 'text-slate-900'}`}>© 2026 Suliman Yousef. {t.rightsReserved}</p>
                    <div className={`flex gap-8 text-[8px] font-black uppercase tracking-[0.3em] opacity-20 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
                        <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
