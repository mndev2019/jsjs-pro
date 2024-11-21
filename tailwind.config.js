/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        libreCaslon: ['var(--font-libreCaslon)', 'sans-serif'],
        Montserrat: ['var(--font-Montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
