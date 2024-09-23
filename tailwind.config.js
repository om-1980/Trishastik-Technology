/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this pattern to match the locations of your components and pages
    './public/**/*.html',
    './pages/**/*.{js,ts,jsx,tsx}', // Include pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
    './app/**/*.{js,ts,jsx,tsx}', // If you're using Next.js' new app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
