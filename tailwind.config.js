/** @type {import('tailwindcss').Config} */

const primaryColor = {
  100: "#F2F5FC",
  200: "#D5E1F7",
  300: "#B9CCF1",
  350: "#9CB8EC",
  400: "#80A3E6",
  450: "#638FE1",
  500: "#477ADB",
  550: "#2A65D6",
  600: "#2458BA",
  650: "#1F4A9D",
  700: "#193D81",
  750: "#142F64",
  800: "#0E2248",
  850: "#08152C",
  650: "#03070F",
  700: "#000001",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: () => ({
      primary: {
        ...primaryColor,
      },
    }),
  },
  plugins: [],
};
