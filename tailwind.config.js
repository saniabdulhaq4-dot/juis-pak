// tailwind.config.js (updated for RTL)
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#00582E',
          blue: '#00A0E3'
        }
      },
    },
  },
  plugins: [],
  // Enable RTL support
  rtl: true,
}