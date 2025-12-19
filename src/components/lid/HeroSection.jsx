import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  const { theme, t } = useThemeLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 20);
      mouseY.set((clientY - innerHeight / 2) / 20);
      setMousePosition({ x: clientX, y: clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className={cn(
        'min-h-screen flex items-center justify-center relative overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-white'
      )}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following Glow */}
        <motion.div
          className={cn(
            'absolute w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none',
            theme === 'dark' ? 'bg-white/[0.03]' : 'bg-black/[0.02]'
          )}
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />

        {/* Rotating Orbital Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[800, 600, 400].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2"
              style={{ 
                width: size, 
                height: size, 
                marginLeft: -size / 2, 
                marginTop: -size / 2 
              }}
            >
              <div className={cn(
                'w-full h-full rounded-full border',
                theme === 'dark' ? 'border-white/[0.05]' : 'border-black/[0.05]'
              )} />
              {/* Orbital Dots */}
              {[0, 90, 180, 270].map((deg) => (
                <motion.div
                  key={deg}
                  className={cn(
                    'absolute w-2 h-2 rounded-full',
                    theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
                  )}
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${deg}deg) translateX(${size / 2}px) translateY(-50%)`
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: deg / 360 * 2 
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${10 + (i * 12)}%`,
              y: `${20 + (i * 8)}%`,
              rotate: i * 45
            }}
            animate={{ 
              y: [`${20 + (i * 8)}%`, `${15 + (i * 8)}%`, `${20 + (i * 8)}%`],
              rotate: [i * 45, i * 45 + 180, i * 45 + 360]
            }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className={cn(
              'absolute w-8 h-8 border',
              i % 2 === 0 ? 'rounded-lg' : 'rounded-full',
              theme === 'dark' ? 'border-white/10' : 'border-black/10'
            )}
          />
        ))}

        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <motion.path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke={theme === 'dark' ? '#fff' : '#000'} 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo Animation with 3D Effect */}
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.3 }}
          style={{ x: smoothX, y: smoothY }}
          className="mb-8 perspective-1000"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glowing Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
              className={cn(
                'absolute -inset-4 rounded-full border-2 border-dashed',
                theme === 'dark' ? 'border-white/20' : 'border-black/20'
              )}
            />
            <motion.div
              animate={{ 
                rotate: -360
              }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className={cn(
                'absolute -inset-8 rounded-full border',
                theme === 'dark' ? 'border-white/10' : 'border-black/10'
              )}
            />
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692a0d445228a0792af27788/269375ff0_photo_2025-11-23_11-00-46.jpg"
              alt="$LID Logo"
              className={cn(
                'w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto relative z-10',
                theme === 'dark' ? 'shadow-[0_0_60px_rgba(255,255,255,0.1)]' : 'shadow-[0_0_60px_rgba(0,0,0,0.1)]'
              )}
            />
          </motion.div>
        </motion.div>

        {/* Main Heading with Stagger Animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            'text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}
        >
          <span className="inline-block overflow-hidden">
            {t.hero.tagline.split('.').filter(w => w.trim()).map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  delay: 0.5 + i * 0.15,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
                className="inline-block mr-4 relative"
              >
                {word.trim()}.
                <motion.span
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  className={cn(
                    'absolute inset-0 origin-right',
                    theme === 'dark' ? 'bg-white' : 'bg-black'
                  )}
                />
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className={cn(
            'text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 relative',
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          )}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 1.5, ease: 'easeOut' }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            {t.hero.subtitle}
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            className={cn(
              'inline-block w-0.5 h-6 ml-1 align-middle',
              theme === 'dark' ? 'bg-white/60' : 'bg-black/60'
            )}
          />
        </motion.p>

        {/* CTA Button with Magnetic Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('about')}
            className={cn(
              'group relative px-10 py-4 rounded-full text-lg font-semibold transition-all overflow-hidden',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}
          >
            {/* Animated Border */}
            <span className={cn(
              'absolute inset-0 rounded-full border-2 transition-all duration-300',
              theme === 'dark' 
                ? 'border-white/30 group-hover:border-white/60' 
                : 'border-black/30 group-hover:border-black/60'
            )} />
            
            {/* Shimmer Effect */}
            <motion.span
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className={cn(
                'absolute inset-0 w-1/2 skew-x-12',
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-black/5 to-transparent'
              )}
            />
            
            {/* Background Fill on Hover */}
            <motion.span
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'absolute inset-0 rounded-full origin-center',
                theme === 'dark' ? 'bg-white/10' : 'bg-black/5'
              )}
            />
            
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.learnMore}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            onClick={() => scrollTo('about')}
            className={cn(
              'cursor-pointer flex flex-col items-center gap-2 group',
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            )}
          >
            <motion.div
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className={cn(
                'w-6 h-10 rounded-full border-2 flex items-start justify-center p-1',
                theme === 'dark' ? 'border-white/30' : 'border-black/30'
              )}
            >
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  theme === 'dark' ? 'bg-white/60' : 'bg-black/60'
                )}
              />
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}