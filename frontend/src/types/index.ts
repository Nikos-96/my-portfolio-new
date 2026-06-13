export type ApiResponse = Record<string, any>; // eslint-disable-line

export interface Tag {
	id: number;
	name: string;
}

export interface Category {
	id: number;
	name: string;
	order: number;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	image: {
		url: string;
		alt: string;
	};
	tags: Tag[];
	url: string;
	category: Category;
	order: number | null;
	isOpenSource: boolean;
	githubUrl: string | null;
	featured: boolean;
}

export interface GroupedProjects {
	category: Category;
	projects: Project[];
}

export interface FormData {
	name: string;
	email: string;
	message: string;
}

export interface AppStore {
	projects: GroupedProjects[];
	skills: Skill[];
	services: Service[];
	loading: boolean;
	error: string | null;
	lastLocale: string | null;
	fetchAll: (locale?: string) => Promise<void>;
}

export interface Skill {
	id: number;
	name: string;
	order: number | null;
}

export interface Service {
	id: number;
	title: string;
	description: string;
	order: number | null;
}
