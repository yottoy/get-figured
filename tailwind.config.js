/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E45D9',
          dark: '#1E2F9C',
          light: '#E8ECFB',
        },
        accent: '#0EA5E9',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#DC2626',
        text: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#94A3B8',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'md': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'lg': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'primary': '0 4px 6px rgba(46, 69, 217, 0.08), 0 2px 4px rgba(46, 69, 217, 0.06)',
        'primary-lg': '0 8px 12px rgba(46, 69, 217, 0.1), 0 4px 6px rgba(46, 69, 217, 0.08)',
        'focus': '0 0 0 3px rgba(46, 69, 217, 0.1)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(46, 69, 217, 0.2)',
        'button-hover': '0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(46, 69, 217, 0.3)',
      },
    },
  },
  plugins: [],
}
