import { Component, forwardRef, OnDestroy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, Subject } from 'rxjs';
import { FetchAuthorsAction } from '../../state/actions';
import { debounceTime } from 'rxjs/operators';
import { IAuthor } from '../../interfaces/authors.model';
import { IAppState } from 'src/app/app.state';

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
  public searchSubject$ = new Subject();
  public choosedAuthors: IAuthor[] = [];
  public authorsSub: Subscription;
  public authorsList: IAuthor[] = [];
  public authorsControl = new FormControl('');
  public debounceTime = 1000;

  constructor(private store: Store<IAppState>) {
    this.authorsSub = this.store
        .select((state) => state.course.authors)
        .subscribe((authors) => {
          this.authorsList = authors;
        });

    this.searchSubject$
        .pipe(debounceTime(this.debounceTime))
        .subscribe((textFragment: string) => {
          this.store.dispatch(new FetchAuthorsAction({textFragment}));
        });

    this.authorsControl.valueChanges.subscribe(textFragment => {
      if (textFragment.length) {
        this.searchSubject$.next(textFragment);
      }
    });
  }

  public ngOnDestroy(): void {
    this.searchSubject$.unsubscribe();
    this.authorsSub.unsubscribe();
  }

  public onChange: any = () => {};
  public onTouched: any = () => {};

  public get value(): IAuthor[] {
    return this.choosedAuthors;
  }

  public set value(value) {
    this.onChange(value);
    this.onTouched();
  }

  public add(value): void {
    const result = this.choosedAuthors.filter((author) => {
      return author.name === value.name;
    });
    if (!result.length) {
      this.choosedAuthors = [...this.choosedAuthors, value];
      this.onChange(this.choosedAuthors);
    }
  }

  public delete(item: IAuthor): void {
    this.choosedAuthors = this.choosedAuthors.filter((author) => {
      return author.name !== item.name;
    });
    this.onChange(this.choosedAuthors);
  }

  public registerOnChange(fn): void {
    this.onChange = fn;
  }

  public writeValue(value): void {
    if (value) {
      this.choosedAuthors = [...value];
    }
  }

  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
}
