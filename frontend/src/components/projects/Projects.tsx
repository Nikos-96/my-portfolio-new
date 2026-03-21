import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCategory } from './ProjectCategory';

export const Projects = () => {
  const { grouped, loading, error } = useProjects();

  if (error) return <p>Failed to load projects: {error}</p>;

  if (loading) return (
    <div className='projects'>
      <section className='project-category'>
        <div className='projects-list'>
          <div className='project-item'>
            <div className='image-wrapper'>
              <Skeleton height="100%" />
            </div>
            <div className='project-info'>
              <Skeleton height={20} width="60%" />
              <Skeleton count={2} />
              <Skeleton height={32} width={80} borderRadius={999} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className='projects'>
      {grouped.map(({ category, projects }) => (
        <ProjectCategory key={category.id} category={category} projects={projects} />
      ))}
    </div>
  );
};