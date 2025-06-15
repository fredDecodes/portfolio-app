import React from 'react';

const SkillCard = ({ skill }) => {
  if (!skill) {
    console.error('No skill provided to SkillCard');
    return <div className='text-red-500'>Skill not provided</div>;
  }

  // console.log('Rendering SkillCard for:', skill?.name);

  const Icon = skill.icon;
  const level = skill.level || 0;

  if (typeof Icon !== 'function') {
    console.warn('Icon is not a valid React component:', skill.name, Icon);
  }

  return (
    <div className='bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-sky-500/20 transition-shadow duration-300 flex flex-col items-center text-center'>
      {Icon ? (
        <Icon className='w-10 h-10 mb-3 text-sky-400' />
      ) : (
        <div className='w-10 h-10 mb-3 bg-slate-600 rounded-full' />
      )}
      <span className='text-sm font-medium text-slate-200 mb-2'>
        {skill.name}
      </span>
      {level > 0 && (
        <div className='w-full bg-slate-700 rounded-full h-2.5'>
          <div
            className='bg-sky-500 h-2.5 rounded-full'
            style={{ width: `${(level / 5) * 100}%` }}
            title={`Proficiency: ${level}/5`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
