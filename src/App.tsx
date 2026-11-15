import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { BentoGrid } from './components/BentoGrid.tsx';
import { DetailDrawer } from './components/DetailDrawer.tsx';
import { CommandPalette } from './components/CommandPalette.tsx';
import { PrintCV } from './components/PrintCV.tsx';
import { Footer } from './components/Footer.tsx';
import type { DrawerId } from './types/portfolio.ts';

export default function App() {
  const [activeDrawerId, setActiveDrawerId] = useState<DrawerId | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [terminalCommand, setTerminalCommand] = useState<string | null>(null);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleRunTerminalCommand = (cmd: string) => {
    setTerminalCommand(cmd);
  };

  return (
    <div className="min-h-screen bg-[#09080D] text-slate-100 flex flex-col font-sans selection:bg-purple-600/30 selection:text-purple-200">
      {/* Top Navigation */}
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />

      {/* Main Interactive Bento Grid */}
      <div className="flex-1">
        <BentoGrid 
          onOpenDrawer={(id) => setActiveDrawerId(id)}
          terminalCommand={terminalCommand}
          onClearTerminalCommand={() => setTerminalCommand(null)}
        />
      </div>

      {/* Footer */}
      <Footer />

      {/* Slide-over Detail Drawer */}
      <DetailDrawer 
        activeDrawerId={activeDrawerId}
        onClose={() => setActiveDrawerId(null)}
      />

      {/* Global Quick Search Command Palette */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenDrawer={(id) => setActiveDrawerId(id)}
        onRunTerminalCommand={handleRunTerminalCommand}
      />

      {/* Dedicated Single-Page Print View */}
      <PrintCV />
    </div>
  );
}
