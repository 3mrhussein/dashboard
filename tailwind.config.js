// const { linear } = require('@syncfusion/ej2/charts');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xs: '384px',
      sm: '440px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '950px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      display: ['Open Sans', 'sans-serf'],
      body: ['Open Sans', 'sans-serf'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      zIndex: {
        1000: '1000',
      },
      backgroundColor: {
        'main-bg': '#F8F8F8',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0,0,0,0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0,0,0,0.1)',
      },
      width: {
        300: '300px',
        400: '400px',
        430: '430px',
        700: '700px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
        md: '24rem',
      },
      height: {
        80: '80px',
        200: '200px',
        210: '210px',
        230: '230px',

        250: '250px',
        450: '450px',
        500: '500px',
        560: '560px',
        600: '580px',
      },
      minHeight: {
        590: '590px',
        230: '230px',
      },
      maxHeight: {
        590: '590px',
      },
      minWidth: {
        72: '18rem',
        64: '16rem',
        60: '15rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        56: '14rem',
        52: '12.5rem',
        300: '300px',
        400: '400px',
        430: '430px',

        700: '700px',
        760: '760px',
      },
      maxWidth: {
        160: '160px',
        md: '24rem',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
      animation: {
        'spin-1': 'spin 0.4s linear',
        'slide-bottom-up': 'slide-bottom 0.4s linear ',
        'bounce-once': 'bounceY 1s linear',
      },

      keyframes: {
        'slide-bottom': {
          '0%': { transform: 'translateY(-400px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceY: {
          '0%': { transform: 'translateY(-50px)' },

          '10%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-25px)' },
          '70%': { transform: 'translateY(0)' },
          '90%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
