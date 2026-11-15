import React from 'react';
import { Search, Download, FileText } from 'lucide-react';
import { GithubIcon } from './Icons.tsx';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#09080D]/80 border-b border-[#242133]/80 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Name with crisp uppercase tracking */}
        <div className="flex items-center space-x-3">
          <a 
            href="/"
            className="flex items-center space-x-2 text-slate-100 hover:text-purple-300 transition-colors font-mono tracking-widest text-sm font-semibold uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 ring-2 ring-purple-500/20" />
            <span>{PERSONAL_INFO.displayName}</span>
          </a>
          <span className="hidden sm:inline-block text-xs text-slate-500 font-mono">
            / BSc Maths & CS
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Cmd+K trigger button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-2 px-2.5 py-1.5 rounded-lg bg-[#111018] border border-[#242133] hover:border-purple-600/50 hover:bg-[#161422] text-xs text-slate-400 hover:text-slate-200 transition-all group"
            title="Search commands, projects, and actions (Cmd+K / Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-300" />
            <span className="hidden md:inline-block">Quick Search</span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-purple-300 bg-[#1D1A2B] border border-purple-900/50 rounded shadow-sm">
              ⌘K
            </kbd>
          </button>

          {/* GitHub link button */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#111018] border border-[#242133] hover:border-[#3D3759] text-slate-400 hover:text-purple-300 hover:bg-[#161422] transition-colors"
            title="GitHub Profile (@olliemck1)"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Print CV quick link button */}
          <button
            onClick={() => window.print()}
            className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#111018] border border-[#242133] hover:border-[#3D3759] text-xs text-slate-400 hover:text-purple-300 hover:bg-[#161422] transition-colors"
            title="Print CV (Academic / Technical Single-Page)"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>Print CV</span>
          </button>

          {/* Vibrant purple CTA: Download CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Oliver_McKenna_CV.pdf"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs shadow-lg shadow-purple-600/25 hover:shadow-purple-500/35 transition-all active:scale-95"
            title="Download Oliver McKenna CV (PDF)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
};
