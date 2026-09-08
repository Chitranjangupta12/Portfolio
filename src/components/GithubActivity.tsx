import React from 'react';
import { Github, GitBranch, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { portfolioData, profileConfig } from '../data/portfolio';

export const GithubActivity: React.FC = () => {
  const { github } = portfolioData;
  const isConfigured =
    profileConfig.githubUsername &&
    profileConfig.githubUsername !== 'YOUR_GITHUB_USERNAME';

  return (
    <section id="github" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        METRICS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              <span>// 07. OPEN SOURCE & ACTIVITY</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
              GITHUB & CODE<span className="text-[#ff6b00]">.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              A look into my public GitHub repositories, active coding streak, and the programming languages I use most frequently.
            </p>
          </div>

          {isConfigured && (
            <a
              href={`https://github.com/${profileConfig.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-white/[0.12] bg-white/[0.04] hover:border-[#ff6b00] hover:bg-[#ff6b00]/10 text-white font-mono text-xs tracking-wider transition-all group"
            >
              <Github className="w-4 h-4" />
              <span>VISIT @{profileConfig.githubUsername}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ff6b00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>

        {isConfigured ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Profile Card & Pinned Repositories */}
            <div className="lg:col-span-7 glass-card rounded-xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">
                      @{profileConfig.githubUsername}
                    </h3>
                    <p className="font-mono text-xs text-slate-400">
                      Active Developer Profile • 14 Repositories
                    </p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  VERIFIED PROFILE
                </span>
              </div>

              {/* Repositories Highlights */}
              <div className="space-y-3">
                <span className="block font-mono text-xs text-slate-400">
                  FEATURED CODEBASES //
                </span>
                
                <a
                  href={`https://github.com/${profileConfig.githubUsername}/AI-Career-Job-Matching`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-white flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                      AI-Career-Job-Matching
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ff6b00]" />
                  </div>
                  <p className="text-xs text-slate-400">
                    AI-Powered Personalized Career Guidance & Intelligent Job Matching System
                  </p>
                </a>

                <a
                  href={`https://github.com/${profileConfig.githubUsername}/AI-Powered-MedReport`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-white flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                      AI-Powered-MedReport
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ff6b00]" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Agentic AI Clinical Intelligence Platform, Medical RAG & Automated OCR Pipelines
                  </p>
                </a>

                <a
                  href={`https://github.com/${profileConfig.githubUsername}/e-plantShopping`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-white flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                      e-plantShopping
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ff6b00]" />
                  </div>
                  <p className="text-xs text-slate-400">
                    Modern E-Commerce Web Application with Dynamic Category Filtering and Cart State
                  </p>
                </a>

                <a
                  href={`https://github.com/${profileConfig.githubUsername}/Online-food-Website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-white flex items-center gap-2">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                      Online-food-Website
                    </span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#ff6b00]" />
                  </div>
                  <p className="text-xs text-slate-400">
                    FoodieHub Modern Food Commerce Platform with 4-Step Real-Time Order Tracking
                  </p>
                </a>
              </div>
            </div>

            {/* Right Column: Technology Distribution */}
            <div className="lg:col-span-5 glass-card rounded-xl p-6 sm:p-8 border border-white/[0.08] space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-white pb-3 border-b border-white/[0.06]">
                <Code2 className="w-4 h-4 text-[#ff6b00]" />
                <span>TECHNOLOGY DISTRIBUTION</span>
              </div>

              <div className="space-y-3.5">
                {github.primaryLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between font-mono text-xs">
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="text-slate-400 font-semibold">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#ff6b00]" />
                <span>Real repository metrics configured via src/data/portfolio.ts</span>
              </div>
            </div>
          </div>
        ) : (
          /* Polished "GitHub profile coming soon" state if username is unset */
          <div className="max-w-2xl mx-auto glass-card rounded-xl p-8 sm:p-10 border border-dashed border-white/20 text-center space-y-4">
            <Github className="w-12 h-12 text-[#ff6b00] mx-auto" />
            <h3 className="font-heading font-bold text-xl text-white">
              GitHub Profile Integration
            </h3>
            <p className="font-mono text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              Connect your GitHub username in <code className="text-[#ff9248]">src/data/portfolio.ts</code> to display your active repositories and code telemetry.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
