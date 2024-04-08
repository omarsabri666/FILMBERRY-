/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        omar: "#E50914",
      },
      textColor: {
        omar: "#E50914",
      },
      boxShadow: {
        strong:
          "0 4px 6px -1px rgba(255, 77, 48, 0.8), 0 2px 4px -1px rgba(255, 77, 48, 0.6)",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://car-rental-ten.vercel.app/static/media/bg-contact.c178c6db0f988d408d94.png')",
      },
    },
    fontFamily: {
      abc: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};

