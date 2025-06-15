/**
 * @typedef {Object} ProfileData
 * @property {string} name
 * @property {string} title
 * @property {string} tagline
 * @property {string[]} bio
 * @property {string} email
 * @property {string} linkedinUrl
 * @property {string} githubUrl
 */

/** @type {ProfileData} */
const profileData = {
  name: 'Frederick',
  title: 'Full Stack Developer',
  tagline: 'Building the web, one line at a time.',
  bio: [
    'Passionate about JavaScript and web technologies.',
    'Experience with React, Node.js, and MongoDB.',
    'Enjoys working on open-source projects.',
  ],
  email: 'fred@example.com',
  linkedinUrl: 'https://linkedin.com/in/freddecodes',
  githubUrl: 'https://github.com/freddecodes',
};

export default profileData;
