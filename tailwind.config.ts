import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: [
          "var(--font-dmSans)",
          "var(--font-kantumruy)",
          "var(--font-notoSans)",
          "sans-serif",
        ],
      },
      zIndex: {
        999: "999",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
	  backgroundColor: {
		primary: '#CD202A',
		light2: '#F5F5F5',
	},
	borderColor: {
		light2: '#F5F5F5',
		light3: '#E5E5E5',
	},
    },
  },
  plugins: [],
};
export default config;
