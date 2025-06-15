import { SkillCategory } from './skillCategory';
import { FaReact } from 'react-icons/fa';

/**
 * @typedef {Object} Skill
 * @property {string} name - The name of the skill
 * @property {string} category - One of the SkillCategory values
 * @property {JSX.Element} [icon] - Optional React SVG icon component
 * @property {number} [level] - Optional skill level (1 to 5)
 */

// Example usage:
const skill = [
  {
    name: 'React',
    category: SkillCategory.FRONTEND,
    icon: FaReact,
    level: 5,
  },
];

export default skill;
