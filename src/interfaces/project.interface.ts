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
}

export interface ProjectImageSource {
    url: string;
    width: number;
}

export interface ProjectResponsiveImage extends ProjectImage {
    srcset: ProjectImageSource[];
    sizes: string;
}

export interface ProjectOverviewImage extends ProjectImage {
    srcset: ProjectImageSource[];
    sizes: string;
    alt: string;
    figureClass: string;
    imageContainerClass: string;
    imageClass: string;
}

export interface ProjectImages {
    overview: ProjectOverviewImage;
    selected: ProjectImage;
    introduction?: ProjectResponsiveImage;
    smartphone?: ProjectImage;
    tablet?: ProjectImage;
    others?: ProjectImage[];
}
