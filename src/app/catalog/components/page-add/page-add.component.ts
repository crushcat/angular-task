import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ICourse } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AddCourseAction } from '../../state/actions';
import { IAppState } from 'src/app/app.state';

enum Course {
  name = 'Example titile',
  description = 'Description',
  date = '1999-02-24',
  length = '0',
  authors = ''
}

@Component({
  selector: 'at-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent {
  public course = {...Course};

  save(newCourse: ICourse) {
    this.store.dispatch(new AddCourseAction({newCourse}));
    this.back();
  }

  back() {
    this.location.back();
  }

  constructor(
    private store: Store<IAppState>,
    private location: Location
    ) { }
}
