import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom ZCB Emlak palette
        'zcb-dark': '#2e303b',
        'zcb-accent': '#009fc2',
        'zcb-accent-hover': '#00b4db',
        'zcb-light': '#f4f6f8',
      },
    },
  },
  plugins: [],
};
export default config;
