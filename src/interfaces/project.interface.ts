export interface Project {
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
