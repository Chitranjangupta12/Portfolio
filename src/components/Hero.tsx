import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData, profileConfig } from '../data/portfolio';
import { CyberTerminal } from './CyberTerminal';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-14 md:pt-36 md:pb-20 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-Column Responsive Grid with absolute physical layout boundary (NO OVERLAP) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Hero Content & Massive Typography (~60% on XL) */}
          <div className="xl:col-span-7 flex flex-col items-start text-left z-10 w-full min-w-0 max-w-full">
            
            {/* Small Technical Role Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#090d15] border border-white/[0.08] mb-5 sm:mb-6 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse shrink-0" />
              <span className="font-mono text-[10.5px] sm:text-xs text-slate-300 tracking-wider uppercase truncate">
                COMPUTER SCIENCE ENGINEERING STUDENT / FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* VERY LARGE NAME - Completely contained in Left Column with fluid typography */}
            <div className="mb-3 select-none w-full max-w-full">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading font-black text-[clamp(2.4rem,7.6vw,3.8rem)] sm:text-[clamp(3.2rem,6.8vw,4.6rem)] xl:text-[clamp(3.8rem,4.5vw,5.5rem)] tracking-tight sm:tracking-tighter text-white leading-[0.92] block"
              >
                CHITRANJAN
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading font-black text-[clamp(2.4rem,7.6vw,3.8rem)] sm:text-[clamp(3.2rem,6.8vw,4.6rem)] xl:text-[clamp(3.8rem,4.5vw,5.5rem)] tracking-tight sm:tracking-tighter text-slate-300 leading-[0.92] block"
              >
                KUMAR
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-heading font-black text-[clamp(2.4rem,7.6vw,3.8rem)] sm:text-[clamp(3.2rem,6.8vw,4.6rem)] xl:text-[clamp(3.8rem,4.5vw,5.5rem)] tracking-tight sm:tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#ff7a1a] leading-[0.92] block"
              >
                GUPTA
              </motion.h1>
            </div>

            {/* Stylish Secondary Heading / Tagline directly below name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-5 sm:mb-6 flex items-center gap-2.5"
            >
              <span className="w-4 sm:w-6 h-[2px] bg-[#ff6b00]" />
              <h2 className="font-heading font-extrabold text-base sm:text-xl lg:text-2xl text-[#ff8e3c] tracking-widest uppercase">
                FULL-STACK DEVELOPER
              </h2>
            </motion.div>

            {/* Short Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-7 font-normal"
            >
              I build modern, responsive and scalable web applications while exploring software engineering, APIs, databases and problem solving.
            </motion.p>

            {/* Action Buttons & Social Channels */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* View Projects CTA */}
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-[#ff6b00] hover:bg-[#ff8533] text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)] group"
              >
                <span>VIEW PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Download Resume CTA */}
              <a
                href={profileConfig.resumeUrl}
                download="Chitranjan_Kumar_Gupta_Resume.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded border border-white/[0.12] hover:border-[#ff6b00]/60 bg-white/[0.04] hover:bg-[#ff6b00]/10 text-white font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <FileDown className="w-4 h-4 text-[#ff6b00]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Social Channels: GitHub, LinkedIn, Email */}
              <div className="flex items-center gap-2 pt-2 sm:pt-0">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileConfig.email}`}
                  className="p-3 rounded border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
                  aria-label="Email Chitranjan"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: DEV_NODE Animated Interface (~40% on XL, stacked below text on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
            }}
            className="xl:col-span-5 flex justify-center xl:justify-end z-10 w-full min-w-0 transition-transform duration-200 ease-out"
          >
            <div className="w-full max-w-md xl:max-w-lg">
              <CyberTerminal />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM OF HERO: 4 Compact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full z-10"
        >
          {/* Card 01: Education */}
          <div className="glass-card rounded-xl p-5 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />
            <span className="font-mono text-xs font-bold text-[#ff8e3c] block mb-1">01</span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase block mb-1">
              EDUCATION
            </span>
            <h4 className="font-heading font-extrabold text-white text-base sm:text-lg group-hover:text-orange-200 transition-colors">
              B.Tech CSE
            </h4>
            <p className="font-mono text-xs text-slate-400 mt-1">
              RKGIT (2023–2027)
            </p>
          </div>

          {/* Card 02: CGPA */}
          <div className="glass-card rounded-xl p-5 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />
            <span className="font-mono text-xs font-bold text-[#ff8e3c] block mb-1">02</span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase block mb-1">
              CGPA
            </span>
            <h4 className="font-heading font-extrabold text-white text-base sm:text-lg group-hover:text-orange-200 transition-colors">
              7.8 / 10
            </h4>
            <p className="font-mono text-xs text-slate-400 mt-1">
              Academic Standing
            </p>
          </div>

          {/* Card 03: Location */}
          <div className="glass-card rounded-xl p-5 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />
            <span className="font-mono text-xs font-bold text-[#ff8e3c] block mb-1">03</span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase block mb-1">
              LOCATION
            </span>
            <h4 className="font-heading font-extrabold text-white text-base sm:text-lg group-hover:text-orange-200 transition-colors">
              Ghaziabad
            </h4>
            <p className="font-mono text-xs text-slate-400 mt-1">
              Uttar Pradesh, India
            </p>
          </div>

          {/* Card 04: Contact */}
          <div className="glass-card rounded-xl p-5 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />
            <span className="font-mono text-xs font-bold text-[#ff8e3c] block mb-1">04</span>
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase block mb-1">
              CONTACT
            </span>
            <a
              href={`mailto:${profileConfig.email}`}
              className="font-heading font-bold text-white text-xs sm:text-sm hover:text-[#ff9248] transition-colors block truncate"
              title={profileConfig.email}
            >
              {profileConfig.email}
            </a>
            <p className="font-mono text-xs text-slate-400 mt-1">
              Let's build something great.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
