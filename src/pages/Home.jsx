import React from 'react';
import { ThemeLanguageProvider, useThemeLanguage } from '../components/lid/ThemeLanguageContext';
import Navbar from '../components/lid/Navbar';
import HeroSection from '../components/lid/HeroSection';
import AboutSection from '../components/lid/AboutSection';
import HowItWorksSection from '../components/lid/HowItWorksSection';
import WhySection from '../components/lid/WhySection';
import RoadmapSection from '../components/lid/RoadmapSection';
import VisionSection from '../components/lid/VisionSection';
import Footer from '../components/lid/Footer';
import { cn } from '@/lib/utils';

function HomeContent() {
  const { theme } = useThemeLanguage();

  return (
    <div className={cn(
      'min-h-screen transition-colors duration-500',
      theme === 'dark' ? 'bg-black' : 'bg-white'
    )}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <WhySection />
        <RoadmapSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeLanguageProvider>
      <HomeContent />
    </ThemeLanguageProvider>
  );
}