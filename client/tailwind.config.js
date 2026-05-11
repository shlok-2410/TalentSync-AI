/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all files in src, including components and pages
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom brand colors here for your internship project
        primary: "#2563eb", // Professional Blue
        secondary: "#64748b", // Slate Grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}