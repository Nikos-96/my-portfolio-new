import { env } from './config/env';

import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';

import contactRoutes from './routes/contact';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiter } from './middleware/rateLimiter';
import { corsOptions } from './config/cors';
import { logger } from './utils/logger';
import { ApiResponse } from './types';

const app = express();
app.set('trust proxy', 1);

// Middleware
app.use(pinoHttp({ logger }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/contact', rateLimiter, contactRoutes);

// 404
app.use((req: Request, res: Response) => {
	res.status(404).json({ status: 'error', error: 'Not found' } satisfies ApiResponse);
});

// Error handler
app.use(errorHandler);

// Start server
if (env.NODE_ENV !== 'test') {
	const server = app.listen(env.PORT, () => {
		logger.info(`Server running on port ${env.PORT}`);
		process.send?.('ready');
	});

	const shutdown = (signal: string) => {
		logger.info(`${signal} received, shutting down`);

		server.close(() => {
			logger.info('Server closed');
			process.exit(0);
		});

		setTimeout(() => {
			logger.warn('Forcing exit after timeout');
			process.exit(1);
		}, 20_000).unref();
	};

	process.on('SIGTERM', () => shutdown('SIGTERM'));
	process.on('SIGINT', () => shutdown('SIGINT'));
}

export default app;
