import { ExternalLinkIcon } from '../../assets/icons/ExternalLinkIcon';
import { motion } from 'framer-motion';
import { GithubIcon } from '../../assets/icons/GithubIcon';
import type { Project } from '../../types';

export const ProjectItem = ({ project }: { project: Project }) => (
	<motion.div
		className='project-item'
		initial={{ opacity: 0, y: 60 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, margin: '0px 0px -80px 0px' }}
		transition={{ duration: 0.5, ease: 'easeOut' }}
	>
		<a href={project.url} target='_blank' rel='noopener noreferrer' className='image-wrapper'>
			<img src={project.image.url} alt={project.image.alt} />
		</a>
		<div className='project-info'>
			<div className='project-title-row'>
				<a href={project.url} target='_blank' rel='noopener noreferrer' className='project-title'>
					<h3>{project.title}</h3>
					<ExternalLinkIcon size={16} />
				</a>
				{project.isOpenSource && project.githubUrl && (
					<a href={project.githubUrl} target='_blank' rel='noopener noreferrer' className='github-link'>
						<GithubIcon size={20} />
					</a>
				)}
			</div>
			<p>{project.description}</p>
			<ul>
				{project.tags.map((tag) => (
					<li key={tag.id}>{tag.name}</li>
				))}
			</ul>
		</div>
	</motion.div>
);
