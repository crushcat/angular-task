import { ICourse } from '../interfaces'

export class Course implements ICourse {
    id: number;
    title: string;
    creationDate: number;
    duration: number;
    description: string;

    constructor(course: ICourse) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
    }
}
