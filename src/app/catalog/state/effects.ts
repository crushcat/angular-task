import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { COURSE_ACTIONS } from './constants';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CoursesService } from '../services/cources/courses.service';
import { LoadCourseAction, StoreCoursesAction, FailedAction, DeleteCourseAction, AddCourseAction, FetchAuthorsAction, StoreAuthorsAction, PatchCourseAction, LoadCourseByIdAction, StoreCourseAction } from './actions';
import { ICourse } from '../interfaces';
import { LoadingService } from 'src/app/core/services/loadingService/loading.service';
import { AuthorsService } from '../services/authors/authors.service';
import { IAuthor } from '../interfaces/authors.model';

@Injectable()
export class CourseEffects {

    @Effect()
    course$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.LOAD_COURSES),
      switchMap((action: LoadCourseAction) => {
          const { pageNumbers, textFragment } = action.payload;
          return this.courseService.getCourses(pageNumbers, textFragment)
              .pipe(
                  map((courses: ICourse[]) => {
                      this.loader.set(false);
                      return new StoreCoursesAction({courses});
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    update$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.PATCH_COURSE),
      switchMap((action: PatchCourseAction) => {
          const { course } = action.payload;
          return this.courseService.updateCourse(course)
              .pipe(
                  map(() => {
                      this.loader.set(false);
                      return new LoadCourseAction({pageNumbers: 1, textFragment: ''})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    byId$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.LOAD_BY_ID_COURSE),
      switchMap((action: LoadCourseByIdAction) => {
          const { id } = action.payload;
          return this.courseService.getCourseById(id)
              .pipe(
                  map((courses: ICourse[]) => {
                      this.loader.set(false);
                      const course = courses[0];
                      return new StoreCourseAction({course})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    delete$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.DELETE_COURSE),
      switchMap((action: DeleteCourseAction) => {
          return this.courseService.deleteCourse(action.payload.id)
              .pipe(
                  map(() => {
                      this.loader.set(false);
                      return new LoadCourseAction({pageNumbers: 1, textFragment: ''})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    add$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.ADD_COURSE),
      switchMap((action: AddCourseAction) => {
          return this.courseService.createCourse(action.payload.newCourse)
              .pipe(
                  map(() => {
                      this.loader.set(false);
                      return new LoadCourseAction({pageNumbers: 1, textFragment: ''})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    authors$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.FETCH_AUTHORS),
      switchMap((action: FetchAuthorsAction) => {
          const { textFragment } = action.payload;
          return this.authorService.getAuthors(textFragment)
              .pipe(
                  map((authors: IAuthor[]) => {
                      this.loader.set(false);
                      return new StoreAuthorsAction({authors});
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    constructor(
        private actions$: Actions,
        private courseService: CoursesService,
        private authorService: AuthorsService,
        private loader: LoadingService
    ) { }
}