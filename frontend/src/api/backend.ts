const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const handleResponse = async (res: Response) => {
	if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
	return res.json();
};

export const backend = {
	get: (endpoint: string) => fetch(`${BASE_URL}/api${endpoint}`).then(handleResponse),
	post: (endpoint: string, body: unknown) =>
		fetch(`${BASE_URL}/api${endpoint}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}).then(handleResponse),
};
