import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      extend: {
        maxWidth: {
          'container-576': '540px',
          'container-768': '720px',
          'container-992': '960px',
        },
        screens: {
          'sm': '576px',
          'md': '768px',
          'lg': '992px',
        }
      }
    },
    variants: {},
    plugins: [],
  },
  plugins: [],
};
export default config;
