// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Study Hub & Knowledge Garden',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jrayas' }],
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
