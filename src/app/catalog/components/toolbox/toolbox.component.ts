import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CustomValidators } from '../../utils/validator';

@Component({
  selector: 'at-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() searchEventField: EventEmitter<string> = new EventEmitter();
  public searchSubject$: Subject<string> = new Subject();
  public searchControl = new FormControl('', CustomValidators.minLengthValidation(3));

  public search(value): void {
    if (this.searchControl.valid) {
      this.searchSubject$.next(value);
   }
  }

  public addCourse(): void {
    this.router.navigateByUrl('catalog/add');
  }

  constructor(private router: Router) {
    this.searchSubject$
    .pipe(debounceTime(1000))
    .subscribe((data) => {
      this.searchEventField.emit(data);
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.search(value);
    });
  }

}
