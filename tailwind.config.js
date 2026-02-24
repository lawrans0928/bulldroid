// tailwind.config.js
const twAnimateCss = require('./tw-animate-css.js');

module.exports = {
  content: ["../**/*.{js,ts,jsx,tsx}"], // adjust path to your source files
  theme: {
    extend: {},
  },
  plugins: [
    twAnimateCss, // register your custom animation plugin
  ],
};