import { IAuthor } from "./authors.model";

export interface ICourse {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: IAuthor[];
    isTopRated: boolean;
}
