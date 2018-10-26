import { HttpErrorResponse } from "@angular/common/http";
import { ICourse } from "../interfaces";
import { IAuthor } from "../interfaces/authors.model";

export interface ICourseState {
    courses: ICourse[],
    authors: IAuthor,
    error: HttpErrorResponse
}