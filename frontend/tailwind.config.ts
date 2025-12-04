import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Цвета из дизайна "Лучик"
        'luchik-blue': '#E5F5FF',
        'luchik-pink': '#FFE5F1',
        'luchik-green': '#E5FFE5',
        'luchik-yellow': '#FFD700',
        'luchik-dark': '#2D3748',
        'luchik-gray': '#4A5568',
        'luchik-light-gray': '#718096',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
export default config;
