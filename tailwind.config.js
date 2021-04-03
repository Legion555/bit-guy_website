module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'shuffle': 'shuffle 3s ease-in-out infinite',
        'cloudsLeft': 'cloudsLeft 30s linear infinite',
        'cloudsLeft2': 'cloudsLeft 30s linear 15s infinite',
        },
      keyframes: {
        shuffle: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(100px)' },
        },
        cloudsLeft: {
          '0%': { right: '-100%' },
          '100%': { right: '125%' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
