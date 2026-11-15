import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  MapPin, 
  GraduationCap, 
  Activity, 
  Terminal as TerminalIcon, 
  ShieldCheck, 
  Briefcase,
  GitCommit,
  Radio
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import type { DrawerId } from '../types/portfolio.ts';
import { Terminal } from './Terminal.tsx';

interface BentoGridProps {
  onOpenDrawer: (id: DrawerId) => void;
  terminalCommand: string | null;
  onClearTerminalCommand: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ 
  onOpenDrawer,
  terminalCommand,
  onClearTerminalCommand
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isTerminalFullscreen, setIsTerminalFullscreen] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 no-print">
      {/* 4-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
        
        {/* ============================================================ */}
        {/* LEFT HALF (Columns 1–2): Identity + Interactive Terminal */}
        {/* ============================================================ */}

        {/* Top-Left Card (2x1) — Identity & Pitch */}
        <div className="lg:col-span-2 spotlight-card rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden bg-[#111018]">
          {/* Subtle violet top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
          
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#1A162B] text-purple-300 border border-purple-800/40">
                <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.university}
              </span>
              <span className="text-xs font-mono text-slate-500">
                G411 • 2025–2028
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
              {PERSONAL_INFO.title}
            </h1>
            <p className="text-sm sm:text-[15px] text-slate-400 font-sans mt-3 leading-relaxed">
              {PERSONAL_INFO.pitch}
            </p>
          </div>

          <div className="pt-5 mt-4 border-t border-[#242133]/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="hidden sm:inline-block text-slate-600">•</span>
              <span className="hidden sm:inline-block text-purple-300/80">
                A-Level A*A in Maths & Further Maths
              </span>
            </div>
            
            <button
              onClick={() => onOpenDrawer('education')}
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-medium text-xs group/link"
            >
              Academic Profile
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Card A (1x1) — Status & Contact */}
        <div 
          onClick={() => onOpenDrawer('contact')}
          className="spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              {/* Clean emerald live availability pulse dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-400 tracking-tight">
                {PERSONAL_INFO.status}
              </span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div className="my-3">
            <p className="text-xs text-slate-400 leading-snug">
              Targeting Software Engineering, Systems, or Quantitative Data Science roles.
            </p>
          </div>

          <div className="pt-3 border-t border-[#242133]/60 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">
              {PERSONAL_INFO.email}
            </span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 rounded-md bg-[#181622] hover:bg-purple-900/40 text-slate-400 hover:text-purple-300 border border-[#242133] transition-all"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Card B (1x1) — Durham University Academic Profile */}
        <div 
          onClick={() => onOpenDrawer('education')}
          className="spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
              <GraduationCap className="w-4 h-4" />
              <span>Durham University</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-200 mt-2">
              BSc (Hons) Maths & CS
            </h3>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Year 2 Modules:
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {['Networks & Systems', 'Theory of Comp', 'Data Science', 'Statistical Inference', 'Comp Maths'].map(m => (
                <span key={m} className="text-[10px] px-1.5 py-0.5 rounded bg-[#181622] text-slate-300 border border-[#242133]">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#242133]/60 text-[11px] font-mono text-slate-500 flex justify-between">
            <span>2025 – 2028</span>
            <span className="text-purple-400">View Coursework →</span>
          </div>
        </div>

        {/* Center-Left Card (2x2) — Interactive zsh Terminal */}
        <div className="lg:col-span-2 lg:row-span-2">
          <Terminal 
            isFullscreen={isTerminalFullscreen}
            onToggleFullscreen={() => setIsTerminalFullscreen(!isTerminalFullscreen)}
            externalCommand={terminalCommand}
            onClearExternalCommand={onClearTerminalCommand}
          />
        </div>

        {/* ============================================================ */}
        {/* RIGHT HALF (Columns 3–4): Detail Drawers & Project Cards */}
        {/* ============================================================ */}

        {/* Card C (2x1) — Featured Project: Command Centre */}
        <div 
          onClick={() => onOpenDrawer('command-centre')}
          className="lg:col-span-2 spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-800/40">
                  <Activity className="w-3 h-3 text-purple-400" />
                  Featured System
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Telemetry & Ingestion
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-sans mt-2">
                Command Centre — Personal Telemetry Hub
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                React • Node.js • Express • SQLite • Garmin Health API • Telegram Bot
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          {/* Minimal purple SVG telemetry sparkline */}
          <div className="my-4 py-2 px-3 rounded-xl bg-[#0D0C13] border border-[#242133] flex items-center justify-between">
            <div className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>Vivoactive 4 Ingestion Stream</span>
            </div>

            <div className="w-48 h-8">
              <svg viewBox="0 0 160 30" className="w-full h-full stroke-purple-400 fill-none" preserveAspectRatio="none">
                <path
                  d="M0,15 L20,15 L25,7 L30,23 L35,15 L60,15 L65,4 L70,26 L75,15 L100,15 L105,9 L110,21 L115,15 L140,15 L145,6 L150,24 L160,15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
              Live &lt;12ms
            </span>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-[#242133]/60 font-mono">
            <span>Garmin Biometrics + Asynchronous Telegram Voice Bot</span>
            <span className="text-purple-400 group-hover:underline">Architecture Notes →</span>
          </div>
        </div>

        {/* Card D (1x1) — C Web Scraper & Link Integrity Auditor */}
        <div 
          onClick={() => onOpenDrawer('c-link-auditor')}
          className="spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>C Systems Utility</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-100 mt-2">
              C Link Integrity Auditor
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-snug">
              Multithreaded POSIX worker pool auditing markdown links at 350+ URLs/sec.
            </p>
            <div className="flex flex-wrap gap-1 mt-3">
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-purple-300 border border-purple-800/40">
                C11 / POSIX
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-purple-300 border border-purple-800/40">
                libcurl
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-slate-300 border border-[#242133]">
                Accepted Upstream PR
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#242133]/60 text-[11px] font-mono text-slate-500 flex justify-between">
            <span>awesome-* Verified</span>
            <span className="text-purple-400">Inspect →</span>
          </div>
        </div>

        {/* Card E (1x1) — Experience & Infrastructure */}
        <div 
          onClick={() => onOpenDrawer('experience')}
          className="spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cyber & Homelab</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-100 mt-2">
              Mercer & Hole & Infra
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-snug">
              ISO 27001 auditing & Proxmox LXC cluster with encrypted Tailscale mesh.
            </p>
            <div className="flex flex-wrap gap-1 mt-3">
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-slate-300 border border-[#242133]">
                ISO 27001
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-slate-300 border border-[#242133]">
                Proxmox LXC
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#181622] text-purple-300 border border-purple-800/40">
                Tailscale WireGuard
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#242133]/60 text-[11px] font-mono text-slate-500 flex justify-between">
            <span>Zero Open Ports</span>
            <span className="text-purple-400">Details →</span>
          </div>
        </div>

        {/* Card F (2x1) — Job Application Tracker & GitHub Activity */}
        <div 
          onClick={() => onOpenDrawer('job-tracker')}
          className="lg:col-span-2 spotlight-card rounded-2xl p-5 flex flex-col justify-between cursor-pointer group"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-800/40">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                  Automation & Tracking
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Full-Stack Node.js Scraper
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-sans mt-2">
                Job Application Tracker & GitHub Activity
              </h3>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          {/* Purple-tinted GitHub contribution grid */}
          <div className="my-3 p-3 rounded-xl bg-[#0D0C13] border border-[#242133]">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-purple-300">
                <GitCommit className="w-3.5 h-3.5 text-purple-400" />
                github.com/olliemck1 Contribution Activity
              </span>
              <span className="text-[10px] text-slate-500 hidden sm:inline-block">2025–2026</span>
            </div>

            {/* Simulated 52-week activity grid */}
            <div className="grid grid-flow-col grid-rows-4 gap-1 overflow-x-auto py-1 no-scrollbar">
              {Array.from({ length: 64 }).map((_, i) => {
                const intensity = (i * 7 + 3) % 5;
                let bgClass = 'bg-[#181622]';
                if (intensity === 1) bgClass = 'bg-purple-900/40';
                if (intensity === 2) bgClass = 'bg-purple-700/60';
                if (intensity === 3) bgClass = 'bg-purple-600';
                if (intensity === 4) bgClass = 'bg-purple-400';

                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-sm ${bgClass} transition-colors hover:ring-1 hover:ring-purple-300`}
                    title={`Day ${i + 1} activity`}
                  />
                );
              })}
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-[#242133]/60 font-mono">
            <span>Automated portal scrape + SHA-256 payload diffing</span>
            <span className="text-purple-400 group-hover:underline">View Pipeline →</span>
          </div>
        </div>

      </div>
    </main>
  );
};
