module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'main-light': '#E3EDF2',
        'main-dark': '#3A4750',
        'theme-border-light': 'rgba(159, 201, 221, .7)',
        'text-light': '#0A0D25',
        'text-dark': '#EEEEEE',
        'input-dark': 'rgba(0, 173, 181, .9)',
        'input-light': 'rgba(159, 201, 221, .9)',
        'input-dark-placeholer': 'rgba(0, 173, 181, .7)',
        'input-light-placeholer': 'rgba(159, 201, 221, .7)',
        'input-border': '#9FC9DD',
        'button-light': '#FF844B',
        'button-dark': '#00ADB5',
      },
      dropShadow: {
        'button-ligth': '3px 5px 11px rgba(255, 132, 74, .4)',
        'button-dark': '3px 5px 11px rgba(0, 173, 181, .4)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
