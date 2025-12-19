import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { theme, toggleTheme, language, setLanguage, t } = useThemeLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'es', label: 'ES' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? theme === 'dark' 
              ? 'bg-black/70 backdrop-blur-2xl border-b border-white/10' 
              : 'bg-white/70 backdrop-blur-2xl border-b border-black/10'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => scrollTo('hero')}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692a0d445228a0792af27788/269375ff0_photo_2025-11-23_11-00-46.jpg"
                alt="$LID Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className={cn(
                'text-xl font-bold tracking-tight',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}>
                $LID
              </span>
            </motion.div>



            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all backdrop-blur-xl border',
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                      : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                  )}
                >
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </motion.button>
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className={cn(
                        'absolute top-full right-0 mt-2 rounded-xl overflow-hidden shadow-2xl backdrop-blur-2xl border',
                        theme === 'dark' ? 'bg-black/90 border-white/20' : 'bg-white/90 border-black/10'
                      )}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            'w-full px-6 py-3 text-sm font-medium transition-colors text-left',
                            language === lang.code
                              ? theme === 'dark' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                              : theme === 'dark' ? 'text-white/70 hover:bg-white/10' : 'text-black/70 hover:bg-black/10'
                          )}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={cn(
                  'p-2.5 rounded-full transition-all backdrop-blur-xl border',
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                    : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                )}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              {/* Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  'p-2.5 rounded-full transition-all backdrop-blur-xl border',
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                    : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                )}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Navigation Menu with Advanced Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'fixed inset-0 z-40',
              theme === 'dark' ? 'bg-black' : 'bg-white'
            )}
          >
            {/* Animated Background Lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  className={cn(
                    'absolute h-px w-full origin-left',
                    theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                  )}
                  style={{ top: `${10 + i * 10}%` }}
                />
              ))}
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              {[
                { id: 'about', label: t.nav.about },
                { id: 'how-it-works', label: t.nav.howItWorks },
                { id: 'why', label: t.nav.why },
                { id: 'roadmap', label: 'Roadmap' },
                { id: 'vision', label: t.nav.vision }
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ 
                    delay: 0.2 + i * 0.1, 
                    type: 'spring', 
                    stiffness: 100,
                    damping: 15
                  }}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'text-5xl md:text-7xl font-black tracking-tight py-4 relative group overflow-hidden',
                    theme === 'dark' ? 'text-white' : 'text-black'
                  )}
                >
                  <motion.span 
                    className="relative z-10 inline-block"
                    whileHover={{ x: 20 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Animated Underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                      'absolute bottom-2 left-0 h-1 w-full origin-left',
                      theme === 'dark' ? 'bg-white' : 'bg-black'
                    )}
                  />
                  
                  {/* Number */}
                  <span className={cn(
                    'absolute right-0 top-1/2 -translate-y-1/2 text-[120px] font-black opacity-0 group-hover:opacity-5 transition-opacity',
                    theme === 'dark' ? 'text-white' : 'text-black'
                  )}>
                    0{i + 1}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}