/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "charming-orange": "#EE854D",
        "pale-peach": "#FBE9DA",
      },
      fontFamily: {
        "nunito-light": ["Nunito-Light"],
        nunito: ["Nunito-Regular"],
        "nunito-medium": ["Nunito-Medium"],
        "nunito-semi-bold": ["Nunito-SemiBold"],
        "nunito-bold": ["Nunito-Bold"],
      },
    },
  },
  plugins: [],
};
