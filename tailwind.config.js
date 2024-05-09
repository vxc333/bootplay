/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bottomImg: "url('src/assets/background.jpeg')",
      },
    },
  },
  plugins: [],
};
