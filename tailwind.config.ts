import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        drawerHoverBg: "#DABEA7",
        drawerHoverText: "#FFFAF0",
        primary: "#94763D",
        secondary: "#CEB195",
        primaryBg: "#FFFFF0",
        secondaryBg: "#ECDCC2",
        mapSubtitle: "#B0906F",
        mapContent: "#CD853F",
      },
      fontSize: {
        headerText: ["24px", "28.8px"],
        closeIcon: ["18px", "18px"],
      },
    },
  },
  plugins: [],
} satisfies Config;
