import dotenv from 'dotenv';
dotenv.config();

import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
	PORT: z.coerce.number().default(3000),
	CORS_ORIGIN: z.url().optional(),
	RECAPTCHA_SECRET_KEY: z.string(),
});

export const env = envSchema.parse(process.env);