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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--color-black)",
        yellow: "var(--color-yellow)",
        green: "var(--color-green)",
        blue: "var(--color-blue)",
        selected: "var(--color-selected)",
        dropdown: {
          DEFAULT: "var(--dropdown-background)",
          focused: "var(--dropdown-background--focused)",
        },
        text: {
          title: "var(--color-text-title)",
          subtitle: "var(--color-text-subtitle)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
