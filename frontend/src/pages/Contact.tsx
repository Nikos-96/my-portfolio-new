import { useContactForm } from '../hooks/useContactForm';

export const Contact = () => {
	const { formData, loading, error, success, handleChange, handleSubmit } = useContactForm();

	return (
		<div className='wrapper contact-page'>
			<h1>Contact</h1>
			<section>
				<p>
					You can contact me via email <a href='mailto:nikos7331@gmail.com'>Nikos7331@gmail.com</a> or the contact form.
				</p>
			</section>
			<section>
				<h2>Send a message</h2>
				{success ? (
					<p className='success'>Message sent! Thank you.</p>
				) : (
					<form onSubmit={handleSubmit}>
						<label>
							<span>Name</span>
							<input name='name' autoComplete='name' value={formData.name} onChange={handleChange} type='text' placeholder='Your name' required />
						</label>
						<label>
							<span>Email</span>
							<input name='email' autoComplete='email' value={formData.email} onChange={handleChange} type='email' placeholder='example@mail.com' required />
						</label>
						<label>
							<span>Message</span>
							<textarea  name='message' value={formData.message} onChange={handleChange} placeholder='Your message' required />
						</label>
						{error && <p className='error'>{error}</p>}
						<button type='submit' disabled={loading}>
							{loading ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				)}
			</section>
		</div>
	);
};
