import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICourse } from '../../interfaces';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadAction, DeleteAction } from '../../state/actions';

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
  public title: string = 'Courses';
  public pageNumbers: number = 1;

  loadMore() {
    this.pageNumbers++;
    this.loadCourses();
  }

  editCourse(data) {
    this.router.navigateByUrl(`catalog/${data}`);
  }

  deleteCourse(id) {
    const result: boolean = window.confirm("Are you sure?");
    if(result) this.store.dispatch(new DeleteAction({id}));
  }

  search(data) {
    if(!data) this.courseList = [...this.backupList];
    this.loadCourses(data);
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
    private router: Router
    ) { 
      this.coursesListSub = this.store
      .select(state => state.course.courses)
      .subscribe((newCoursesList) => {
        this.courseList = newCoursesList;
        this.backupList = [...this.courseList];
      })
    }
}