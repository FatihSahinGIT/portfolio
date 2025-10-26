export interface Project {
    company: string;
    name: string;
    images: {
        selected: {
            src: string;
            figcaption: string;
        }
        introduction: {
            src: string;
            figcaption: string;
        };
        smartphone: {
            src: string;
            figcaption: string;
        };
        tablet: {
            src: string;
            figcaption: string;
        };
        desktop: {
            src: string;
            figcaption: string;
        }
    };
    alttext: string;
    timeframe: string;
    tools: string[];
    year: number;
    texts: {
        introduction: string;
        role?: string;
        technology?: string;
        challenges?: string;
        takeaway?: string;
    };
}
