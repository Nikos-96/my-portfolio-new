import { useEffect } from 'react';

declare global {
	interface Window {
		grecaptcha?: {
			ready: (callback: () => void) => void;
			execute: (siteKey: string, options: { action: string }) => Promise<string>;
		};
	}
}

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = 'recaptcha-script';

export const useRecaptcha = () => {
	useEffect(() => {
		if (document.getElementById(SCRIPT_ID)) return;
		const script = document.createElement('script');
		script.id = SCRIPT_ID;
		script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
		document.head.appendChild(script);
	}, []);

	return (action: string) =>
		new Promise<string>((resolve, reject) => {
			const { grecaptcha } = window;
			if (!grecaptcha) return reject(new Error('reCAPTCHA not loaded'));
			grecaptcha.ready(() => grecaptcha.execute(SITE_KEY, { action }).then(resolve, reject));
		});
};
