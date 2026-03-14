/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"], // Custom font
        rounded: ["ui-rounded", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        heading: ["48px", "56px"],      // H1
        subheading: ["32px", "40px"],   // H2
        body: ["16px", "24px"],         // Paragraph
        small: ["14px", "20px"],        // Captions / small text
      },
    },
  },
  plugins: [],
}