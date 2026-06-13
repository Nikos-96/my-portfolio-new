import { useTranslation } from 'react-i18next';
import { useContactForm } from '../hooks/useContactForm';

export const Contact = () => {
	const { t } = useTranslation();
	const { formData, loading, error, success, handleChange, handleSubmit } = useContactForm();

	return (
		<div className='wrapper contact-page'>
			<h1>{t('nav.contact')}</h1>
			<section>
				<p>{t('contact.introStart')}<a href='mailto:...'>Nikos7331@gmail.com</a>{t('contact.introEnd')}</p>
			</section>
			<section>
				<h2>{t('contact.formTitle')}</h2>
				{success ? (
					<p className='success'>{t('contact.success')}</p>
				) : (
					<form onSubmit={handleSubmit}>
						<label>
							<span>{t('contact.nameLabel')}</span>
							<input name='name' autoComplete='name' value={formData.name} onChange={handleChange} type='text' placeholder={t('contact.namePlaceholder')} required />
						</label>
						<label>
							<span>{t('contact.emailLabel')}</span>
							<input name='email' autoComplete='email' value={formData.email} onChange={handleChange} type='email' placeholder={t('contact.emailPlaceholder')} required />
						</label>
						<label>
							<span>{t('contact.messageLabel')}</span>
							<textarea  name='message' value={formData.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder')} required />
						</label>
						{error && <p className='error'>{error}</p>}
						<button type='submit' disabled={loading}>
							{loading ? t('contact.sending') : t('contact.send')}
						</button>
					</form>
				)}
			</section>
		</div>
	);
};
