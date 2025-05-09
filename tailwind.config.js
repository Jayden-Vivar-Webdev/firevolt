/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar';

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // All pages in app directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Reusable UI components (optional but recommended)
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
        rotate: {
            '180': '180deg',
          },
        colors: {
            primary: {
                50: '#fff5f5',
                100: '#ffe8e8',
                200: '#ffd1d1',
                300: '#ffb0b0',
                400: '#ff8a8a',
                500: '#ff5252',
                600: '#e53e3e',
                700: '#c53030',
                800: '#9b2c2c',
                900: '#742a2a',
                10: '#AE1414',
            },
            secondary: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                400: '#9ca3af',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#1f2937',
                900: '#111827',
            },
            accent: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            }
        },
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
        },
    }
},
  plugins: [scrollbar],
};


