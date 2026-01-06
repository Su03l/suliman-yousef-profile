import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../../core/constants';
import { Theme } from '../../core/types';

interface TechMarqueeProps {
    theme: Theme;
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ theme }) => {
    const isDark = theme === 'dark';

    return (
        <div className="relative w-full overflow-hidden bg-blue-600/5 py-12 border-y border-white/5 group">
            <motion.div
                animate={{ x: [0, -2400] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="flex whitespace-nowrap items-center gap-24"
            >
                {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((item, i) => {
                    const svgSrc = !isDark && item.svgLight ? item.svgLight : item.svg;

                    return (
                        <div key={i} className="flex items-center gap-6 group-hover:scale-110 transition-transform">
                            <img src={svgSrc} alt={item.name} className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <span className="text-3xl md:text-4xl font-black uppercase tracking-tighter opacity-30 group-hover:opacity-100 hover:text-blue-500 transition-all cursor-default">
                                {item.name}
                            </span>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TechMarquee;
