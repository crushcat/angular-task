import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadAction, DeleteAction } from '../../state/actions';
import { Location } from '@angular/common';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [SearchPipe],
})
export class CatalogComponent implements OnInit, OnDestroy {
  public coursesListSub: Subscription;
  public courseList: ICourse[] = [];
  public backupList: ICourse[];
  public title: string;
  public pageNumbers: number = 1;

  loadMore() {
    this.pageNumbers++;
    this.loadCourses();
  }

  editCourse(courseId: number) {
    this.router.navigateByUrl(`catalog/${courseId}`);
  }

  deleteCourse(id: number) {
    const result: boolean = window.confirm("Are you sure?");
    if(result) this.store.dispatch(new DeleteAction({id}));
  }

  search(textFragment: string) {
    if(!textFragment) this.courseList = [...this.backupList];
    this.loadCourses(textFragment);
  }

  loadCourses(textFragment?: string) {
    const { pageNumbers } = this;
    this.store.dispatch(new LoadAction({pageNumbers, textFragment}));
  }

  ngOnInit() {
    this.loadCourses();
  }
  
  ngOnDestroy() {
    this.coursesListSub.unsubscribe();
  }

  constructor(
    private store: Store<any>,
    private router: Router,
    private location: Location
    ) { 
      this.title = this.location.path().split('/')[1];
      this.coursesListSub = this.store
      .select(state => state.course.courses)
      .subscribe((newCoursesList) => {
        this.courseList = newCoursesList;
        this.backupList = [...this.courseList];
      })
    }
}