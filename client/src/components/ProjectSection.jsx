import React from 'react';
import { Project } from '../../data/allData';
import SectionContainer from './SectionContainer';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <div>
      <SectionContainer id='projects' title='Featured Projects'>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
          {Project.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default ProjectSection;
