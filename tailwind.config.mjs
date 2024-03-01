/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'../../node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			colors: {
				primary: {"50":"#fb923c","100":"#ff6400","200":"#c2410c"},
				secondary: {"50":"#fb923c","100":"#ff6400","200":"#c2410c"}
			  }
		},
	},
	plugins: [
		require('preline/plugin'),
	],
}
