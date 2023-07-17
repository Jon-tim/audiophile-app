/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				browns: '#d87d4a',
				dark: '#191919',
				text: '#0000005d'
			},
			screens: {
				xs: '540px',
				xxs: '620px'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
