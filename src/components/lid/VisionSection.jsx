import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Eye, Rocket, Gem } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function VisionSection() {
  const { theme, t } = useThemeLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="vision"
      ref={ref}
      className={cn(
        'py-32 px-6 relative overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-white'
      )}
    >
      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              delay: i * 1.5,
              ease: 'linear'
            }}
            className={cn(
              'absolute h-px',
              theme === 'dark' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-black/20 to-transparent'
            )}
            style={{ 
              top: `${20 + i * 15}%`,
              width: '50%'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
              className={cn(
                'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 backdrop-blur-xl border',
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-black/5 border-black/10'
              )}
            >
              <Eye className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
            </motion.div>
            <h2 className={cn(
              'text-4xl md:text-6xl font-black tracking-tight mb-6',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}>
              {t.vision.title}
            </h2>
            <p className={cn(
              'text-xl mb-8',
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            )}>
              {t.vision.subtitle}
            </p>

            {/* Vision Items */}
            <div className="space-y-4">
              {t.vision.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring', bounce: 0.5 }}
                    className={cn(
                      'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                      theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
                    )}
                  >
                    <Check className={cn(
                      'w-4 h-4',
                      theme === 'dark' ? 'text-white' : 'text-black'
                    )} />
                  </motion.div>
                  <span className={cn(
                    'text-lg',
                    theme === 'dark' ? 'text-white/80' : 'text-black/80'
                  )}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              className={cn(
                'p-10 rounded-3xl border relative overflow-hidden backdrop-blur-xl',
                theme === 'dark' 
                  ? 'bg-white/5 border-white/20' 
                  : 'bg-white/70 border-black/10 shadow-2xl'
              )}
            >
              {/* Animated Ring */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={cn(
                  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border',
                  theme === 'dark' ? 'border-white/20' : 'border-black/10'
                )}
              />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-6"
                >
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692a0d445228a0792af27788/269375ff0_photo_2025-11-23_11-00-46.jpg"
                    alt="$LID"
                    className={cn(
                      'w-32 h-32 rounded-full mx-auto shadow-2xl ring-4',
                      theme === 'dark' ? 'ring-white/20' : 'ring-black/10'
                    )}
                  />
                </motion.div>
                <p className={cn(
                  'text-2xl md:text-3xl font-bold leading-relaxed',
                  theme === 'dark' ? 'text-white' : 'text-black'
                )}>
                  {t.vision.tagline}
                </p>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className={cn(
                'absolute -top-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center backdrop-blur-xl border',
                theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-black/10 shadow-xl'
              )}
            >
              <Rocket className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className={cn(
                'absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-xl border',
                theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-white/80 border-black/10 shadow-xl'
              )}
            >
              <Gem className={cn('w-6 h-6', theme === 'dark' ? 'text-white' : 'text-black')} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}