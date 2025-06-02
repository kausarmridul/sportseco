/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'montserrat': ["Montserrat", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        'col-1': '#1E1E1E',
        'col-2': '#FFC831',
        'col-3': '#ECEFF1',
        'col-4': '#CCC',
        'col-5': '#2C2C2C',
        'col-6': '#1A9452',
      }
    },
  },
  plugins: [],
}