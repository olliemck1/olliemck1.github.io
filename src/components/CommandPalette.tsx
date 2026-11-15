import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal as TerminalIcon, 
  FolderKanban, 
  Mail, 
  Download, 
  Printer, 
  Sparkles,
  ArrowRight,
  Calculator,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons.tsx';
import type { DrawerId } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDrawer: (id: DrawerId) => void;
  onRunTerminalCommand: (command: string) => void;
}

interface PaletteItem {
  id: string;
  category: 'drawers' | 'terminal' | 'actions';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenDrawer,
  onRunTerminalCommand,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: PaletteItem[] = [
    // Drawers
    {
      id: 'drawer-command-centre',
      category: 'drawers',
      title: 'Command Centre — Personal Telemetry Hub',
      subtitle: 'React, Node.js, Garmin health ingestion, Telegram voice bot',
      icon: <FolderKanban className="w-4 h-4 text-purple-400" />,
      action: () => { onOpenDrawer('command-centre'); onClose(); }
    },
    {
      id: 'drawer-c-link-auditor',
      category: 'drawers',
      title: 'C Web Scraper & Link Integrity Auditor',
      subtitle: 'Multithreaded POSIX utility, libcurl, accepted upstream PR',
      icon: <Code className="w-4 h-4 text-purple-400" />,
      action: () => { onOpenDrawer('c-link-auditor'); onClose(); }
    },
    {
      id: 'drawer-education',
      category: 'drawers',
      title: 'Durham University Academic Profile',
      subtitle: 'BSc Maths & CS (G411), modules, coursework & A-Levels',
      icon: <FolderKanban className="w-4 h-4 text-purple-400" />,
      action: () => { onOpenDrawer('education'); onClose(); }
    },
    {
      id: 'drawer-experience',
      category: 'drawers',
      title: 'Mercer & Hole (Cyber Security) & Homelab',
      subtitle: 'ISO 27001 auditing, Proxmox LXC cluster, Tailscale mesh',
      icon: <FolderKanban className="w-4 h-4 text-purple-400" />,
      action: () => { onOpenDrawer('experience'); onClose(); }
    },
    {
      id: 'drawer-job-tracker',
      category: 'drawers',
      title: 'Job Application Tracker & Placement Scraper',
      subtitle: 'Automated placement pipeline, SHA-256 diffing, GitHub grid',
      icon: <FolderKanban className="w-4 h-4 text-purple-400" />,
      action: () => { onOpenDrawer('job-tracker'); onClose(); }
    },
    {
      id: 'drawer-contact',
      category: 'drawers',
      title: 'Status & Contact Information',
      subtitle: 'Open for 2027 Placements across Software / Systems / Data Science',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => { onOpenDrawer('contact'); onClose(); }
    },

    // Terminal Commands
    {
      id: 'cmd-math',
      category: 'terminal',
      title: 'Run: cat math.tex',
      subtitle: 'LaTeX Gray-Scott PDE discretization & random walk proofs',
      icon: <Calculator className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('cat math.tex'); onClose(); }
    },
    {
      id: 'cmd-extracurriculars',
      category: 'terminal',
      title: 'Run: cat extracurriculars.tex',
      subtitle: 'LaTeX section: College football, skiing, chess, cubing, DJ hardware',
      icon: <TerminalIcon className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('cat extracurriculars.tex'); onClose(); }
    },
    {
      id: 'cmd-hexdump',
      category: 'terminal',
      title: 'Run: hexdump -C cv.bin',
      subtitle: 'Inspect C struct memory alignment and raw binary dump (COMP221)',
      icon: <TerminalIcon className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('hexdump -C cv.bin'); onClose(); }
    },
    {
      id: 'cmd-ping',
      category: 'terminal',
      title: 'Run: ping thinkcentre',
      subtitle: 'Simulate ICMP ping response from durham-node cluster',
      icon: <TerminalIcon className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('ping thinkcentre'); onClose(); }
    },
    {
      id: 'cmd-whoami',
      category: 'terminal',
      title: 'Run: whoami',
      subtitle: 'Display academic credentials and 2027 placement objectives',
      icon: <TerminalIcon className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('whoami'); onClose(); }
    },
    {
      id: 'cmd-neofetch',
      category: 'terminal',
      title: 'Run: neofetch',
      subtitle: 'Display ASCII emblem and server telemetry specs',
      icon: <TerminalIcon className="w-4 h-4 text-purple-400" />,
      action: () => { onRunTerminalCommand('neofetch'); onClose(); }
    },

    // Direct Actions
    {
      id: 'act-copy-email',
      category: 'actions',
      title: 'Copy Email Address',
      subtitle: 'hello@olliemck.me',
      icon: <Mail className="w-4 h-4 text-purple-300" />,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        alert('Email copied to clipboard: hello@olliemck.me');
        onClose();
      }
    },
    {
      id: 'act-download-cv',
      category: 'actions',
      title: 'Download CV (PDF)',
      subtitle: 'Oliver_McKenna_CV.pdf (Print-ready document)',
      icon: <Download className="w-4 h-4 text-purple-300" />,
      action: () => {
        window.open('/cv.pdf', '_blank');
        onClose();
      }
    },
    {
      id: 'act-print-cv',
      category: 'actions',
      title: 'Print Technical / Academic CV',
      subtitle: 'Clean single-page formatted print view',
      icon: <Printer className="w-4 h-4 text-purple-300" />,
      action: () => {
        onClose();
        setTimeout(() => window.print(), 100);
      }
    },
    {
      id: 'act-github',
      category: 'actions',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/olliemck1',
      icon: <GithubIcon className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(PERSONAL_INFO.githubUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      category: 'actions',
      title: 'Open LinkedIn Profile',
      subtitle: 'Oliver McKenna on LinkedIn',
      icon: <LinkedinIcon className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedinUrl, '_blank');
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(item => {
    const query = search.toLowerCase().trim();
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.subtitle.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  // Modal keybindings
  const handleModalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Palette Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            onKeyDown={handleModalKeyDown}
            className="relative w-full max-w-xl bg-[#111018] border border-[#242133] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="p-3.5 border-b border-[#242133] flex items-center gap-3 bg-[#0D0C13]">
              <Search className="w-4 h-4 text-purple-400 shrink-0 ml-1" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, run terminal commands, or jump to actions..."
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-sans"
              />
              <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded border border-[#242133] bg-[#181622] hidden sm:inline-block">
                ESC
              </span>
            </div>

            {/* List of Results */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500 font-mono">
                  No matching commands or projects found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
                        isSelected 
                          ? 'bg-[#1C182B] border border-purple-800/50 text-white' 
                          : 'hover:bg-[#161422] text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-950/80' : 'bg-[#181622]'}`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-xs font-semibold font-sans">{item.title}</div>
                          <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.subtitle}</div>
                        </div>
                      </div>

                      {isSelected && (
                        <ArrowRight className="w-3.5 h-3.5 text-purple-400 shrink-0 mr-2" />
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="p-2.5 bg-[#0D0C13] border-t border-[#242133] flex items-center justify-between text-[11px] font-mono text-slate-500 px-4">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-purple-400" />
                Navigate with ↑↓, press Enter to execute
              </span>
              <span>olliemck.me</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
