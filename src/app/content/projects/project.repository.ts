import { Project } from './project.types';

type ProjectLoader = () => Promise<Project>;

const projectLoaders: Record<string, ProjectLoader> = {
  'kv.digital': () =>
    import('./kv-digital.project').then(({ kvDigitalProject }) => kvDigitalProject),
  interval: () => import('./interval.project').then(({ intervalProject }) => intervalProject),
  'mindful-minds': () =>
    import('./mindful-minds.project').then(({ mindfulMindsProject }) => mindfulMindsProject),
};

export function loadProject(company: string): Promise<Project | undefined> {
  return projectLoaders[company]?.();
}
