/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-light": "#00A3FF",
      "nav-color": "#0f172a",
      "white-smoke": "#F5F5F5",
    },
    boxShadow: {
      "dark-sm": "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
