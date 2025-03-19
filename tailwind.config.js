/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Bleu principal (exemple : Bootstrap Blue)
        secondary: "#0056b3", // Bleu foncé pour les boutons actifs
        background: "#001f3f", // Bleu nuit (optionnel)
        text: "#ffffff", // Texte blanc
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}
