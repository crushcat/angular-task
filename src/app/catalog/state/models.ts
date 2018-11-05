import { HttpErrorResponse } from "@angular/common/http";
import { IAuthor } from "../interfaces/authors.model";
import { ICourse } from "../interfaces";

export interface ICourseState {
    courses: ICourse[];
    authors: IAuthor[];
    course: ICourse;
    error: HttpErrorResponse;
}

