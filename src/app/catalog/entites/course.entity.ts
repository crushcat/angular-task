import { ICourse } from '../interfaces'

export class Course implements ICourse {
    id: number;
    name: string;
    date: Date;
    length: number;
    description: string;
    authors: any;
    isTopRated: boolean;

    constructor(course: ICourse) {
        this.id = course.id;
        this.name = course.name;
        this.date = new Date(course.date);
        this.length = course.length;
        this.description = course.description;
        this.authors = course.authors;
        this.isTopRated = course.isTopRated;
    }
}
