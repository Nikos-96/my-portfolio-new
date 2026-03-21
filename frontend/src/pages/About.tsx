import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useAbout } from '../hooks/useAbout';

export const About = () => {
	const { skills, services, loading, error } = useAbout();

	if (error) return <p>Failed to load: {error}</p>;

	return (
		<div className='wrapper about-page'>
			<div className='about-header'>
				<h1>About</h1>
			</div>

			<section className='about-section'>
				<h2>Who I Am</h2>
				<p>
					I'm a full-stack web developer with over 5 years of experience, specializing in single-page applications. I work across the entire stack —
					from building interfaces in React and TypeScript to designing APIs and managing databases on the backend.
				</p>
			</section>

			<section className='about-section'>
				<h2>What I Do</h2>
				<div className='services-grid'>
					{loading ? (
						<div className='service-card'>
							<Skeleton height={20} width='60%' />
							<Skeleton count={2} />
						</div>
					) : (
						services.map((service) => (
							<div key={service.id} className='service-card'>
								<h3>{service.title}</h3>
								<p>{service.description}</p>
							</div>
						))
					)}
				</div>
			</section>

			<section className='about-section'>
				<h2>Skills & Technologies</h2>
				<ul className='skills-list'>
					{loading ? (
						<li>
							<Skeleton width={70} style={{padding: '4px 0'}} borderRadius={999} />
						</li>
					) : (
						skills.map((skill) => <li key={skill.id}>{skill.name}</li>)
					)}
				</ul>
			</section>
		</div>
	);
};
