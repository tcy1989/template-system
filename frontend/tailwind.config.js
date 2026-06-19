export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        game: {
          bg:       '#0B0C1E',
          surface:  '#141528',
          card:     '#1C1D35',
          elevated: '#242442',
          header:   '#0D0E22',
          sidebar:  '#0F1026',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
