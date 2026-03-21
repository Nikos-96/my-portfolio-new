import { useAppStore } from '../store/useAppStore';

export const useProjects = () => ({
	grouped: useAppStore((s) => s.projects),
	loading: useAppStore((s) => s.loading),
	error: useAppStore((s) => s.error),
});
