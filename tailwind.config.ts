import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "raze-green": "#52FA9B",
      },
    },
  },
  plugins: [],
} satisfies Config;
