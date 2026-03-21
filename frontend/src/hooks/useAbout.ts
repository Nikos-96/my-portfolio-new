import { useAppStore } from '../store/useAppStore';

export const useAbout = () => ({
	skills: useAppStore((s) => s.skills),
	services: useAppStore((s) => s.services),
	loading: useAppStore((s) => s.loading),
	error: useAppStore((s) => s.error),
});
