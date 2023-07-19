/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon_purple: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
        neon_blue: "0 0 5px theme('colors.blue.700'),  0 0 10px theme('colors.blue.100'), 0 0 30px theme('colors.blue.700')",
        neon_indigo: "0 0 5px theme('colors.indigo.700'),  0 0 10px theme('colors.indigo.100'), 0 0 30px theme('colors.indigo.700')",
      }
    },
  },
  plugins: [
  ],
};
//shadow-[0_35px_60px_-10px_rgba(147,51,234,0.3)]