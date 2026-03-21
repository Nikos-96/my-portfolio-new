import { ExternalLinkIcon } from '../../assets/icons/ExternalLinkIcon';
import { GithubIcon } from '../../assets/icons/GithubIcon';
import type { Project } from '../../types';

export const ProjectItem = ({ project }: { project: Project }) => (
	<div className='project-item'>
		<div className='image-wrapper'>
			<img src={project.image.url} alt={project.image.alt} />
		</div>
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
	</div>
);
