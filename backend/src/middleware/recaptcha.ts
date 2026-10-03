import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { ApiResponse } from '../types';

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const MIN_SCORE = 0.5;

interface RecaptchaResult {
	success: boolean;
	score?: number;
	action?: string;
	'error-codes'?: string[];
}

export const verifyRecaptcha = (action: string) => async (req: Request, res: Response, next: NextFunction) => {
	const token = req.body?.recaptchaToken;

	const result: RecaptchaResult =
		typeof token === 'string' && token
			? await fetch(VERIFY_URL, {
					method: 'POST',
					body: new URLSearchParams({ secret: env.RECAPTCHA_SECRET_KEY, response: token }),
				}).then((r) => r.json())
			: { success: false };

	if (!result.success || result.action !== action || (result.score ?? 0) < MIN_SCORE) {
		logger.warn({ score: result.score, action: result.action, errors: result['error-codes'] }, 'reCAPTCHA verification failed');
		res.status(403).json({ status: 'error', error: 'reCAPTCHA verification failed' } satisfies ApiResponse);
		return;
	}

	next();
};
