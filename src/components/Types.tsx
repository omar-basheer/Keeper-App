export interface SingleNote{
    id: number | undefined,
    title: string,
    content: string
}

export type OnAddFunction = (note:SingleNote ) =>void;
export type DeleteFunction = (id: number ) =>void;
export type EditFunction = (id: number) => void
export type UpdateNoteFunction = (updateNote: SingleNote) => void