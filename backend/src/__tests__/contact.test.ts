import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../index';

vi.mock('../services/mailer', () => ({ sendContactEmail: vi.fn() }));

const mockRecaptcha = (result: object) =>
	vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ json: () => Promise.resolve(result) }));

const validBody = {
	name: 'John',
	email: 'john@example.com',
	message: 'Hello!',
	recaptchaToken: 'token',
};

describe('POST /api/contact', () => {
	beforeEach(() => vi.unstubAllGlobals());

	it('returns status ok with valid data', async () => {
		mockRecaptcha({ success: true, score: 0.9, action: 'contact' });
		const res = await request(app).post('/api/contact').send(validBody);
		expect(res.status).toBe(200);
		expect(res.body).toEqual({ status: 'ok' });
	});

	it('rejects low reCAPTCHA score', async () => {
		mockRecaptcha({ success: true, score: 0.1, action: 'contact' });
		const res = await request(app).post('/api/contact').send(validBody);
		expect(res.status).toBe(403);
	});

	it('rejects missing reCAPTCHA token', async () => {
		const res = await request(app).post('/api/contact').send({ ...validBody, recaptchaToken: undefined });
		expect(res.status).toBe(403);
	});
});
