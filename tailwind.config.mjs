/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // include your project paths to apply Tailwind
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom1: '#ecf8f8', // Light Blue / Very Pale Cyan
        custom2: '#eee4e1', // Light Cream / Pale Grayish Pink
        custom3: '#e7d8c9', // Light Beige
        custom4: '#e6beae', // Soft Peach
        custom5: '#b2967d', // Warm Brownish Tan
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Ensure all necessary plugins are included
  ],
};
