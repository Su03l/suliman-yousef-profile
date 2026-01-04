import React from 'react';
import { motion } from 'framer-motion';
import { Project, Language } from '../../core/types';
import { translations } from '../../core/translations';
import { LARAVEL_COLLECTION_ITEMS } from '../../core/constants';

interface ProjectCardProps {
    project: Project;
    lang: Language;
    onOpen: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, onOpen }) => {
    const t = translations[lang];

    if ((project as any).isLaravelCollection) {
        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-2 lg:col-span-3 glass rounded-[3rem] p-8 md:p-14 border-blue-600/20 group relative overflow-hidden flex flex-col"
            >
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/3 flex flex-col">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                                <i className="fab fa-laravel text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black tracking-tighter uppercase italic leading-none group-hover:text-blue-500 transition-colors">
                                    {project.title[lang]}
                                </h4>
                                <p className="text-slate-400 text-xs mt-2 uppercase tracking-[0.3em] font-black opacity-40">Backend Architecture</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed font-light mb-10 opacity-80">{project.description[lang]}</p>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {project.tech.map(t => (
                                <span key={t} className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[9px] font-black rounded-full uppercase tracking-widest">{t}</span>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-4 border border-white/20 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all shadow-2xl">
                                <i className="fab fa-github mr-2"></i> {t.viewCode}
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-h-[500px] overflow-y-auto custom-scroll pr-4">
                        {LARAVEL_COLLECTION_ITEMS.map((item) => (
                            <div key={item.id} className="p-8 glass rounded-[2rem] border-white/5 hover:border-blue-600/30 hover:bg-blue-600/[0.02] transition-all group/card flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-blue-500 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors">
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <span className="text-[10px] font-black text-blue-500 opacity-20 tracking-widest">{item.id}</span>
                                </div>
                                <h5 className="font-black text-sm mb-3 uppercase tracking-tight group-hover/card:text-blue-500 transition-colors">{item.name}</h5>
                                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-6 opacity-70 flex-grow line-clamp-3">{item.desc[lang]}</p>
                                <div className="flex flex-col gap-3 mt-auto">
                                    <button
                                        onClick={() => onOpen({
                                            id: `laravel-${item.id}`,
                                            title: { en: item.name, ar: item.name },
                                            description: item.desc,
                                            category: 'backend',
                                            tech: ["PHP", "Laravel", "REST API"],
                                            image: "/img/card.png",
                                            githubUrl: item.url,
                                            hideImage: true
                                        })}
                                        className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-blue-600 hover:border-blue-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <i className="fas fa-info-circle"></i> {t.viewDetails}
                                    </button>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="w-full py-3 border border-white/5 text-slate-500 rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:text-blue-500 hover:border-blue-600/30 transition-all flex items-center justify-center gap-2">
                                        <i className="fab fa-github"></i> {t.viewCode}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
            </motion.div>
        );
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] overflow-hidden border-white/5 flex flex-col group h-full relative"
        >
            <div className="relative h-64 overflow-hidden group">
                <img
                    src={project.image}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:blur-[6px]"
                    alt={project.title[lang]}
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[8px] p-6 text-center z-10">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onOpen(project)}
                        className="px-10 py-4 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(59,130,246,0.6)] border border-white/20 mb-4 cursor-pointer"
                    >
                        {t.viewDetails}
                    </motion.button>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-[0.4em]">{t.projectsSubtitle}</p>
                </div>

                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-blue-500 border border-white/10 group-hover:opacity-0 transition-opacity">{project.category}</span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-xl font-black mb-3 tracking-tighter group-hover:text-blue-500 transition-colors uppercase italic">{project.title[lang]}</h4>
                <p className="text-slate-400 text-[11px] font-medium leading-relaxed mb-6 flex-grow opacity-70 line-clamp-2">{project.description[lang]}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 text-[7px] font-black rounded-full uppercase tracking-widest">{t}</span>
                    ))}
                    {project.tech.length > 3 && <span className="text-[7px] font-black opacity-20 uppercase tracking-widest">+{project.tech.length - 3}</span>}
                </div>
                <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">LIVE</a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-3 border border-white/10 rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-white/5 transition-colors">CODE</a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
