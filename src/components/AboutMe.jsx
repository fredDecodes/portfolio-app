import React from 'react';
import { ProfileData } from '../../data/allData';
import SectionContainer from './SectionContainer';

const AboutMe = () => {
  return (
    <div>
      <SectionContainer id='about' title='About Me'>
        <div className='max-w-3xl mx-auto text-center'>
          {ProfileData.bio.map((paragraph, index) => (
            <p key={index} className='text-lg text-slate-300 mb-6 last:mb-0'>
              {paragraph}
            </p>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default AboutMe;
