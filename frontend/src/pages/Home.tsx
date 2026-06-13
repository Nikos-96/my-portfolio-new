import { useTranslation } from 'react-i18next';
import { Hero } from '../components/layout/Hero';
import { FeaturedSpotlight } from '../components/projects/FeaturedSpotlight';
import { Projects } from '../components/projects/Projects';
import { GithubIcon } from './../assets/icons/GithubIcon';

export const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Hero />
			<section className='wrapper'>
				<FeaturedSpotlight />
				<h2>{t('home.allProjects')}</h2>
				<p className='page-description'>
					{t('home.projectsDescStart')}
					<b>{t('home.projectsDescBold')}</b> <GithubIcon />
					{t('home.projectsDescEnd')}
				</p>
				<Projects />
			</section>
		</>
	);
};
