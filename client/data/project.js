/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} imageUrl
 * @property {string} [githubUrl]
 * @property {string} [liveUrl]
 */

/** @type {Project} */
const project = {
  id: 1,
  title: 'My Portfolio',
  description: 'A personal portfolio site.',
  technologies: ['React', 'Tailwind', 'Vite'],
  imageUrl: '/images/portfolio.png',
  githubUrl: 'https://github.com/user/portfolio',
  liveUrl: 'https://myportfolio.com',
};

export default project;
