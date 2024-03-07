/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          /* for light version */ 50: "hsl(216, 33%, 97%)",
          100: "hsl(220, 38%, 94%)",
          200: "hsl(216, 35%, 86%)",
          300: "hsl(214, 37%, 74%)",
          400: "hsl(213, 35%, 60%)",
          500: "hsl(213, 34%, 48%)",
          600: "hsl(215, 37%, 39%)",
          700: "hsl(216, 37%, 32%)",
          800: "hsl(216, 34%, 27%)",
          900: "hsl(216, 31%, 24%)",
          950: "hsl(219, 30%, 18%)",
        },
        primary: {
          300: "hsl(215 14% 83%)" /* nav links color */,
          400: "hsl(219 30% 18%)" /* testimonials background */,
          500: "hsl(216 53% 9%)" /* footer background */,
          600: "hsl(218 28% 13%)" /* main background */,
          700: "hsl(217 28% 15%)" /* intro and email sign up background */,
          800: "hsl(217 100% 0%)" /* intro and email sign up background */,
        },
        accent: {
          400: "hsl(176 68% 64%)" /* inside call-to-action gradient */,
          500: "hsl(198 60% 50%)" /* inside call-to-action gradient */,
          600: "hsl(0 100% 63%)" /* error */,
        },
        neutral: {
          100: "hsl(0 0% 100%)",
        },
      },

      fontFamily: {
        opensans: '"Open Sans", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
