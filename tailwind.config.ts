// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{html,ts}' // Ensure Angular templates & components are included
    ],
    theme: {
        extend: {},
        screens: {
            xs: '320px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '2540px'
        }
    },
    plugins: []
};

export default config;
