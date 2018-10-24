import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup } from '@angular/forms';

export const FORM_DURATION_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormDurationComponent),
  multi: true,
};

@Component({
  selector: 'at-form-duration',
  templateUrl: './form-duration.component.html',
  styleUrls: ['./form-duration.component.scss'],
  providers: [FORM_DURATION_VALUE_ACCESSOR]
})
export class FormDurationComponent implements ControlValueAccessor {
  public _value: number;

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

  constructor() { }
}
