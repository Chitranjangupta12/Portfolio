import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Activity, Cpu, Play, Pause, Code2, Sparkles } from 'lucide-react';

export const CyberTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spectrum' | 'code' | 'telemetry'>('spectrum');
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Audio Spectrum Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const barCount = 36;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = width / barCount - 2;

      for (let i = 0; i < barCount; i++) {
        let barHeight = 0;
        if (isPlaying) {
          // Harmonic wave simulation
          const wave1 = Math.sin(phase + i * 0.2) * 0.5 + 0.5;
          const wave2 = Math.cos(phase * 1.5 + i * 0.3) * 0.3 + 0.3;
          barHeight = (wave1 * 0.6 + wave2 * 0.4) * (height * 0.75) + 6;
        } else {
          barHeight = 4;
        }

        const x = i * (barWidth + 2);
        const y = height - barHeight;

        // Gradient from orange to amber to slate
        const grad = ctx.createLinearGradient(0, height, 0, y);
        grad.addColorStop(0, '#ff4500');
        grad.addColorStop(0.5, '#ff7b00');
        grad.addColorStop(1, '#ffc078');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [2, 2, 0, 0]);
        ctx.fill();
      }

      if (isPlaying) {
        phase += 0.06;
      }
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none rounded-xl glass-card overflow-hidden border border-white/[0.08] relative shadow-2xl group">
      {/* Top Cyber Status Bar */}
      <div className="bg-[#0a0f1c]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-xs text-slate-300 tracking-wider flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-[#ff6b00]" />
            DEV_NODE // v2026.1
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            ONLINE
          </span>
          <span className="font-mono text-xs text-slate-400">{currentTime || '00:00:00'} IST</span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="px-4 py-2 bg-[#060a12]/80 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('spectrum')}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'spectrum'
                ? 'bg-[#ff6b00]/20 text-[#ff8e3c] border border-[#ff6b00]/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            FOCUS AUDIO
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'code'
                ? 'bg-[#ff6b00]/20 text-[#ff8e3c] border border-[#ff6b00]/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ABOUT.TS
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3 py-1 rounded text-xs font-mono transition-all ${
              activeTab === 'telemetry'
                ? 'bg-[#ff6b00]/20 text-[#ff8e3c] border border-[#ff6b00]/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            SYS STATS
          </button>
        </div>

        {activeTab === 'spectrum' && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 text-[11px] font-mono text-slate-300 hover:text-[#ff6b00] px-2 py-0.5 rounded border border-white/10 hover:border-[#ff6b00]/40 transition-colors"
            title={isPlaying ? 'Pause Audio Visualizer' : 'Play Audio Visualizer'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
        )}
      </div>

      {/* Main Display Area */}
      <div className="p-5 bg-gradient-to-b from-[#080d1a]/50 to-[#04060c]">
        {activeTab === 'spectrum' && (
          <div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#070b14] p-4">
              {/* Profile / Engineer Focus Visualizer Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-lg bg-[#111827] border border-[#ff6b00]/40 flex items-center justify-center overflow-hidden">
                    <Sparkles className="w-5 h-5 text-[#ff6b00] animate-pulse" />
                    <div className="absolute inset-0 bg-[#ff6b00]/10" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-white tracking-wide">
                      CODING BEATS // LO-FI
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400">
                      Background: Deep Focus & Problem Solving
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#ff8533] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-2 py-0.5 rounded">
                  48.0 kHz
                </span>
              </div>

              {/* Canvas Audio Waves */}
              <div className="h-28 w-full flex items-end">
                <canvas ref={canvasRef} width={420} height={110} className="w-full h-full" />
              </div>

              {/* Visualizer Track Controls */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                <span>BITRATE: 320 KBPS</span>
                <span className="text-slate-300">GENRE: LO-FI AMBIENT</span>
                <span className="text-emerald-400">STATUS: PLAYING</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#060a12] p-4 font-mono text-xs leading-relaxed text-slate-300">
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5 text-slate-500 text-[11px]">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                developer.ts
              </span>
              <span>TypeScript // ESNext</span>
            </div>
            <pre className="overflow-x-auto text-[11.5px] space-y-1 text-slate-300">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-amber-300">developer</span> = {'{'}
              </div>
              <div className="pl-4">
                name: <span className="text-emerald-300">"Chitranjan Kumar Gupta"</span>,
              </div>
              <div className="pl-4">
                education: <span className="text-emerald-300">"B.Tech CSE (RKGIT)"</span>,
              </div>
              <div className="pl-4">
                cgpa: <span className="text-[#ff9248]">7.8</span>,
              </div>
              <div className="pl-4">
                achievement: <span className="text-emerald-300">"1st in Code Clash 2.0"</span>,
              </div>
              <div className="pl-4">
                primaryStack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Python"</span>],
              </div>
              <div className="pl-4">
                loves: [<span className="text-emerald-300">"Problem Solving"</span>, <span className="text-emerald-300">"System Design"</span>],
              </div>
              <div className="pl-4">
                status: <span className="text-cyan-300">"Open to Internships & Projects"</span>
              </div>
              <div>{'};'}</div>
              <div className="pt-2 text-slate-500">
                <span className="text-blue-400">export default</span> developer;
              </div>
            </pre>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-[#080d1a] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                <span>CPU THREADS</span>
                <Cpu className="w-3.5 h-3.5 text-[#ff6b00]" />
              </div>
              <div className="text-base font-bold text-white">8 CORES</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">Optimal Load 12%</div>
            </div>

            <div className="p-3 rounded-lg bg-[#080d1a] border border-white/10">
              <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                <span>SYSTEM HEAP</span>
                <Activity className="w-3.5 h-3.5 text-[#ff6b00]" />
              </div>
              <div className="text-base font-bold text-white">42.8 MB</div>
              <div className="text-[10px] text-slate-400 mt-0.5">GC Clean / Stable</div>
            </div>

            <div className="p-3 rounded-lg bg-[#080d1a] border border-white/10">
              <div className="text-slate-400 text-[11px] mb-1">BRANCH // ENV</div>
              <div className="text-sm font-bold text-[#ff9248]">main // Production</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Latest Commit: Validated</div>
            </div>

            <div className="p-3 rounded-lg bg-[#080d1a] border border-white/10">
              <div className="text-slate-400 text-[11px] mb-1">TARGET LOCALE</div>
              <div className="text-sm font-bold text-white">India (IST)</div>
              <div className="text-[10px] text-emerald-400 mt-0.5">Worldwide Remote Ready</div>
            </div>
          </div>
        )}

        {/* Bottom Technical Indicators */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-slate-300">RKGIT // B.TECH 2023–2027</span>
          </div>
          <span className="text-[#ff9248]">CODE CLASH 2.0 WINNER</span>
        </div>
      </div>
    </div>
  );
};
