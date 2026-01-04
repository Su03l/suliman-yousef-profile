import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Types
import { Language, Theme, Project } from './core/types';

// Data & Translations
import { translations } from './core/translations';
import { PROJECTS } from './core/constants';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import NebulaBackground from './components/layout/NebulaBackground';

// Projects
import ProjectModal from './components/projects/ProjectModal';

// Sections
// Sections (Lazy Loaded)
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Resume = lazy(() => import('./components/sections/Resume'));
const Services = lazy(() => import('./components/sections/Services'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Fallback Loader
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1e] text-blue-500">
        <div className="w-12 h-12 border-4 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
);

const AppContent: React.FC = () => {
    const [lang, setLang] = useState<Language>('en');
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        return savedTheme || 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
    const [showAll, setShowAll] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const t = translations[lang];
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [theme, lang]);

    // Added scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const filteredByCategory = PROJECTS.filter(p => filter === 'all' || p.category === filter);
    const displayedProjects = showAll
        ? filteredByCategory
        : [
            ...filteredByCategory.filter(p => !(p as any).isLaravelCollection).slice(0, 9),
            ...filteredByCategory.filter(p => (p as any).isLaravelCollection)
        ];

    const commonProps = {
        lang,
        t,
        filter,
        setFilter,
        showAll,
        setShowAll,
        displayedProjects,
        filteredByCategory,
        setSelectedProject
    };

    const LandingPage = () => (
        <>
            <Hero lang={lang} t={t} theme={theme} />
            <About t={t} />
            <Resume lang={lang} t={t} theme={theme} />
            <Services lang={lang} />
            <Projects
                lang={lang}
                t={t}
                filter={filter}
                setFilter={setFilter}
                showAll={showAll}
                setShowAll={setShowAll}
                displayedProjects={displayedProjects}
                filteredByCategory={filteredByCategory}
                setSelectedProject={setSelectedProject}
                theme={theme}
            />
            <Contact t={t} theme={theme} />
        </>
    );

    return (
        <div className={`min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'} ${lang === 'ar' ? 'font-["IBM_Plex_Sans_Arabic"]' : 'font-["Work_Sans"]'}`}>
            <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} scrolled={scrolled} />

            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About t={t} />} />
                    <Route path="/resume" element={<Resume lang={lang} t={t} theme={theme} />} />
                    <Route path="/services" element={<Services lang={lang} />} />
                    <Route path="/projects" element={
                        <Projects
                            lang={lang}
                            t={t}
                            filter={filter}
                            setFilter={setFilter}
                            showAll={showAll}
                            setShowAll={setShowAll}
                            displayedProjects={displayedProjects}
                            filteredByCategory={filteredByCategory}
                            setSelectedProject={setSelectedProject}
                            theme={theme}
                        />
                    } />
                    <Route path="/contact" element={<Contact t={t} theme={theme} />} />
                </Routes>
            </Suspense>

            <Footer t={t} theme={theme} />

            <ScrollToTop />

            <AnimatePresence mode="wait">
                {selectedProject && (
                    <ProjectModal
                        key="modal"
                        project={selectedProject}
                        lang={lang}
                        onClose={() => setSelectedProject(null)}
                        theme={theme}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
