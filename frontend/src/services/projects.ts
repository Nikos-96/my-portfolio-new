import { strapi } from '../api/strapi';
import type { ApiResponse, Project, Tag } from '../types';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

const QUERY = (locale: string) =>
	'/projects' +
	'?populate[0]=tags' +
	'&populate[1]=image' +
	'&populate[2]=category' +
	'&sort[0]=category.order:asc' +
	'&sort[1]=order:asc' +
	`&locale=${locale}`;

export const getProjects = async (locale: string): Promise<Project[]> => {
	try {
		const data = await strapi.get(QUERY(locale));

		if (!data || !data.data) {
			throw new Error('Invalid API response: missing data');
		}

		return data.data.map(
			(p: ApiResponse): Project => ({
				id: p.id,
				title: p.title,
				description: p.description,
				tags: p.tags.map(
					(t: Tag): Tag => ({
						id: t.id,
						name: t.name,
					}),
				),
				image: {
					url: `${STRAPI_URL}${p.image?.url || ''}`,
					alt: p.image?.alternativeText || '',
				},
				url: p.url,
				category: {
					id: p.category.id,
					name: p.category.name,
					order: p.category.order,
				},
				order: p.order ?? null,
				isOpenSource: p.isOpenSource ?? false,
				githubUrl: p.githubUrl ?? null,
				featured: p.featured ?? false,
			}),
		);
	} catch (err: unknown) {
		console.error('getProjects error:', err);
		throw new Error(err instanceof Error ? err.message : 'Unknown error fetching projects');
	}
};
