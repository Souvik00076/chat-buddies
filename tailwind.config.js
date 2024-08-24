/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-sarif"],
      },
    },
    colors: {
      "primary-light": "#00A3FF",
      "primary-dark": "#07334d",
      "nav-color": "#0f172a",
      "white-smoke": "#F5F5F5",
      "border-for": "#A9A9A4",
    },
    boxShadow: {
      "dark-sm": "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
    },
    gridTemplateColumns: {
      "accordion-item-grid": "15% 80% 5%",
      "accordion-nested-item-grid": "95% 5%",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
