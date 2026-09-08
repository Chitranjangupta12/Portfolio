import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const { about, education } = portfolioData;
  const primaryEdu = education[0];

  const metadataBlocks = [
    {
      num: '01',
      label: 'EDUCATION',
      value: 'B.Tech CSE',
      detail: 'RKGIT (2023–2027)',
    },
    {
      num: '02',
      label: 'GRADUATION',
      value: '2027',
      detail: 'Pursuing Degree',
    },
    {
      num: '03',
      label: 'CGPA',
      value: '7.8',
      detail: 'Academic Standing',
    },
    {
      num: '04',
      label: 'FOCUS',
      value: 'Software Development',
      detail: 'Full-Stack & Systems',
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>// 01. INTRODUCTION</span>
            </div>

            <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tighter leading-none">
              ABOUT<br />
              <span className="text-slate-300">ME</span>
              <span className="text-[#ff6b00]">.</span>
            </h2>

            <div className="h-[2px] w-16 bg-gradient-to-r from-[#ff6b00] to-transparent mt-6 mb-8" />

            <div className="font-mono text-xs text-slate-400 space-y-2">
              <div>// RAJ KUMAR GOEL INSTITUTE OF TECHNOLOGY</div>
              <div>// GHAZIABAD, UTTAR PRADESH, INDIA</div>
              <div className="text-emerald-400">// STATUS: OPEN TO OPPORTUNITIES</div>
            </div>
          </div>

          {/* Right Column: Professional Introduction & Metadata Blocks */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Professional Introduction Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
            >
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* 4 Metadata Blocks */}
            {/* 4 Metadata Blocks (Education, Graduation, CGPA, Focus) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 pt-2">
              {metadataBlocks.map((block, index) => {
                const isCard04 = block.num === '04';

                return (
                  <motion.div
                    key={block.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-4 sm:p-5 border border-white/[0.08] hover:border-[#ff6b00]/50 transition-all text-left group flex flex-col justify-between min-w-0 w-full relative overflow-hidden"
                  >
                    <div className="w-full min-w-0">
                      <span className="block font-mono text-xs font-bold text-[#ff8e3c] mb-1">
                        {block.num}
                      </span>
                      <span className="block font-mono text-[10px] tracking-wider text-slate-400 uppercase">
                        {block.label}
                      </span>
                      {isCard04 ? (
                        <div className="mt-2 space-y-1 w-full min-w-0">
                          <div className="font-heading font-extrabold text-[clamp(0.72rem,0.8vw,0.88rem)] text-white group-hover:text-orange-200 transition-colors leading-tight tracking-tight whitespace-nowrap">
                            Software
                          </div>
                          <div className="font-heading font-extrabold text-[clamp(0.72rem,0.8vw,0.88rem)] text-white group-hover:text-orange-200 transition-colors leading-tight tracking-tight whitespace-nowrap">
                            Development
                          </div>
                        </div>
                      ) : (
                        <h4 className="font-heading font-extrabold text-[clamp(1.05rem,1.2vw,1.35rem)] text-white mt-1.5 group-hover:text-orange-200 transition-colors leading-snug break-words hyphens-auto w-full min-w-0">
                          {block.value}
                        </h4>
                      )}
                    </div>
                    <span className="block font-mono text-[10px] sm:text-[11px] text-slate-400 mt-3 whitespace-normal">
                      {block.detail}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Technical Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-white/[0.08] space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 font-mono text-xs text-white font-semibold">
                  <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>CRAFTING PRODUCTION-GRADE SYSTEMS</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {about.currentFocus.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-400">
                <span>Institution: {primaryEdu.institution}</span>
                <span className="text-[#ff9248]">CGPA {primaryEdu.cgpa} / 10.0</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
