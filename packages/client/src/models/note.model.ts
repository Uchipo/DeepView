export interface NoteDisplay {
    id: number
    title: string
}

export interface Note extends NoteDisplay{
    text: string
    author: string
    createdAt: string
    tags: string[]
}