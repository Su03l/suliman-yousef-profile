import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonContent = (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '32px',
                        right: '32px',
                        zIndex: 999999,
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '20px',
                        transition: 'all 0.3s',
                        outline: 'none'
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: '#1d4ed8' }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up"></i>
                </motion.button>
            )}
        </AnimatePresence>
    );

    return typeof document !== 'undefined' ? createPortal(buttonContent, document.body) : null;
};

export default ScrollToTop;
