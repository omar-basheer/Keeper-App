export interface SingleNote{
    key?: number
    id: number
    title: string,
    content: string
}

export type OnAddFunction = (note:SingleNote ) =>void;
