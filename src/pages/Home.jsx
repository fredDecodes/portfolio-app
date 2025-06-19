import React from 'react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import SkillSection from '../components/SkillSection';
import ProjectSection from '../components/ProjectSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen bg-slate-700'>
      <Hero />
      <AboutMe />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
