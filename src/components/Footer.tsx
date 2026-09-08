import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData, profileConfig } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-white/[0.06] bg-[#04060a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          
          {/* Left Column: Brand & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <span className="font-heading font-black text-xl text-white tracking-wider">
              CHITRANJAN KUMAR GUPTA
            </span>
            <p className="font-mono text-xs text-slate-400">
              Computer Science Engineering Student & Full-Stack Developer
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileConfig.email}`}
              className="p-2.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 transition-all"
              aria-label="Email Chitranjan"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-[#ff6b00]/50 hover:bg-[#ff6b00]/10 font-mono text-xs transition-all group"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff6b00] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div>
            © 2026 Chitranjan Kumar Gupta. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>RKGIT B.Tech CSE (2023–2027)</span>
            <span>•</span>
            <span className="text-[#ff9248]">CGPA 7.8</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
