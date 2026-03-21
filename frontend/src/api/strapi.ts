const BASE_URL = import.meta.env.VITE_STRAPI_URL;

const handleResponse = async (res: Response) => {
	if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
	return res.json();
};

export const strapi = {
	get: (endpoint: string) => fetch(`${BASE_URL}/api${endpoint}`).then(handleResponse),
};