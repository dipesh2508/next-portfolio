/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
          'primary': '#17B890',
          'secondary': '#66D7D1',
          'cta': '#8B5FBF',
          'dark-1': '#181616',
          'dark-2': '#1E1E1E',
          'light-1': '#F2F2F2',
          glassmorphism: "rgba(16, 16, 18, 0.60)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ['var(--font-caudex)', 'serif'],
      },
      boxShadow: {
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}