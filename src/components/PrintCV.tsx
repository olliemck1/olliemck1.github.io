import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

export const PrintCV: React.FC = () => {
  return (
    <div className="print-only p-8 text-black bg-white max-w-4xl mx-auto font-sans text-[10pt] leading-relaxed">
      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-black">
          Oliver James McKenna
        </h1>
        <div className="text-sm font-semibold text-gray-800 mt-0.5">
          {PERSONAL_INFO.title} • {PERSONAL_INFO.university} (G411)
        </div>
        <div className="text-xs text-gray-700 mt-1 flex flex-wrap gap-x-4">
          <span>Durham / Hertfordshire, UK</span>
          <span>•</span>
          <span>Email: hello@olliemck.me</span>
          <span>•</span>
          <span>Academic: wvfd60@durham.ac.uk</span>
          <span>•</span>
          <span>Web: olliemck.me</span>
          <span>•</span>
          <span>GitHub: github.com/olliemck1</span>
        </div>
      </div>

      {/* Profile */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1.5 text-black">
          Profile & Placement Objective
        </h2>
        <p className="text-xs text-gray-800">
          Second-year Mathematics & Computer Science undergraduate at Durham University with rigorous foundations in linear algebra, stochastic analysis, and discrete mathematics, combined with practical systems engineering in C/POSIX, distributed telemetry, and self-hosted Linux infrastructure. Seeking a 2027 industrial placement across Software Engineering, Systems/Cyber, or Quantitative Data Science.
        </p>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1.5 text-black">
          Education
        </h2>
        
        <div className="mb-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Durham University</span>
            <span>2025 – 2028 (Class of 2028)</span>
          </div>
          <div className="text-xs italic text-gray-700">
            BSc (Hons) Mathematics with Computer Science (G411 Joint Honours)
          </div>
          <div className="text-xs text-gray-800 mt-0.5">
            <strong>Key Modules:</strong> Networks & Systems, Theory of Computation, Data Science, Statistical Inference, Computational Mathematics, Linear Algebra, Calculus & Analysis, Data Structures & Algorithms.
          </div>
        </div>

        <div>
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Sir John Lawes School</span>
            <span>2023 – 2025</span>
          </div>
          <div className="text-xs text-gray-800">
            <strong>A-Levels:</strong> Mathematics (<strong>A*</strong>), Further Mathematics (<strong>A</strong>), Physics (<strong>B</strong>), Computer Science (<strong>B</strong>).
          </div>
          <div className="text-xs text-gray-800">
            <strong>GCSEs:</strong> 11 Qualifications including Grade 9 in Mathematics, Grade 9 in Physics, Grade 8 in Computer Science.
          </div>
        </div>
      </div>

      {/* Technical Projects */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1.5 text-black">
          Key Technical Projects
        </h2>

        <div className="mb-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Command Centre — Personal Telemetry Hub</span>
            <span className="font-normal text-gray-600 text-[10px]">React, Node.js, Express, SQLite, Telegram API</span>
          </div>
          <ul className="list-disc list-inside text-[10.5px] text-gray-800 space-y-0.5 ml-1">
            <li>Engineered an asynchronous personal telemetry system pulling Garmin Vivoactive 4 daily biometrics and calendar feeds.</li>
            <li>Built an asynchronous Telegram bot processing voice notes and journaling entries with speech-to-text and LLM summarization into SQLite (WAL mode).</li>
            <li>Deployed containerized on private Proxmox VE Debian LXC nodes connected via encrypted Tailscale mesh.</li>
          </ul>
        </div>

        <div className="mb-2">
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>C Web Scraper & Link Integrity Auditor</span>
            <span className="font-normal text-gray-600 text-[10px]">C11, libcurl, POSIX Threads, Epoll</span>
          </div>
          <ul className="list-disc list-inside text-[10.5px] text-gray-800 space-y-0.5 ml-1">
            <li>Implemented a high-throughput multithreaded link validator in pure C auditing markdown directories at 350+ URLs/sec.</li>
            <li>Audited major open-source repositories (awesome-python, awesome-selfhosted) over 12,000+ links; submitted an accepted upstream GitHub pull request repairing dead endpoints.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Computational Mathematics & Stochastic Simulations</span>
            <span className="font-normal text-gray-600 text-[10px]">MATLAB, Python, NumPy</span>
          </div>
          <ul className="list-disc list-inside text-[10.5px] text-gray-800 space-y-0.5 ml-1">
            <li>Simulated Gray-Scott reaction-diffusion PDE pattern formation using 2D finite difference schemes on uniform lattices.</li>
            <li>Formulated Monte Carlo random walk boundary hitting scaling constants on 1D/2D/3D lattices and vectorised European option pricing under Geometric Brownian Motion across 100,000+ stochastic paths.</li>
          </ul>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1.5 text-black">
          Work Experience & Infrastructure
        </h2>

        <div>
          <div className="flex justify-between items-baseline font-bold text-xs">
            <span>Mercer & Hole — Cyber Security Intern</span>
            <span>Hertfordshire, UK | Jul 2024 – Aug 2024</span>
          </div>
          <ul className="list-disc list-inside text-[10.5px] text-gray-800 space-y-0.5 ml-1">
            <li>Audited 14 internal security policies across company systems against ISO 27001 and UK Cyber Essentials standards.</li>
            <li>Assisted senior security analysts in executing vulnerability scans with Nessus and Nmap, documenting 18 remediation tickets.</li>
            <li>Automated routine spreadsheet security log verifications, reducing recurring review duration by 25%.</li>
          </ul>
        </div>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1.5 text-black">
          Technical Skills & Tooling
        </h2>
        <div className="text-[10.5px] text-gray-800 space-y-0.5">
          <div><strong>Languages:</strong> C (C11/POSIX), Python, TypeScript, JavaScript (ES6+), SQL, MATLAB, Bash, HTML/CSS, LaTeX</div>
          <div><strong>Systems & Frameworks:</strong> React, Node.js, Express, SQLite, MongoDB, libcurl, POSIX Threads, Git, Linux (Debian)</div>
          <div><strong>Infrastructure & Networking:</strong> Proxmox VE (LXC), Tailscale WireGuard Mesh, Cloudflare Tunnels, TCP/IP, ICMP</div>
          <div><strong>Mathematical Domains:</strong> Linear Algebra, Multivariable Calculus, Discrete Mathematics, Probability & Stochastic Inference</div>
        </div>
      </div>
    </div>
  );
};
