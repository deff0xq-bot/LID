import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Users, Zap, TrendingUp } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function WhySection() {
  const { theme, t } = useThemeLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const icons = [Sparkles, Users, Zap, TrendingUp];

  return (
    <section 
      id="why"
      ref={ref}
      className={cn(
        'py-32 px-6 relative overflow-hidden',
        theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'
      )}
    >
      {/* Background Element */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full',
          theme === 'dark' ? 'bg-white' : 'bg-black'
        )}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={cn(
            'text-4xl md:text-6xl lg:text-7xl font-black tracking-tight',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            {t.why.title}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.why.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={cn(
                  'relative p-8 md:p-10 rounded-3xl border overflow-hidden group cursor-default backdrop-blur-xl',
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10 hover:border-white/30' 
                    : 'bg-white/70 border-black/10 hover:border-black/30 hover:shadow-2xl'
                )}
              >
                {/* Icon Background */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', bounce: 0.4 }}
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 backdrop-blur-xl border',
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/10 group-hover:bg-white/20' 
                      : 'bg-black/5 border-black/10 group-hover:bg-black/10'
                  )}
                >
                  <Icon className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
                </motion.div>

                {/* Title */}
                <h3 className={cn(
                  'text-2xl md:text-3xl font-bold mb-4',
                  theme === 'dark' ? 'text-white' : 'text-black'
                )}>
                  {point.title}
                </h3>

                {/* Description */}
                <p className={cn(
                  'text-lg leading-relaxed',
                  theme === 'dark' ? 'text-white/60' : 'text-black/60'
                )}>
                  {point.desc}
                </p>

                {/* Hover Glow Effect */}
                <div className={cn(
                  'absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500',
                  theme === 'dark' ? 'bg-white' : 'bg-black'
                )} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}