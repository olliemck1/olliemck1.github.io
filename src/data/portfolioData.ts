import type { ProjectDetail } from '../types/portfolio.ts';

export const PERSONAL_INFO = {
  name: 'Oliver McKenna',
  displayName: 'OLLIE MCKENNA',
  title: 'BSc Mathematics & Computer Science',
  university: 'Durham University',
  year: 'Year 2 (2025–2028)',
  location: 'Durham / Hertfordshire, UK',
  email: 'hello@olliemck.me',
  displayEmail: 'hello@olliemck.me',
  altEmail: 'ollie8585@gmail.com',
  durhamEmail: 'wvfd60@durham.ac.uk',
  githubUrl: 'https://github.com/olliemck1',
  linkedinUrl: 'https://www.linkedin.com/in/ollie-mckenna-32467a200/',
  pitch: 'Second-year Maths & CS undergraduate building low-level C utilities, full-stack telemetry systems, and self-hosted Linux infrastructure.',
  status: 'Open for 2027 Placements',
  statusSub: 'Software Engineering, Data Science, or Cyber/Systems roles',
};

export const DRAWER_DATA: Record<string, ProjectDetail> = {
  'contact': {
    id: 'contact',
    title: 'Status & Contact Information',
    subtitle: 'Placement Availability & Direct Channels',
    tagline: 'Seeking 2027 industrial placement opportunities across Software Engineering, Systems/Cyber, and Data Science.',
    tags: ['Available 2027', 'Durham, UK', 'Hertfordshire, UK', 'London Hybrid / Remote'],
    githubUrl: 'https://github.com/olliemck1',
    liveUrl: 'mailto:hello@olliemck.me',
    metrics: [
      { label: 'Degree Track', value: 'BSc (Hons) Maths & CS' },
      { label: 'Target Window', value: 'Summer 2027 / 2027–2028' },
      { label: 'Geographic Base', value: 'UK (Durham / London / Herts)' },
      { label: 'Primary Contact', value: 'hello@olliemck.me' }
    ],
    architecturePoints: [
      'Seeking full-year or summer 2027 industrial placements across backend engineering, systems development, cyber security, or quantitative data science.',
      'Flexible for hybrid roles across London, Hertfordshire, the North East, or remote.',
      'Strong dual foundation combining theoretical mathematical rigor (linear algebra, stochastic processes, analysis) with practical systems engineering (C, POSIX, Linux, distributed telemetry).'
    ],
    technicalChallenges: [
      'Contact channels: Direct email via hello@olliemck.me or verified academic email wvfd60@durham.ac.uk.',
      'Active on GitHub (@olliemck1) for open-source contributions and system configurations.',
      'Available for technical interviews covering algorithms, data structures, systems architecture, and mathematical modeling.'
    ]
  },
  'education': {
    id: 'education',
    title: 'Durham University Academic Profile',
    subtitle: 'BSc (Hons) Mathematics with Computer Science (G411)',
    tagline: 'Oct 2025 – Jun 2028 | Joint Honours curriculum bridging rigorous pure/applied mathematics and core computer systems.',
    tags: ['Durham University', 'G411', 'Year 2', 'Algorithms', 'Linear Algebra', 'Systems'],
    metrics: [
      { label: 'Degree Code', value: 'G411 Joint Hons' },
      { label: 'Year 1 Modules', value: 'Linear Alg, Calculus, DSA, Comp Thinking' },
      { label: 'Year 2 Modules', value: 'Networks & Systems, Theory of Comp, Data Science' },
      { label: 'A-Levels', value: 'Maths (A*), Further Maths (A)' }
    ],
    architecturePoints: [
      'Durham Year 2 Modules: Networks & Systems, Theory of Computation, Data Science, Statistical Inference, and Computational Mathematics.',
      'Coursework Highlight — C Systems Programming (COMP221 From Bytes to Structs): Deep exploration of struct alignment, memory padding, pointer arithmetic, byte-level serialization, and custom memory layout auditing.',
      'Coursework Highlight — Computational Mathematics (MATLAB): Finite difference discretization of Gray-Scott reaction-diffusion partial differential equations, analyzing Turing pattern stability conditions.',
      'Coursework Highlight — Statistical Inference & Stochastic Systems: Maximum likelihood estimators, Bayesian updating algorithms, and Monte Carlo random walk boundary hitting distributions across 1D/2D/3D lattices.'
    ],
    technicalChallenges: [
      'Year 1 Foundation: Linear Algebra (eigenvalues, Jordan normal form, vector spaces), Calculus & Analysis ($\epsilon$-$\delta$ proofs, metric spaces), Probability & Statistics, Data Structures & Algorithms ($O(V+E)$ graph algorithms, amortized analysis).',
      'Secondary Education (Sir John Lawes School, 2023–2025): A-Levels in Mathematics (A*), Further Mathematics (A), Physics (B), Computer Science (B).',
      'GCSEs (2018–2023): 11 Qualifications including Grade 9 in Mathematics, Grade 9 in Physics, and Grade 8 in Computer Science.'
    ]
  },
  'command-centre': {
    id: 'command-centre',
    title: 'Command Centre — Personal Telemetry Hub',
    subtitle: 'Unified Quantified-Self & Asynchronous Automation Engine',
    tagline: 'High-availability personal telemetry dashboard integrating real-time wearables, calendar streams, multimodal LLM journaling, and relational tracking.',
    tags: ['React', 'Node.js', 'Express', 'SQLite', 'Telegram Bot API', 'Garmin Health', 'Tailscale'],
    githubUrl: 'https://github.com/olliemck1',
    metrics: [
      { label: 'DB Latency', value: '< 12ms SQLite WAL' },
      { label: 'Biometrics Feed', value: 'Garmin Vivoactive 4' },
      { label: 'Journaling', value: 'Telegram Voice / Text' },
      { label: 'Hosting', value: 'Proxmox LXC Container' }
    ],
    architecturePoints: [
      'Ingestion Pipeline: Background sync workers pull daily resting heart rate, sleep architecture, stress telemetry, and active calorie expenditure from Garmin Vivoactive 4 export feeds.',
      'Multimodal Journaling via Telegram Bot: Custom long-polling bot that accepts quick text entries and voice notes, streaming them through speech-to-text and LLM summarization for structured nutritional and reflection logs.',
      'Relational Storage & Social CRM: Local SQLite database running with Write-Ahead Logging (WAL) enabled, indexing social interactions, contact follow-up schedules, and daily habit metrics.',
      'Event Aggregation Engine: Real-time iCal synchronization merging university timetable feeds with personal calendar blocks, detecting schedule anomalies and sending morning agenda dispatches.'
    ],
    technicalChallenges: [
      'Solved low-latency voice transcription and entity extraction by asynchronous queue processing, preventing bot connection timeouts during peak mobile voice notes.',
      'Maintained zero data loss during network roaming using local offline queuing and idempotent sync reconciliations.',
      'Secured via mutual authentication and restricted strictly to internal Tailscale mesh nodes without exposure to the public web.'
    ]
  },
  'c-link-auditor': {
    id: 'c-link-auditor',
    title: 'C Web Scraper & Link Integrity Auditor',
    subtitle: 'High-Throughput Concurrent Systems Utility',
    tagline: 'POSIX-compliant, multithreaded link validator written in pure C for auditing massive markdown repositories and documentation mirrors.',
    tags: ['C11', 'libcurl', 'POSIX Threads', 'Regex', 'Systems Programming', 'Open Source'],
    githubUrl: 'https://github.com/olliemck1',
    metrics: [
      { label: 'Throughput', value: '350+ URLs / sec' },
      { label: 'Memory Footprint', value: '< 18 MB RSS' },
      { label: 'Upstream PR', value: 'Accepted on GitHub' },
      { label: 'Concurrency', value: 'POSIX Thread Pool' }
    ],
    architecturePoints: [
      'Zero-Copy Parser: Custom string-scanning and regex tokenizers extracting markdown hyperlinks without heap allocation churn.',
      'Worker Pool with Work-Stealing Queue: Producer thread scans directories of markdown documents and dispatches unique HTTP endpoints to a bounded circular task queue.',
      'libcurl Multi-Handle Integration: Exploits libcurl multi-interface with epoll/poll event multiplexing, maintaining hundreds of active TCP handshakes concurrently.',
      'Granular HTTP Response Classification: Differentiates hard 404s, temporary 429 rate-limits (with exponential backoff jitter), and SSL certificate handshake failures.'
    ],
    technicalChallenges: [
      'Benchmarked against large community curation lists including awesome-python and awesome-selfhosted (auditing 12,000+ links in under 45 seconds).',
      'Identified and authored an accepted upstream pull request resolving dead and permanently moved documentation endpoints.',
      'Prevented data races in the shared visited-link Bloom filter / hash set through fine-grained pthread mutexes and atomic operations.'
    ]
  },
  'experience': {
    id: 'experience',
    title: 'Experience & Infrastructure',
    subtitle: 'Mercer & Hole (Cyber Security) & Self-Hosted Homelab',
    tagline: 'Practical security compliance auditing paired with self-managed virtualization, container orchestration, and encrypted mesh routing.',
    tags: ['Cyber Security', 'ISO 27001', 'Proxmox VE', 'Debian LXC', 'Tailscale', 'Cloudflare Tunnels'],
    metrics: [
      { label: 'Internship', value: 'Mercer & Hole Cyber Sec' },
      { label: 'Policies Audited', value: '14 Security Policies' },
      { label: 'Hardware', value: 'ThinkCentre Node Cluster' },
      { label: 'Virtualization', value: 'Proxmox VE 8.x' }
    ],
    architecturePoints: [
      'Mercer & Hole (Cyber Security Placement): Evaluated corporate IT assets against ISO 27001 and UK Cyber Essentials Plus frameworks; assisted senior security engineers with Nessus vulnerability scanning and remediation ticket workflows across 10+ corporate endpoints.',
      'Log Automation & Discrepancy Detection: Wrote automated audit scripts reducing manual log verification cycles by 25% and documented vulnerability advisories for non-technical leadership.',
      'Self-Hosted Infrastructure: Bare-metal Lenovo ThinkCentre cluster running Proxmox VE with isolated Debian LXC unprivileged containers for telemetry, Git mirrors, and automation bots.',
      'Encrypted Networking & Ingress: Zero open inbound router ports; external access orchestrated via Cloudflare Zero Trust Tunnels with strict Access policies and a private Tailscale WireGuard mesh.'
    ],
    technicalChallenges: [
      'Enforced strict least-privilege boundary rules between management VLANs, container storage volumes, and development sandboxes.',
      'Configured automated snapshot backups with off-site retention policies without exposing local network topology or private credentials.'
    ]
  },
  'job-tracker': {
    id: 'job-tracker',
    title: 'Job Application Tracker & GitHub Analytics',
    subtitle: 'Full-Stack Scraper, Change Detector & Placement Pipeline',
    tagline: 'Automated placement pipeline that scrapes university portals and company career endpoints, alerting on status changes and tracking application stages.',
    tags: ['Node.js', 'Express', 'Cheerio', 'TypeScript', 'GitHub API', 'Cron Automation'],
    githubUrl: 'https://github.com/olliemck1',
    metrics: [
      { label: 'Sync Interval', value: 'Every 6 Hours' },
      { label: 'Alert Latency', value: '< 90s on change' },
      { label: 'Tracked Stages', value: 'Applied → OA → Interview' },
      { label: 'GitHub Activity', value: 'Verified Contributor' }
    ],
    architecturePoints: [
      'Portal Scraper: Headless fetchers with DOM parsing (Cheerio) that extract newly posted internship listings from target technology portals and university careers boards.',
      'SHA-256 Change Detection: Hashes job description payloads to flag role deadline updates, closed listings, or amended qualification requirements.',
      'Stage Tracking & Notifications: Relational tracking across Application, Online Assessment (OA), Technical Interview, and Offer stages, dispatching instant notifications upon status updates.',
      'GitHub Activity Visualizer: Real-time integration with GitHub commit history displaying a purple-hued contribution matrix highlighting active system development.'
    ],
    technicalChallenges: [
      'Handled anti-scraping measures and dynamic client-side rendering gracefully using rate-limiting queues and user-agent rotation.',
      'Designed a resilient local schema for logging test case results and technical interview review questions.'
    ]
  }
};

export const TERMINAL_FILES: Record<string, string> = {
  'command-centre.md': `# Command Centre Architecture
Personal telemetry hub running on Debian / Proxmox LXC.
- Stack: React, Node.js, Express, SQLite (WAL mode)
- Biometric sync: Garmin Vivoactive 4 daily health metrics
- Interface: Asynchronous Telegram Bot for voice notes & journaling
- Network: Isolated Tailscale WireGuard node`,

  'c-link-auditor.c': `/* c-link-auditor.c - Concurrent Markdown Link Validator */
#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <curl/curl.h>

#define MAX_QUEUE 2048
#define THREAD_POOL_SIZE 8

typedef struct {
    char url[512];
    int status_code;
    double response_time_ms;
} LinkAuditResult;

/* High-throughput POSIX worker pool with libcurl multi-handle */
// Tested against awesome-python & awesome-selfhosted (>12k links).`,

  'numerical-pde-sims.m': `% numerical-pde-sims.m
% Gray-Scott Reaction-Diffusion Model Simulation
% Du/dt = D_u * del2(u) - u*v^2 + F*(1 - u)
% Dv/dt = D_v * del2(v) + u*v^2 - (F + k)*v

Du = 2e-5; Dv = 1e-5;
F = 0.0545; k = 0.062; % Spots & stripe bifurcation regime
N = 256; % 2D Finite Difference Spatial Lattice
fprintf('Simulating Turing pattern formation over T = 10,000 steps...\n');`,

  'job-tracker.ts': `// job-tracker.ts - Automated Placement Opportunity Scraper
import { scrapeTargetPortals } from './engine/scrapers';
import { computePayloadHash, diffChanges } from './utils/hash';
import { dispatchTelegramAlert } from './services/notify';

export async function runPlacementMonitor() {
  const activeJobs = await scrapeTargetPortals();
  for (const job of activeJobs) {
    if (diffChanges(job.id, computePayloadHash(job.description))) {
      await dispatchTelegramAlert(\`[UPDATE] \${job.company} - \${job.role}\`);
    }
  }
}`,

  'homelab-infra.yml': `# homelab-infra.yml - Self-Hosted Architecture
version: "3.8"
services:
  proxmox_lxc:
    host: durham-node-01
    os: debian-12-bookworm
    hardware: ThinkCentre Tiny (Intel Core i5, 16GB RAM)
    networking:
      tailscale_mesh: 100.x.y.z (WireGuard encrypted)
      cloudflare_tunnel: zero-trust ingress
    containers:
      - id: 101 # telemetry-backend
      - id: 102 # git-mirrors
      - id: 103 # job-tracker-scheduler`
};

export const LATEX_MATH_OUTPUT = `\\documentclass{article}
\\usepackage{amsmath, amssymb, amsthm}
\\begin{document}

\\section*{Durham University Mathematics Coursework Snippets}

\\subsection*{1. Gray-Scott Reaction-Diffusion PDE Discretization}
The nonlinear coupled system modeling pattern formation is governed by:
\\begin{align}
  \\frac{\\partial u}{\\partial t} &= D_u \\nabla^2 u - u v^2 + F(1 - u) \\\\
  \\frac{\\partial v}{\\partial t} &= D_v \\nabla^2 v + u v^2 - (F + k)v
\\end{align}
Discretized on a $N \\times N$ uniform spatial lattice with five-point Laplacian operator:
\\begin{equation}
  \\nabla^2 u_{i,j} \\approx \\frac{u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4u_{i,j}}{\\Delta x^2}
\\end{equation}

\\subsection*{2. Simple Random Walk Scaling Constants on $\\mathbb{Z}^d$}
Let $(S_n)_{n \\ge 0}$ be a simple symmetric random walk on $\\mathbb{Z}^d$.
The characteristic recurrence probability $p_{d} = \\mathbb{P}(S_n = 0 \\text{ for some } n \\ge 1)$:
\\begin{equation}
  p_1 = 1, \\quad p_2 = 1, \\quad p_3 = 1 - \\frac{1}{u_3} \\approx 0.34053733
\\end{equation}
where $u_3$ is Watson's integral:
\\begin{equation}
  u_3 = \\frac{1}{(2\\pi)^3} \\iiint_{[-\\pi, \\pi]^3} \\frac{d\\theta_1 d\\theta_2 d\\theta_3}{1 - \\frac{1}{3}(\\cos \\theta_1 + \\cos \\theta_2 + \\cos \\theta_3)} \\approx 1.516386
\\end{equation}

\\subsection*{3. Statistical Inference & Fisher Information}
For a sample $X_1, \\dots, X_n \\overset{iid}{\\sim} f(x; \\theta)$, the Cramér-Rao lower bound satisfies:
\\begin{equation}
  \\mathrm{Var}_{\\theta}(\\hat{\\theta}) \\ge \\frac{1}{n \\mathcal{I}(\\theta)}, \\quad 
  \\mathcal{I}(\\theta) = \\mathbb{E}\\left[ \\left( \\frac{\\partial}{\\partial \\theta} \\log f(X; \\theta) \\right)^2 \\right]
\\end{equation}

\\end{document}`;

export const LATEX_EXTRACURRICULARS_OUTPUT = `\\documentclass{article}
\\usepackage{amsmath, enumitem}
\\begin{document}

\\section*{Extracurriculars & Hobbies — Oliver McKenna}

\\begin{itemize}[leftmargin=1.5em]
  \\item \\textbf{College Football & Linesman Duties:}
    Active player for Durham University college football side; officiate matches as qualified linesman across inter-collegiate leagues.
  \\item \\textbf{Alpine Skiing:}
    Skiing each winter season across alpine backcountry and steep pistes; passionate about speed, technical slalom, and mountain endurance.
  \\item \\textbf{Chess.com (\\sim 700 ELO):}
    Regular active player on Chess.com. Main opening repertoire: Englund Gambit Declined structures, rapid tactical play, and endgame calculation.
  \\item \\textbf{Twisty Puzzles (Speedcubing):}
    Solving standard $3 \\times 3$ Rubik's cubes and shape-shifting Windmill / Fisher variant puzzles, exploring geometric permutation group properties.
  \\item \\textbf{Culinary Arts & Cooking:}
    Enthusiastic cook experimenting with high-heat wok techniques, pasta dough hydration ratios, and batch culinary prep.
  \\item \\textbf{MIDI & DJ Hardware Restoration:}
    Repairing, recalibrating potentiometers, and soldering USB-B jacks on legacy DJ controllers (Native Instruments Traktor Kontrol X1, Novation Launch Control).
\\end{itemize}

\\end{document}`;

export const HEXDUMP_OUTPUT = `00000000  4f 6c 6c 69 65 20 4d 63  4b 65 6e 6e 61 00 00 00  |Ollie McKenna...|
00000010  44 75 72 68 61 6d 20 55  6e 69 76 65 72 73 69 74  |Durham Universit|
00000020  79 00 00 00 00 00 00 00  47 34 31 31 00 00 00 00  |y.......G411....|
00000030  42 53 63 20 4d 61 74 68  73 20 26 20 43 53 00 00  |BSc Maths & CS..|
00000040  ec 07 00 00 01 00 00 00  32 30 32 38 00 00 00 00  |........2028....|

/* COMP221 struct memory layout:
 * sizeof(student_t) = 80 bytes
 * struct student {
 *     char name[16];        // offset 0x00
 *     char institution[24]; // offset 0x10
 *     char prog_code[8];    // offset 0x28 (G411)
 *     char degree[16];      // offset 0x30 (BSc Maths & CS)
 *     uint32_t grad_year;   // offset 0x40 (0x07ec = 2028)
 *     uint32_t status_flag; // offset 0x44 (0x01 = PLACEMENT_READY)
 *     char grad_str[8];     // offset 0x48 ("2028")
 * };
 */`;

export const NEOFETCH_DATA = {
  ascii: [
    '    /\\       /\\    ',
    '   /  \\_____/  \\   ',
    '  / / \\     / \\ \\  ',
    ' / /   \\   /   \\ \\ ',
    ' \\ \\    \\ /    / / ',
    '  \\ \\___/ \\___/ /  ',
    '   \\  /     \\  /   ',
    '    \\/       \\/    '
  ],
  specs: [
    { label: 'OS', value: 'Debian / Proxmox LXC' },
    { label: 'SHELL', value: 'zsh 5.9' },
    { label: 'HOST', value: 'olliemck.me' },
    { label: 'UNI', value: 'Durham University (Yr 2)' },
    { label: 'FOCUS', value: 'Systems, Data Science & Full-Stack' },
    { label: 'UPTIME', value: '42 days, 13 hours, 37 mins' },
    { label: 'COMPILER', value: 'gcc 13.2.0 (POSIX)' }
  ]
};
