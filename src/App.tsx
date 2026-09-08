import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BackgroundFx } from './components/BackgroundFx';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { GithubActivity } from './components/GithubActivity';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AskAboutMeModal } from './components/AskAboutMeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Top scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Section spy
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'skills',
      'projects',
      'education',
      'achievements',
      'certifications',
      'github',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070a] text-slate-100 selection:bg-[#ff6b00]/30 selection:text-[#ff9248] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#ff3b00] via-[#ff6b00] to-[#ff9e54] origin-left z-50 shadow-[0_0_12px_#ff6b00]"
        style={{ scaleX }}
      />

      {/* Desktop Ambient Custom Cursor */}
      <CustomCursor />

      {/* Canvas Ambient Atmosphere & Glow Particles */}
      <BackgroundFx />

      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Certifications />
        <GithubActivity />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter AI Assistant (Matching reference video) */}
      <AskAboutMeModal />
    </div>
  );
};

export default App;
