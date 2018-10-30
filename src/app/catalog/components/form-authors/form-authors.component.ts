import { Component, forwardRef, OnDestroy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import { FetchAuthorsAction } from '../../state/actions';
import { debounceTime } from 'rxjs/operators';
import { IAuthor } from '../../interfaces/authors.model';

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
  public $searchSubject: Subject<string> = new Subject();
  public choosedAuthors = [];
  public authorsSub: Subscription;
  public authorsList: IAuthor[] = [];
  public authorsControl = new FormControl('');

  add(value) {
    const result = this.choosedAuthors.filter((author) => {
      return author.name == value.name;
    }) // Is there the same author in array
    if (!result.length) {
      this.choosedAuthors = [...this.choosedAuthors, value]; // if not
      this.onChange(this.choosedAuthors); 
    }
  }

  delete(item: string) {
    this.choosedAuthors = this.choosedAuthors.filter((author) => {
      return author != item;
    })
    this.onChange(this.choosedAuthors);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) this.choosedAuthors = [...value];
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  get value() {
    return this.choosedAuthors;
  }

  set value(value) {
    this.onChange(value);
    this.onTouched();
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
          this.store.dispatch(new FetchAuthorsAction({textFragment}));
        });

    this.authorsControl.valueChanges.subscribe(textFragment => {
      if(textFragment.length) this.$searchSubject.next(textFragment);
    });    
  }

}
