/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',   // fondo general
        surface: '#FFFFFF', // superficie de tarjetas
        ink: '#161614',     // texto principal / negro casi puro
        muted: '#6B6B65',   // texto secundario
        accent: '#3A6B4A',  // verde bosque profundo, único acento
        line: '#E4E1DA',    // bordes / hairlines
      },
      fontFamily: {
        // Display con carácter para títulos, restringido a headings
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        // Sans neutra para cuerpo de texto
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Mono para eyebrows, tags y metadatos técnicos
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
