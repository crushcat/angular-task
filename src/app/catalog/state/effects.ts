import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { COURSE_ACTIONS } from './constants';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { CoursesService } from '../services/cources/courses.service';
import { LoadAction, StoreAction, FailedAction, DeleteAction, AddAction } from './actions';
import { ICourse } from '../interfaces';
import { LoadingService } from 'src/app/core/services/loadingService/loading.service';

@Injectable()
export class CourseEffects {

    @Effect()
    course$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.LOAD_COURSES),
      switchMap((action: LoadAction) => {
          const { pageNumbers, textFragment } = action.payload;
          return this.courseService.getCourses(pageNumbers, textFragment)
              .pipe(
                  map((courses: ICourse[]) => {
                      this.loader.set(false);
                      return new StoreAction({courses});
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    delete$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.DELETE_COURSE),
      switchMap((action: DeleteAction) => {
          return this.courseService.deleteCourse(action.payload.id)
              .pipe(
                  map(() => {
                      this.loader.set(false);
                      return new LoadAction({pageNumbers: 1, textFragment: ''})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    @Effect()
    add$ = this.actions$.pipe(
      ofType(COURSE_ACTIONS.ADD_COURSE),
      switchMap((action: AddAction) => {
          return this.courseService.createCourse(action.payload.newCourse)
              .pipe(
                  map(() => {
                      this.loader.set(false);
                      return new LoadAction({pageNumbers: 1, textFragment: ''})
                  }),
                  catchError((error: HttpErrorResponse) => of(new FailedAction(error)))
              );
      })
    );

    constructor(
        private actions$: Actions,
        private courseService: CoursesService,
        private loader: LoadingService
    ) { }
}