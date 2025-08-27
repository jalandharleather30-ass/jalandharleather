import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary earthy tones
        primary: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e9d8c1',
          300: '#dcbf99',
          400: '#cfa070',
          500: '#c08855',
          600: '#b37449',
          700: '#955e3f',
          800: '#794e36',
          900: '#63412e',
          950: '#352117',
        },
        // Secondary charcoal/grey
        secondary: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
        // Accent gold
        accent: {
          50: '#fffef7',
          100: '#fffbe8',
          200: '#fff5c7',
          300: '#ffeb9a',
          400: '#ffdd5c',
          500: '#ffc72c',
          600: '#f5a623',
          700: '#d17d1a',
          800: '#a8601c',
          900: '#894f1b',
          950: '#51290c',
        },
      },
      fontFamily: {
        // Elegant serif for headings
        serif: ['Playfair Display', 'Lora', 'Cormorant Garamond', 'serif'],
        // Clean sans-serif for body text
        sans: ['Montserrat', 'Lato', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '3xl': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'elegant': '0 4px 25px 0 rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
