/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#09080D',
          subtle: '#0D0C13',
        },
        surface: {
          DEFAULT: '#111018',
          subtle: '#14121F',
          hover: '#171524',
          border: '#242133',
          'border-hover': '#3D3759',
        },
        brand: {
          violet: '#8B5CF6',
          purple: '#A855F7',
          darkViolet: '#6D28D9',
          glow: 'rgba(139, 92, 246, 0.15)',
        },
        live: {
          emerald: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card-glow': '0 0 0 1px #242133, 0 8px 30px rgba(0, 0, 0, 0.4)',
        'card-glow-hover': '0 0 0 1px #3D3759, 0 12px 36px rgba(139, 92, 246, 0.12)',
        'violet-glow': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
