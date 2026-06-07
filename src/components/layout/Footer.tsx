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
        <footer className={`relative pt-32 pb-12 border-t transition-all duration-700 ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-slate-200 bg-white/60'} backdrop-blur-2xl overflow-hidden`}>
            {/* Decorative backgrounds */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-3xl text-white shadow-2xl shadow-blue-500/40">SY</div>
                            <span className={`font-black text-2xl tracking-tighter uppercase italic ${isDark ? 'text-white' : 'text-slate-900'}`}>Suliman Yousef</span>
                        </div>
                        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-lg leading-relaxed font-light max-w-sm`}>{t.footerDesc}</p>
                        <div className="flex gap-4">
                            {[
                                { icon: 'fab fa-github', href: 'https://github.com/Su03l' },
                                { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/suliaman-yousef-36265a320' },
                                { icon: 'fab fa-twitter', href: 'https://twitter.com/Su05l' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl transition-all duration-500 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-blue-500/20 ${isDark ? 'text-white/40' : 'text-slate-900/40'}`}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500">{t.footerQuickLinks}</h4>
                        <ul className="space-y-5">
                            {['home', 'about', 'resume', 'services', 'projects', 'contact'].map(link => {
                                const path = link === 'home' ? '/' : `/${link}`;
                                return (
                                    <li key={link}>
                                        <NavLink to={path} className={`text-base ${isDark ? 'text-white/50 hover:text-blue-500' : 'text-slate-600 hover:text-blue-500'} transition-all duration-300 font-medium hover:translate-x-2 block w-fit`}>
                                            {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500">{t.servicesTitle}</h4>
                        <ul className={`space-y-5 text-base ${isDark ? 'text-white/50' : 'text-slate-600'} font-medium`}>
                            {['Front-end Development', 'Backend Development', 'Software Engineering', 'UI/UX Design'].map(s => (
                                <li key={s} className="hover:text-blue-500 transition-all cursor-default w-fit">{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-blue-500">{t.footerConnect}</h4>
                        <ul className={`space-y-6 text-base ${isDark ? 'text-white/50' : 'text-slate-600'} font-medium`}>
                            {[
                                { icon: 'fab fa-twitter', text: '@su05l', href: 'https://twitter.com/su05l' },
                                { icon: 'fas fa-envelope', text: 'sulimanyousef1478@outlook.sa', href: 'mailto:sulimanyousef1478@outlook.sa' },
                                { icon: 'fas fa-phone', text: '+966 53 160 8085', href: 'tel:+966531608085' },
                                { icon: 'fas fa-map-marker-alt', text: 'Medina - Saudi Arabia' }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-5 group">
                                    <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-blue-500 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white`}>
                                        <i className={item.icon}></i>
                                    </div>
                                    {item.href ? (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">{item.text}</a>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={`pt-12 border-t ${isDark ? 'border-white/5' : 'border-slate-200'} flex flex-col md:flex-row justify-between items-center gap-8`}>
                    <p className={`text-[10px] font-black uppercase tracking-[0.5em] opacity-30 ${isDark ? 'text-white' : 'text-slate-900'}`}>© 2026 Suliman Yousef. {t.rightsReserved}</p>
                    <div className={`flex gap-10 text-[9px] font-black uppercase tracking-[0.3em] opacity-30 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
