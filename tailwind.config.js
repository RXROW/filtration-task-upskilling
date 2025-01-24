/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        'custom': '10px 10px',
      },
   
    },
  },
  plugins: [],
};
