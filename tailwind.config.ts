import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { teal: { deep: "#176B67", mid: "#2C8C83" }, mint: "#E8F3EF", soft: "#F5F9F8", ink: "#23333A", muted: "#64747A", line: "#DCE7E5", sky: "#EAF2FA" },
    fontFamily: { serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"], sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"] },
    boxShadow: { card: "0 1px 2px rgba(35,51,58,.05), 0 6px 20px rgba(35,51,58,.06)" },
  } },
  plugins: [],
};
export default config;
