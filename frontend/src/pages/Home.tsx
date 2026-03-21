import { Hero } from '../components/layout/Hero';
import { Projects } from '../components/projects/Projects';

export const Home = () => {
	return (
		<>
			<Hero />
			<section className='wrapper'>
				<h2>Selected Projects</h2>
				<p style={{ margin: '1rem 0 5rem 0' }}>
					A collection of my work and side projects. Open source projects have a GitHub icon next to the title linking to the repository.
				</p>
				<Projects />
			</section>
		</>
	);
};
