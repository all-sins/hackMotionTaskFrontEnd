import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,js,jsx}"],  // FIXED
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "Space Grotesk"],
      },
    },
  },
  plugins: [],
} satisfies Config;
