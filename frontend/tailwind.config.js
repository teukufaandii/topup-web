/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6500', 
        secondary: '#1E3E62', 
        dark: '#0B192C', 
        black: '#000000', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
