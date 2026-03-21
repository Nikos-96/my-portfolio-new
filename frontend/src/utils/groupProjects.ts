import type { GroupedProjects, Project } from '../types';

const sortProjects = (projects: Project[]): Project[] => {
	const ordered = projects.filter((p) => p.order !== null).sort((a, b) => a.order! - b.order!);
	const unordered = projects.filter((p) => p.order === null);
	return [...ordered, ...unordered];
};

export const groupProjectsByCategory = (projects: Project[]): GroupedProjects[] => {
	const map = new Map<number, GroupedProjects>();

	for (const project of projects) {
		const { category } = project;
		if (!map.has(category.id)) {
			map.set(category.id, { category, projects: [] });
		}
		map.get(category.id)!.projects.push(project);
	}

	return Array.from(map.values()).map((group) => ({
		...group,
		projects: sortProjects(group.projects),
	}));
};
