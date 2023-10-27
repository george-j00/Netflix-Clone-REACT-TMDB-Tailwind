/** @type {import('tailwindcss').Config} */



export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('src/assets/image1.png')",
        'home-page': "url('src/assets/Frame39.png')",
      },
    },
  },
  plugins: [],
};
