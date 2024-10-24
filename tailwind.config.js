/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': {
        '50': '#f2fbf5',
        '100': '#e1f7e8',
        '200': '#c4eed3',
        '300': '#95e0b0',
        '400': '#5fc986',
        '500': '#39ae64',
        '600': '#2a8f4f',
        '700': '#247141',
        '800': '#24613b',
        '900': '#1d4a2f',
        '950': '#0b2817',
      },
      'beige': {
        '50': '#fbf8f1',
        '100': '#f5ecd7',
        '200': '#eddcbb',
        '300': '#e2c48f',
        '400': '#d5a562',
        '500': '#cc8d43',
        '600': '#be7738',
        '700': '#9e5e30',
        '800': '#7f4d2d',
        '900': '#673f27',
        '950': '#372013',
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

