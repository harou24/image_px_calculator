export type Image = {
    size: number;
    path?: string;
}

export type File = {
    filename: string;
    content_type: string;
    file: object;
}