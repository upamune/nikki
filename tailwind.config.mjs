/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mincho: ['Shippori Mincho', 'serif'],
      },
      colors: {
        'diary-black': '#000000',
        'diary-bg': '#fafaf8',
        'diary-accent': '#9b2226',
      },
    },
  },
  plugins: [],
}