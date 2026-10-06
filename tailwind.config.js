/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#f9f8f6', // warm off-white / ivory
        foreground: '#1a1a1a', // deep charcoal
        accent: {
          brown: '#8b7355',
          green: '#4f6c58',
          orange: '#d97d54',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
