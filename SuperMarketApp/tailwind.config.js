/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'red': '#f00',
        'yellow': '#ff0',
        'green': '#0f0',
        'cyan': '#0ff',
        'blue': '#00f',
        'violet': '#f0f',
        'orange': '#E56717'
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

