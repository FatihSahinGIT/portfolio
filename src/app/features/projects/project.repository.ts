import { Project } from './project.interface';

type ProjectLoader = () => Promise<Project>;

const projectLoaders: Record<string, ProjectLoader> = {
  'kv.digital': () =>
    import('./data/kv-digital.project').then(({ kvDigitalProject }) => kvDigitalProject),
  interval: () => import('./data/interval.project').then(({ intervalProject }) => intervalProject),
  'mindful-minds': () =>
    import('./data/mindful-minds.project').then(({ mindfulMindsProject }) => mindfulMindsProject),
};

export function loadProject(company: string): Promise<Project | undefined> {
  return projectLoaders[company]?.();
}
