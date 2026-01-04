import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../../core/types';

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

export default WordCycler;
