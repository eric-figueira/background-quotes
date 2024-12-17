/** @type {import('tailwindcss').Config} */

import { createRequire } from "module"
const require = createRequire(import.meta.url)
const svgToDataUri = require("mini-svg-data-uri")

// const svgToDataUri = require("mini-svg-data-uri")
// import svgToDataUri from "mini-svg-data-uri"
// const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        enter: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        leave: {
          from: { transform: 'scale(1)', opacity: 1 },
          to: { transform: 'scale(0.9)', opacity: 0 }
        },
        'scale-in': {
          from: { transform: 'scale(0.5)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        enter: 'enter 0.2s ease-out',
        leave: 'leave 0.15s ease-in forwards',
        'scale-in': 'scale-in 0.07s ease-out forwards',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
}

