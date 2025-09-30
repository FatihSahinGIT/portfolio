export interface Project {
    company: string;
    name: string;
    image: string;
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
