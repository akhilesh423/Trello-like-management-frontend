import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#797979',
        profileText: '#080808',
        lightGray: '#F4F4F4'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
