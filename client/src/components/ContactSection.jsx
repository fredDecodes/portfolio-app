import React from 'react';
import SectionContainer from './SectionContainer';
import { ProfileData } from '../../data/allData';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div>
      <SectionContainer id='contact' title='Get In Touch'>
        <div className='max-w-xl mx-auto text-center'>
          <p className='text-lg text-slate-300 mb-8'>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing. Feel free to reach
            out!
          </p>
          <div className='flex justify-center space-x-6 mb-8'>
            <a
              href={`mailto:${ProfileData.email}`}
              className='text-slate-400 hover:text-sky-400 transition-colors duration-300'
              title='Email'
            >
              <MdEmail className='w-8 h-8' />
            </a>
            <a
              href={ProfileData.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-slate-400 hover:text-sky-400 transition-colors duration-300'
              title='GitHub'
            >
              <FaGithub className='w-8 h-8' />
            </a>
            <a
              href={ProfileData.linkedinUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-slate-400 hover:text-sky-400 transition-colors duration-300'
              title='LinkedIn'
            >
              <FaLinkedin className='w-8 h-8' />
            </a>
          </div>
          <p className='text-sm text-slate-500'>
            Alternatively, you can email me directly at:{' '}
            <a
              href={`mailto:${ProfileData.email}`}
              className='text-sky-400 hover:underline'
            >
              {ProfileData.email}
            </a>
          </p>
        </div>
      </SectionContainer>
    </div>
  );
};

export default ContactSection;
