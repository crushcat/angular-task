import { Action } from '@ngrx/store';
import { COURSE_ACTIONS } from './constants';
import { HttpErrorResponse } from '@angular/common/http';
import { ICourse } from '../interfaces';
import { IAuthor } from '../interfaces/authors.model';

export class LoadCourseAction implements Action {
    readonly type = COURSE_ACTIONS.LOAD_COURSES;
    constructor(public payload: {pageNumbers: number, textFragment: string}) { }
}

export class LoadCourseByIdAction implements Action {
    readonly type = COURSE_ACTIONS.LOAD_BY_ID_COURSE;
    constructor(public payload: {id: string}) { }
}

export class StoreCoursesAction implements Action {
    readonly type = COURSE_ACTIONS.STORE_COURSES;
    constructor(public payload: {courses: ICourse[]}) { }
}

export class StoreCourseAction implements Action {
    readonly type = COURSE_ACTIONS.STORE_COURSE;
    constructor(public payload: {course: ICourse}) { }
}

export class FailedAction implements Action {
    readonly type = COURSE_ACTIONS.FAILED_LOAD;
    constructor(public payload: {error: HttpErrorResponse}) { }
}

export class PatchCourseAction implements Action {
    readonly type = COURSE_ACTIONS.PATCH_COURSE;
    constructor(public payload: {course: ICourse}) { }
}

export class DeleteCourseAction implements Action {
    readonly type = COURSE_ACTIONS.DELETE_COURSE;
    constructor(public payload: {id: number}) { }
}

export class AddCourseAction implements Action {
    readonly type = COURSE_ACTIONS.ADD_COURSE;
    constructor(public payload: {newCourse: ICourse}) { }
}

export class FetchAuthorsAction implements Action {
    readonly type = COURSE_ACTIONS.FETCH_AUTHORS;
    constructor(public payload: {textFragment: string}) { }
}

export class StoreAuthorsAction implements Action {
    readonly type = COURSE_ACTIONS.STORE_AUTHORS;
    constructor(public payload: {authors: IAuthor[]}) { }
}

export type Actions = 
        LoadCourseAction | 
        StoreCoursesAction | 
        FailedAction |
        DeleteCourseAction |
        AddCourseAction |
        FetchAuthorsAction |
        StoreAuthorsAction |
        StoreCourseAction |
        LoadCourseByIdAction;