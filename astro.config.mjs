// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://matloughnane.github.io',
    // base: '/v2',
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()],
    },
});
