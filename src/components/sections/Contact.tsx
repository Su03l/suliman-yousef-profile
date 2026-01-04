import React from 'react';
import { Translation, Theme } from '../../core/types';

interface ContactProps {
    t: Translation;
    theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ t, theme }) => {
    const isDark = theme === 'dark';
    return (
        <section id="contact" className="py-32 container mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
                <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">{t.contactTitle}</h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase italic">{t.contactSubtitle}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-blue-600/30 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-blue-500/20">
                                <i className="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">{t.contactEmail}</h4>
                                <a href="mailto:sulimany662@gmail.com" className="text-sm font-bold hover:text-blue-500 transition-colors">sulimany662@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-blue-600/30 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-blue-500/20">
                                <i className="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">{t.contactPhone}</h4>
                                <a href="tel:+966590128804" className="text-sm font-bold hover:text-blue-500 transition-colors">+966 590 12 8804</a>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-blue-600/30 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-blue-500/20">
                                <i className="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">{t.contactLocation}</h4>
                                <p className="text-sm font-bold">Medina - Saudi Arabia</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-[2.5rem] border-white/5 group hover:border-blue-600/30 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-xl shadow-blue-500/20">
                                <i className="fab fa-twitter text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">{t.contactTwitter}</h4>
                                <a href="https://twitter.com/su05l" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-blue-500 transition-colors">@su05l</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5">
                    <div className="glass p-10 md:p-12 h-full rounded-[3rem] border-blue-600/20 flex flex-col justify-center bg-blue-600/[0.02]">
                        <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-tight italic">{t.contactCTA}</h4>
                        <p className="text-slate-400 font-medium mb-10 leading-relaxed">{t.contactCTADesc}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="mailto:sulimany662@gmail.com" className={`px-8 py-4 ${isDark ? 'bg-white text-black hover:bg-blue-600 hover:text-white' : 'bg-slate-900 text-white hover:bg-blue-600'} rounded-2xl font-black text-xs uppercase tracking-widest transition-all text-center`}>
                                {t.contactSendEmail}
                            </a>
                            <a href="https://wa.me/966590128804" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 border ${isDark ? 'border-white/10 text-white' : 'border-slate-300 text-slate-800'} rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:border-green-600 hover:text-white transition-all text-center flex items-center justify-center gap-2`}>
                                <i className="fab fa-whatsapp"></i> {t.contactWhatsApp}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
