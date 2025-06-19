import React from 'react';

const ExperienceItem = ({ experience }) => {
  return (
    <div className='relative pl-8 sm:pl-12 py-6 group'>
      {/* Vertical line */}
      <div className='absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-slate-700 group-hover:bg-sky-500 transition-colors duration-300'></div>

      {/* Dot */}
      <div className='absolute left-0 sm:left-1.5 top-8 w-5 h-5 bg-slate-900 border-2 border-slate-700 rounded-full group-hover:border-sky-500 transition-colors duration-300 flex items-center justify-center'>
        {experience.logoUrl ? (
          <img
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            className='w-3 h-3 rounded-full object-cover'
          />
        ) : (
          <div className='w-2 h-2 bg-sky-500 rounded-full'></div>
        )}
      </div>

      <div className='mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        <h3 className='text-lg font-semibold text-sky-300'>
          {experience.role}
        </h3>
        <p className='text-sm text-slate-400 mt-1 sm:mt-0'>
          {experience.duration}
        </p>
      </div>

      <p className='text-md font-medium text-slate-200 mb-2'>
        {experience.company}
      </p>

      <ul className='list-disc list-outside ml-5 space-y-1 text-sm text-slate-300'>
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
