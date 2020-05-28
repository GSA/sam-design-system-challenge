
export enum ContentType {
    Video = 0,
    Term,
    FAQ,
    Feature
}

export interface ContentLink {
    id: string;
    title: string;
}

export interface ContentData {
    id: string;
    type: ContentType;
    title: string;
    videoUrl: string;
    shortDescription: string;
    fullDescription: string;
    modifiedDate: string;
    relatedHelp: ContentLink[];
}
