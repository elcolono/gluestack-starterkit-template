import nativewindPreset from "nativewind/preset";

const scaleSteps = [
  "0",
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950"
];

const color = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;
const scale = (name) =>
  Object.fromEntries(scaleSteps.map((step) => [step, color(`${name}-${step}`)]));

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../../packages/*/src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  presets: [nativewindPreset],
  theme: {
    extend: {
      colors: {
        background: {
          ...scale("background"),
          error: color("background-error"),
          info: color("background-info"),
          muted: color("background-muted"),
          success: color("background-success"),
          warning: color("background-warning")
        },
        error: scale("error"),
        indicator: {
          error: color("indicator-error"),
          info: color("indicator-info"),
          primary: color("indicator-primary")
        },
        info: scale("info"),
        outline: scale("outline"),
        primary: scale("primary"),
        secondary: scale("secondary"),
        success: scale("success"),
        tertiary: scale("tertiary"),
        typography: scale("typography"),
        warning: scale("warning")
      },
      fontFamily: {
        body: ["System"],
        heading: ["System"]
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }]
      },
      letterSpacing: {
        sm: "0"
      }
    }
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".display-inline": { display: "inline" },
        ".margin-0": { margin: "0" },
        ".padding-0": { padding: "0" },
        ".position-relative": { position: "relative" },
        ".word-wrap-break-word": { overflowWrap: "break-word" }
      });
    }
  ]
};

export default config;
