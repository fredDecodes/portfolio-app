/**
 * @typedef {Object} Experience
 * @property {number} id
 * @property {string} company
 * @property {string} role
 * @property {string} duration
 * @property {string[]} responsibilities
 * @property {string} [logoUrl] - Optional: company logo
 */

/** @type {Experience} */
const experience = {
    id: 1,
    company: "Tech Corp",
    role: "Frontend Developer",
    duration: "Jan 2020 - Dec 2021",
    responsibilities: [
      "Built responsive UIs with React",
      "Collaborated with design and backend teams"
    ],
    logoUrl: "https://example.com/logo.png"
  };
  
export default experience;