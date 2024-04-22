/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        "alegreya-sans": ['"Alegreya Sans"', "sans-serif"],
        "alegreya": ["Alegreya", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            'blockquote p:first-of-type::before': false,
            'blockquote p:first-of-type::after': false,
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};