import { strapi } from '../api/strapi';
import type { Skill, Service, ApiResponse } from '../types';

export const getSkills = async (): Promise<Skill[]> => {
	const data = await strapi.get('/skills?sort[0]=order:asc');
	if (!data?.data) throw new Error('Invalid API response: missing data');

	const skills: Skill[] = data.data.map(
		(s: ApiResponse): Skill => ({
			id: s.id,
			name: s.name,
			order: s.order ?? null,
		}),
	);

	const ordered = skills.filter((s) => s.order !== null).sort((a, b) => a.order! - b.order!);
	const unordered = skills.filter((s) => s.order === null);
	return [...ordered, ...unordered];
};

export const getServices = async (): Promise<Service[]> => {
	const data = await strapi.get('/services?sort[0]=order:asc');
	if (!data?.data) throw new Error('Invalid API response: missing data');
	return data.data.map(
		(s: ApiResponse): Service => ({
			id: s.id,
			title: s.title,
			description: s.description,
			order: s.order ?? null,
		}),
	);
};
