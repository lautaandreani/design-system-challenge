/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#F7542E',
          200: '#090F31',
        },
        gray: '#4F4F4F',
        text: '#3F3F3F',
        disabled: '#9E9E9E',
        btn: {
          default: {
            simple: '#E0E0E0',
            hover: '#AEAEAE',
          },

          primary: {
            simple: '#2962FF',
            hover: '#0039CB',
          },

          secondary: {
            simple: '#455A64',
            hover: '#1C313A',
          },

          danger: {
            simple: '#D32F2F',
            hover: '#9A0007',
            light: 'rgba(200, 47, 47, 1)',
          },

          text: {
            hover: '#2962FF1A',
          },
        },
      },
      fontFamily: {
        display: ['Poppins'],
        body: ['Noto Sans'],
      },
    },
  },
  plugins: [],
}
