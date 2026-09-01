export interface SkillItem {
    name: string;
    category: string;
}

export const skillCategories: string[] = [
    'All',
    'Frontend',
    'Backend',
    'Tools & DevOps',
    'Testing',
];

export const hardSkills: SkillItem[] = [
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'RxJS', category: 'Frontend' },
    { name: 'NgRx / Redux', category: 'Frontend' },
    { name: 'Angular Material', category: 'Frontend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS / SCSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'jQuery', category: 'Frontend' },
    { name: 'Java', category: 'Backend' },
    { name: 'C#', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Nest.js', category: 'Backend' },
    { name: 'SQL', category: 'Backend' },
    { name: 'MySQL', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'TypeORM', category: 'Backend' },
    { name: 'Git', category: 'Tools & DevOps' },
    { name: 'GitHub', category: 'Tools & DevOps' },
    { name: 'BitBucket', category: 'Tools & DevOps' },
    { name: 'Azure', category: 'Tools & DevOps' },
    { name: 'CI/CD', category: 'Tools & DevOps' },
    { name: 'Gulp', category: 'Tools & DevOps' },
    { name: 'Webpack', category: 'Tools & DevOps' },
    { name: 'Figma', category: 'Tools & DevOps' },
    { name: 'Adobe XD', category: 'Tools & DevOps' },
    { name: 'Strapi', category: 'Tools & DevOps' },
    { name: 'Scully', category: 'Tools & DevOps' },
    { name: 'Unit Testing (Karma, Jasmine)', category: 'Testing' },
    { name: 'Storybook', category: 'Testing' },
];

export const softSkills: string[] = [
    'Communication',
    'Creativity',
    'Team work',
    'Problem solving',
    'Engagement',
    'Sociable'
]
