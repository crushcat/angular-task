import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  _value: Date;

  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) this._value = value;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
