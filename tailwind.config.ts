import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1082px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1950px",
        x3xl: "2048px",
        x4k: "3500px",
      },
    extend: {
      colors: {
        "raze-green": "#52FA9B",
      },
    },
  },
  plugins: [],
} satisfies Config;
