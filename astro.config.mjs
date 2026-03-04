// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://matloughnane.github.io',
    // base: '/v2',
    integrations: [mdx(), react(), sitemap()],
    vite: {
        plugins: [tailwindcss()],
    },
    redirects: {
        // Old Jekyll posts used permalink: /:title/ (slug only, no date, no /posts/ prefix)
        // Redirect to new Astro paths at /posts/DATE-slug/
        '/arranmore-island': '/posts/2020-12-26-arranmore-island',
        '/neopolitan-pizza': '/posts/2020-12-26-neopolitan-pizza',
        '/tokyo': '/posts/2020-12-26-tokyo',
        '/apple-galette': '/posts/2020-12-27-apple-galette',
        '/coding-in-2020': '/posts/2020-12-28-coding-in-2020',
        '/thai-red-curry': '/posts/2020-12-29-thai-red-curry',
        '/chocolate-earthquake-cookies': '/posts/2021-01-03-chocolate-earthquake-cookies',
        '/apple-cider-loaf-cake': '/posts/2021-01-07-apple-cider-loaf-cake',
        '/peru': '/posts/2021-01-13-peru',
        '/soda-bread': '/posts/2021-02-06-soda-bread',
        '/lemon-loaf': '/posts/2021-02-11-lemon-loaf',
        '/riga': '/posts/2021-03-04-riga',
        '/carrot-cake': '/posts/2021-03-06-carrot-cake',
        '/helsinki': '/posts/2021-03-10-helsinki',
        '/rapberry-ripple-loaf': '/posts/2021-03-12-rapberry-ripple-loaf',
        '/banana-bread': '/posts/2021-04-16-banana-bread',
        '/simple-butter-chicken': '/posts/2021-05-04-simple-butter-chicken',
        '/donegal': '/posts/2021-05-06-donegal',
        '/sierra-nevada': '/posts/2021-12-18-sierra-nevada',
        '/2022-hexa-round-up': '/posts/2022-12-15-2022-hexa-round-up',
        '/creamy-tuscan-pasta': '/posts/2023-02-14-creamy-tuscan-pasta',
        '/new-york': '/posts/2023-02-15-new-york',
        '/arranmore-ferry-kiosk': '/posts/2023-08-04-arranmore-ferry-kiosk',
        '/italy': '/posts/2024-03-29-italy',
        '/inis-oirr-beo': '/posts/2024-04-19-inis-oirr-beo',
        '/lemon-pepper-chicken-rice': '/posts/2024-07-31-lemon-pepper-chicken-rice',
        '/married': '/posts/2024-08-24-married',
        '/2024-hexa-round-up': '/posts/2024-12-30-2024-hexa-round-up',
        '/bali-philippines': '/posts/2025-05-04-bali-philippines',
        '/bridgit': '/posts/2025-05-20-bridgit',
        '/paris': '/posts/2025-08-24-paris',
        // Old Jekyll pages that no longer exist
        '/categories': '/posts',
        '/contact': '/',
        '/tags': '/posts',
    },
});
