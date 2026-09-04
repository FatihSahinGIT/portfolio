import { responsiveProjectImage } from './project-image';
import { ProjectSummary } from './project.types';

const RESPONSIVE_WIDTHS = [480, 780, 1024, 1280, 1600, 1920, 2354, 3200] as const;
const LANDINGPAGE_WIDTHS = [...RESPONSIVE_WIDTHS, 3200, 4000, 4800] as const;
const FULL_WIDTH_SIZES = 'calc(100vw - 3rem)';
const HALF_WIDTH_SIZES = '(min-width: 768px) calc(50vw - 2rem), calc(100vw - 3rem)';

export const projectCatalog: ProjectSummary[] = [
  {
    selectedWork: true,
    company: 'kv.digital',
    name: 'kv.digital',
    project: 'Appointment booking service',
    tools: ['Angular', 'Figma', 'Storybook', 'SonarQube', 'Jenkins'],
    images: {
      landingpage: responsiveProjectImage({
        url: '/project-images/wp/landingpage/wpl-2354.webp',
        srcsetBaseUrl: '/project-images/wp/landingpage/wpl.webp',
        originalWidth: 7225,
        widths: LANDINGPAGE_WIDTHS,
        width: 7225,
        height: 5339,
        sizes: FULL_WIDTH_SIZES,
        figcaption: 'Appointment booking service landing page',
      }),
      overview: responsiveProjectImage({
        url: '/project-images/wp/overview/wp-2354.webp',
        srcsetBaseUrl: '/project-images/wp/overview/wpo.webp',
        originalUrl: '/project-images/wp/overview/wp.webp',
        originalWidth: 4000,
        widths: RESPONSIVE_WIDTHS,
        width: 4000,
        height: 2667,
        sizes: FULL_WIDTH_SIZES,
        figcaption: '116117 Terminservice',
        alt: 'KV Digital project overview',
      }),
      selected: responsiveProjectImage({
        url: '/project-images/wp/landingpage/wpl-1600.webp',
        srcsetBaseUrl: '/project-images/wp/landingpage/wpl.webp',
        originalWidth: 7225,
        widths: LANDINGPAGE_WIDTHS,
        width: 7225,
        height: 5339,
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Appointment booking service',
      }),
    },
  },
  {
    selectedWork: true,
    company: 'interval',
    name: 'InterVal',
    project: 'Online Presence Redesign',
    tools: ['Gutenberg', 'CSS', 'Figma', 'HTML', 'CMS'],
    images: {
      landingpage: responsiveProjectImage({
        url: '/project-images/iv/landingpage/ivl-1600.webp',
        srcsetBaseUrl: '/project-images/iv/landingpage/ivl.webp',
        originalWidth: 5464,
        widths: LANDINGPAGE_WIDTHS,
        width: 5464,
        height: 6600,
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Website redesign',
        alt: 'InterVal project overview',
      }),
      overview: responsiveProjectImage({
        url: '/project-images/iv/overview/ivo-2354.webp',
        srcsetBaseUrl: '/project-images/iv/overview/ivo.webp',
        originalWidth: 4000,
        widths: RESPONSIVE_WIDTHS,
        width: 4000,
        height: 2667,
        sizes: FULL_WIDTH_SIZES,
        figcaption: 'Website redesign',
        alt: 'InterVal project overview',
      }),
      selected: responsiveProjectImage({
        url: '/project-images/iv/landingpage/ivl-1600.webp',
        srcsetBaseUrl: '/project-images/iv/landingpage/ivl.webp',
        originalWidth: 5464,
        widths: LANDINGPAGE_WIDTHS,
        width: 5464,
        height: 6600,
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Online Presence redesign',
      }),
    },
  },
  {
    selectedWork: false,
    company: 'mindful-minds',
    name: 'Mindful Minds',
    project: 'Restructuring and Redesign',
    tools: ['Elementor', 'CSS', 'JavaScript', 'HTML', 'CMS'],
    images: {
      landingpage: responsiveProjectImage({
        url: '/project-images/mm/landingpage/mml-1600.webp',
        srcsetBaseUrl: '/project-images/mm/landingpage/mml.webp',
        originalWidth: 5464,
        widths: LANDINGPAGE_WIDTHS,
        width: 5464,
        height: 8192,
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Website redesign',
        alt: 'Mindful Minds project overview',
      }),
      overview: responsiveProjectImage({
        url: '/project-images/mm/overview/mmo-2354.webp',
        srcsetBaseUrl: '/project-images/mm/overview/mmo.webp',
        originalWidth: 4000,
        widths: RESPONSIVE_WIDTHS,
        width: 4000,
        height: 2667,
        sizes: FULL_WIDTH_SIZES,
        figcaption: 'Website redesign',
        alt: 'Mindful Minds project overview',
      }),
      selected: responsiveProjectImage({
        url: '/project-images/mm/landingpage/mml-1600.webp',
        srcsetBaseUrl: '/project-images/mm/landingpage/mml.webp',
        originalWidth: 5464,
        widths: LANDINGPAGE_WIDTHS,
        width: 5464,
        height: 8192,
        sizes: HALF_WIDTH_SIZES,
        figcaption: 'Website redesign',
      }),
    },
  },
];

export const selectedProjects = projectCatalog.filter(({ selectedWork }) => selectedWork);

export function findProjectSummary(company: string): ProjectSummary | undefined {
  return projectCatalog.find((project) => project.company === company);
}
