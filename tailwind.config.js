/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121721",
        mainBg: "#f2f2f2",
        blue: "#5966e3",
        lightGray: "#9DAEC2",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      backgroundImage: {
        "header-pattern-mobile": "url('./assets/mobile/bg-pattern-header.svg')",
        "header-pattern-tablet": "url('./assets/tablet/bg-pattern-header.svg')",
        "header-pattern-desktop":
          "url('./assets/desktop/bg-pattern-header.svg')",
      },
    },
    container: {
      padding: {
        DEFAULT: "16px",
      },
      center: true,
    },
  },
  plugins: [],
};
