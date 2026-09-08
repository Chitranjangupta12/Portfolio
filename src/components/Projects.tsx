import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, CheckCircle2, Terminal, Code2, Sparkles, Activity, Layers, ShoppingCart, UserCheck, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const { projects } = portfolioData;

  const categories = ['All', 'AI & Intelligent Systems', 'Full-Stack Web Development'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'AI & Intelligent Systems') {
      return project.category.includes('AI') || project.category.includes('RAG');
    }
    if (filter === 'Full-Stack Web Development') {
      return project.category.includes('Full-Stack') || project.category.includes('Commerce');
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>// 03. FEATURED PROJECTS</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
              SELECTED PROJECTS<span className="text-[#ff6b00]">.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Real projects I've built using React, Node.js, Python, and PostgreSQL, focusing on clean code, practical utility, and responsive design.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded font-mono text-xs tracking-wider transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#ff6b00] text-black font-bold shadow-[0_0_20px_rgba(255,107,0,0.35)]'
                      : 'bg-[#090d15] border border-white/[0.08] text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Project Cards Stack */}
        <div className="space-y-14">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] hover:border-[#ff6b00]/50 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle Background Radial Glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b00]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff6b00]/10 transition-all duration-500" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
                    
                    {/* Left Column: Project Details & Features */}
                    <div className="lg:col-span-7 space-y-5">
                      
                      {/* Top Meta Bar */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl sm:text-4xl font-black text-slate-600 group-hover:text-[#ff6b00] transition-colors">
                          {project.number}
                        </span>
                        <span className="h-4 w-[1px] bg-white/10" />
                        <span className="font-mono text-xs text-[#ff8e3c] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-2.5 py-0.5 rounded">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-orange-200 transition-colors">
                          {project.title}
                        </h3>
                        <p className="font-mono text-xs sm:text-sm text-slate-400 mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Architecture Ports / Components if available */}
                      {project.architecture && (
                        <div className="p-3.5 rounded bg-[#070b13] border border-white/[0.06] space-y-2">
                          <span className="font-mono text-[11px] text-[#ff8e3c] font-semibold flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5" />
                            SYSTEM ARCHITECTURE //
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                            {project.architecture.frontend && (
                              <div><strong className="text-slate-200">Frontend:</strong> {project.architecture.frontend}</div>
                            )}
                            {project.architecture.backend && (
                              <div><strong className="text-slate-200">Backend:</strong> {project.architecture.backend}</div>
                            )}
                            {project.architecture.aiService && (
                              <div><strong className="text-slate-200">AI Service:</strong> {project.architecture.aiService}</div>
                            )}
                            {project.architecture.database && (
                              <div><strong className="text-slate-200">Database:</strong> {project.architecture.database}</div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Key Features Bullet Points */}
                      <div className="space-y-2 pt-1">
                        <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                          <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
                          <span>KEY FEATURES & CAPABILITIES //</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Bar */}
                      <div className="pt-2">
                        <span className="block font-mono text-[10px] uppercase text-slate-400 mb-2">
                          STACK //
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs px-2.5 py-1 rounded bg-[#070b13] border border-white/[0.08] text-slate-300 group-hover:border-[#ff6b00]/30 group-hover:text-white transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded border border-white/[0.12] bg-white/[0.04] hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 text-white font-mono text-xs tracking-wider transition-all group/btn"
                          >
                            <Github className="w-4 h-4 text-slate-300 group-hover/btn:text-white" />
                            <span>GITHUB REPO</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#ff6b00] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        )}

                        <span className="flex items-center gap-1.5 px-3 py-2 rounded bg-white/[0.02] border border-white/[0.05] text-slate-400 font-mono text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          <span>LIVE DEMO — COMING SOON</span>
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Visual Technical Preview */}
                    <div className="lg:col-span-5 h-full flex flex-col justify-center">
                      <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#070b13] p-4 sm:p-5 relative group-hover:border-[#ff6b00]/40 transition-colors">
                        
                        {/* ================= PROJECT 01: AI CAREER MATCH DASHBOARD ================= */}
                        {project.id === 'ai-job-matching' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                              <span className="text-white font-bold flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#ff6b00]" />
                                AI CAREER MATCH
                              </span>
                              <span className="text-[10px] text-slate-500">
                                CONCEPTUAL INTERFACE
                              </span>
                            </div>

                            {/* Candidate Profile & Detected Skills */}
                            <div className="p-3 rounded bg-[#0b101c] border border-white/[0.04] space-y-2">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="text-slate-400 flex items-center gap-1.5">
                                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                                  Candidate Profile
                                </span>
                                <span className="text-emerald-400 font-bold">MATCH SCORE: 96%</span>
                              </div>
                              <div>
                                <span className="text-[10px] text-slate-500 block mb-1">SKILLS DETECTED //</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {['Python', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'].map((s) => (
                                    <span key={s} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-200 text-[10px]">
                                      {s}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Recommended Roles */}
                            <div className="p-3 rounded bg-[#0b101c] border border-white/[0.04] space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] text-slate-400">
                                <span className="flex items-center gap-1.5 text-slate-200">
                                  <Briefcase className="w-3.5 h-3.5 text-[#ff6b00]" />
                                  Recommended Roles
                                </span>
                                <span className="text-[#ff9248]">3 High Matches</span>
                              </div>
                              <div className="space-y-1 text-[11px] text-slate-300">
                                <div className="flex justify-between">
                                  <span>• Full-Stack Developer</span>
                                  <span className="text-emerald-400 font-bold">98%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>• Software Engineer</span>
                                  <span className="text-emerald-400 font-bold">95%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>• Backend Developer</span>
                                  <span className="text-emerald-400 font-bold">93%</span>
                                </div>
                              </div>
                            </div>

                            {/* Skill Gap Analysis Progress */}
                            <div className="p-2.5 rounded bg-[#0b101c] border border-white/[0.04]">
                              <div className="flex justify-between text-[11px] mb-1">
                                <span className="text-slate-400">Skill Gap Analysis</span>
                                <span className="text-emerald-400 font-bold">92% Coverage</span>
                              </div>
                              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-emerald-400 to-[#ff6b00] h-full w-[92%]" />
                              </div>
                              <div className="text-[10px] text-slate-500 mt-1.5">
                                Career Recommendation: Ready for production roles
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ================= PROJECT 02: AI-POWERED MEDREPORT ================= */}
                        {project.id === 'ai-powered-medreport' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                              <span className="text-white font-bold flex items-center gap-2">
                                <Code2 className="w-4 h-4 text-[#ff6b00]" />
                                AI-POWERED-MEDREPORT
                              </span>
                              <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                RAG ACTIVE
                              </span>
                            </div>

                            <div className="p-3 rounded bg-[#0b101c] border border-white/[0.04]">
                              <div className="text-[11px] text-slate-400 mb-1">RAG RETRIEVAL ENGINE</div>
                              <div className="text-slate-200 font-semibold">Clinical Evaluation: Passed Benchmarks</div>
                              <div className="w-full bg-white/5 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div className="bg-[#ff6b00] h-full w-[94%]" />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">PIPELINES</span>
                                <span className="text-white font-bold">n8n Workflows</span>
                              </div>
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">PARSER</span>
                                <span className="text-emerald-400 font-bold">OCR Enabled</span>
                              </div>
                            </div>

                            <div className="p-2.5 rounded bg-[#0b101c] border border-white/[0.04] text-[11px] text-slate-400">
                              <span>Database: PostgreSQL • HIPAA Sanitization: Active</span>
                            </div>
                          </div>
                        )}

                        {/* ================= PROJECT 03: FOODIEHUB ================= */}
                        {project.id === 'online-food-website' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                              <span className="text-white font-bold flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4 text-[#ff6b00]" />
                                FOODIEHUB COMMERCE
                              </span>
                              <span className="text-[10px] text-[#ff9248]">
                                REAL-TIME SYSTEM
                              </span>
                            </div>

                            <div className="p-3 rounded bg-[#0b101c] border border-white/[0.04]">
                              <div className="text-[11px] text-slate-400 mb-1">LIVE ORDER TRACKER // 4 STEPS</div>
                              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                                <Activity className="w-3.5 h-3.5" />
                                Placed ➔ Preparing ➔ Out ➔ Delivered
                              </div>
                              <div className="grid grid-cols-4 gap-1 mt-2">
                                <div className="h-1.5 bg-[#ff6b00] rounded" />
                                <div className="h-1.5 bg-[#ff6b00] rounded" />
                                <div className="h-1.5 bg-[#ff6b00] rounded" />
                                <div className="h-1.5 bg-emerald-400 rounded" />
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">STATE ENGINE</span>
                                <span className="text-white font-bold">LocalStorage CRUD</span>
                              </div>
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">COUPONS</span>
                                <span className="text-[#ff8e3c] font-bold">Dynamic Calculator</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* ================= PROJECT 04: E-COMMERCE WEBSITE ================= */}
                        {project.id === 'e-commerce-website' && (
                          <div className="space-y-3 font-mono text-xs">
                            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                              <span className="text-white font-bold flex items-center gap-2">
                                <ShoppingCart className="w-4 h-4 text-[#ff6b00]" />
                                E-COMMERCE PLATFORM
                              </span>
                              <span className="text-[10px] text-emerald-400">
                                REDUX MANAGED
                              </span>
                            </div>

                            <div className="p-3 rounded bg-[#0b101c] border border-white/[0.04] space-y-1.5">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-slate-400">Shopping Cart Status</span>
                                <span className="text-[#ff9248] font-bold">3 Items Added</span>
                              </div>
                              <div className="text-[11px] text-slate-300 space-y-1">
                                <div className="flex justify-between">
                                  <span>• Product Catalog Filter</span>
                                  <span className="text-emerald-400">Active</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>• Real-time Price Offset</span>
                                  <span className="text-emerald-400">Instant</span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[11px]">
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">STORE</span>
                                <span className="text-white font-bold">React + Redux</span>
                              </div>
                              <div className="p-2 rounded bg-[#0b101c] border border-white/[0.04]">
                                <span className="text-slate-400 block">CHECKOUT</span>
                                <span className="text-emerald-400 font-bold">Order Breakdown</span>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>GITHUB: @{portfolioData.github.username}</span>
                          <span className="text-slate-400">VERIFIED CODEBASE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
