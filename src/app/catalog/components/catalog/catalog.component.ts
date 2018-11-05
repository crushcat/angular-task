import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadCourseAction, DeleteCourseAction } from '../../state/actions';
import { Location } from '@angular/common';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [SearchPipe],
})
export class CatalogComponent implements OnInit, OnDestroy {
  public coursesListSub: Subscription;
  public courseList: ICourse[] = [];
  public title: string;
  public pageNumbers = 1;

  public loadMore(): void {
    this.pageNumbers++;
    this.loadCourses();
  }

  public editCourse(courseId: number): void {
    this.router.navigateByUrl(`catalog/${courseId}`);
  }

  public deleteCourse(id: number): void {
    const result: boolean = window.confirm('Are you sure?');
    if (result) {
      this.store.dispatch(new DeleteCourseAction({id}));
    }
  }

  public search(textFragment: string): void {
    this.loadCourses(textFragment);
  }

  public loadCourses(textFragment?: string): void {
    const { pageNumbers } = this;
    this.store.dispatch(new LoadCourseAction({pageNumbers, textFragment}));
  }

  public ngOnInit(): void {
    this.loadCourses();
  }

  public ngOnDestroy(): void {
    this.coursesListSub.unsubscribe();
  }

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private location: Location
    ) {
      this.title = this.location.path().split('/')[1];
      this.coursesListSub = this.store
      .select(state => state.course.courses)
      .subscribe((newCoursesList) => {
        this.courseList = newCoursesList;
      });
    }
}
