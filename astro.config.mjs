// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrayas.github.io',
	base: '/electrical-study-hub',
	integrations: [
		starlight({
			title: 'Study Hub',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jrayas/electrical-study-hub' }],
			sidebar: [
				{
					label: 'Libraries',
					items: [
						{ label: 'Electrical', slug: 'electrical' },
						{ label: 'Health', slug: 'health' },
						{ label: 'Template', slug: '_templates/domain-index' },
					],
				},
			],
		}),
	],
});
