import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, Minimize2, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { 
  TERMINAL_FILES, 
  LATEX_MATH_OUTPUT, 
  LATEX_EXTRACURRICULARS_OUTPUT, 
  HEXDUMP_OUTPUT, 
  NEOFETCH_DATA,
  PERSONAL_INFO 
} from '../data/portfolioData.ts';

interface TerminalProps {
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  externalCommand?: string | null;
  onClearExternalCommand?: () => void;
}

interface CommandOutput {
  id: string;
  command: string;
  type: 'text' | 'neofetch' | 'latex' | 'code' | 'error';
  content: string;
}

export const Terminal: React.FC<TerminalProps> = ({
  isFullscreen,
  onToggleFullscreen,
  externalCommand,
  onClearExternalCommand,
}) => {
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-neofetch',
      command: 'neofetch',
      type: 'neofetch',
      content: ''
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>(['neofetch']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Execute external command if passed (e.g. from command palette)
  useEffect(() => {
    if (externalCommand) {
      executeCommand(externalCommand);
      if (onClearExternalCommand) {
        onClearExternalCommand();
      }
    }
  }, [externalCommand]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Update command history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(/\s+/);
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);

    if (mainCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (mainCmd === 'help') {
      const helpText = `Available commands in zsh (ollie@durham):
  neofetch               Show system telemetry and specs
  whoami                 Academic profile & placement goals
  ls [projects/]         List virtual project repository
  cat <file>             Inspect project summaries & source
  cat math.tex           View LaTeX PDE & stochastic walk proofs
  cat extracurriculars.tex View LaTeX extracurriculars & hardware projects
  hexdump -C cv.bin      C memory struct dump (COMP221 easter egg)
  ping thinkcentre       ICMP ping to homelab cluster node
  sudo rm -rf /          Run system wipe (privileged)
  clear                  Clear terminal buffer`;
      setHistory(prev => [...prev, { id, command: trimmed, type: 'text', content: helpText }]);
      return;
    }

    if (mainCmd === 'whoami') {
      const whoamiText = `${PERSONAL_INFO.name}
Degree:    ${PERSONAL_INFO.title} (${PERSONAL_INFO.year})
College:   ${PERSONAL_INFO.university} (G411 Joint Honours)
A-Levels:  Mathematics (A*), Further Mathematics (A), Physics (B), Computer Science (B)
Focus:     Low-level C/POSIX systems, full-stack telemetry, and statistical data science.
Status:    ${PERSONAL_INFO.status} (${PERSONAL_INFO.statusSub})
Contact:   ${PERSONAL_INFO.email} | github.com/olliemck1`;
      setHistory(prev => [...prev, { id, command: trimmed, type: 'text', content: whoamiText }]);
      return;
    }

    if (mainCmd === 'ls') {
      const fileList = Object.keys(TERMINAL_FILES).join('   ') + '   math.tex   extracurriculars.tex   cv.bin';
      setHistory(prev => [...prev, { id, command: trimmed, type: 'code', content: fileList }]);
      return;
    }

    if (mainCmd === 'cat') {
      const target = arg.toLowerCase().replace('projects/', '').trim();
      if (!target) {
        setHistory(prev => [...prev, { id, command: trimmed, type: 'error', content: 'usage: cat <filename>' }]);
        return;
      }

      if (target === 'math.tex') {
        setHistory(prev => [...prev, { id, command: trimmed, type: 'latex', content: LATEX_MATH_OUTPUT }]);
        return;
      }

      if (target === 'extracurriculars.tex') {
        setHistory(prev => [...prev, { id, command: trimmed, type: 'latex', content: LATEX_EXTRACURRICULARS_OUTPUT }]);
        return;
      }

      if (target === 'cv.bin') {
        setHistory(prev => [...prev, { 
          id, 
          command: trimmed, 
          type: 'text', 
          content: 'cv.bin: raw binary file. Use "hexdump -C cv.bin" to inspect bytes and struct alignment.' 
        }]);
        return;
      }

      // Check virtual files
      const matchKey = Object.keys(TERMINAL_FILES).find(k => k.toLowerCase() === target);
      if (matchKey && TERMINAL_FILES[matchKey]) {
        setHistory(prev => [...prev, { id, command: trimmed, type: 'code', content: TERMINAL_FILES[matchKey] }]);
        return;
      }

      setHistory(prev => [...prev, { 
        id, 
        command: trimmed, 
        type: 'error', 
        content: `cat: ${target}: No such file or directory. Try 'ls' to see available files.` 
      }]);
      return;
    }

    if (trimmed.startsWith('hexdump')) {
      setHistory(prev => [...prev, { id, command: trimmed, type: 'code', content: HEXDUMP_OUTPUT }]);
      return;
    }

    if (trimmed.startsWith('ping')) {
      const pingOutput = `PING thinkcentre (durham-node-01): 56 data bytes
64 bytes from durham-node: icmp_seq=1 ttl=64 time=11.4 ms
64 bytes from durham-node: icmp_seq=2 ttl=64 time=10.8 ms
64 bytes from durham-node: icmp_seq=3 ttl=64 time=11.2 ms
64 bytes from durham-node: icmp_seq=4 ttl=64 time=10.9 ms

--- thinkcentre ping statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 10.8/11.07/11.4/0.24 ms [Tailscale Mesh: OK]`;
      setHistory(prev => [...prev, { id, command: trimmed, type: 'text', content: pingOutput }]);
      return;
    }

    if (trimmed.includes('rm -rf') || trimmed.includes('rm -rf /')) {
      const sudoMsg = `[sudo] password for ollie: *******
zsh: permission denied: Nice try! Protecting root filesystem on durham-node.
Operation prevented by system security guardrail.`;
      setHistory(prev => [...prev, { id, command: trimmed, type: 'error', content: sudoMsg }]);
      return;
    }

    if (mainCmd === 'neofetch') {
      setHistory(prev => [...prev, { id, command: trimmed, type: 'neofetch', content: '' }]);
      return;
    }

    if (mainCmd === 'uname' || trimmed === 'uname -a') {
      setHistory(prev => [...prev, { 
        id, 
        command: trimmed, 
        type: 'text', 
        content: 'Linux durham-node 6.8.12-1-pve #1 SMP PREEMPT_DYNAMIC Debian x86_64 GNU/Linux' 
      }]);
      return;
    }

    if (mainCmd === 'uptime') {
      setHistory(prev => [...prev, { 
        id, 
        command: trimmed, 
        type: 'text', 
        content: ' 20:44:18 up 42 days, 13:37,  1 user,  load average: 0.14, 0.09, 0.07' 
      }]);
      return;
    }

    if (mainCmd === 'date') {
      setHistory(prev => [...prev, { 
        id, 
        command: trimmed, 
        type: 'text', 
        content: new Date().toUTCString() 
      }]);
      return;
    }

    // Default unknown command
    setHistory(prev => [...prev, { 
      id, 
      command: trimmed, 
      type: 'error', 
      content: `zsh: command not found: ${parts[0]}. Type 'help' for available commands.` 
    }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocompletion
      const candidates = [
        'help', 'whoami', 'neofetch', 'clear', 'ls', 'ls projects/', 
        'cat math.tex', 'cat extracurriculars.tex', 'cat command-centre.md',
        'cat c-link-auditor.c', 'cat numerical-pde-sims.m', 'cat job-tracker.ts',
        'cat homelab-infra.yml', 'hexdump -C cv.bin', 'ping thinkcentre', 'sudo rm -rf /'
      ];
      const match = candidates.find(c => c.startsWith(inputVal.trim()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  const handleShortcutClick = (cmd: string) => {
    executeCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div 
      className={`spotlight-card rounded-2xl flex flex-col font-mono overflow-hidden transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-4 md:inset-8 z-50 bg-[#111018] border border-[#3D3759] shadow-2xl backdrop-blur-md' 
          : 'h-[500px] w-full'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0D0C13] border-b border-[#242133] select-none">
        <div className="flex items-center space-x-2">
          {/* macOS window dots */}
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
          <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-purple-400" />
            ollie@durham:~ — zsh
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 hidden sm:inline-block">
            x86_64 Debian
          </span>
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Expand to Fullscreen'}
            className="p-1.5 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-[#242133] transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div 
        ref={terminalBodyRef}
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-4 overflow-y-auto text-xs md:text-[13px] leading-relaxed text-slate-300 space-y-3 cursor-text bg-[#111018]/95"
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-purple-400 font-semibold">ollie@durham:~</span>
              <span className="text-slate-500">$</span>
              <span className="text-slate-100">{item.command}</span>
            </div>

            {item.type === 'neofetch' ? (
              <div className="pt-2 pb-1 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-5 text-purple-400 font-mono text-[11px] leading-none select-none whitespace-pre py-1 bg-purple-950/20 rounded p-2 border border-purple-900/30">
                  {NEOFETCH_DATA.ascii.join('\n')}
                </div>
                <div className="md:col-span-7 space-y-1 text-xs">
                  <div className="text-purple-300 font-bold border-b border-[#242133] pb-1 mb-1">
                    ollie@durham.ac.uk
                  </div>
                  {NEOFETCH_DATA.specs.map(spec => (
                    <div key={spec.label} className="grid grid-cols-3 gap-1">
                      <span className="text-purple-400/90 font-medium">{spec.label}:</span>
                      <span className="col-span-2 text-slate-300">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : item.type === 'latex' ? (
              <pre className="p-3 rounded-lg bg-[#09080D] border border-purple-900/30 text-purple-200 text-xs overflow-x-auto whitespace-pre font-mono">
                {item.content}
              </pre>
            ) : item.type === 'error' ? (
              <div className="text-rose-400 whitespace-pre-wrap">{item.content}</div>
            ) : (
              <div className="text-slate-300 whitespace-pre-wrap font-mono">{item.content}</div>
            )}
          </div>
        ))}

        {/* Live Input Line */}
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-purple-400 font-semibold">ollie@durham:~</span>
          <span className="text-slate-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-slate-100 focus:outline-none caret-purple-400 font-mono text-xs md:text-[13px]"
            autoFocus
            spellCheck={false}
            autoCapitalize="none"
            autoComplete="off"
            aria-label="Terminal input"
          />
          <CornerDownLeft className="w-3 h-3 text-slate-600 hidden sm:block" />
        </div>
      </div>

      {/* Clickable Quick Command Shortcuts Pinned to Bottom */}
      <div className="p-2.5 bg-[#0D0C13] border-t border-[#242133] overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-1.5 min-w-max">
          <span className="text-[11px] text-slate-500 mr-1 select-none">Quick commands:</span>
          {[
            'help',
            'ls projects/',
            'cat math.tex',
            'cat extracurriculars.tex',
            'hexdump -C cv.bin',
            'ping thinkcentre',
            'whoami',
            'clear'
          ].map(cmd => (
            <button
              key={cmd}
              onClick={() => handleShortcutClick(cmd)}
              className="text-[11px] px-2 py-0.5 rounded-md bg-[#181622] hover:bg-purple-900/40 hover:text-purple-300 text-slate-400 border border-[#242133] hover:border-purple-600/50 transition-all font-mono active:scale-95"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
