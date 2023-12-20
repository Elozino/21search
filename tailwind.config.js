/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        pryColor: "#25A75C",
        tertiaryColor: "rgba(92, 178, 58, 0.27)",
        appWhite: "#ECF1F0",
        appDark: {
          1: "#4F4F4F",
          2: "#555",
          3: "#979797",
          4: "#F1F1F1",
          5: "rgba(15, 9, 25, 0.80);",
          6: "#060809",
        },
        appBlack: "#000E0C",
        customBlack: {
          1: "rgba(15, 9, 25, 0.80);",
        },
      },
      padding: {
        "mobile-vertical": "2rem",
        "mobile-horizontal": "2rem",
        horizontal: "90px",
        vertical: "60px",
      },
      backgroundImage: {
        "funds-bg": "url('./src/assets/images/image-38.png')",
        "pry-gradient":
          "linear-gradient(151deg, rgba(92, 178, 58, 0.80) 0%, rgba(4, 128, 2, 0.80) 100%)",
        "gradient-1":
          "linear-gradient(166deg, rgba(92, 178, 58, 0.80) 30.42%, rgba(4, 128, 2, 0.80) 116.94%)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
      },
      backgroundPosition: {
        center: "center",
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
      },
      backgroundRepeat: {
        repeat: "repeat",
        "no-repeat": "no-repeat",
        "repeat-x": "repeat-x",
        "repeat-y": "repeat-y",
        "repeat-round": "repeat-round",
        "repeat-space": "repeat-space",
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-funds-gradient": {
          backgroundImage:
            'url("/src/assets/images/image-38.png"), linear-gradient(166deg, rgba(92, 178, 58, 0.80) 30.42%, rgba(4, 128, 2, 0.80) 116.94%)',
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
