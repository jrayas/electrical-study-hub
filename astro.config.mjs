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
					label: '⚡ Electrical Engineering',
					autogenerate: { directory: 'electrical' },
				},
				{
					label: '📋 Blueprints & Templates',
					autogenerate: { directory: '_templates' },
				},
				{
					label: '📚 Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
