import { Hero } from '../components/layout/Hero';
import { Projects } from '../components/projects/Projects';
import { GithubIcon } from './../assets/icons/GithubIcon';

export const Home = () => {
	return (
		<>
			<Hero />
			<section className='wrapper'>
				<h2>Selected Projects</h2>
				<p className='page-description'>
					A collection of my work and side projects. Open source projects have a <b>GitHub icon</b> <GithubIcon/> next to the title linking to the repository.
				</p>
				<Projects />
			</section>
		</>
	);
};
