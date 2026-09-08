import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench, Terminal, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const categoryIcons: Record<string, React.ElementType> = {
  languages: Code2,
  programming: Code2,
  frontend: Layout,
  backend: Server,
  databases: Database,
  'core-cs': Cpu,
  'core-fundamentals': Cpu,
  tools: Wrench,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { skills } = portfolioData;

  const categories = [
    { id: 'all', label: 'ALL MODULES' },
    ...skills.map((c) => ({ id: c.id, label: c.category })),
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skills
      : skills.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        SKILLS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span>// 02. TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
            TECH STACK<span className="text-[#ff6b00]">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            A battle-tested technical arsenal across programming languages, web systems, databases, and version control.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded font-mono text-xs tracking-wider transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#ff6b00] text-black font-bold shadow-[0_0_20px_rgba(255,107,0,0.35)]'
                    : 'bg-[#090d15] border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category) => {
              const Icon = categoryIcons[category.id] || Cpu;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-xl p-6 sm:p-8 border border-white/[0.08] relative"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white tracking-wide">
                        {category.category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-slate-400">
                      // {category.skills.length} TECHNOLOGIES
                    </span>
                  </div>

                  {/* Technology Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/50 hover:bg-gradient-to-br hover:from-[#0c1220] hover:to-[#070b13] transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,107,0,0.12)] cursor-default"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-heading font-bold text-base text-slate-100 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          {skill.badge && (
                            <span className="font-mono text-[10px] text-[#ff8e3c] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-2 py-0.5 rounded">
                              {skill.badge}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                          <span className="text-[11px] group-hover:text-slate-300 transition-colors">
                            {skill.level}
                          </span>
                          <span className="text-[10px] text-slate-500 group-hover:text-emerald-400 transition-colors">
                            READY
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex items-center justify-between font-mono text-xs text-slate-400 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span>Honest developer proficiencies — zero fabricated percentage numbers.</span>
          </div>
          <span className="hidden sm:inline text-slate-400">CONTINUOUSLY EVOLVING // 2026</span>
        </div>
      </div>
    </section>
  );
};
