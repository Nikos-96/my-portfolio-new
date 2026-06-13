import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
	const { t } = useTranslation();

	return (
		<section className='wrapper hero-wrapper'>
			<h1>{t('hero.title')}</h1>
			<TypeAnimation
				sequence={[t('hero.tagline1'), 2200, t('hero.tagline2'), 2200, t('hero.tagline3'), 2200]}
				repeat={Infinity}
				speed={60}
				key={t('hero.tagline1')}
			/>
		</section>
	);
};
