/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'netflix': "url('src/assets/netflix1.jpg')",
      }
    },
  },
  plugins: [],
}