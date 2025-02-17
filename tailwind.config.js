/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
          inter: ["Inter", "sans-serif"],
        },
        colors: {
            gradientStart: "#DEDFe4",
            gradientEnd: "#B2BDC3",
        },
      },
    },
    plugins: [],
  };
  