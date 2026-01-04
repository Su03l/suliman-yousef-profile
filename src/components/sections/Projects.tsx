import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Translation, Project, Theme } from '../../core/types';
import ProjectCard from '../projects/ProjectCard';

interface ProjectsProps {
    lang: Language;
    t: Translation;
    filter: 'all' | 'frontend' | 'backend' | 'fullstack';
    setFilter: (f: 'all' | 'frontend' | 'backend' | 'fullstack') => void;
    showAll: boolean;
    setShowAll: (s: boolean) => void;
    displayedProjects: Project[];
    filteredByCategory: Project[];
    setSelectedProject: (p: Project | null) => void;
    theme: Theme;
}

const Projects: React.FC<ProjectsProps> = ({
    lang,
    t,
    filter,
    setFilter,
    showAll,
    setShowAll,
    displayedProjects,
    filteredByCategory,
    setSelectedProject,
    theme
}) => {
    const isDark = theme === 'dark';
    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">{t.projectsTitle}</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase italic">Featured Work & Portfolio</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {(['all', 'frontend', 'backend', 'fullstack'] as const).map((f) => (
                    <button
                        key={f}
                        onClick={() => { setFilter(f); setShowAll(false); }}
                        className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${filter === f ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20' : isDark ? 'bg-white/5 border-white/10 opacity-40 hover:opacity-100 hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-500 hover:bg-slate-200 hover:text-slate-900'}`}
                    >
                        {t[`filter${f.charAt(0).toUpperCase() + f.slice(1)}` as keyof Translation]}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((p) => (
                        <ProjectCard key={p.id} project={p} lang={lang} onOpen={setSelectedProject} theme={theme} />
                    ))}
                </AnimatePresence>
            </div>
            {(filteredByCategory.length > 9 || (filteredByCategory.some(p => (p as any).isLaravelCollection) && !showAll)) && (
                <div className="flex justify-center">
                    <button onClick={() => setShowAll(!showAll)} className="group flex flex-col items-center gap-4">
                        <div className={`w-16 h-16 glass rounded-full flex items-center justify-center ${isDark ? 'border-blue-600/20' : 'border-blue-600/10 bg-blue-50'} group-hover:border-blue-600 group-hover:scale-110 transition-all`}>
                            <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-blue-500`}></i>
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-[0.5em] ${isDark ? 'opacity-40' : 'opacity-60 text-slate-500'} group-hover:opacity-100 transition-opacity`}>
                            {showAll ? t.showLess : t.showMore}
                        </span>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Projects;
