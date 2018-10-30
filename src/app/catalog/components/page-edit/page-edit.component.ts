import { Component, OnDestroy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { PatchCourseAction, LoadCourseByIdAction } from '../../state/actions';

@Component({
  selector: 'at-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss']
})
export class PageEditComponent implements OnDestroy { 
  public courseSub: Subscription;
  public course: ICourse;
  public title: string;

  save(course) {
    this.store.dispatch(new PatchCourseAction({course}));
    this.back();
  }

  back() {
    this.location.back();
  }

  ngOnDestroy() {
    this.courseSub.unsubscribe();
  }

  constructor(
    private store: Store<IAppState>,
    private router: ActivatedRoute,
    private location: Location,
    ) { 

      this.router.params.subscribe(({id}) => {
        this.store.dispatch(new LoadCourseByIdAction({id}));
      });
      this.courseSub = this.store.select(state => state.course.course)
                .subscribe((course) => {
                  if(course) {
                    this.title = `${this.location.path().split('/')[1]}/${course.name}`;
                    this.course = course;
                  }
                })
    }
}
