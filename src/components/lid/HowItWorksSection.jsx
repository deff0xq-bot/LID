import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function HowItWorksSection() {
  const { theme, t } = useThemeLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="how-it-works"
      ref={ref}
      className={cn(
        'py-32 px-6 relative overflow-hidden',
        theme === 'dark' ? 'bg-black' : 'bg-white'
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className={cn(
            'text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            {t.howItWorks.title}
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.howItWorks.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={cn(
                'relative p-8 rounded-3xl border transition-all duration-300 group backdrop-blur-xl',
                theme === 'dark' 
                  ? 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10' 
                  : 'bg-white/70 border-black/10 hover:border-black/30 hover:shadow-2xl'
              )}
            >
              {/* Step Number */}
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15, type: 'spring', bounce: 0.5 }}
                className={cn(
                  'block text-6xl md:text-7xl font-black mb-4 transition-all duration-300',
                  theme === 'dark' 
                    ? 'text-white/10 group-hover:text-white/20' 
                    : 'text-black/10 group-hover:text-black/20'
                )}
              >
                {step.num}
              </motion.span>

              {/* Step Title */}
              <h3 className={cn(
                'text-xl md:text-2xl font-bold mb-3',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}>
                {step.title}
              </h3>

              {/* Step Description */}
              <p className={cn(
                'text-base leading-relaxed',
                theme === 'dark' ? 'text-white/60' : 'text-black/60'
              )}>
                {step.desc}
              </p>

              {/* Connection Line (not on last item) */}
              {index < 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  className={cn(
                    'hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 origin-left',
                    theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
                  )}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className={cn(
            'text-xl md:text-2xl font-medium',
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          )}>
            {t.howItWorks.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}