import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        EDUCATION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span>// 04. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
            EDUCATION<span className="text-[#ff6b00]">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            My educational journey in Computer Science and Engineering, foundational schooling, and academic milestones.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-3xl mx-auto relative space-y-12">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-6 bottom-6 left-4 sm:left-8 w-[2px] bg-gradient-to-b from-[#ff6b00] via-[#ff6b00]/40 to-[#ff6b00]/10 -z-0" />

          {/* Timeline Nodes */}
          {education.map((item, index) => {
            const isPursuing = item.status?.toLowerCase().includes('pursuing') || item.status?.toLowerCase().includes('year');

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Glowing Dot on Timeline */}
                <div className={`absolute left-1 sm:left-5 top-7 w-6 h-6 rounded-full bg-[#05070a] border-2 flex items-center justify-center z-10 ${
                  isPursuing 
                    ? 'border-[#ff6b00] shadow-[0_0_15px_#ff6b00]' 
                    : 'border-slate-500 shadow-[0_0_10px_rgba(255,107,0,0.2)]'
                }`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    isPursuing ? 'bg-[#ff6b00] animate-pulse' : 'bg-slate-400'
                  }`} />
                </div>

                {/* Content Glass Card */}
                <div className="glass-card rounded-xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden group hover:border-[#ff6b00]/40 transition-all">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b00]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />

                  {/* Status & Period Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ff8e3c]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded ${
                      isPursuing 
                        ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-500/30' 
                        : 'text-slate-400 bg-slate-800/60 border border-slate-700/50'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <div className="space-y-1 mb-4">
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-orange-200 transition-colors">
                      {item.degree}
                    </h3>
                    {item.field && (
                      <p className="font-mono text-sm sm:text-base text-[#ff9248] font-semibold">
                        {item.field}
                      </p>
                    )}
                  </div>

                  {/* Institution & Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-300 mb-6">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#ff6b00]" />
                      <span className="font-medium text-white">{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Performance Highlight Pill */}
                  <div className="inline-flex items-center gap-3 p-3 rounded-lg bg-[#070b13] border border-[#ff6b00]/30 mb-6">
                    <div className="w-8 h-8 rounded bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00]">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-slate-400 uppercase">
                        {item.gradeLabel || "ACADEMIC SCORE"}
                      </div>
                      <div className="font-mono text-sm font-bold text-white">
                        <span className="text-[#ff9248] text-base">{item.gradeValue || item.cgpa || item.percentage}</span>
                        {item.expectedGraduation && (
                          <span className="text-slate-400 font-normal ml-2">
                            (Expected: {item.expectedGraduation})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                      <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5 mb-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#ff6b00]" />
                        <span>HIGHLIGHTS & COURSEWORK</span>
                      </div>
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

