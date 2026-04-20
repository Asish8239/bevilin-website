import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bevilinGreen: '#acc437',
        bevilinGreenDark: '#53a847',
        bevilinBlueLight: '#00aeef',
        bevilinBlue: '#0073bd',
        bevilinBlueDark: '#2e3192',
        primary: {
          50: '#f7fce8',
          100: '#eef9d1',
          200: '#ddf3a3',
          300: '#cbec75',
          400: '#bae647',
          500: '#acc437',
          600: '#8a9d2c',
          700: '#677621',
          800: '#454e16',
          900: '#22270b',
        },
        secondary: {
          50: '#eef9f0',
          100: '#ddf3e1',
          200: '#bbe7c3',
          300: '#99dba5',
          400: '#77cf87',
          500: '#53a847',
          600: '#428639',
          700: '#32652b',
          800: '#21431c',
          900: '#11220e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-bevilin': 'linear-gradient(135deg, #2e3192 0%, #0073bd 30%, #00aeef 60%, #53a847 80%, #acc437 100%)',
        'gradient-primary': 'linear-gradient(135deg, #acc437 0%, #53a847 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
