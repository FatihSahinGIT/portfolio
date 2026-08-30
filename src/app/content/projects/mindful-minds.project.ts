import { findProjectSummary } from './project-catalog';
import { Project } from './project.types';

const summary = findProjectSummary('mindful-minds');

if (!summary) {
  throw new Error('Missing catalog entry for mindful-minds');
}

export const mindfulMindsProject = {
  ...summary,
  images: {
    ...summary.images,
    smartphone: {
      url: '/project-images/mindful-minds/smartphone/mindful.webp',
      figcaption: 'Refund Calculator',
    },
    tablet: {
      url: '/project-images/mindful-minds/tablet/mindful.webp',
      figcaption: 'Online Course Overview',
    },
    others: [],
  },
  role: 'Webdesigner',
  url: 'https://mindful-minds.com',
  alttext: 'Mindful Minds website screenshots',
  timeframe: 'April 2022 - July 2022',
  year: 'April 2022 - July 2022',
  texts: {
    introduction: `Mindful Minds Management GmbH supports individuals and organizations in strengthening mental well-being through mindfulness-based training and coaching. The company offers live courses, online programs, and tailored workshops focused on stress reduction, resilience, and mindful leadership, and works closely with businesses to connect them with qualified mindfulness trainers. With a strong emphasis on practical, science-based approaches, Mindful Minds helps create healthier, more focused, and sustainable work environments.`,
    task: `As a Student Frontend Developer at Mindful Minds Management GmbH, I contributed to refactoring and improving the company website using a CMS-based setup. I built and redesigned pages with Elementor, integrated newsletter and shop functionality, and implemented dynamic UI behavior through custom JavaScript and CSS added via plugins.

Additionally, I maintained course data in the database and connected digital products to the e-commerce system, ensuring a smooth and user-friendly booking flow.`,
    outcome: `This role gave me deeper insights into maintaining and evolving a production website within a real business context. I significantly improved my CMS knowledge, including working with page builders, plugins, content structures, and editor workflows. I learned how to balance design requirements with technical constraints, implement dynamic features without breaking existing systems, and collaborate with non-technical stakeholders.

Additionally, I gained experience with e-commerce and data management, improved my problem-solving skills in legacy setups, and developed a better understanding of scalability, maintainability, and user-focused frontend development.`,
  },
} satisfies Project;
