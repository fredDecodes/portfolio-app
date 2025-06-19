import React from 'react';
import { Experience } from '../../data/allData';
import SectionContainer from './SectionContainer';
import ExperienceItem from './ExperienceItem';

const ExperienceSection = () => {
  return (
    <div>
      <SectionContainer
        id='experience'
        title='Professional Journey'
        className='bg-slate-800/50'
      >
        <div className='max-w-3xl mx-auto'>
          {Experience.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default ExperienceSection;
