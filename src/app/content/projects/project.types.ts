export interface ProjectImageSource {
  url: string;
  width: number;
}

export interface ProjectImage {
  url: string;
  figcaption: string;
  srcset?: ProjectImageSource[];
  sizes?: string;
  alt?: string;
}

export interface ProjectImages {
  overview: ProjectImage;
  landingpage?: ProjectImage;
  selected: ProjectImage;
  introduction?: ProjectImage;
  smartphone?: ProjectImage;
  tablet?: ProjectImage;
  others?: ProjectImage[];
}

export interface ProjectSummary {
  selectedWork: boolean;
  company: string;
  name: string;
  project: string;
  images: Pick<ProjectImages, 'overview' | 'landingpage' | 'selected'>;
  tools: string[];
}

export interface Project extends ProjectSummary {
  images: ProjectImages;
  role: string;
  url: string;
  alttext: string;
  timeframe: string;
  year: string;
  texts: {
    introduction: string;
    task: string;
    outcome: string;
  };
}
