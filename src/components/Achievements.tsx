import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles, Zap, Terminal, Users, Megaphone, Flame, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  const primaryAchievement = achievements[0];
  const secondaryAchievements = achievements.slice(1);

  return (
    <section id="achievements" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        ACHIEVEMENTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span>// 05. COMPETITIONS & LEADERSHIP</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
            ACHIEVEMENTS<span className="text-[#ff6b00]">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Coding competition wins, campus tech club leadership roles, and collaborative hackathons I've taken part in.
          </p>
        </div>

        {/* Feature Spotlight Card for CODE CLASH 2.0 */}
        <div className="max-w-5xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-8 sm:p-10 lg:p-12 border border-[#ff6b00]/40 relative overflow-hidden group shadow-[0_0_40px_rgba(255,107,0,0.12)]"
          >
            {/* Top Radiant Nebula */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff6b00]/20 via-[#ff3b00]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#ff6b00]/30 transition-all duration-500" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Very Large "1ST" Typography & Trophy */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-xl bg-[#070b13] border border-[#ff6b00]/30 text-center relative overflow-hidden">
                <div className="w-14 h-14 rounded-lg bg-[#ff6b00]/20 border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00] mb-3 shadow-[0_0_20px_rgba(255,107,0,0.35)] group-hover:scale-105 transition-transform">
                  <Trophy className="w-8 h-8" />
                </div>

                {/* Dramatically Large "1ST" */}
                <div className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-[#ff7a1a] tracking-tighter leading-none select-none">
                  1ST
                </div>

                <div className="font-mono text-xs font-bold tracking-widest text-[#ff8e3c] uppercase mt-2">
                  POSITION
                </div>

                <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] text-amber-300 bg-amber-950/70 border border-amber-500/40 px-2.5 py-0.5 rounded">
                  <Sparkles className="w-3 h-3 text-[#ff6b00]" />
                  <span>COLLEGE CHAMPION</span>
                </div>
              </div>

              {/* Right Column: Details & Narrative */}
              <div className="md:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/[0.08]">
                  <span className="font-mono text-xs text-[#ff8e3c] font-semibold">
                    {primaryAchievement.subtitle}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {primaryAchievement.date}
                  </span>
                </div>

                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white">
                  {primaryAchievement.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {primaryAchievement.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 pt-1">
                  {primaryAchievement.keyTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Zap className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Meta Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span>Tested: Complexity Optimization, Speed DP & Graph DSA</span>
                  </div>
                  <span className="text-[#ff9248] font-bold">RANK #1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership & Additional Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {secondaryAchievements.map((achievement, index) => {
            const getIcon = () => {
              if (achievement.id.includes('gfg')) return <Users className="w-5 h-5 text-[#ff6b00]" />;
              if (achievement.id.includes('electrazz')) return <Megaphone className="w-5 h-5 text-[#ff6b00]" />;
              return <Flame className="w-5 h-5 text-[#ff6b00]" />;
            };

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="w-9 h-9 rounded-lg bg-[#ff6b00]/15 border border-[#ff6b00]/30 flex items-center justify-center">
                      {getIcon()}
                    </div>
                    <span className="font-mono text-[10px] text-amber-300 bg-amber-950/50 border border-amber-500/30 px-2 py-0.5 rounded">
                      {achievement.badge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-lg text-white group-hover:text-orange-200 transition-colors mb-1.5">
                    {achievement.title}
                  </h4>
                  
                  <p className="font-mono text-xs text-[#ff8e3c] mb-3">
                    {achievement.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                  {achievement.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <Award className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

