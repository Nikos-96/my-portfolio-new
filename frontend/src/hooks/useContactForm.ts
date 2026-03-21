import { useState } from 'react';
import { backend } from '../api/backend';
import type { FormData } from '../types';

const INITIAL_STATE: FormData = { name: '', email: '', message: '' };

export const useContactForm = () => {
	const [formData, setFormData] = useState<FormData>(INITIAL_STATE);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			await backend.post('/contact', formData);
			setSuccess(true);
			setFormData(INITIAL_STATE);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Something went wrong');
		} finally {
			setLoading(false);
		}
	};

	return { formData, loading, error, success, handleChange, handleSubmit };
};
