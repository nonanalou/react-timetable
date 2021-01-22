module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './src/**/*.{js,jsx,ts,tsx}',
      './public/index.html',
    ],
  },
}
