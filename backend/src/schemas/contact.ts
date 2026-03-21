import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.email('Invalid email'),
	message: z.string().min(1, 'Message is required'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
