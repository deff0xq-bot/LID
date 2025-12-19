import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Coins } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const { theme, t } = useThemeLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      id="about"
      ref={ref}
      className={cn(
        'py-32 px-6 relative overflow-hidden',
        theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className={cn('w-full h-full', theme === 'dark' ? 'bg-white' : 'bg-black')}
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className={cn(
              'inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6',
              theme === 'dark' ? 'bg-white/10 text-white/80' : 'bg-black/10 text-black/80'
            )}
          >
            {t.about.subtitle}
          </motion.span>
          <h2 className={cn(
            'text-4xl md:text-6xl lg:text-7xl font-black tracking-tight',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            {t.about.title}
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className={cn(
              'text-xl md:text-2xl leading-relaxed',
              theme === 'dark' ? 'text-white/80' : 'text-black/80'
            )}>
              {t.about.description}
            </p>
            <p className={cn(
              'text-lg leading-relaxed',
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            )}>
              {t.about.appDescription}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className={cn(
                'p-6 rounded-2xl backdrop-blur-xl border',
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-black/5 border-black/10'
              )}
            >
              <p className={cn(
                'text-lg font-medium',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}>
                {t.about.reward}
              </p>
            </motion.div>
            <p className={cn(
              'text-2xl font-bold tracking-tight',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}>
              {t.about.tagline}
            </p>
          </motion.div>

          {/* Visual Element with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y }}
            className="relative perspective-1000"
          >
            <div className={cn(
              'aspect-square rounded-3xl overflow-hidden relative backdrop-blur-xl border',
              theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
            )}>
              {/* Animated Like/Dislike Cards with 3D Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    x: [-30, 30, -30],
                    rotateY: [-15, 15, -15],
                    rotateZ: [-5, 5, -5]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className={cn(
                    'absolute w-40 h-56 rounded-2xl backdrop-blur-xl border flex flex-col items-center justify-center gap-4',
                    theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-black/10 shadow-xl'
                  )}
                  style={{ left: '10%', top: '10%', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center',
                      theme === 'dark' ? 'bg-white/20' : 'bg-black/10'
                    )}
                  >
                    <ThumbsUp className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
                  </motion.div>
                  <span className={cn('font-bold text-lg', theme === 'dark' ? 'text-white' : 'text-black')}>LIKE</span>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    x: [30, -30, 30],
                    rotateY: [15, -15, 15],
                    rotateZ: [5, -5, 5]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className={cn(
                    'absolute w-40 h-56 rounded-2xl backdrop-blur-xl border flex flex-col items-center justify-center gap-4',
                    theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-black/10 shadow-xl'
                  )}
                  style={{ right: '10%', bottom: '10%', transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center',
                      theme === 'dark' ? 'bg-white/20' : 'bg-black/10'
                    )}
                  >
                    <ThumbsDown className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
                  </motion.div>
                  <span className={cn('font-bold text-lg', theme === 'dark' ? 'text-white' : 'text-black')}>DISLIKE</span>
                </motion.div>
              </div>

              {/* Center Logo with Pulsing Effect */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  {/* Pulse Rings */}
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 2, 2],
                        opacity: [0.3, 0, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: 'easeOut'
                      }}
                      className={cn(
                        'absolute inset-0 rounded-full border',
                        theme === 'dark' ? 'border-white/30' : 'border-black/20'
                      )}
                    />
                  ))}
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692a0d445228a0792af27788/269375ff0_photo_2025-11-23_11-00-46.jpg"
                    alt="$LID"
                    className={cn(
                      'w-24 h-24 rounded-full relative z-10',
                      theme === 'dark' ? 'shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'shadow-[0_0_40px_rgba(0,0,0,0.1)]'
                    )}
                  />
                </motion.div>
              </div>

              {/* Floating Coins */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    x: `${20 + i * 15}%`, 
                    y: '100%',
                    rotate: 0
                  }}
                  animate={{ 
                    y: [null, '-20%'],
                    rotate: [0, 360],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: 'easeOut'
                  }}
                  className="absolute"
                >
                  <Coins className={cn('w-6 h-6', theme === 'dark' ? 'text-white/40' : 'text-black/30')} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}