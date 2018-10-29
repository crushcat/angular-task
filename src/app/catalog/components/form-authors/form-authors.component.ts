import { Component, forwardRef, OnDestroy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import { FetchAuthors } from '../../state/actions';
import { debounceTime } from 'rxjs/operators';

export const FORM_AUTHORS_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormAuthorsComponent),
  multi: true,
};

@Component({
  selector: 'at-form-authors',
  templateUrl: './form-authors.component.html',
  styleUrls: ['./form-authors.component.scss'],
  providers: [FORM_AUTHORS_VALUE_ACCESSOR]
})
export class FormAuthorsComponent implements ControlValueAccessor, OnDestroy {
  onChange: any = () => {};
  onTouched: any = () => {};

  private lengthValidation = (control: AbstractControl): ValidationErrors => {
    if (control.value.length < 3) return { length: 'Min length should be min 3 symbols' };
    return null;
  }

  private authorsValidation = (control: AbstractControl): ValidationErrors => {
    if (!this.authorsList || !this.authorsList.length) return { authors: 'Authors must be!' };
    return null;
  }

  $searchSubject: Subject<string> = new Subject();
  public authorsControl = new FormControl('', [this.lengthValidation, this.authorsValidation]);
  public choosedAuthors = [];
  public authorsSub: Subscription;
  public authorsList: any;

  add(value) {
    const result = this.choosedAuthors.filter((author) => {
      return author.name == value.name;
    })
    if (!result.length) this.choosedAuthors = [...this.choosedAuthors, value];
    this.onChange(this.choosedAuthors);
  }

  search(value) {
    if(value.length > 3) {
      this.$searchSubject.next(value);
   }
  }

  delete(item: string) {
    this.choosedAuthors = this.choosedAuthors.filter((author) => {
      return author != item;
    })
    this.onChange(this.choosedAuthors);
  }

  get value() {
    return this.choosedAuthors;
  }

  set value(value) {
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (Array.isArray(value)) this.choosedAuthors = [...value];
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  ngOnDestroy() {
    this.$searchSubject.unsubscribe();
    this.authorsSub.unsubscribe();
  }

  constructor(private store: Store<any>) {

    this.authorsSub = this.store
        .select((state) => state.course.authors)
        .subscribe((authors) => {
          this.authorsList = authors;
        });

    this.$searchSubject
        .pipe(debounceTime(1000))
        .subscribe((textFragment) => {
          this.store.dispatch(new FetchAuthors({textFragment}));
        });

    this.authorsControl.valueChanges.subscribe(textFragment => {
      this.search(textFragment);
    });    
  }

}
