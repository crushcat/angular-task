import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

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
  onChange: any = () => {};
  onTouched: any = () => {};
  private dateValidation = (control: AbstractControl): ValidationErrors => {
    if (isNaN(Date.parse(control.value))) return { date: 'Date type must be like mm/dd/yyyy' };
    return null;
  }

  private dateControl = new FormControl('', [Validators.required, this.dateValidation]);

  get value() {
    return this.dateControl.value;
  }

  set value(value) {
    this.dateControl.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) this.dateControl.setValue(value);
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  
}
