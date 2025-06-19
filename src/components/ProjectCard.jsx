import React from 'react';
import { Project } from '../../data/allData';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-slate-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/30 flex flex-col'>
      <img
        className='w-full h-56 object-cover'
        src={project.imageUrl}
        alt={project.title}
      />
      <div className='p-6 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold text-sky-300 mb-2'>
          {project.title}
        </h3>
        <p className='text-slate-300 text-sm mb-4 flex-grow'>
          {project.description}
        </p>
        <div className='mb-4'>
          <h4 className='text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2'>
            Technologies Used:
          </h4>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='bg-sky-700/50 text-sky-300 px-2 py-1 text-xs rounded-full'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className='mt-auto flex space-x-4'>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center text-slate-300 hover:text-sky-400 transition-colors'
            >
              <FaGithub className='w-5 h-5 mr-1' />
              GitHub
              <FaLink />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center text-slate-300 hover:text-sky-400 transition-colors'
            >
              <FaLink className='w-5 h-5 mr-1' />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
