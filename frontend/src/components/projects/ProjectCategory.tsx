import type { Category, Project } from '../../types';
import { ProjectItem } from './ProjectItem';

interface Props {
	category: Category;
	projects: Project[];
}

export const ProjectCategory = ({ category, projects }: Props) => (
	<section className='project-category'>
		<h2 className='project-category__title'>{category.name}</h2>
		<div className='projects-list'>
			{projects.map((project) => (
				<ProjectItem key={project.id} project={project} />
			))}
		</div>
	</section>
);
