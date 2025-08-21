import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        navy: "#152846",
        neon: "#00e662",
      },
      boxShadow: {
        neon: "0 0 25px rgba(57,255,20,0.35), 0 0 50px rgba(57,255,20,0.15)",
        card: "0 10px 30px rgba(11,27,58,0.15)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(11,27,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,58,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
