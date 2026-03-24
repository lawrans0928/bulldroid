const twAnimateCss = require('./tw-animate-css.js');
// import './tailwind.css';


module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // adjust path to your source files
  theme: {
    extend: {},
  },
  plugins: [
    twAnimateCss, // optional plugin if you’re using it
  ],
};
