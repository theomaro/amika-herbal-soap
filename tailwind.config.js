/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export const content = ["./*.html"];
export const theme = {
  extend: {
    fontFamily: {
      Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      "Encoded-Sans": ["Encode Sans Expanded", ...defaultTheme.fontFamily.sans],
    },
  },
};
export const plugins = [];
