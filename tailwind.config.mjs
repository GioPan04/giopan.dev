/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Comfortaa"', 'sans-serif'],
        pixel: ['"Press Start 2P"', "system-ui"],
      },
      colors: {
        primary: "#0D1821",
        secondary: "#E03616",
        accent: "#008148",
      },
      gridTemplateColumns: {
        timeline: '1fr 200px 1fr'
      }
    },
  },
  plugins: [],
};
