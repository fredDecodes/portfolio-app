// export const SkillCategory = {
//   BACKEND: 'Backend Technologies',
//   DATABASE: 'Databases',
//   CLOUD: 'Cloud Platforms',
//   LANGUAGES: 'Programming Languages',
//   TOOLS: 'Developer Tools',
// };

// Object.freeze(SkillCategory); // Optional: makes the object immutable like an enum

export const SkillCategoryArray = [
  { key: 'BACKEND', value: 'Backend Technologies' },
  { key: 'DATABASE', value: 'Databases' },
  { key: 'CLOUD', value: 'Cloud Platforms' },
  { key: 'LANGUAGES', value: 'Programming Languages' },
  { key: 'TOOLS', value: 'Developer Tools' },
];

export const SkillCategory = SkillCategoryArray.reduce(
  (acc, { key, value }) => {
    acc[key] = value;
    return acc;
  },
  {}
);

// Object.freeze(SkillCategory); // Optional: makes the object immutable like an enum

// export const SkillCategoryKeys = Object.keys(SkillCategory);

// export const SkillCategoryValues = Object.values(SkillCategory);

// export const SkillCategoryMap = new Map(
//   SkillCategoryArray.map(({ key, label }) => [key, label])
// );

// export function getSkillCategoryLabel(key) {
//   return SkillCategory[key] || key;
// }

// export function getSkillCategoryKey(label) {
//   const entry = SkillCategoryArray.find((item) => item.label === label);
//   return entry ? entry.key : null;
// }

// export function isValidSkillCategory(key) {
//   return SkillCategoryKeys.includes(key);
// }

// export function isValidSkillCategoryLabel(label) {
//   return SkillCategoryValues.includes(label);
// }

// export function getSkillCategoryIcon(key) {
//   switch (key) {
//     case 'BACKEND':
//       return '🔧'; // Example icon for Backend
//     case 'DATABASE':
//       return '💾'; // Example icon for Database
//     case 'CLOUD':
//       return '☁️'; // Example icon for Cloud
//     case 'LANGUAGES':
//       return '💻'; // Example icon for Languages
//     case 'TOOLS':
//       return '🛠️'; // Example icon for Tools
//     default:
//       return '❓'; // Default icon for unknown category
//   }
// }

// export const SkillCategory = {
//   LANGUAGES: 'languages',
//   BACKEND: 'backend',
//   DATABASE: 'database',
//   CLOUD: 'cloud',
//   TOOLS: 'tools',
// };

// export const SkillCategoryArray = [
//   { key: SkillCategory.LANGUAGES, value: 'Languages' },
//   { key: SkillCategory.BACKEND, value: 'Backend' },
//   { key: SkillCategory.DATABASE, value: 'Database' },
//   { key: SkillCategory.CLOUD, value: 'Cloud' },
//   { key: SkillCategory.TOOLS, value: 'Tools' },
// ];

// Object.freeze(SkillCategory); // Optional: makes the object immutable like an enum
