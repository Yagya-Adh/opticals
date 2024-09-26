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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

/* 
    --body: #333;
    --title: black;
    --desktop: 150px;
    --tablet: 100px;
    --landscape-mobile: 80px;
    --portrait-mobile: 60px;
    --primary: #182a39;
    --secondary: #262c40;
    --bg: #e0ebf4; */
