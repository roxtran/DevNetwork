module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // 'primary-color': 'purple-700'
      },
      backgroundImage: (theme) => ({
        'hero-bg-img': "url('./img/hero-bg-img.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
