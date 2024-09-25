/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#FAAB7D",
        "primary-brown": "#4A210A",
        "primary-blue": "#E6FCFF",
        "secondary-pink": "#F6C19F",
        "secondary-blue": "#6DDEF4",
      },

      fontFamily: {
        saveurBold: ["SaveurSansRound-bold"],
        saveurLight: ["SaveurSansRound-light"],
        saveurRegular: ["SaveurSansRound-regular"],
        saveurSemi: ["SaveurSansRound-semibold"],
        ralwayBlack: ["Raleway-black"],
        ralwayBlackItc: ["Raleway-black-italic"],
        ralwayBold: ["Raleway-bold"],
        ralwayBoldItc: ["Raleway-bold-italic"],
        ralwayExtraBold: ["Raleway-extra-bold"],
        ralewayExtraLight: ["Raleway-extra-light"],
        ralewayLight: ["Raleway-light"],
        ralewayMedium: ["Raleway-medium"],
        ralewayRegular: ["Raleway-regular"],
        ralewaySemiBold: ["Raleway-semibold"],
        ralewayThin: ["Raleway-thin"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
};
