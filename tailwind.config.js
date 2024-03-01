module.exports = {
  mode: 'jit', // Enable just-in-time compilation for faster development builds
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Specify files to purge for production builds
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
