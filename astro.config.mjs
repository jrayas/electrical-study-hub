// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrayas.github.io',
	base: '/electrical-study-hub',
	integrations: [
		starlight({
			title: 'Study Hub & Knowledge Garden',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jrayas/electrical-study-hub' }],
			sidebar: [
				{
					label: '⚡ Domains',
					items: [
						{ label: '⚡ Electrical Engineering Library', slug: 'electrical' },
						{ label: '📋 Domain Blueprint Template', slug: '_templates/domain-index' },
					],
				},
				{
					label: '📚 Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
		}),
	],
});
