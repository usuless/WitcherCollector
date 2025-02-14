/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          

"primary": "#374151",
          

"secondary": "#818cf8",
          

"accent": "#4b5563",
          

"neutral": "#6b7280",
          

"base-100": "#1f2937",
          

"info": "#9ca3af",
          

"success": "#4ade80",
          

"warning": "#fca5a5",
          

"error": "#fb7185",
          },
        },
      ],
    },
  plugins: [
    require('daisyui')
  ],
};
