/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-cream' : '#ebe7e3',
        'custom-orange' : '#EB5E28',
        'custom-gray' : '#403D39',
        'custom-blue' : '#041e3a'
      }
    },
  },
  plugins: [],
};
