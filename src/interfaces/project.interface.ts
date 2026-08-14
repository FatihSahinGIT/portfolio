export interface Project {
  selectedWork: boolean;
  company: string;
  name: string;
  project: string;
  images: ProjectImages;
  role: string;
  url: string;
  alttext: string;
  timeframe: string;
  tools: string[];
  year: string;
  texts: {
    introduction: string;
    task: string;
    outcome: string;
  };
}

export interface ProjectImage {
  url: string;
  figcaption: string;
  srcset?: Array<{ url: string; width: number }>;
  sizes?: string;
  alt?: string;
  figureClass?: string;
  imageContainerClass?: string;
  imageClass?: string;
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
