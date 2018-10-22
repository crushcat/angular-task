import { ICourse } from '../interfaces'

export class Course implements ICourse {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;

    constructor(course: ICourse) {
        this.id = course.id;
        this.title = course.title;
        this.creationDate = course.creationDate;
        this.duration = course.duration;
        this.description = course.description;
        this.topRated = course.topRated;
    }
}
