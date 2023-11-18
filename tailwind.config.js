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
  900: "#03070F",
  950: "#000001",
};

const accentColor = {
  100: "#F9C6D8",
  200: "#F6A7C3",
  250: "#F597B9",
  300: "#F388AE",
  350: "#F278A4",
  400: "#F06999",
  450: "#EF598F",
  500: "#ED4A84",
  550: "#EB3B79",
  600: "#EA2B6F",
  650: "#E81C64",
  700: "#DD165D",
  750: "#CE1456",
  800: "#BE1350",
  900: "#9F1043",
};

const neutralColor = {
  100: "#FFF",
  200: "#E6EAE9",
  300: "#C4CAC9",
  400: "#B2B8B7",
  500: "#6F7675",
  600: "#606463",
  700: "#484B4B",
  800: "#2E3433",
  900: "#00100C",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        0.5: "0.125rem", // 2px
        0.75: "0.1875rem", // 3px
        1.25: "0.3125em", // 5px
        1.5: "0.375em", // 6px
        2.25: "0.5625rem", // 9px
        2.5: "0.625rem", // 10px
        3.5: "0.875rem", // 14px
        4.25: "1.0625rem", // 17px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6: "1.5rem", // 24px
        6.5: "1.625rem", // 26px
        7: "1.75rem", // 28px
        7.5: "1.875rem", // 30px
        8: "2rem", // 32px
        8.5: "2.125rem", // 34px
        10: "2.5rem", // 40px
        10.5: "2.625rem", // 42px
        12: "3rem", // 48px
        12.5: "3.125rem", // 50px
        13.5: "3.375rem", // 54px
        14: "3.5rem", // 56px
        14.5: "3.625rem", // 58px
        15: "3.75rem", // 60px
        16: "4rem", // 64px
        16.5: "4.125rem", // 66px
        17.5: "4.375rem", // 70px
        18: "4.5rem", // 72px
        18.5: "4.625rem", // 74px
        22: "5.5rem", // 88px
        22.5: "5.625rem", // 90px
        25: "6.25rem", // 100px
        26: "6.5rem", // 104px
        26.5: "6.625rem", // 106px
        30: "7.5rem", // 120px
        30.5: "7.625rem", // 122px
        34: "8.5rem", // 136px
        34.5: "8.625rem", // 138px
        35: "8.75rem", // 140px
        38: "9.5rem", // 152px
        38.5: "9.625rem", // 154px
        40: "10rem", // 160px
        42: "10.5rem", // 168px
        42.5: "10.625rem", // 170px
        45: "11.5rem", // 180px
        50: "12.5rem", // 200px
      },
    },
    colors: () => ({
      primary: {
        ...primaryColor,
      },
      accent: {
        ...accentColor,
      },
      neutral: {
        ...neutralColor,
      },
    }),
    fontFamily: {
      display: [
        "Helvetica Neue",
        "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ],
      body: [
        "Montserrat",
        "Helvetica Neue",
        "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ],
    },
    fontSize: {
      heading10: ["0.625rem", "1"],
      heading11: ["0.6875rem", "1"],
      heading12: ["0.75rem", "1"],
      heading14: ["0.857rem", "1"],
      heading15: ["0.9375rem", "1"],
      heading16: ["1rem", "1"],
      heading18: ["1.125rem", "1"],
      heading20: ["1.25rem", "1"],
      heading24: ["1.5rem", "1"],
      body10: ["0.625rem", "1.6"],
      body11: ["0.6875rem", "1.6"],
      body12: ["0.75rem", "1.6"],
      body13: ["0.8125rem", "1.6"],
      body14: ["0.857rem", "1.6"],
      body15: ["0.9375rem", "1.6"],
      body16: ["1rem", "1.6"],
      body18: ["1.125rem", "1.6"],
    },
    letterSpacing: {
      normal: "0",
      wide: ".03em",
      wider: ".05em",
      widest: ".07em",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.7",
      loose: "2",
      "extra-loose": "2.4",
    },
    fontWeight: {
      100: "100",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      //media queries for hover
      "media-hover": { raw: "(hover: hover) and (pointer: fine)" },
      "media-active": { raw: "(hover: none) " },
    },
  },
  plugins: [],
};
