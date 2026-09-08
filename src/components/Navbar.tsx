import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { profileConfig } from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'achievements', label: 'ACHIEVEMENTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#05070a]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Chitranjan Kumar Gupta Home"
          >
            <div className="w-8 h-8 rounded bg-[#090d15] border border-white/10 group-hover:border-[#ff6b00]/60 flex items-center justify-center transition-all duration-300">
              <span className="font-heading font-black text-xs tracking-wider text-slate-200 group-hover:text-[#ff6b00]">
                CG
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-sm tracking-tight text-white group-hover:text-[#ff9248] transition-colors">
                CHITRANJAN
              </span>
              <span className="font-mono text-xs text-slate-400">/</span>
              <span className="font-mono text-xs text-slate-400">DEV</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse ml-0.5" />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#090d15]/80 border border-white/[0.07] rounded-full px-3 py-1.5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#ff6b00]/20 border border-[#ff6b00]/50 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action: Prominent Resume Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={profileConfig.resumeUrl}
              download="Chitranjan_Kumar_Gupta_Resume.pdf"
              className="group flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded bg-white/[0.05] border border-white/10 hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 text-white transition-all duration-200 shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5 text-[#ff6b00] group-hover:translate-y-0.5 transition-transform" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={profileConfig.resumeUrl}
              download="Chitranjan_Kumar_Gupta_Resume.pdf"
              className="px-3 py-1.5 text-xs font-mono rounded bg-white/5 border border-white/10 text-white"
            >
              RESUME
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#090d15] border border-white/10 text-slate-300 hover:text-white hover:border-[#ff6b00]/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Large Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#05070a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-2 font-heading font-extrabold text-sm text-white">
                <span>CHITRANJAN</span>
                <span className="text-[#ff6b00]">/</span>
                <span className="text-slate-400">PORTFOLIO</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-white/5 border border-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items with Stagger and Large Typography */}
            <div className="my-auto py-8 space-y-4">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center justify-between text-left group py-2 border-b border-white/[0.04]"
                  >
                    <span
                      className={`font-heading font-black text-2xl sm:text-3xl tracking-tight transition-colors ${
                        isActive
                          ? 'text-[#ff6b00]'
                          : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-slate-500 group-hover:text-[#ff6b00]">
                      0{index + 1}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom Meta & Resume CTA */}
            <div className="border-t border-white/[0.08] pt-6 space-y-4">
              <a
                href={profileConfig.resumeUrl}
                download="Chitranjan_Kumar_Gupta_Resume.pdf"
                className="w-full py-3.5 rounded bg-[#ff6b00] hover:bg-[#ff8533] text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
                <span>RKGIT B.TECH CSE (2023–2027)</span>
                <span className="text-[#ff9248]">CGPA 7.8</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
