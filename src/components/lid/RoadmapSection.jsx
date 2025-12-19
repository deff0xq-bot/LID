import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Users, Globe, Zap, Trophy, 
  Target, Sparkles, ArrowRight, Check,
  Calendar, TrendingUp, Crown
} from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

const roadmapData = {
  en: [
    {
      phase: 'Phase 1',
      title: 'Launch',
      period: 'Q1 2025',
      status: 'completed',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Token Launch on DEX',
        'Website & Whitepaper Release',
        'Community Building',
        'Initial Marketing Campaign'
      ],
      details: 'Foundation phase focused on establishing the $LID ecosystem and building our core community.'
    },
    {
      phase: 'Phase 2',
      title: 'App Development',
      period: 'Q2 2025',
      status: 'current',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Like & Dislike App Beta',
        'Voting Mechanism Implementation',
        'User Reward System',
        'Mobile App Development'
      ],
      details: 'Building the core application with vote-to-earn mechanics and seamless user experience.'
    },
    {
      phase: 'Phase 3',
      title: 'Growth',
      period: 'Q3 2025',
      status: 'upcoming',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      items: [
        'CEX Listings',
        'Brand Partnerships',
        'Influencer Collaborations',
        '100K+ Active Users'
      ],
      details: 'Expanding our reach through strategic partnerships and major exchange listings.'
    },
    {
      phase: 'Phase 4',
      title: 'Ecosystem',
      period: 'Q4 2025',
      status: 'upcoming',
      icon: Globe,
      color: 'from-orange-500 to-amber-500',
      items: [
        'Daily Quests & Streaks',
        'NFT Integration',
        'Governance DAO',
        'Prediction Markets'
      ],
      details: 'Evolving into a complete ecosystem with multiple earning opportunities and community governance.'
    },
    {
      phase: 'Phase 5',
      title: 'Domination',
      period: '2026',
      status: 'upcoming',
      icon: Crown,
      color: 'from-rose-500 to-pink-500',
      items: [
        'Global Brand Recognition',
        '1M+ Active Users',
        'Multi-chain Expansion',
        'Real-world Partnerships'
      ],
      details: 'Becoming the leading vote-to-earn platform with global adoption and mainstream recognition.'
    }
  ],
  ru: [
    {
      phase: 'Фаза 1',
      title: 'Запуск',
      period: 'Q1 2025',
      status: 'completed',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Запуск токена на DEX',
        'Релиз сайта и Whitepaper',
        'Построение сообщества',
        'Начальная маркетинговая кампания'
      ],
      details: 'Фаза основания, направленная на создание экосистемы $LID и построение нашего сообщества.'
    },
    {
      phase: 'Фаза 2',
      title: 'Разработка приложения',
      period: 'Q2 2025',
      status: 'current',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Бета-версия Like & Dislike',
        'Внедрение механизма голосования',
        'Система наград пользователей',
        'Разработка мобильного приложения'
      ],
      details: 'Создание основного приложения с механикой голосования и бесшовным пользовательским опытом.'
    },
    {
      phase: 'Фаза 3',
      title: 'Рост',
      period: 'Q3 2025',
      status: 'upcoming',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      items: [
        'Листинги на CEX',
        'Партнёрства с брендами',
        'Коллаборации с инфлюенсерами',
        '100K+ активных пользователей'
      ],
      details: 'Расширение охвата через стратегические партнёрства и листинги на крупных биржах.'
    },
    {
      phase: 'Фаза 4',
      title: 'Экосистема',
      period: 'Q4 2025',
      status: 'upcoming',
      icon: Globe,
      color: 'from-orange-500 to-amber-500',
      items: [
        'Ежедневные квесты и серии',
        'Интеграция NFT',
        'DAO управление',
        'Рынки предсказаний'
      ],
      details: 'Эволюция в полноценную экосистему с множеством возможностей заработка.'
    },
    {
      phase: 'Фаза 5',
      title: 'Доминирование',
      period: '2026',
      status: 'upcoming',
      icon: Crown,
      color: 'from-rose-500 to-pink-500',
      items: [
        'Глобальная узнаваемость бренда',
        '1M+ активных пользователей',
        'Мультичейн расширение',
        'Партнёрства в реальном мире'
      ],
      details: 'Становление ведущей платформой vote-to-earn с глобальным принятием.'
    }
  ],
  es: [
    {
      phase: 'Fase 1',
      title: 'Lanzamiento',
      period: 'Q1 2025',
      status: 'completed',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      items: [
        'Lanzamiento de Token en DEX',
        'Sitio Web y Whitepaper',
        'Construcción de Comunidad',
        'Campaña de Marketing Inicial'
      ],
      details: 'Fase de fundación enfocada en establecer el ecosistema $LID y construir nuestra comunidad.'
    },
    {
      phase: 'Fase 2',
      title: 'Desarrollo de App',
      period: 'Q2 2025',
      status: 'current',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'App Like & Dislike Beta',
        'Implementación de Votación',
        'Sistema de Recompensas',
        'Desarrollo de App Móvil'
      ],
      details: 'Construyendo la aplicación principal con mecánicas de vota-y-gana.'
    },
    {
      phase: 'Fase 3',
      title: 'Crecimiento',
      period: 'Q3 2025',
      status: 'upcoming',
      icon: TrendingUp,
      color: 'from-violet-500 to-purple-500',
      items: [
        'Listados en CEX',
        'Alianzas con Marcas',
        'Colaboraciones con Influencers',
        '100K+ Usuarios Activos'
      ],
      details: 'Expandiendo nuestro alcance a través de alianzas estratégicas.'
    },
    {
      phase: 'Fase 4',
      title: 'Ecosistema',
      period: 'Q4 2025',
      status: 'upcoming',
      icon: Globe,
      color: 'from-orange-500 to-amber-500',
      items: [
        'Misiones y Rachas Diarias',
        'Integración de NFT',
        'Gobernanza DAO',
        'Mercados de Predicción'
      ],
      details: 'Evolucionando hacia un ecosistema completo con múltiples oportunidades.'
    },
    {
      phase: 'Fase 5',
      title: 'Dominación',
      period: '2026',
      status: 'upcoming',
      icon: Crown,
      color: 'from-rose-500 to-pink-500',
      items: [
        'Reconocimiento Global',
        '1M+ Usuarios Activos',
        'Expansión Multi-chain',
        'Alianzas del Mundo Real'
      ],
      details: 'Convirtiéndonos en la plataforma líder de vota-y-gana con adopción global.'
    }
  ]
};

const RoadmapCard = ({ item, index, isInView, theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={cn(
        'relative flex items-center gap-8',
        'md:justify-center',
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
        <motion.div
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          className="relative"
        >
          {/* Outer Pulse */}
          {item.status === 'current' && (
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={cn(
                'absolute inset-0 rounded-full',
                theme === 'dark' ? 'bg-white' : 'bg-black'
              )}
            />
          )}
          
          {/* Node Circle */}
          <motion.div
            className={cn(
              'w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative z-10 backdrop-blur-xl border-2',
              item.status === 'completed' 
                ? theme === 'dark' ? 'bg-white text-black border-white' : 'bg-black text-white border-black'
                : item.status === 'current'
                  ? theme === 'dark' ? 'bg-white/20 text-white border-white' : 'bg-black/10 text-black border-black'
                  : theme === 'dark' ? 'bg-white/5 text-white/50 border-white/20' : 'bg-black/5 text-black/50 border-black/20'
            )}
          >
            {item.status === 'completed' ? (
              <Check className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <Icon className="w-6 h-6 md:w-8 md:h-8" />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        animate={isHovered ? { scale: 1.02, y: -5 } : { scale: 1, y: 0 }}
        className={cn(
          'ml-20 md:ml-0 md:w-[calc(50%-60px)] relative',
          isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
        )}
      >
        <motion.div
          className={cn(
            'p-6 md:p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 relative overflow-hidden',
            theme === 'dark' 
              ? 'bg-white/5 border-white/10 hover:border-white/30' 
              : 'bg-white/80 border-black/10 hover:border-black/30 shadow-lg hover:shadow-xl'
          )}
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
            className={cn(
              'absolute inset-0 w-1/2 skew-x-12 pointer-events-none',
              theme === 'dark' 
                ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' 
                : 'bg-gradient-to-r from-transparent via-black/5 to-transparent'
            )}
          />

          {/* Status Badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={cn(
              'text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full',
              item.status === 'completed'
                ? theme === 'dark' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
                : item.status === 'current'
                  ? theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'
                  : theme === 'dark' ? 'bg-white/10 text-white/50' : 'bg-black/5 text-black/50'
            )}>
              {item.status === 'completed' ? '✓ Completed' : item.status === 'current' ? '● In Progress' : '○ Upcoming'}
            </span>
            <span className={cn(
              'text-sm font-medium flex items-center gap-1',
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            )}>
              <Calendar className="w-4 h-4" />
              {item.period}
            </span>
          </div>

          {/* Phase & Title */}
          <div className="mb-4">
            <span className={cn(
              'text-sm font-medium',
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            )}>
              {item.phase}
            </span>
            <h3 className={cn(
              'text-2xl md:text-3xl font-black tracking-tight',
              theme === 'dark' ? 'text-white' : 'text-black'
            )}>
              {item.title}
            </h3>
          </div>

          {/* Items List */}
          <ul className="space-y-2 mb-4">
            {item.items.map((listItem, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                className={cn(
                  'flex items-center gap-2 text-sm',
                  theme === 'dark' ? 'text-white/70' : 'text-black/70'
                )}
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0" />
                {listItem}
              </motion.li>
            ))}
          </ul>

          {/* Expandable Details */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={cn(
                  'pt-4 mt-4 border-t',
                  theme === 'dark' ? 'border-white/10' : 'border-black/10'
                )}>
                  <p className={cn(
                    'text-sm leading-relaxed',
                    theme === 'dark' ? 'text-white/60' : 'text-black/60'
                  )}>
                    {item.details}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Connector Line to Node */}
        <div className={cn(
          'hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px',
          isEven ? 'right-0' : 'left-0',
          theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
        )} />
      </motion.div>
    </motion.div>
  );
};

export default function RoadmapSection() {
  const { theme, language } = useThemeLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const data = roadmapData[language] || roadmapData.en;

  const titles = {
    en: 'Roadmap',
    ru: 'Дорожная карта',
    es: 'Hoja de Ruta'
  };

  const subtitles = {
    en: 'Our journey to revolutionize vote-to-earn',
    ru: 'Наш путь к революции в vote-to-earn',
    es: 'Nuestro camino para revolucionar vota-y-gana'
  };

  return (
    <section 
      id="roadmap"
      ref={ref}
      className={cn(
        'py-32 px-6 relative overflow-hidden',
        theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-50'
      )}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className={cn(
              'absolute w-96 h-96 rounded-full blur-3xl',
              theme === 'dark' ? 'bg-white/[0.02]' : 'bg-black/[0.02]'
            )}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', bounce: 0.5 }}
            className={cn(
              'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 backdrop-blur-xl border',
              theme === 'dark' ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'
            )}
          >
            <Target className={cn('w-8 h-8', theme === 'dark' ? 'text-white' : 'text-black')} />
          </motion.div>
          
          <h2 className={cn(
            'text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}>
            {titles[language] || titles.en}
          </h2>
          
          <p className={cn(
            'text-lg md:text-xl max-w-2xl mx-auto',
            theme === 'dark' ? 'text-white/60' : 'text-black/60'
          )}>
            {subtitles[language] || subtitles.en}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className={cn(
            'absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2',
            theme === 'dark' ? 'bg-white/10' : 'bg-black/10'
          )}>
            {/* Animated Progress */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className={cn(
                'absolute inset-x-0 top-0 origin-top',
                theme === 'dark' ? 'bg-white/30' : 'bg-black/30'
              )}
              style={{ height: '40%' }}
            />
          </div>

          {/* Roadmap Items */}
          <div className="relative space-y-12 md:space-y-24">
            {data.map((item, index) => (
              <RoadmapCard
                key={index}
                item={item}
                index={index}
                isInView={isInView}
                theme={theme}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border',
              theme === 'dark' 
                ? 'bg-white/5 border-white/20 text-white/60' 
                : 'bg-black/5 border-black/10 text-black/60'
            )}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language === 'ru' ? 'Присоединяйтесь к нашему путешествию' : 
               language === 'es' ? 'Únete a nuestro viaje' : 
               'Join us on this journey'}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}