/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#2d2d30',
        'pane-background': '#1e1e1e',
        'pane-background-light': '#262626',
      }
    },
  },
  plugins: [],
}

