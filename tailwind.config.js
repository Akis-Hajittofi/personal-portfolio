/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["forest", "lemonade"],
  // },
  daisyui: {
    themes: [
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],
          primary: "#00FF00",
        },
        emerald: {
          ...require("daisyui/src/theming/themes")["emerald"],
        },
      },
    ],
  },
};






































