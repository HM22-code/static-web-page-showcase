/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"wood-bark": "url('../public/assets/img/wood-bark.jpg')",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
