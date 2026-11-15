import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons.tsx';
import { DRAWER_DATA } from '../data/portfolioData.ts';
import type { DrawerId } from '../types/portfolio.ts';

interface DetailDrawerProps {
  activeDrawerId: DrawerId | null;
  onClose: () => void;
}

export const DetailDrawer: React.FC<DetailDrawerProps> = ({ activeDrawerId, onClose }) => {
  const data = activeDrawerId ? DRAWER_DATA[activeDrawerId] : null;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeDrawerId) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeDrawerId, onClose]);

  return (
    <AnimatePresence>
      {activeDrawerId && data && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-xl h-full bg-[#111018] border-l border-[#242133] shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#242133] bg-[#0D0C13] flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-950/60 text-purple-300 border border-purple-800/40 mb-2">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  Technical Deep Dive
                </span>
                <h2 className="text-xl font-bold text-slate-100 font-sans tracking-tight">
                  {data.title}
                </h2>
                <p className="text-xs text-purple-300/80 font-mono mt-0.5">
                  {data.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-[#242133] transition-colors"
                title="Close drawer (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
              {/* Tagline */}
              <div className="p-4 rounded-xl bg-[#161422] border border-[#242133] text-slate-300 leading-relaxed font-sans">
                {data.tagline}
              </div>

              {/* Metrics Grid */}
              {data.metrics && data.metrics.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> Key Metrics & Parameters
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {data.metrics.map((metric, idx) => (
                      <div 
                        key={idx} 
                        className="p-3 rounded-lg bg-[#0D0C13] border border-[#242133]"
                      >
                        <div className="text-[11px] text-slate-400 font-mono">{metric.label}</div>
                        <div className="text-xs font-semibold text-purple-200 font-mono mt-0.5">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture & Implementation Notes */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-purple-400" /> Architecture & Implementation Notes
                </h3>
                <div className="space-y-2.5">
                  {data.architecturePoints.map((point, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-lg bg-[#0E0D15] border border-[#242133]/60 text-slate-300 text-xs leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges Solved */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Engineering Challenges & Solutions
                </h3>
                <div className="space-y-2 text-xs text-slate-300">
                  {data.technicalChallenges.map((challenge, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#0D0C13] border border-[#242133] leading-relaxed">
                      {challenge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {data.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1C182B] text-purple-300 border border-purple-800/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with links */}
            <div className="p-4 border-t border-[#242133] bg-[#0D0C13] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {data.githubUrl && (
                  <a
                    href={data.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#161422] border border-[#242133] hover:border-purple-600/50 text-xs text-slate-300 hover:text-white transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {data.liveUrl && (
                  <a
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs text-white font-medium shadow-md shadow-purple-600/20 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Channel</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
