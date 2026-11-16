// @ts-check
import { fontProviders } from 'astro/config';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://itp.duncanpetrie.com",
    fonts: [
        {
            provider: fontProviders.local(),
            cssVariable: "--vevey",
            name: "Vevey",
            options: {
                variants: [{
                    src: ['./src/fonts/vevey.otf'],
                    weight: 'normal',
                    style: 'normal',
                }],
            },
        },
        {
            provider: fontProviders.local(),
            cssVariable: "--atk",
            name: "Atkinson Hyperlegible Soft",
            options: {
                variants: [
                    {
                        src: ['./src/fonts/atk.woff2'],
                        weight: 'normal',
                        style: 'normal',
                    },
                    {
                        src: ['./src/fonts/atk-italic.woff2'],
                        weight: 'normal',
                        style: 'italic',
                    },
                ],
            },
        },
    ]
});
