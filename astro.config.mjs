import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
	integrations: [tailwind(), react()],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	output: 'server',
	adapter: netlify(),
	image: {
		service: {
			name: 'cloudinary',
			baseURL: 'https://res.cloudinary.com/',
		},
	},
});
