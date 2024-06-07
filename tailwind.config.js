/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        "grayish-blue": "hsl(229, 8%, 60%)",
        "dark-blue": "hsl(229, 31%, 21%)",
      },
      boxShadow: {
        md: "0 2px 14px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
