import { useEffect, useState } from 'react';
import { ExternalLinkIcon } from '../../assets/icons/ExternalLinkIcon';
import { useTranslation } from 'react-i18next';
import { useProjects } from '../../hooks/useProjects';
import { AnimatePresence, motion } from 'framer-motion';

export const FeaturedSpotlight = () => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [resetKey, setResetKey] = useState(0);

	const { grouped } = useProjects();
	const { t } = useTranslation();

	const paginate = (newIndex: number) => {
		setDirection(newIndex > index ? 1 : -1);
		setIndex(newIndex);
		setResetKey((k) => k + 1);
	};

	const projects = grouped.flatMap((item) => item.projects).filter((p) => p.featured);

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection(1);
			setIndex((i) => (i + 1) % projects.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [projects.length, resetKey]);

	const project = projects[index];
	if (!project) return null;

	return (
		<div className='spotlight' style={{ overflow: 'hidden', position: 'relative' }}>
			<AnimatePresence mode='popLayout' custom={direction}>
				<motion.div
					key={index}
					className='spotlight-inner'
					custom={direction}
					variants={{
						enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
						center: { x: 0, opacity: 1 },
						exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
					}}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{ duration: 0.4, ease: 'easeInOut' }}
				>
					<a href={project.url} target='_blank' rel='noopener noreferrer' className='spotlight-image'>
						<img src={project.image.url} alt={project.image.alt} />
					</a>
					<div className='spotlight-info'>
						<span className='spotlight-label'>{t('home.featuredLabel')}</span>
						<a href={project.url} target='_blank' rel='noopener noreferrer' className='spotlight-title'>
							<h2>{project.title}</h2>
							<ExternalLinkIcon size={20} />
						</a>
						<p>{project.description}</p>
						<ul className='skills-list'>
							{project.tags.map((tag) => (
								<li key={tag.id}>{tag.name}</li>
							))}
						</ul>
						<div className='spotlight-dots'>
							{projects.map((_, i) => (
								<button key={i} onClick={() => paginate(i)} className={`spotlight-dot${i === index ? ' active' : ''}`} />
							))}
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
