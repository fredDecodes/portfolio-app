// SkillSection.js
import React from 'react';
import SectionContainer from './SectionContainer';
import { SkillData } from '../../data/allData';
import { SkillCategoryArray } from '../../data/skillCategory';
import SkillCard from './SkillCard';

const SkillSection = () => {
  return (
    <div>
      <SectionContainer
        id='skills'
        title='My Expertise'
        className='bg-slate-800/50'
      >
        {SkillCategoryArray.map(({ key, value }) => {
          const filteredSkills = SkillData.filter(
            (skill) => skill.category === key
          );

          return (
            <div key={key} className='mb-12 last:mb-0'>
              <h3 className='text-2xl font-semibold text-sky-300 mb-6 text-center sm:text-left'>
                {value}
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6'>
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </SectionContainer>
    </div>
  );
};

export default SkillSection;
