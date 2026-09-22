/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4EADB',
        paper: '#EADCC6',
        coffee: '#3A2519',
        caramel: '#C68B4B',
        forest: '#1F4A34',
        gold: '#B8892F',
        ink: '#1B120C',
        espresso: '#241710',
        roast: '#2F1F16',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        hand: ['Caveat', '"Segoe Script"', 'cursive'],
        sans: ['Manrope', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: { site: '1320px' },
    },
  },
  plugins: [],
}
