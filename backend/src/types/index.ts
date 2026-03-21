export interface ApiResponse<T = unknown> {
	status: 'ok' | 'error';
	data?: T;
	error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}