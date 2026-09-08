import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Sparkles, Send, ArrowUpRight, Award, GraduationCap, Code2, Mail } from 'lucide-react';
import { profileConfig } from '../data/portfolio';

const quickQuestions = [
  {
    id: 'stack',
    question: "What's Chitranjan's primary tech stack?",
    answer: "Chitranjan specializes in Full-Stack Web Development and Problem Solving. Core languages include Python, C, and Java. On the frontend, he builds responsive UIs using React, JavaScript (ES6+), and Tailwind CSS. On the backend, he creates scalable REST APIs using Node.js and works with databases like MongoDB, MySQL, and PostgreSQL.",
    sectionId: 'skills',
    icon: Code2,
  },
  {
    id: 'achievement',
    question: "Tell me about his Code Clash 2.0 win.",
    answer: "Chitranjan secured 1st Position (Champion / Rank #1) in 'Code Clash 2.0', the premier college coding competition at Raj Kumar Goel Institute of Technology. He triumphed over multi-tiered algorithmic challenges, dynamic programming problems, and strict time constraints.",
    sectionId: 'achievements',
    icon: Award,
  },
  {
    id: 'projects',
    question: "What major projects has he engineered?",
    answer: "Chitranjan has engineered: (1) AI-Powered Personalized Career Guidance & Intelligent Job Matching System; (2) AI-Powered-MedReport clinical RAG suite; (3) FoodieHub food commerce platform with live tracking; and (4) E-Commerce Website with state-managed cart & checkout.",
    sectionId: 'projects',
    icon: ArrowUpRight,
  },
  {
    id: 'education',
    question: "What is his college & CGPA?",
    answer: "He is pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering at Raj Kumar Goel Institute of Technology (RKGIT), batch 2023–2027. He currently holds a 7.8 CGPA with coursework in DSA, OOP, DBMS, OS, and Computer Networks.",
    sectionId: 'education',
    icon: GraduationCap,
  },
  {
    id: 'contact',
    question: "How can I get in touch with him?",
    answer: `You can reach Chitranjan directly via email at ${profileConfig.email}, connect with him on LinkedIn, or fill out the contact form below. He is open to internships, freelance projects, and technical collaborations!`,
    sectionId: 'contact',
    icon: Mail,
  },
];

export const AskAboutMeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuery, setActiveQuery] = useState(quickQuestions[0]);
  const [customInput, setCustomInput] = useState('');
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const query = customInput.toLowerCase();
    if (query.includes('hire') || query.includes('intern') || query.includes('job') || query.includes('work') || query.includes('available')) {
      setCustomAnswer(`Chitranjan is actively looking for full-stack, software engineering, and developer internships! You can reach him at ${profileConfig.email}.`);
    } else if (query.includes('project') || query.includes('ai') || query.includes('medical') || query.includes('job') || query.includes('career') || query.includes('food') || query.includes('commerce')) {
      setCustomAnswer(`Chitranjan has engineered: (1) AI-Powered Personalized Career Guidance & Job Matching; (2) AI-Powered-MedReport clinical RAG; (3) FoodieHub; and (4) E-Commerce Website. Check out the 'Selected Projects' section!`);
    } else if (query.includes('cgpa') || query.includes('college') || query.includes('school') || query.includes('study')) {
      setCustomAnswer(`Chitranjan is studying B.Tech CSE at Raj Kumar Goel Institute of Technology (2023-2027) with a 7.8 CGPA.`);
    } else if (query.includes('skill') || query.includes('stack') || query.includes('python') || query.includes('react')) {
      setCustomAnswer(`Chitranjan works with Python, C, Java, React, JavaScript, Tailwind CSS, Node.js, REST APIs, MongoDB, MySQL, and PostgreSQL.`);
    } else {
      setCustomAnswer(`Chitranjan is a dedicated Computer Science student and Full-Stack Developer passionate about scalable systems and clean code. Feel free to connect via ${profileConfig.email} or use the quick questions below!`);
    }
    setCustomInput('');
  };

  const jumpToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Pill Launcher (Matching reference video) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0d131f]/90 hover:bg-[#121a2b] border border-[#ff6b00]/50 hover:border-[#ff6b00] shadow-[0_4px_25px_rgba(255,107,0,0.3)] backdrop-blur-xl group transition-all"
        aria-label="Ask Chitranjan AI Assistant"
      >
        <div className="relative w-6 h-6 rounded-full bg-[#ff6b00] flex items-center justify-center text-black">
          <Bot className="w-3.5 h-3.5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#05070a] animate-pulse" />
        </div>
        <span className="font-mono text-xs font-bold tracking-wider text-slate-100 group-hover:text-[#ff9248]">
          ASK ABOUT ME
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#ff6b00] animate-spin" style={{ animationDuration: '6s' }} />
      </motion.button>

      {/* Interactive Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-[#090d16] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-4 bg-[#0d1424] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ff6b00]/20 border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                      QUICK FAQ // ABOUT ME
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                        DIRECT INFO
                      </span>
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Click any topic below for quick answers
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Prompt Questions */}
              <div className="p-4 bg-[#070b13] border-b border-white/5 overflow-x-auto flex gap-2 no-scrollbar">
                {quickQuestions.map((q) => {
                  const isSelected = activeQuery.id === q.id && !customAnswer;
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setActiveQuery(q);
                        setCustomAnswer(null);
                      }}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#ff6b00]/20 border border-[#ff6b00]/60 text-[#ff9248] font-semibold'
                          : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <q.icon className="w-3 h-3" />
                      <span>{q.id.toUpperCase()}</span>
                    </button>
                  );
                })}
              </div>

              {/* Answer Content Area */}
              <div className="p-5 overflow-y-auto space-y-4 flex-1">
                <div className="p-3.5 rounded-xl bg-[#0c121e] border border-white/10">
                  <span className="font-mono text-[11px] text-[#ff6b00] block mb-1">
                    QUESTION //
                  </span>
                  <p className="text-sm font-medium text-white">
                    {customAnswer ? "Custom Query" : activeQuery.question}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c121e] to-[#080d16] border border-[#ff6b00]/30 shadow-inner">
                  <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYNTHESIZED ANSWER</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {customAnswer || activeQuery.answer}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => jumpToSection(activeQuery.sectionId)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ff8e3c] hover:underline"
                    >
                      <span>Jump to #{activeQuery.sectionId}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-slate-500">
                      RKGIT CSE // 2023-2027
                    </span>
                  </div>
                </div>
              </div>

              {/* Custom Input Form */}
              <form onSubmit={handleCustomSubmit} className="p-3 bg-[#060a12] border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Ask anything about Chitranjan's work or skills..."
                  className="flex-1 bg-[#0c1220] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff6b00]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#ff6b00] text-black rounded-lg hover:bg-[#ff8533] transition-colors flex items-center justify-center font-bold text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
