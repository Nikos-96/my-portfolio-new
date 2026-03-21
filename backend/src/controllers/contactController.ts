import { Request, Response } from 'express';
import { logger } from '../utils/logger';
import { contactSchema } from '../schemas/contact';
import { ApiResponse } from '../types';
import { sendContactEmail } from '../services/mailer';

export const submitContact = async (req: Request, res: Response) => {
	const result = contactSchema.safeParse(req.body);

	if (!result.success) {
		res.status(400).json({ status: 'error', error: result.error.issues[0].message } satisfies ApiResponse);
		return;
	}

	const { name, email, message } = result.data;

	logger.info({ route: '/contact', email }, 'Contact form submitted');

	await sendContactEmail(name, email, message);

	res.json({ status: 'ok' } satisfies ApiResponse);
};
