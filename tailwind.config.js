/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-light": "#00A3FF",
      "nav-color": "#0f172a",
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
