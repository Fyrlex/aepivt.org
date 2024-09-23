import { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        translate_top: {
          '0%': {
            translate: '0px -20px',
          },
          '100%': {
            transform: '0px',
          },
        },
        translate_right: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '100',
            transform: 'translateX(0px)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        translate_top: 'translate_top 1s ease-in-out',
        translate_right: 'translate_right 1s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in',
      },
    },
  },
} as Config;
