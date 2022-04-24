module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
      },
      colors: {
        primary: "#EA7C69",
        secondary: "#9288E0",
        general: "#DCDCDC",
        basebg: {
          100: "#FAFAFA",
          200: "#393C49",
          300: "#252836",
          400: "#1F1D2B",
        },
        formbg: "#2D303E",
        textbg: {
          100: "#3B5162",
          200: "#889898",
          300: "#ABBBC2",
          400: "#E0E6E9",
        },
        accents: {
          100: "#50D1AA",
          200: "#FF7CA3",
          300: "#FFB572",
          400: "#9290FE",
          500: "#65B0F6",
        },
      },
    },
  },
  plugins: [],
};
