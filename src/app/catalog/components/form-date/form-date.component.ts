import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators  } from '@angular/forms';
import { CustomValidators } from '../../utils/validator';

export const FORM_DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormDateComponent),
  multi: true,
};

@Component({
  selector: 'at-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  providers: [FORM_DATE_VALUE_ACCESSOR]
})
export class FormDateComponent implements ControlValueAccessor {
  public dateControl = new FormControl('', [Validators.required, CustomValidators.dateFormatValidation]);

  public onChange: any = () => {};
  public onTouched: any = () => {};

  get value(): string {
    return this.dateControl.value;
  }

  set value(value) {
    this.dateControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  public registerOnChange(fn): void {
    this.onChange = fn;
  }

  public writeValue(value): void {
    if (value) {
      this.dateControl.setValue(value);
    }
  }

  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
}
