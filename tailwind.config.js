/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      screens: {
        'movel-m': '375px'
      },
      keyframes: {
        'menu-in': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'menu-out': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'menu-translate-in': 'menu-in 1s ease-in-out',
        'menu-translate-out': 'menu-out 1s ease-in-out'
      }
    },
  },
  plugins: [],
}