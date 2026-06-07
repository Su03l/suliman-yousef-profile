
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Language, Theme, Translation, Project } from './types';
import { translations } from './translations';
import { PROJECTS, SERVICES, CERTIFICATIONS, EXPERIENCES, LARAVEL_COLLECTION_ITEMS } from './constants';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

// --- Background 3D Effect (DISABLED TO FIX WEBGL ERRORS) ---
// Uncomment if you want to re-enable the background animation
const NebulaBackground: React.FC = () => {
  return null; // Disabled to prevent WebGL errors
};

/* ORIGINAL CODE - Comment out to re-enable:
const NebulaBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({ size: 0.015, color: 0x3b82f6, transparent: true, opacity: 0.5 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.0004;
      points.rotation.x += 0.0002;
      points.position.x += (mouseX * 0.5 - points.position.x) * 0.03;
      points.position.y += (-mouseY * 0.5 - points.position.y) * 0.03;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      renderer.dispose();
    };
  }, []);
  return null;
};
*/

// --- Magnetic Text Effect ---
const MagneticText: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    const midY = rect.top + rect.height / 2;
    x.set((e.clientX - midX) * 0.4);
    y.set((e.clientY - midY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Word Cycler ---
const WordCycler: React.FC<{ words: string[], lang: Language }> = ({ words, lang }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div className="h-12 overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-blue-500 font-black uppercase tracking-[0.2em] italic text-xl md:text-2xl"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// --- Infinite Marquee ---
const TechMarquee: React.FC = () => {
  const techData = [
    { name: "HTML", svg: "/svg/html-5-svgrepo-com.svg" },
    { name: "CSS", svg: "/svg/css-3-svgrepo-com.svg" },
    { name: "JavaScript", svg: "/svg/javascript-svgrepo-com.svg" },
    { name: "TypeScript", svg: "/svg/typescript-icon-svgrepo-com.svg" },
    { name: "React", svg: "/svg/react-svgrepo-com.svg" },
    { name: "Next.js", svg: "/svg/next-white.svg" },
    { name: "Laravel", svg: "/svg/laravel.svg" },
    { name: "PHP", svg: "/svg/php.svg" },
    { name: "Node.js", svg: "/svg/node-js-svgrepo-com.svg" },
    { name: "Express", svg: "/svg/express-white.svg" },
    { name: "Python", svg: "/svg/python.svg" },
    { name: "PostgreSQL", svg: "/svg/postgresql-logo-svgrepo-com.svg" },
    { name: "Git", svg: "/svg/git-svgrepo-com.svg" },
    { name: "Vite", svg: "/svg/vite.svg" }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-blue-600/5 py-12 border-y border-white/5 group">
      <motion.div
        animate={{ x: [0, -2400] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="flex whitespace-nowrap items-center gap-24"
      >
        {[...techData, ...techData, ...techData].map((item, i) => (
          <div key={i} className="flex items-center gap-6 group-hover:scale-110 transition-transform">
            <img src={item.svg} alt={item.name} className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter opacity-30 group-hover:opacity-100 hover:text-blue-500 transition-all cursor-default">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Navbar ---
const Navbar: React.FC<{
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  scrolled: boolean;
}> = ({ lang, setLang, theme, setTheme, scrolled }) => {
  const t = translations[lang];
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 99999, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} className="px-6 md:px-12 py-3 transition-all duration-500 flex justify-between items-center">
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
                `hover:opacity-100 hover:text-blue-500 transition-all ${isActive ? 'text-blue-500 opacity-100' : ''}`
              }
            >
              {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 font-black text-xs transition-colors hover:bg-white/10">
          {lang === 'en' ? 'AR' : 'EN'}
        </button>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-10 h-10 glass rounded-xl flex items-center justify-center text-lg hover:text-blue-500 transition-all border-white/10">
          {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun text-yellow-400"></i>}
        </button>
      </div>
    </nav>
  );
};

// --- Project Modal ---
const ProjectModal: React.FC<{ project: Project; lang: Language; onClose: () => void }> = ({ project, lang, onClose }) => {
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

      {/* Modal Box - Explicit lighter background and border */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#1a1c23] border-2 border-blue-500/50 w-full max-w-5xl max-h-[85vh] overflow-hidden rounded-[2rem] flex flex-col lg:flex-row shadow-[0_0_100px_rgba(59,130,246,0.3)] z-[99999]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button - High visibility */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all z-[100] shadow-2xl"
          aria-label="Close"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        {/* Left Side: Image */}
        <div className="lg:w-1/2 h-48 lg:h-auto overflow-hidden relative">
          <img src={project.image} className="w-full h-full object-cover" alt={project.title[lang]} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent" />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 p-8 sm:p-12 overflow-y-auto custom-scroll flex flex-col bg-[#1a1c23]">
          <div className="mb-6">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">{project.category}</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase italic leading-tight text-white mb-4">
              {project.title[lang]}
            </h2>
          </div>

          <p className="text-slate-300 text-base leading-relaxed font-light mb-8 opacity-90">
            {project.description[lang]}
          </p>

          <div className="mb-8">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-4">{lang === 'en' ? 'Stack' : 'التقنيات'}</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[9px] font-black rounded-full uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="flex-1 py-4 bg-blue-600 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all">
                <i className="fas fa-external-link-alt mr-2"></i> {t.visitLive}
              </a>
            )}
            <a href={project.githubUrl} target="_blank" className="flex-1 py-4 border border-white/20 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
              <i className="fab fa-github mr-2"></i> {t.viewCode}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Project Card Component ---
const ProjectCard: React.FC<{ project: Project; lang: Language; onOpen: (p: Project) => void }> = ({ project, lang, onOpen }) => {
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
                <h4 className="text-3xl font-black tracking-tighter uppercase italic leading-none group-hover:text-blue-500 transition-colors">{project.title[lang]}</h4>
                <p className="text-slate-400 text-xs mt-2 uppercase tracking-[0.3em] font-black opacity-40">Backend Architecture</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-10 opacity-80">{project.description[lang]}</p>
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[9px] font-black rounded-full uppercase tracking-widest">{t}</span>
              ))}
            </div>
            <div className="mt-auto flex gap-4">
              <button
                onClick={() => onOpen(project)}
                className="flex-1 py-4 bg-white text-black rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5"
              >
                <i className="fas fa-info-circle mr-2"></i> {t.viewDetails}
              </button>
              <a href={project.githubUrl} target="_blank" className="flex-1 py-4 border border-white/10 text-white rounded-2xl text-center font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
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
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-6 opacity-70 flex-grow">{item.desc[lang]}</p>
                <a href={item.url} target="_blank" className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-500 flex items-center gap-2 group-hover/card:translate-x-2 transition-transform">
                  <i className="fab fa-github"></i> View Code
                </a>
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
            <a href={project.liveUrl} target="_blank" className="flex-1 py-3 bg-blue-600/10 text-blue-500 border border-blue-600/20 rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">LIVE</a>
          )}
          <a href={project.githubUrl} target="_blank" className="flex-1 py-3 border border-white/10 rounded-xl text-center font-black text-[9px] uppercase tracking-widest hover:bg-white/5 transition-colors">CODE</a>
        </div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  const [showAll, setShowAll] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme, lang]);

  const filteredByCategory = PROJECTS.filter(p => filter === 'all' || p.category === filter);
  const displayedProjects = showAll
    ? filteredByCategory
    : filteredByCategory.filter(p => !p.isLaravelCollection).slice(0, 9);

  return (
    <BrowserRouter>
      <AppContent
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        scrolled={scrolled}
        displayedProjects={displayedProjects}
        showAll={showAll}
        setShowAll={setShowAll}
        filter={filter}
        setFilter={setFilter}
        filteredByCategory={filteredByCategory}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </BrowserRouter>
  );
};

const AppContent: React.FC<{
  lang: Language;
  setLang: (l: Language) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  scrolled: boolean;
  displayedProjects: Project[];
  showAll: boolean;
  setShowAll: (v: boolean) => void;
  filter: string;
  setFilter: (f: any) => void;
  filteredByCategory: Project[];
  selectedProject: Project | null;
  setSelectedProject: (p: Project | null) => void;
}> = ({
  lang, setLang, theme, setTheme, scrolled,
  displayedProjects, showAll, setShowAll,
  filter, setFilter, filteredByCategory,
  selectedProject, setSelectedProject
}) => {
    const t = translations[lang];
    const location = useLocation();

    // Reset scroll indicator/scrolled state on route change if needed
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
      <div className={`min-h-screen text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-500 ${lang === 'ar' ? 'font-["IBM_Plex_Sans_Arabic"]' : 'font-["Work_Sans"]'}`}>
        <NebulaBackground />
        <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} scrolled={scrolled} />

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20 overflow-hidden">
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
                    {translations[lang].heroDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <NavLink
                      to="/projects"
                      className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)] hover:bg-blue-700 transition-all flex items-center gap-3 group"
                    >
                      {t.heroBtnWork}
                      <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                    </NavLink>
                    <div className="flex gap-8 text-3xl opacity-30 hover:opacity-100 transition-opacity">
                      <a href="https://github.com/Su03l" target="_blank" className="hover:text-blue-500 transition-all"><i className="fab fa-github"></i></a>
                      <a href="https://linkedin.com/in/suliaman-yousef-36265a320" target="_blank" className="hover:text-blue-500 transition-all"><i className="fab fa-linkedin"></i></a>
                      <a href="https://twitter.com/Su05l" target="_blank" className="hover:text-blue-500 transition-all"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 animate-bounce">
                  <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-transparent rounded-full"></div>
                </div>
              </section>
            </>
          } />

          <Route path="/about" element={
            <section id="about" className="py-40 container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                  <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">{t.aboutTitle}</h2>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                    Software Engineering & <br /> Web Development
                  </h3>
                </div>
                <div className="flex justify-center gap-4 md:gap-12 mb-20">
                  {[
                    { val: "0+", label: t.statsYears },
                    { val: "25+", label: t.statsProjects },
                    { val: "10+", label: t.statsTechs }
                  ].map((stat, i) => (
                    <div key={i} className="glass py-8 px-6 md:px-12 rounded-[2.5rem] border-white/5 text-center min-w-[120px] md:min-w-[180px]">
                      <span className="text-4xl md:text-5xl font-black text-blue-600 block mb-2">{stat.val}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{stat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                  <div className="space-y-6 text-xl text-slate-400 font-light leading-relaxed">
                    <p>{t.aboutText1}</p>
                    <p>{t.aboutText2}</p>
                    <p>{t.aboutText3}</p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[450px] aspect-square">
                      <div className="relative z-10 rounded-[3rem] overflow-hidden w-full h-full border-2 border-white/10 shadow-2xl group grayscale hover:grayscale-0 transition-all duration-700">
                        <img src="/img/avatar.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Suliman Yousef" />
                      </div>
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
                      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 blur-[80px] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <TechMarquee />
              </div>
            </section>
          } />

          <Route path="/resume" element={
            <section id="resume" className="py-40 bg-white/[0.01]">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24 space-y-4">
                  <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">Portfolio</h2>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase italic">Professional Path</h3>
                  <div className="flex justify-center gap-6 pt-12">
                    <a href="SULIMAN_YOUSEF_CV.pdf" target="_blank" className="px-10 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                      <i className="fas fa-eye"></i> View CV
                    </a>
                    <a href="SULIMAN_YOUSEF_CV.pdf" download className="px-10 py-4 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
                      <i className="fas fa-download"></i> Download CV
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-40 items-stretch">
                  <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full">
                    <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> EXPERIENCE</h2>
                    <div className="flex-1 p-10 md:p-14 glass rounded-[3.5rem] border-blue-600/20 group flex flex-col justify-center">
                      {EXPERIENCES.map((exp, i) => (
                        <div key={i} className="mb-12 last:mb-0">
                          <div className="mb-8">
                            <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-500 font-black tracking-[0.3em] mb-4 text-[10px] uppercase rounded-full border border-blue-600/20">{exp.period}</span>
                            <h4 className="text-3xl font-black mb-1 tracking-tighter group-hover:text-blue-500 transition-colors leading-tight uppercase italic">{exp.role[lang]}</h4>
                            <p className="text-xl text-slate-400 font-light opacity-60 italic">{exp.company[lang]}</p>
                          </div>
                          <ul className="space-y-6 text-slate-300 text-sm font-medium">
                            {exp.bullets[lang].map((bullet, idx) => (
                              <li key={idx} className="flex gap-4">
                                <span className="text-blue-600 font-black text-lg">/</span>
                                <span className="opacity-80 group-hover:opacity-100 transition-opacity leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col h-full">
                    <h2 className="text-3xl font-black tracking-tighter mb-10 flex items-center gap-4"><span className="w-10 h-1 bg-blue-600"></span> {t.educationTitle}</h2>
                    <div className="flex-1 p-10 md:p-14 glass rounded-[3.5rem] border-blue-600/20 group flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full"></div>
                      <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-blue-500 font-black tracking-[0.3em] mb-4 text-[10px] uppercase rounded-full border border-blue-600/20 w-fit">2020 — 2025</span>
                      <h4 className="text-4xl font-black mb-4 tracking-tighter group-hover:text-blue-500 transition-colors uppercase leading-none italic">Bachelor of <br /> Computer Science</h4>
                      <p className="text-2xl text-slate-400 italic mb-12 font-light">{t.universityName}</p>
                      <div className="flex items-center gap-4 opacity-50 uppercase tracking-[0.3em] text-[10px] font-black border-t border-white/5 pt-10">
                        <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i> Madina - Saudi Arabia
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          } />

          <Route path="/services" element={
            <section id="services" className="py-32 container mx-auto px-6">
              <div className="text-center mb-24 space-y-4">
                <h2 className="text-blue-500 font-black uppercase tracking-[0.5em] text-sm">Services</h2>
                <h3 className="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase italic">Technology Solutions & Expertise</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((s, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="p-8 glass rounded-[2.5rem] border-white/5 group relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                      <i className={`fas ${s.icon} text-[8rem]`}></i>
                    </div>
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-xl mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <i className={`fas ${s.icon} text-white`}></i>
                    </div>
                    <h4 className="text-2xl font-black mb-4 tracking-tighter uppercase italic group-hover:text-blue-500 transition-colors">{s.title[lang]}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 opacity-80 flex-grow">{s.description[lang]}</p>
                    <ul className="space-y-4">
                      {s.features[lang].map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/20 group-hover/item:bg-blue-600 group-hover/item:border-blue-600 transition-all">
                            <i className="fas fa-check text-[8px] text-blue-500 group-hover/item:text-white"></i>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover/item:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>
          } />

          <Route path="/projects" element={
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
                    className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${filter === f ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-white/5 border-white/10 opacity-40 hover:opacity-100 hover:bg-white/10'}`}
                  >
                    {t[`filter${f.charAt(0).toUpperCase() + f.slice(1)}` as keyof Translation]}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                <AnimatePresence mode="popLayout">
                  {displayedProjects.map((p) => (
                    <ProjectCard key={p.id} project={p} lang={lang} onOpen={setSelectedProject} />
                  ))}
                </AnimatePresence>
              </div>
              {(filteredByCategory.length > 9 || (filteredByCategory.some(p => p.isLaravelCollection) && !showAll)) && (
                <div className="flex justify-center">
                  <button onClick={() => setShowAll(!showAll)} className="group flex flex-col items-center gap-4">
                    <div className="w-16 h-16 glass rounded-full flex items-center justify-center border-blue-600/20 group-hover:border-blue-600 group-hover:scale-110 transition-all">
                      <i className={`fas fa-chevron-${showAll ? 'up' : 'down'} text-blue-500`}></i>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">
                      {showAll ? t.showLess : t.showMore}
                    </span>
                  </button>
                </div>
              )}
            </section>
          } />

          <Route path="/contact" element={
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
                        <a href="mailto:sulimanyousef1478@outlook.sa" className="text-sm font-bold hover:text-blue-500 transition-colors">sulimanyousef1478@outlook.sa</a>
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
                        <a href="tel:+966531608085" className="text-sm font-bold hover:text-blue-500 transition-colors">+966 53 160 8085</a>
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
                        <a href="https://twitter.com/su05l" target="_blank" className="text-sm font-bold hover:text-blue-500 transition-colors">@su05l</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="glass p-10 md:p-12 h-full rounded-[3rem] border-blue-600/20 flex flex-col justify-center bg-blue-600/[0.02]">
                    <h4 className="text-3xl font-black mb-6 uppercase tracking-tighter leading-tight italic">{t.contactCTA}</h4>
                    <p className="text-slate-400 font-medium mb-10 leading-relaxed">{t.contactCTADesc}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="mailto:sulimanyousef1478@outlook.sa" className="px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all text-center">
                        {t.contactSendEmail}
                      </a>
                      <a href="https://wa.me/966531608085" target="_blank" className="px-8 py-4 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 hover:border-green-600 transition-all text-center flex items-center justify-center gap-2">
                        <i className="fab fa-whatsapp"></i> {t.contactWhatsApp}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          } />
        </Routes>

        {/* Footer Section */}
        <footer className="pt-24 pb-12 border-t border-white/5 bg-black/40 backdrop-blur-md">
          <div className="container mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-blue-500/20">SY</div>
                  <span className="font-black text-xl tracking-tighter uppercase italic">Suliman Yousef</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed opacity-70 font-medium">{t.footerDesc}</p>
                <div className="flex gap-6">
                  <a href="https://github.com/Su03l" target="_blank" className="text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all"><i className="fab fa-github"></i></a>
                  <a href="https://linkedin.com/in/suliaman-yousef-36265a320" target="_blank" className="text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all"><i className="fab fa-linkedin"></i></a>
                  <a href="https://twitter.com/Su05l" target="_blank" className="text-xl opacity-40 hover:opacity-100 hover:text-blue-500 transition-all"><i className="fab fa-twitter"></i></a>
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.footerQuickLinks}</h4>
                <ul className="space-y-4">
                  {['home', 'about', 'resume', 'services', 'projects', 'contact'].map(link => {
                    const path = link === 'home' ? '/' : `/${link}`;
                    return (
                      <li key={link}>
                        <NavLink to={path} className="text-sm text-slate-400 hover:text-blue-500 transition-colors font-medium opacity-80 hover:opacity-100">
                          {(t as any)[`nav${link.charAt(0).toUpperCase() + link.slice(1)}`]}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.servicesTitle}</h4>
                <ul className="space-y-4 text-sm text-slate-400 font-medium">
                  <li className="opacity-80 hover:opacity-100 hover:text-white transition-all cursor-default">Front-end Development</li>
                  <li className="opacity-80 hover:opacity-100 hover:text-white transition-all cursor-default">Backend Development</li>
                  <li className="opacity-80 hover:opacity-100 hover:text-white transition-all cursor-default">Software Engineering</li>
                  <li className="opacity-80 hover:opacity-100 hover:text-white transition-all cursor-default">UI/UX Design</li>
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">{t.footerConnect}</h4>
                <ul className="space-y-6 text-sm text-slate-400 font-medium">
                  <li className="flex items-center gap-4">
                    <i className="fab fa-twitter text-blue-500"></i>
                    <a href="https://twitter.com/su05l" target="_blank" className="hover:text-blue-500 transition-colors">@su05l</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <i className="fas fa-envelope text-blue-500"></i>
                    <a href="mailto:sulimanyousef1478@outlook.sa" className="hover:text-blue-500 transition-colors">sulimanyousef1478@outlook.sa</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <i className="fas fa-phone text-blue-500"></i>
                    <a href="tel:+966531608085" className="hover:text-blue-500 transition-colors">+966 53 160 8085</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                    <span>Medina - Saudi Arabia</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">© 2026 Suliman Yousef. {t.rightsReserved}</p>
              <div className="flex gap-8 text-[8px] font-black uppercase tracking-[0.3em] opacity-20">
                <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
                <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll To Top Button Component */}
        <ScrollToTop />

        {/* Project Modal Container */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <ProjectModal
              key="modal"
              project={selectedProject}
              lang={lang}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    );
  };

export default App;
