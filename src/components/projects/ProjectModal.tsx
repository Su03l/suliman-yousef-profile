import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project, Language } from '../../core/types';
import { translations } from '../../core/translations';

interface ProjectModalProps {
    project: Project;
    lang: Language;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
    const t = translations[lang];

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            {/* Semi-transparent dark overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`relative bg-[#1a1c23] border-2 border-blue-500/50 w-full max-h-[85vh] overflow-hidden rounded-[2rem] flex flex-col lg:flex-row shadow-[0_0_100px_rgba(59,130,246,0.3)] z-[99999] ${project.hideImage ? 'max-w-2xl' : 'max-w-5xl'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all z-[100] shadow-2xl"
                    aria-label="Close"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                {/* Left Side: Image (Conditional) */}
                {!project.hideImage && (
                    <div className="lg:w-1/2 h-48 lg:h-auto overflow-hidden relative">
                        <img src={project.image} className="w-full h-full object-cover" alt={project.title[lang]} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent" />
                    </div>
                )}

                {/* Right Side: Content */}
                <div className={`${project.hideImage ? 'w-full text-center' : 'lg:w-1/2'} p-8 sm:p-12 overflow-y-auto custom-scroll flex flex-col bg-[#1a1c23]`}>
                    <div className="mb-6">
                        <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">{project.category}</span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase italic leading-tight text-white mb-4">
                            {project.title[lang]}
                        </h2>
                    </div>

                    <div className={`text-slate-300 text-sm leading-relaxed font-light mb-8 opacity-90 ${project.hideImage ? 'mx-auto max-w-lg' : ''}`}>
                        {project.description[lang].split('\n').map((line, idx) => {
                            const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-');
                            if (isBullet) {
                                return (
                                    <div key={idx} className="flex gap-2 mb-3 group/line items-start text-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover/line:scale-125 transition-transform shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        <span>{line.replace(/^[•-]\s*/, '')}</span>
                                    </div>
                                );
                            }
                            if (line.trim().endsWith(':')) {
                                return <h4 key={idx} className="font-black text-blue-400 uppercase tracking-widest text-[10px] mt-8 mb-4 border-b border-blue-500/10 pb-2 w-fit">{line}</h4>;
                            }
                            return <p key={idx} className={line.trim() ? 'mb-4' : 'h-4'}>{line}</p>;
                        })}
                    </div>

                    <div className="mb-8">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">{lang === 'en' ? 'Stack' : 'التقنيات'}</h4>
                        <div className={`flex flex-wrap gap-2 ${project.hideImage ? 'justify-center' : ''}`}>
                            {project.tech.map(tech => (
                                <span key={tech} className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[9px] font-black rounded-full uppercase tracking-widest">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className={`mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 ${project.hideImage ? 'justify-center' : ''}`}>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all">
                                <i className="fas fa-external-link-alt mr-2"></i> {t.visitLive}
                            </a>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 py-4 border border-white/20 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all ${project.hideImage ? 'max-w-xs mx-auto' : ''}`}>
                            <i className="fab fa-github mr-2"></i> {t.viewCode}
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
