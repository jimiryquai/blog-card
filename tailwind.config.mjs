/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      boxShadow: {
      'custom': '0px 0px 0px 1px rgba(68, 76, 231, 1), 0px 0px 0px 4px rgba(68, 76, 231, 0.12)'
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
	plugins: [

  ],
}
