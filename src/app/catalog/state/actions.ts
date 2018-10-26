import { Action } from '@ngrx/store';
import { COURSE_ACTIONS } from './constants';
import { HttpErrorResponse } from '@angular/common/http';
import { ICourse } from '../interfaces';
import { IAuthor } from '../interfaces/authors.model';

export class LoadAction implements Action {
    readonly type = COURSE_ACTIONS.LOAD_COURSES;
    constructor(public payload: {pageNumbers: number, textFragment: string}) { }
}

export class StoreAction implements Action {
    readonly type = COURSE_ACTIONS.STORE_COURSES;
    constructor(public payload: {courses: ICourse[]}) { }
}

export class FailedAction implements Action {
    readonly type = COURSE_ACTIONS.FAILED_LOAD;
    constructor(public payload: {error: HttpErrorResponse}) { }
}

export class DeleteAction implements Action {
    readonly type = COURSE_ACTIONS.DELETE_COURSE;
    constructor(public payload: {id: number}) { }
}

export class AddAction implements Action {
    readonly type = COURSE_ACTIONS.ADD_COURSE;
    constructor(public payload: {newCourse: ICourse}) { }
}

export class FetchAuthors implements Action {
    readonly type = COURSE_ACTIONS.FETCH_AUTHORS;
    constructor(public payload: {textFragment: string}) { }
}

export class StoreAuthors implements Action {
    readonly type = COURSE_ACTIONS.STORE_AUTHORS;
    constructor(public payload: {authors: IAuthor[]}) { }
}

export type Actions = 
        LoadAction | 
        StoreAction | 
        FailedAction |
        DeleteAction |
        AddAction |
        FetchAuthors |
        StoreAuthors;