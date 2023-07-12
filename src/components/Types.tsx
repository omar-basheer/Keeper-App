export interface SingleNote{
    title: string,
    content: string
}

export type OnAddFunction = (note:SingleNote ) =>void;
export type DeleteFunction = (id: number ) =>void;
