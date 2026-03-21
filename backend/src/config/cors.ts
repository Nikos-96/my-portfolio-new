import { env } from './env';

export const corsOptions = {
	origin: env.NODE_ENV !== 'production' ? 'http://localhost:5173' : env.CORS_ORIGIN,
};