import React from 'react';
import { ProfileData } from '../../data/allData';

const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-800 text-center py-8'>
        <p className='text-slate-400 text-sm'>
          &copy; {new Date().getFullYear()} {ProfileData.name}. All rights
          reserved.
        </p>
        <p className='text-slate-500 text-xs mt-1'>
          Built with React, JavaScript(Jsx), and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
