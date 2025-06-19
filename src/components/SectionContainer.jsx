import React from 'react';

const SectionContainer = ({ id, children, className = '', title }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {title && (
          <h2 className='text-3xl font-bold tracking-tight text-sky-400 sm:text-4xl mb-12 text-center'>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
