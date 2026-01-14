export interface Project {
    selectedWork: boolean;
    company: string;
    name: string;
    images: {
        selected: {
            url: string;
            figcaption: string;
        }
        others: string[];
    } 
    url: string;
    alttext: string;
    timeframe: string;
    tools: string[];
    year: string;
    texts: {
        introduction: string;
        role?: string;
        technologies?: string;
        challenges?: string;
        takeaways?: string;
    };
}

export interface ProjectImage {
    url: string;
    figcaption: string;
}

export interface ProjectImages {
    smartphone?: ProjectImage;
    tablet?: ProjectImage;
    selected?: ProjectImage;
    others?: ProjectImage[];
}
