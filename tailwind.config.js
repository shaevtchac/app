/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        primary: '#33d2fd',
        primarytr: '#33d2fd88',
        secondary: '#233148',
        menubg: '#23314888',
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
