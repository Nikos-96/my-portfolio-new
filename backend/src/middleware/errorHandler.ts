import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { ApiResponse } from '../types';

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction) => {
	logger.error({ err, url: req.url, method: req.method }, 'Unhandled error');
	res.status(500).json({ status: 'error', error: 'Something went wrong' } satisfies ApiResponse);
};
