import { responsiveProjectImage } from './project-image';
import { ProjectSummary } from './project.types';

const HALF_WIDTH_SIZES = '(min-width: 768px) calc(50vw - 4rem), calc(100vw - 3rem)';

export const projectCatalog: ProjectSummary[] = [
  {
    selectedWork: true,
    company: 'kv.digital',
    name: 'kv.digital',
    project: 'Appointment booking service',
    tools: ['Angular', 'Figma', 'Storybook', 'SonarQube', 'Jenkins'],
    images: {
      landingpage: responsiveProjectImage({
        url: 'project-images/kv.digital/landingpage/wp.webp',
        widths: [480, 768, 1024, 1280, 1600, 2354],
        sizes: 'calc(100vw - 3rem)',
        figcaption: 'Appointment booking service landing page',
      }),
      overview: responsiveProjectImage({
        url: 'project-images/kv.digital/overview/wp-2354.webp',
        srcsetBaseUrl: 'project-images/kv.digital/overview/wp.webp',
        widths: [480, 768, 1024, 1600, 2354],
        sizes: 'calc(100vw - 3rem)',
        figcaption: '116117 Terminservice',
        alt: 'KV Digital project overview',
      }),
      selected: {
        url: '/project-images/kv.digital/selected/kv.digital.webp',
        figcaption: 'Appointment booking service',
      },
    },
  },
  {
    selectedWork: true,
    company: 'interval',
    name: 'InterVal',
    project: 'Online Presence Redesign',
    tools: ['Gutenberg', 'CSS', 'Figma', 'HTML', 'CMS'],
    images: {
      overview: responsiveProjectImage({
        url: 'project-images/interval/work-overview/iv.webp',
        widths: [480, 768, 1024, 1280, 1536],
        sizes: '100vw',
        figcaption: 'Website redesign',
        alt: 'InterVal project overview',
      }),
      selected: {
        url: '/project-images/interval/selected/interval.webp',
        figcaption: 'Online Presence redesign',
      },
    },
  },
  {
    selectedWork: false,
    company: 'mindful-minds',
    name: 'Mindful Minds',
    project: 'Restructuring and Redesign',
    tools: ['Elementor', 'CSS', 'JavaScript', 'HTML', 'CMS'],
    images: {
      overview: responsiveProjectImage({
        url: 'project-images/mindful-minds/work-overview/mm.webp',
        widths: [320, 480, 768, 1024, 1312],
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Website redesign',
        alt: 'Mindful Minds project overview',
      }),
      selected: { url: '', figcaption: '' },
    },
  },
];

export const selectedProjects = projectCatalog.filter(({ selectedWork }) => selectedWork);

export function findProjectSummary(company: string): ProjectSummary | undefined {
  return projectCatalog.find((project) => project.company === company);
}
