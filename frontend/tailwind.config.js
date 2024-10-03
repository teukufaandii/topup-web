/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c80000",
        secondary: "#0a0a0a",
        dark: "#0f0707",
        black: "#000000",
        footerColor: "#21222e",
        "custom-red": "#c80000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(var(--tw-gradient-from), var(--tw-gradient-to))",
      },
    },
  },
  plugins: [require("daisyui")],
};
