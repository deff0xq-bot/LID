import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Send, MessageCircle } from 'lucide-react';
import { useThemeLanguage } from './ThemeLanguageContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { theme, t } = useThemeLanguage();

  const socialLinks = [
    { icon: Send, href: 'https://t.me/Likes_and_Dislikes', label: 'Telegram' },
    { icon: MessageCircle, href: 'https://t.me/Likes_and_Dislikes_Chat', label: 'Chat' },
    { icon: Twitter, href: 'https://x.com/like_an_dislike?s=21', label: 'Twitter' }
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={cn(
      'py-20 px-6 relative overflow-hidden',
      theme === 'dark' ? 'bg-zinc-950' : 'bg-gray-100'
    )}>
      {/* Top Border Animation */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className={cn(
          'absolute top-0 left-0 right-0 h-px',
          theme === 'dark' ? 'bg-white/20' : 'bg-black/20'
        )}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_692a0d445228a0792af27788/269375ff0_photo_2025-11-23_11-00-46.jpg"
                alt="$LID Logo"
                className="w-12 h-12 rounded-full"
              />
              <span className={cn(
                'text-2xl font-black tracking-tight',
                theme === 'dark' ? 'text-white' : 'text-black'
              )}>
                $LID
              </span>
            </div>
            <p className={cn(
              'text-lg',
              theme === 'dark' ? 'text-white/60' : 'text-black/60'
            )}>
              {t.footer.tagline}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className={cn(
              'text-sm font-semibold uppercase tracking-wider mb-6',
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            )}>
              Navigation
            </h4>
            {[
              { id: 'about', label: t.nav.about },
              { id: 'how-it-works', label: t.nav.howItWorks },
              { id: 'why', label: t.nav.why },
              { id: 'roadmap', label: t.nav.roadmap },
              { id: 'vision', label: t.nav.vision }
            ].map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'block text-base transition-colors',
                  theme === 'dark' 
                    ? 'text-white/60 hover:text-white' 
                    : 'text-black/60 hover:text-black'
                )}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className={cn(
              'text-sm font-semibold uppercase tracking-wider mb-6',
              theme === 'dark' ? 'text-white/40' : 'text-black/40'
            )}>
              Community
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center transition-all backdrop-blur-xl border',
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                      : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
                  )}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={cn(
            'pt-8 border-t text-center',
            theme === 'dark' ? 'border-white/10' : 'border-black/10'
          )}
        >
          <p className={cn(
            'text-sm',
            theme === 'dark' ? 'text-white/40' : 'text-black/40'
          )}>
            © 2025 $LID. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}