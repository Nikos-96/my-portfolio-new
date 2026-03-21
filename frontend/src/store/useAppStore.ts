import { create } from 'zustand';
import { getProjects } from '../services/projects';
import { getSkills, getServices } from '../services/about';
import { groupProjectsByCategory } from '../utils/groupProjects';
import type { AppStore } from '../types';

export const useAppStore = create<AppStore>((set, get) => ({
	projects: [],
	skills: [],
	services: [],
	loading: false,
	error: null,
	fetchAll: async () => {
		if (get().projects.length > 0) return;
		set({ loading: true, error: null });
		try {
			const [projects, skills, services] = await Promise.all([getProjects(), getSkills(), getServices()]);
			set({
				projects: groupProjectsByCategory(projects),
				skills,
				services,
			});
		} catch (err) {
			set({ error: err instanceof Error ? err.message : 'Unknown error' });
		} finally {
			set({ loading: false });
		}
	},
}));
