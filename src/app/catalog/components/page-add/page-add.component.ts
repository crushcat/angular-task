import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ICourse } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AddAction } from '../../state/actions';

enum Course {
  name = 'Example titile',
  description = 'Description',
  date = '1999-02-24',
  length = '0',
  authors = 'Some authors'
}

@Component({
  selector: 'at-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent {
  public course = Course;

  save(newCourse: ICourse) {
    this.store.dispatch(new AddAction({newCourse}));
    this.back();
  }

  cancel() {
    this.back();
  }

  back() {
    this.location.back();
  }

  constructor(
    private store: Store<any>,
    private location: Location
    ) { }
}
