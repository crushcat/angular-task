import { HttpErrorResponse } from "@angular/common/http";
import { ICourse } from "../interfaces";

export interface ICourseState {
    courses: ICourse[],
    error: HttpErrorResponse
}