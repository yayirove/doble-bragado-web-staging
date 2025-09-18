/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta oficial (Masculina)
        oscuro:   "#171442", // Azul oscuro (brand)
        celeste:  "#2650A1", // Celeste/Azul
        amarillo: "#F7E200",
        rosa:     "#DA5DA1",

        // Paleta oficial (Femenina)
        violeta:        "#682C7D",
        violetaOscuro:  "#361163",

        // Neutros
        gris:      "#333333",
        grisclaro: "#F1F1F2",

        // Aliases legacy (mantener por compatibilidad, NO usar en nuevo código)
        primary:   "#171442", // alias de oscuro
        secondary: "#2650A1", // alias de celeste
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
