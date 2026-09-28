/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Light Industrial Color System
        corporate: {
          dark: '#172033',       // Main text
          muted: '#64748B',      // Secondary text
          subtle: '#94A3B8',     // Muted borders / hints
          bg: '#FFFFFF',         // White
          surface: '#F7F9FC',    // Secondary background
          section: '#F3F6FA',    // Section background
          blueSoft: '#EAF4FF',   // Light blue tint
          border: '#E5EAF0',     // Thin border
          borderInput: '#DCE3EC',// Form border
        },
        brand: {
          50: '#F0F7FF',
          100: '#EAF4FF',
          200: '#D2E8FF',
          300: '#A7D4FF',
          400: '#53A8FF',
          500: '#1E88E5',
          600: '#1677D2',        // Primary Brand Blue
          700: '#1261AA',
          800: '#0E4D88',
          900: '#0B3F6E',
        },
        industrial: {
          orange: '#F58220',     // Accent Orange
          orangeHover: '#E06E0E',
          orangeLight: '#FFF4EB',
          blue: '#1677D2',
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 12px 0 rgba(0, 0, 0, 0.06)',
        'dropdown': '0 8px 20px -4px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
