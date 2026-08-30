import { findProjectSummary } from './project-catalog';
import { Project } from './project.types';

const summary = findProjectSummary('interval');

if (!summary) {
  throw new Error('Missing catalog entry for interval');
}

export const intervalProject = {
  ...summary,
  images: {
    ...summary.images,
    overview: {
      url: '/project-images/interval/overview/iv.webp',
      figcaption: 'InterVal Website Overview',
    },
    smartphone: {
      url: '/project-images/interval/smartphone/interval-smartphone.webp',
      figcaption: 'Topic Area Overview',
    },
    tablet: {
      url: '/project-images/interval/tablet/interval-tablet.webp',
      figcaption: 'Publications Overview',
    },
    others: [],
  },
  role: 'Webdesigner',
  url: 'https://interval-berlin.de',
  alttext: 'InterVal website screenshots',
  timeframe: 'July 2022 - September 2022',
  year: 'July 2022 - September 2022',
  texts: {
    introduction: `InterVal is a Berlin-based research and policy consulting firm that conducts empirical studies and evaluations to support public institutions, ministries, authorities, and foundations in Germany. The company combines qualitative and quantitative research methods to analyze model projects, social programs, institutions, and legislation across a diverse set of social and policy areas — including labor markets, vocational education, demographic change and social participation, digitalization, legal evaluations, health and rehabilitation, equality and diversity, higher education research, innovation policy, integration and skilled immigration, early childhood literacy, and schooling.

InterVal’s work is characterized by interdisciplinary, empirically grounded analysis that aims to provide evidence-based insights and recommendations to inform decision-making in public policy and social programs. With participation in more than 150 research projects, the organization evaluates the effectiveness and implementation of initiatives such as federal and state programs, funding measures, and policy frameworks, helping clients understand outcomes and improve future interventions.`,
    task: `As part of a student position, I was responsible for the redesign and rebuild of a corporate website using a content management system. I translated an updated visual concept into a clean and consistent layout, structuring pages and components in a way that allows non-technical users to easily manage and extend content.

Beyond the technical implementation, I contributed to improving the overall user experience with a focus on accessibility, clarity, and readability. This included refining color contrasts, typography, and layout decisions to create a more user-friendly and inclusive web presence.`,
    outcome: `As an outcome of this role, I gained valuable experience in CMS-based development and learned how to work effectively with existing themes and tools while coordinating closely with the relevant teams. The project strengthened my communication skills and helped me better understand how design, content, and technical requirements come together in a collaborative environment.

At the same time, this experience helped me clarify my own professional interests: I discovered that I am particularly motivated by building websites and features from the ground up, taking responsibility for the technical architecture and implementation, and shaping solutions more directly through code. This insight has guided my focus toward roles where I can contribute more deeply to hands-on development while still applying the collaboration skills I gained during this project.`,
  },
} satisfies Project;
