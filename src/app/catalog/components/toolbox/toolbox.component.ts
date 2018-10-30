import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'at-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {
  @Output() searchEventField: EventEmitter<string> = new EventEmitter();
  $searchSubject: Subject<string> = new Subject();

  private lengthValidation = (control: AbstractControl): ValidationErrors => {
    if (control.value.length <= 3 && control.value.length != 0) return { length: 'Min length should be min 3 symbols' };
    return null;
  }
  public searchControl = new FormControl('', this.lengthValidation);

  search(value) {
    if(this.searchControl.valid) {
      this.$searchSubject.next(value);
   }
  }

  addCourse() {
    this.router.navigateByUrl('catalog/add');
  }

  constructor(private router: Router) {
    this.$searchSubject
    .pipe(debounceTime(1000))
    .subscribe((data) => {
      this.searchEventField.emit(data);
    });

    this.searchControl.valueChanges.subscribe(value => {
      this.search(value);
    });
  }; 

};
