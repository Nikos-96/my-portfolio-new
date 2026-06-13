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
	lastLocale: null,
	fetchAll: async (locale = 'en') => {
		if (get().lastLocale === locale) return;
		set({ loading: true, error: null });
		try {
			const [projects, skills, services] = await Promise.all([
				getProjects(locale),
				getSkills(),
				getServices(locale),
			]);
			set({
				projects: groupProjectsByCategory(projects),
				skills,
				services,
				lastLocale: locale,
			});
		} catch (err) {
			set({ error: err instanceof Error ? err.message : 'Unknown error' });
		} finally {
			set({ loading: false });
		}
	},
}));
