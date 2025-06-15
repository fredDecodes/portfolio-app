import React from 'react';
import { ProfileData } from '../../data/allData';
import bgImage from '/portfolio-hero.jpg';

const Hero = () => {
  return (
    <div>
      <header
        className='relative h-screen flex items-center justify-center text-center bg-cover bg-center'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className='absolute inset-0 bg-slate-900 opacity-70'></div>
        <div className='relative z-10 px-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight'>
            <span className='block text-white'>{ProfileData.name}</span>
            <span className='block text-sky-400 mt-2'>{ProfileData.title}</span>
          </h1>
          <p className='mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300'>
            {ProfileData.tagline}
          </p>
          <div className='mt-10'>
            <a
              href='/about'
              className='inline-block bg-sky-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-sky-600 transition-colors duration-300 transform hover:scale-105'
            >
              Learn More
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
