// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,ts}', // Ensure Angular templates & components are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
