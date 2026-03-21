import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_PASS,
	},
});

export const sendContactEmail = async (name: string, email: string, message: string) => {
	await transporter.sendMail({
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		subject: `Portfolio contact from ${name}`,
		text: `From: ${name} <${email}>\n\n${message}`,
	});
};
