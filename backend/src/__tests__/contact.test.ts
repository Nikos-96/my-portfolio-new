import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index';

describe('POST /api/contact', () => {
	it('returns status ok with valid data', async () => {
		const res = await request(app).post('/api/contact').send({
			name: 'John',
			email: 'john@example.com',
			message: 'Hello!',
		});
		expect(res.status).toBe(200);
		expect(res.body).toEqual({ status: 'ok' });
	});
});
