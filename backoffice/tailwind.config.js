/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9FA1FF',
          light: '#B5BAFF',
          dark: '#3C3489',
          muted: '#EEEDFE',
        },
        accent: {
          blue: '#AEE2FF',
          green: '#D9F9DF',
          'blue-light': '#EAF5FF',
          'green-light': '#EEFFF0',
        },
        sidebar: {
          bg: '#F7F7FF',
          border: '#D4D5FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
